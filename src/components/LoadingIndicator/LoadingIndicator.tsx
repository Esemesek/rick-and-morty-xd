import React from 'react';
import styled from 'styled-components';
import RickIcon from 'components/icons/RickIcon';

const Indicator = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  @keyframes circleFadeDelay {
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: circleFadeDelay 4s linear infinite;
  }
`;

interface Props {
  show: boolean;
  top: number
}

export default function LoadingIndicator({ show, top }: Props) {
  if (!show) {
    return null;
  }

  return (
    <Indicator style={{ top }}>
      <RickIcon />
    </Indicator>
  );
}
