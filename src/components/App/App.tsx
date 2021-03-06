import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import React from "react";
import RepositoryList from "../../containers/RepositoryList/RepositoryList";
import Header from "../Header";

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
    <div>
      <Header />
      <RepositoryList />
    </div>
  </ApolloProvider>
);

export default App;
