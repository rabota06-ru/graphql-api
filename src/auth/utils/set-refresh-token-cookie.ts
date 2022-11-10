import { Response } from "express";
import * as jwt from "jsonwebtoken";
import configService from "../../services/config.service";
import { addDays } from "../../utils/date";

const REFRESH_TOKEN_EXPIRES_IN_DAYS = 30;

export interface RefreshTokenPayload {
  userId: string;
  exp: number;
}

export function setRefreshTokenCookie(res: Response, userId: string) {
  res.cookie(
    "refresh_token",
    jwt.sign(
      {
        userId,
        exp: Date.now() / 1000 + REFRESH_TOKEN_EXPIRES_IN_DAYS * 24 * 60 * 60,
      } as RefreshTokenPayload,
      configService.getRefreshTokenKey()
    ),
    {
      httpOnly: true,
      expires: addDays(new Date(), REFRESH_TOKEN_EXPIRES_IN_DAYS),
      sameSite: "none",
      secure: true,
    }
  );
}
