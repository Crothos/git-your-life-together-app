import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      },
    },
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      projects {
        _id
        title
        description
        createdAt
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query getprojects {
   projects {
      _id
      title
      description
      createdAt
    }
  }
`;