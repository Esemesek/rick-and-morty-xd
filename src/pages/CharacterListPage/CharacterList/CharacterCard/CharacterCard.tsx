import React from 'react';
import styled from 'styled-components';
import { Character } from 'services/graphql/types';
import Typography from 'components/Typography/Typography';
import CharacterCardIcons from './CharacterCardIcons';
import { smallScreenStyles } from 'utils/mediaQuery';

type Props = {
  character: Character;
  style: React.CSSProperties;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 100px 1fr 1fr 0.75fr;
  justify-items: center;
  align-items: center;

  width: 100%;
  max-width: 1000px;
  height: 100px;
  background: #fafafa;

  margin: 0 36px;
  border-radius: 32px;

  ${smallScreenStyles(`
    margin: 0 8px;
  `)}
`;

const Img = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 32px;

  box-shadow: -8px 0px 32px #bebebe;
`;

const TextPair = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  margin: 0 8px;
`;

const Title = styled(Typography)`
  font-size: 14px;
`;

const Ellipsized = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;

  ${smallScreenStyles(`
    max-width: 75px;
  `)}
`;

export default function CharacterCard({ character, style }: Props) {
  return (
    <Wrapper style={style}>
      <Container>
        <Img src={character.image} alt={character.name} />
        <TextPair>
          <Title>Name</Title>
          <Ellipsized>{character.name}</Ellipsized>
        </TextPair>
        <TextPair>
          <Title>Species</Title>
          <Ellipsized>{character.species}</Ellipsized>
        </TextPair>
        <CharacterCardIcons
          status={character.status}
          gender={character.gender}
        />
      </Container>
    </Wrapper>
  );
}
