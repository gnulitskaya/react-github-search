import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query GetRepos($first: Int!, $search: String!, $after: String) {
  search(query: $search, type: REPOSITORY, after: $after, first: $first) {
    repositoryCount
    edges {
      cursor
      node {
        ... on Repository {
            id
            name
            stargazerCount
            pushedAt
            url
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