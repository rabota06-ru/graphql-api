import "reflect-metadata";
import dotenv from "dotenv";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "../prisma/generated";
import { ensureEnviromentVariables } from "./utils/ensure-env-vars";

dotenv.config();
ensureEnviromentVariables();

const start = async () => {
  const schema = await buildSchema({
    resolvers,
  });
  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  await server.listen({
    port: 3000,
  });
};

start().then(() => console.log("server has been started"));
