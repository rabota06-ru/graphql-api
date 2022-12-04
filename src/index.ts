import "reflect-metadata";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "../prisma/generated";
import configService from "./services/config.service";
import { AuthResolver } from "./auth/auth.resolver";
import { parseCookies } from "./utils/parse-cookies";

dotenv.config();
configService.ensureValues([
  "DATABASE_URL",
  "ACCESS_TOKEN_KEY",
  "REFRESH_TOKEN_KEY",
  "SMS_API_KEY",
  "SMS_API_EMAIL",
  "AUTH_TOKEN_KEY",
]);

export interface IContext {
  prisma: PrismaClient;
  req: Request;
  res: Response;
}

const start = async () => {
  const schema = await buildSchema({
    resolvers: [...resolvers, AuthResolver],
  });
  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => {
      req.cookies = parseCookies(req.headers.cookie ?? "");
      return { prisma, req, res } as IContext;
    },
    cors: {
      origin: configService.isProduction() ? [] : ["https://127.0.0.1:5173"],
      credentials: true,
    },
  });

  await server.listen({
    port: 3000,
  });
};

start().then(() => console.log("server has been started"));
