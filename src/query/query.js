import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query ($first: Int!, $location: String!) {
  search(query: $location, type: REPOSITORY, first: $first) {
    nodes {
      ... on Repository {
        id
        name
        stargazerCount
        pushedAt
        url
        owner {
          id
          login
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`;

export const GET_REPOSITORY = gql`
query GetRepository($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
        id
        name
        stargazerCount
        pushedAt
        description
        languages(first: 10) {
          edges {
            node {
              id
              name
            }
          }
        }
        owner {
            id
            login
            avatarUrl
            url
        }
    }
}
`;
