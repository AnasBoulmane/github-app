import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { shallow } from "enzyme";
import React from "react";

import RepositoryList from "./RepositoryList";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <RepositoryList />
  </ApolloProvider>
);

describe("<Repository /> rendering test", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
