import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject ($title: String!, $description: String!, $projectAuthor: String!) {
    addProject (title: $title, description: $description, projectAuthor: $projectAuthor) {
      _id
      title
      description
      projectAuthor
      createdAt
      steps {
        _id
        title
        description
      }
    }
  }
`;

export const ADD_STEP = gql`
  mutation addStep($projectId: ID!, $stepText: String!, $completed: Boolean) {
    addStep(projectId: $projectId, stepText:$stepText, completed: $completed) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;