import React from 'react';
import styled from '@emotion/styled';
import { PokemonCardProps } from '../interfaces';

const Card = styled.a`
  border-radius: 0.5rem;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
  text-align: center;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
  width: 120px;
`;

const Id = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;

const Name = styled.h2`
  margin-top: 0.25rem;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1;
  text-transform: capitalize;
`;

const OwnedBadge = styled.span<{ ownedCount: number }>`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${props => (props.ownedCount > 0 ? '#ffcb08' : '#3661ac')};
  color: ${props => (props.ownedCount > 0 ? 'black' : 'white')};
  font-size: 12px;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-bottom-left-radius: 0.5rem;
  line-height: 1;
`;

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, ownedCount }) => (
  <Card href="#">
    <OwnedBadge ownedCount={ownedCount}>
      {`Owned: ${ownedCount}`}
    </OwnedBadge>
    <Image src={pokemon.image} alt={pokemon.name} />
    <Id>{`#${pokemon.id.toString().padStart(4, '0')}`}</Id>
    <Name>{pokemon.name}</Name>
  </Card>
);

export default React.memo(PokemonCard);
