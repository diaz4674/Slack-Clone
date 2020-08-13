import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

import typeDefs from "./schema";
import resolvers from "./resolvers";

// const myGraphQLSchema  = // ... define or import your schema here!
const PORT = 3000;

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
