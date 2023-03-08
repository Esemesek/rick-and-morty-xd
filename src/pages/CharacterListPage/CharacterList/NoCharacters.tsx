import JerryIcon from 'components/icons/JerryIcon';
import Typography from 'components/Typography/Typography';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding-bottom: 64px;
`;

const Title = styled(Typography).attrs({ as: 'h1' })`
  margin-top: 16px;
`;

export default function NoCharacters() {
  return (
    <Container>
      <JerryIcon />
      <Title>No characters found</Title>
    </Container>
  );
}
