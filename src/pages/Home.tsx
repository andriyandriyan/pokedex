import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Data, Pokemon } from '../interfaces';

const QUERY = gql`
  {
  pokemons(limit: 10, offset: 0) {
    results {
      url
      name
      id
      image
    }
  }
}
`;

const Home: React.FC = () => {
  const { data, loading } = useQuery<{ pokemons: Data<Pokemon> }>(QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data?.pokemons.results.map(pokemon => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default React.memo(Home);
