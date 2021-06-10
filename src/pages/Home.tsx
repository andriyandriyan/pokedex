import React from 'react';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { Data, Pokemon } from '../interfaces';
import { Container, PokemonCard } from '../components';
import { POKEMONS_QUERY } from '../queries';

interface IData {
  pokemons: Data<Pokemon>;
}

interface IVariable {
  offset: number;
}

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
`;

const LoadMoreButton = styled.button`
  border-radius: 0.5rem;
  background-color: #ffcb08;
  cursor: pointer;
  border: none;
  padding: 0.5rem 1.5rem;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
  font-weight: 500;

  &:hover {
    background-color: #ffae00;
  }
`;

const Home: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const { loading, fetchMore } = useQuery<IData, IVariable>(POKEMONS_QUERY, {
    variables: { offset: 0 },
    onCompleted(data) {
      setPokemons(data.pokemons.results);
    },
  });

  const loadMore = () => {
    fetchMore({ variables: { offset: pokemons.length } })
      .then(({ data }) => setPokemons(pokemons.concat(data.pokemons.results)));
  };

  if (!pokemons.length && loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Grid>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} ownedCount={Math.round(Math.random())} />
        ))}
      </Grid>
      <Center>
        <LoadMoreButton type="button" onClick={loadMore}>
          Load More
        </LoadMoreButton>
      </Center>
    </Container>

  );
};

export default React.memo(Home);
