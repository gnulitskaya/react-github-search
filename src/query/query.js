import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query ($first: Int!, $location: String!, $after: String) {
  search(query: $location, type: REPOSITORY, after: $after, first: $first) {
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
    repositoryCount
  }
}
`;

export const GET_PAGES = gql`
query GetPageNumber ($firstPage: Int!, $location: String!) {
  search(query: $location, type: REPOSITORY, first: $firstPage) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    repositoryCount
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
