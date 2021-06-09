import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo.client';
import Home from './pages/Home';
import { Header } from './components';

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <Home />
  </ApolloProvider>
);

export default App;
