import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';

const Styles = createGlobalStyle`
  body {
    margin: unset;
  }
`;

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  connectToDevTools: true,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: ['filter'],
            merge(existing, incoming) {
              if (!existing) {
                return incoming;
              }

              return {
                ...existing,
                results: [...existing.results, ...incoming.results],
              };
            },
          },
        },
      },
    },
  }),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
      <Styles />
    </ApolloProvider>
  );
}
