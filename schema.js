export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # The first comment in line 1 is for graphql syntaxing using the 
  # "Graph QL: Syntax Highlighting" plugin for vscode.
  
  # Exclamation mark (!) denotes a required field.
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author_id: String!
    game_id: String!
    game: Game!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean
    reviews: [Review!]
  }

  # The "Query" type is special: it lists all the available queries that clients can execute, 
  # along with the return type for each.
  type Query {
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, updates: UpdateGameInput!): Game
  }
  input AddGameInput {
    title: String!
    platform: [String!]!
  }
  input UpdateGameInput {
    title: String
    platform: [String!]
  }
`;

// int, float, string, boolean, ID
