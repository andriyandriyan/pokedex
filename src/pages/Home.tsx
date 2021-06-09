import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { Data, Pokemon } from '../interfaces';
import { PokemonCard } from '../components';

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

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Home: React.FC = () => {
  const { data, loading } = useQuery<{ pokemons: Data<Pokemon> }>(QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      {data?.pokemons.results.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} ownedCount={Math.round(Math.random())} />
      ))}
    </Wrapper>
  );
};

export default React.memo(Home);
