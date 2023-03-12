const { gql } = require('apollo-server-express');

const typeDefs = gql` 
  type User {
    _id: ID
    username: String
    email: String
    password: String
    projects: [Project]!
  }

  type Project {
    _id: ID
    title: String
    description: String
    projectAuthor: String
    # we would add step here once we get that up and running as well steps:[Step]
  }


  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    project (projectId: ID!): Project
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject (title: String!, description: String!, projectAuthor: String!): Project
    removeProject(projectId: ID!): Project
    updateProject(projectId: ID!, title: String!, description: String!): Project
    # removeStep(projectId: ID!, step: String!): Project
  }`
;

 module.exports = typeDefs;

