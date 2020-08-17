import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import models from "./models/index.js";
// const myGraphQLSchema  = // ... define or import your schema here!
const PORT = 3000;

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
