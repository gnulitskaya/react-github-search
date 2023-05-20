import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
query ($first: Int!, $location: String!) {
  search(query: $location, type: REPOSITORY, first: $first) {
    nodes {
      ... on Repository {
        id
        name
        stargazerCount
        pushedAt
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
// query GetRepository {
//   repository(owner:"g", name:"Hello-World") {
//     issues(last:20, states:CLOSED) {
//       edges {
//         node {
//           title
//           url
//           labels(first:5) {
//             edges {
//               node {
//                 name
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// const {pinnedItems} = GET_REPOSITORY.data;
//
// console.log('pinnedItems', pinnedItems);
