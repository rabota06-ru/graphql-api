import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { IContext } from "..";
import cacheService from "../services/cache.service";
import smsService from "../services/sms.service";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { generateRandomAuthCode } from "../utils/generate-random-auth-code";
import { SendMessageInput } from "./dto/send-message.input";
import { SendMessageOutput } from "./dto/send-message.output";
import { VerifyAuthCodeInput } from "./dto/verify-auth-code.input";
import { VerifyAuthCodeOutput } from "./dto/verify-auth.code.output";
import { addDays } from "../utils/date";
import { ApolloError } from "apollo-server";
import configService from "../services/config.service";
import { GraphQLVoid } from "graphql-scalars";
import { CheckAuthenticatedOutput } from "./dto/check-authenticated.output";
import { LoginAdminInput } from "./dto/login-admin.input";
import { AccessTokenOutput } from "./dto/access-token.output";
import { LoginUserInput } from "./dto/login-user.input";
import { CreateAndLoginUserInput } from "./dto/create-and-login-user.input";
import {
  RefreshTokenPayload,
  setRefreshTokenCookie,
} from "./utils/set-refresh-token-cookie";
import { getSignedAccessToken } from "./utils/get-signed-access-token";

/*
 ---------------------------------
 ---------------------------------
 ---------------------------------
 ---------------------------------
  Я ПИСАЛ В СПЕШКЕ И ТУТ 100500 ПОВТОРЯЮЩИХСЯ СТРОК КОДА
 ---------------------------------
 ---------------------------------
 ---------------------------------
 ---------------------------------
*/

@Resolver()
export class AuthResolver {
  @Mutation(() => SendMessageOutput)
  async sendAuthCodeMessage(
    @Arg("input") input: SendMessageInput
  ): Promise<SendMessageOutput> {
    const generatedCode = generateRandomAuthCode();

    const cachedValue = cacheService.cacheValue<{
      authToken: string;
      phone: string;
      code: string;
    }>(
      (id) => ({
        authToken: jwt.sign({ cacheId: id }, configService.getAuthTokenKey(), {
          expiresIn: 60 * 5,
        }),
        phone: input.phone,
        code: generatedCode,
      }),
      { expiresIn: Date.now() + 1000 * 60 * 5 }
    );

    await smsService
      .sendAuthenticationCode({
        code: generatedCode,
        phone: input.phone,
      })
      .catch(() => {
        throw new ApolloError("Не удалось отправить код");
      });

    return {
      authToken: cachedValue.value.authToken,
    };
  }

  @Mutation(() => VerifyAuthCodeOutput)
  async verifyAuthCode(
    @Arg("input") input: VerifyAuthCodeInput
  ): Promise<VerifyAuthCodeOutput> {
    let cacheId: number;
    try {
      cacheId = +(
        jwt.verify(input.authToken, configService.getAuthTokenKey()) as Record<
          "cacheId",
          string
        >
      ).cacheId;
    } catch {
      throw new ApolloError("Не получилось авторизоваться");
    }

    const cached = cacheService.getValueById<{
      authToken: string;
      phone: string;
      code: string;
    }>(cacheId);

    if (cached?.code !== input.code) {
      return {
        authenticated: false,
      };
    }

    cacheService.clearValueById(cacheId);

    const cachedValue = cacheService.cacheValue<{
      authToken: string;
      phone: string;
    }>(
      (id) => ({
        authToken: jwt.sign({ cacheId: id }, configService.getAuthTokenKey(), {
          expiresIn: 60 * 5,
        }),
        phone: cached.phone,
      }),
      { expiresIn: Date.now() + 1000 * 60 * 5 }
    );

    return {
      authenticated: true,
      authToken: cachedValue.value.authToken,
    };
  }

