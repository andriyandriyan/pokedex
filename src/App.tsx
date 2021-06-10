import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo.client';
import Home from './pages/Home';
import { Footer, Header } from './components';

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <Home />
    <Footer />
  </ApolloProvider>
);

export default App;
