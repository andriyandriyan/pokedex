import { gql } from '@apollo/client';

export const POKEMONS_QUERY = gql`
  query pokemonsQuery($offset: Int!) {
    pokemons(offset: $offset) {
      results {
        url
        name
        id
        image
      }
    }
  }
`;