  @Mutation(() => AccessTokenOutput)
  async loginUser(
    @Arg("input") input: LoginUserInput,
    @Ctx() context: IContext
  ): Promise<AccessTokenOutput> {
    let cacheId: number;
    try {
      cacheId = +(
        jwt.verify(input.authToken, configService.getAuthTokenKey()) as Record<
          "cacheId",
          string
        >
      ).cacheId;
    } catch {
      throw new ApolloError("Не получилось авторизоваться");
    }

    const cachedValue = cacheService.getValueById<{
      authToken: string;
      phone: string;
    }>(cacheId);

    if (!cachedValue) throw new ApolloError("Не получилось авторизоваться");

    cacheService.clearValueById(cacheId);

    const user = await context.prisma.user.findUnique({
      where: { login: cachedValue.phone },
      select: { id: true },
    });

    if (!user) throw new ApolloError("Не получилось авторизоваться");

    setRefreshTokenCookie(context.res, user.id);

    return {
      accessToken: getSignedAccessToken(user.id),
    };
  }

  @Mutation(() => AccessTokenOutput)
  async createAndLoginUser(
    @Arg("input") input: CreateAndLoginUserInput,
    @Ctx() context: IContext
  ): Promise<AccessTokenOutput> {
    let cacheId: number;
    try {
      cacheId = +(
        jwt.verify(input.authToken, configService.getAuthTokenKey()) as Record<
          "cacheId",
          string
        >
      ).cacheId;
    } catch {
      throw new ApolloError("Не получилось создать пользователя");
    }

    const cachedValue = cacheService.getValueById<{
      authToken: string;
      phone: string;
    }>(cacheId);

    if (!cachedValue)
      throw new ApolloError("Не получилось создать пользователя");

    cacheService.clearValueById(cacheId);

    const user = await context.prisma.user.create({
      data: {
        login: cachedValue.phone,
        role: input.data.role,
      },
      select: { id: true },
    });

    setRefreshTokenCookie(context.res, user.id);

    return {
      accessToken: getSignedAccessToken(user.id),
    };
  }

  @Mutation(() => AccessTokenOutput)
  async loginAdmin(
    @Arg("input") loginInput: LoginAdminInput,
    @Ctx() context: IContext
  ): Promise<AccessTokenOutput> {
    const admin = await context.prisma.admin.findUnique({
      where: { login: loginInput.login },
      select: {
        id: true,
        password: true,
      },
    });

    if (!admin) throw new ApolloError("Не удалось авторизоваться");

    if (!(await bcrypt.compare(loginInput.password, admin.password)))
      throw new ApolloError("Не удалось авторизоваться");

    setRefreshTokenCookie(context.res, admin.id);

    return {
      accessToken: getSignedAccessToken(admin.id),
    };
  }

  @Mutation(() => GraphQLVoid, { nullable: true })
  async logout(@Ctx() context: IContext) {
    context.res.clearCookie("refresh_token");
  }

  @Mutation(() => AccessTokenOutput)
  async refreshAccessToken(
    @Ctx() context: IContext
  ): Promise<AccessTokenOutput> {
    const refreshToken = context.req.cookies.refresh_token;

    if (!refreshToken) throw new ApolloError("Не удалось обновить токен");

    let tokenPayload: RefreshTokenPayload;
    try {
      tokenPayload = jwt.verify(
        refreshToken,
        configService.getRefreshTokenKey()
      ) as RefreshTokenPayload;
    } catch {
      throw new ApolloError("Не удалось обновить токен");
    }

    setRefreshTokenCookie(context.res, tokenPayload.userId);

    return {
      accessToken: getSignedAccessToken(tokenPayload.userId),
    };
  }

  @Query(() => CheckAuthenticatedOutput)
  async checkIsAuthenticated(
    @Ctx() context: IContext
  ): Promise<CheckAuthenticatedOutput> {
    const refreshToken = context.req.cookies.refresh_token;

    if (!refreshToken)
      return {
        authenticated: false,
      };

    let tokenPayload: RefreshTokenPayload;
    try {
      tokenPayload = jwt.verify(
        refreshToken,
        configService.getRefreshTokenKey()
      ) as RefreshTokenPayload;
    } catch {
      return {
        authenticated: false,
      };
    }

    setRefreshTokenCookie(context.res, tokenPayload.userId);

    return {
      authenticated: true,
      accessToken: getSignedAccessToken(tokenPayload.userId),
    };
  }
}
