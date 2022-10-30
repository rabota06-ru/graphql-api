"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const type_graphql_1 = require("type-graphql");
const apollo_server_1 = require("apollo-server");
const client_1 = require("@prisma/client");
const generated_1 = require("../prisma/generated");
const ensure_env_vars_1 = require("./utils/ensure-env-vars");
dotenv_1.default.config();
(0, ensure_env_vars_1.ensureEnviromentVariables)();
const start = async () => {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: generated_1.resolvers,
    });
    const prisma = new client_1.PrismaClient();
    const server = new apollo_server_1.ApolloServer({
        schema,
        context: () => ({ prisma }),
    });
    await server.listen({
        port: 3000,
    });
};
start().then(() => console.log("server has been started"));
