import * as jwt from "jsonwebtoken";
import configService from "../../services/config.service";

const ACCESS_TOKEN_EXPIRES_IN_MINUTES = 30;

export interface AccessTokenPayload {
  userId: string;
  exp: number;
}

export function getSignedAccessToken(userId: string) {
  return jwt.sign(
    {
      userId,
      exp: Date.now() / 1000 + ACCESS_TOKEN_EXPIRES_IN_MINUTES * 60,
    } as AccessTokenPayload,
    configService.getAccessTokenKey()
  );
}
