import React from 'react';
import { Character } from 'services/graphql/types';
import CharacterCard from './CharacterCard/CharacterCard';

interface Props {
  index: number;
  data: Array<Character | null>;
  style: React.CSSProperties;
}

export default function CharacterListItem({ index, data, style }: Props) {
  const item = data[index];

  if (item === null) {
    return null;
  }

  return <CharacterCard style={style} character={item} key={item.id} />;
}
