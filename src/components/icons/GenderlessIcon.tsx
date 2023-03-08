import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25px;
  height: 25px;
`;

export default function GenderlessIcon() {
  return (
    <Wrapper>
      <svg viewBox="0 0 512 512" width="100%" height="100%">
        <circle
          cx="256"
          cy="256"
          r="192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </Wrapper>
  );
}
