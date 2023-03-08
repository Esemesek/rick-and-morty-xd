import React from 'react';
import styled from 'styled-components';
import FemaleIcon from 'components/icons/FemaleIcon';
import GenderlessIcon from 'components/icons/GenderlessIcon';
import HeartIcon from 'components/icons/HeartIcon';
import MaleIcon from 'components/icons/MaleIcon';
import SkullIcon from 'components/icons/SkullIcon';
import { CharacterGender, CharacterStatus } from 'services/graphql/types';

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  border-radius: 32px;

  height: 100px;
  width: 100%;
`;

const IconWrapper = styled.div<{ color: string; background: string }>`
  border-radius: 50%;

  background: ${({ background }) => background};
  box-shadow: 4px 4px 16px ${({ background }) => background};

  padding: 8px;
  margin: 4px;

  color: ${({ color }) => color};
`;

function getStatusIcon(status: CharacterStatus) {
  switch (status) {
    case CharacterStatus.Dead:
      return (
        <IconWrapper color="#fafafa" background="#3e3e3e">
          <SkullIcon />
        </IconWrapper>
      );
    case CharacterStatus.Alive:
      return (
        <IconWrapper color="#fafafa" background="#e53935">
          <HeartIcon />
        </IconWrapper>
      );
    default:
      return null;
  }
}

function getGenerIcon(gender: CharacterGender) {
  switch (gender) {
    case CharacterGender.Female:
      return (
        <IconWrapper color="#fafafa" background="#e91e63">
          <FemaleIcon />
        </IconWrapper>
      );
    case CharacterGender.Male:
      return (
        <IconWrapper color="#fafafa" background="#3f51b5">
          <MaleIcon />
        </IconWrapper>
      );
    case CharacterGender.Genderless:
      return (
        <IconWrapper color="#fafafa" background="#9e9e9e">
          <GenderlessIcon />
        </IconWrapper>
      );
    default:
      return null;
  }
}

interface Props {
  status: CharacterStatus;
  gender: CharacterGender;
}

export default function CharacterCardIcons({ status, gender }: Props) {
  return (
    <IconContainer>
      {getStatusIcon(status)}
      {getGenerIcon(gender)}
    </IconContainer>
  );
}
