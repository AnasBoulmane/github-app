import dayjs from "dayjs";
import React from "react";
import Repositories from "../../components/List";
import Repository, { PlaceHolderRepository } from "../../components/Repository";

import { useQuery } from "@apollo/react-hooks";
import { useInfiteScroll } from "../../helpers/useInfiniteScroll";
import { useLoadMore } from "../../helpers/useLoadMore";

import REPOSITORIES_QUERY from "./RepositoryList.graphql";
import style from "./RepositoryList.module.scss";

const RepositoryList = () => {
  const now = new Date();
  const query = `created:>${dayjs(now.setMonth(now.getMonth() - 1)).format("YYYY-MM-DD")}`;
  const { data, loading, fetchMore } = useQuery(REPOSITORIES_QUERY, {
    variables: {
      query,
      cursor: null,
    },
  });

  const { endCursor, hasNextPage } = data ? data.search.pageInfo : { endCursor: null, hasNextPage: true };

  const onLoadMore = useLoadMore(fetchMore, "search", { query, cursor: endCursor }, hasNextPage);
  const [isFetching] = useInfiteScroll(onLoadMore);

  return (
    <div className={style.Container} onClick={onLoadMore}>
      {loading || !data ? (
        <PlaceHolderRepository />
      ) : (
        <Repositories render={Repository} entries={data.search.edges.map(({ node }: any) => node) || []} />
      )}
      {isFetching && <PlaceHolderRepository />}
    </div>
  );
};

export default RepositoryList;
