import { useCallback } from "react";

export const useLoadMore = (
  fetchMore: (props: any) => any,
  propertyName: string,
  variables: any,
  hasNextPage: boolean,
) =>
  useCallback(
    async () =>
      !hasNextPage
        ? false
        : fetchMore({
            variables,
            updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
              const newEdges = fetchMoreResult[propertyName].edges;
              const pageInfo = fetchMoreResult[propertyName].pageInfo;

              return newEdges.length
                ? {
                    // Put the new comments at the end of the list and update `pageInfo`
                    // so we have the new `endCursor` and `hasNextPage` values
                    search: {
                      __typename: previousResult[propertyName].__typename,
                      edges: [...previousResult[propertyName].edges, ...newEdges],
                      pageInfo,
                    },
                  }
                : previousResult;
            },
          }),
    [fetchMore, propertyName, variables, hasNextPage],
  );
