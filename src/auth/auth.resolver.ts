import { LoginInput } from "./dto/login.input";
import { LoginOutput } from "./dto/login.output";
import * as bcrypt from "bcryptjs";
import * as uuid from "uuid";
import * as jwt from "jsonwebtoken";
import { Arg, Mutation, Resolver, Ctx, Args, Query } from "type-graphql";
import { IContext } from "..";
import { ApolloError } from "apollo-server";
import configService from "../utils/ensure-env-vars";
import { GraphQLVoid } from "graphql-scalars";
import { RefreshTokenOutput } from "./dto/refreshToken.output";
import { CheckAuthenticatedOutput } from "./dto/checkAuthenticated.output";
import { addDays } from "../utils/date";

interface TokenPayload {
  userId: string;
}

@Resolver()
export class AuthResolver {
  REFRESH_TOKEN_EXPIRES_IN_DAYS = 30;
  ACCESS_TOKEN_EXPIRES_IN_MINUTES = 30;

  @Mutation(() => LoginOutput)
  async login(
    @Arg("loginInput") loginInput: LoginInput,
    @Ctx() context: IContext
  ) {
    const user = await context.prisma.user.findUnique({
      where: { login: loginInput.login },
      select: {
        id: true,
        password: true,
      },
    });
    if (!user) throw new ApolloError("Не удалось авторизоваться");

    if (!(await bcrypt.compare(loginInput.password, user.password)))
      throw new ApolloError("Не удалось авторизоваться");

    context.res.cookie("refresh_token", uuid.v4(), {
      httpOnly: true,
      expires: addDays(new Date(), this.REFRESH_TOKEN_EXPIRES_IN_DAYS),
    });

    return <LoginOutput>{
      accessToken: jwt.sign(
        { userId: user.id } as TokenPayload,
        configService.getAccessTokenKey(),
        {
          expiresIn: this.ACCESS_TOKEN_EXPIRES_IN_MINUTES * 60,
        }
      ),
    };
  }

  @Mutation(() => LoginOutput)
  async loginAdmin(
    @Arg("loginInput") loginInput: LoginInput,
    @Ctx() context: IContext
  ) {
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

    context.res.cookie(
      "refresh_token",
      jwt.sign(
        { userId: admin.id } as TokenPayload,
        configService.getRefreshTokenKey(),
        {
          expiresIn: this.REFRESH_TOKEN_EXPIRES_IN_DAYS * 24 * 60 * 60,
        }
      ),
      {
        httpOnly: true,
        expires: addDays(new Date(), this.REFRESH_TOKEN_EXPIRES_IN_DAYS),
      }
    );

    return <LoginOutput>{
      accessToken: jwt.sign(
        { userId: admin.id } as TokenPayload,
        configService.getAccessTokenKey(),
        {
          expiresIn: this.ACCESS_TOKEN_EXPIRES_IN_MINUTES * 60,
        }
      ),
    };
  }

  @Mutation(() => GraphQLVoid, { nullable: true })
  async logout(@Ctx() context: IContext) {
    context.res.clearCookie("refresh_token");
  }

  @Mutation(() => RefreshTokenOutput)
  async refreshAccessToken(@Ctx() context: IContext) {
    const refreshToken = context.req.cookies.refresh_token;

    if (!refreshToken) throw new ApolloError("Не удалось обновить токен");

    let tokenPayload: TokenPayload;
    try {
      tokenPayload = jwt.verify(
        refreshToken,
        configService.getRefreshTokenKey()
      ) as TokenPayload;
    } catch {
      throw new ApolloError("Не удалось обновить токен");
    }

    context.res.cookie(
      "refresh_token",
      jwt.sign(tokenPayload, configService.getRefreshTokenKey(), {
        expiresIn: this.REFRESH_TOKEN_EXPIRES_IN_DAYS * 24 * 60 * 60,
      }),
      {
        httpOnly: true,
        expires: addDays(new Date(), this.REFRESH_TOKEN_EXPIRES_IN_DAYS),
      }
    );

    return <LoginOutput>{
      accessToken: jwt.sign(tokenPayload, configService.getAccessTokenKey(), {
        expiresIn: this.ACCESS_TOKEN_EXPIRES_IN_MINUTES * 60,
      }),
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

    let tokenPayload: TokenPayload;
    try {
      tokenPayload = jwt.verify(
        refreshToken,
        configService.getRefreshTokenKey()
      ) as TokenPayload;
    } catch {
      return {
        authenticated: false,
      };
    }

    context.res.cookie(
      "refresh_token",
      jwt.sign(tokenPayload, configService.getRefreshTokenKey(), {
        expiresIn: this.REFRESH_TOKEN_EXPIRES_IN_DAYS * 24 * 60 * 60,
      }),
      {
        httpOnly: true,
        expires: addDays(new Date(), this.REFRESH_TOKEN_EXPIRES_IN_DAYS),
      }
    );

    return {
      authenticated: true,
      accessToken: jwt.sign(tokenPayload, configService.getAccessTokenKey(), {
        expiresIn: this.ACCESS_TOKEN_EXPIRES_IN_MINUTES * 60,
      }),
    };
  }
}
