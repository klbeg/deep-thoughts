const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    username: String
    createdAt: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]
    friends: [User]
  }

  type Query {
    thoughts(username: String): [Thought]
    users: [User]
  }
`

module.exports = typeDefs
