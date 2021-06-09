import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo.client';
import Home from './pages/Home';
import { Container } from './components';

const App = () => (
  <ApolloProvider client={client}>
    <Container>
      <Home />
    </Container>
  </ApolloProvider>
);

export default App;
