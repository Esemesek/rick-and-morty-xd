import React from 'react';
import styled from 'styled-components';
import SearchInput from 'components/SearchInput/SearchInput';
import { COMPACT_HEADER_SIZE, HEADER_SIZE } from './constants';

const Container = styled.div<{ compact: boolean }>`
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ compact }) => (compact ? 'row' : 'column')};

  width: 100%;
  height: ${({ compact }) => (compact ? COMPACT_HEADER_SIZE : HEADER_SIZE)}px;

  background-color: ${({ compact }) => (compact ? '#c0c0c099' : 'unset')};
`;

const Img = styled.img`
  margin: 0 16px;
`;

interface Props {
  compact: boolean;
  query: string;
  onQueryChange: (query: string) => void;
}

const Header = ({ compact, query, onQueryChange }: Props) => {
  return (
    <>
      <Container compact={compact}>
        <Img src="/images/banner.png" alt="Logo" width={compact ? 100 : 300} />
        <SearchInput
          placeholder="Search characters"
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.currentTarget.value)}
        />
      </Container>
    </>
  );
};

export default Header;
