const { gql } = require("apollo-server-express");

export default gql`
  type Query {
    hi: String
  }
`;