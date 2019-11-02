import gql from "graphql-tag";

const REPOSITORIES_QUERY = gql`
  query Repositories($query: String!, $cursor: String) {
    search(query: $query, type: REPOSITORY, first: 20, after: $cursor) {
      edges {
        node {
          ... on Repository {
            id
            owner {
              avatarUrl
              login
            }
            url
            name
            description
            createdAt
            stargazers {
              totalCount
            }
            issues {
              totalCount
            }
          }
          __typename
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default REPOSITORIES_QUERY;
