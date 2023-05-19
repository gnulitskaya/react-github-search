import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
query MyQuery {
  user(login: "gnulitskaya") {
    id
    avatarUrl
    name
    repositories(first: 10) {
      edges {
        node {
          id
          name
          url
          pushedAt
          stargazerCount
        }
      }
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
