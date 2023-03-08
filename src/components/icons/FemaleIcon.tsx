import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25px;
  height: 25px;
`;

export default function FemaleIcon() {
  return (
    <Wrapper>
      <svg height="100%" width="100%" viewBox="0 0 512 512">
        <circle
          cx="256"
          cy="184"
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
          d="M256 336v144M314 416H198"
        />
      </svg>
    </Wrapper>
  );
}
