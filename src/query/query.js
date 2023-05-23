import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query GetRepos($first: Int!, $location: String!, $after: String) {
  search(query: $location, type: REPOSITORY, after: $after, first: $first) {
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

// export const GET_REPOSITORY = gql`
// query GetRepoInfo($name: String!, $owner: String!) {
//     repository(name: $name, owner: $owner) {
//         id
//         name
//         stargazerCount
//         pushedAt
//         description
//         languages(first: 10) {
//           edges {
//             node {
//               id
//               name
//             }
//           }
//         }
//         owner {
//             id
//             login
//             avatarUrl
//             url
//         }
//     }
// }
// `;
