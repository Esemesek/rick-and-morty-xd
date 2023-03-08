import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25px;
  height: 25px;
`;

export default function MaleIcon() {
  return (
    <Wrapper>
      <svg viewBox="0 0 512 512" width="100%" height="100%">
        <circle
          cx="216"
          cy="296"
          r="152"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M448 160V64h-96M324 188L448 64"
        />
      </svg>
    </Wrapper>
  );
}
