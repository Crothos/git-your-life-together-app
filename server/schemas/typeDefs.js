const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }


  type Project {
    _id: ID
    title: String!
    description: String!
    steps: [Step]!
    createdAt: Date
  }

  type Step {
    _id: ID
    title: String!
    description: String!
    completed: Boolean
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User

    userProjects(projectId: ID!): [Project]
    projectSteps(projectId: ID!): [Step]



  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addProject(title: String!, description: String!, createdAt: Date): Project: User
    addStep(title: String!, description: String!): Step
    editStep(title: String!, description: String!) Step
    removeStep(stepId: ID!): Step

  }
`;

module.exports = typeDefs;

