export interface Data<T> {
  count: number;
  next: string;
  results: T[];
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  url: string;
}

export interface PokemonCardProps {
  pokemon: Pokemon;
  ownedCount: number;
}
