import React from 'react';
import styled from 'styled-components';
import SearchIcon from 'components/icons/SearchIcon';

const Container = styled.div`
  padding: 0 8px;
  width: 100%;
  max-width: 500px;
`;

const RelativeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: unset;
  outline: unset;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 8px 16px 8px 56px;
  width: 100%;

  background: #fafafa;

  &:focus {
    box-shadow: 0px 0px 16px #bdbdbd;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #5c6bc0;
  color: #fafafa;
  border-radius: 8px;
  padding: 8px;

  box-shadow: -2px 0 16px #5c6bc0;
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput({ className, ...rest }: Props) {
  return (
    <Container className={className}>
      <RelativeContainer>
        <Input {...rest} />
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      </RelativeContainer>
    </Container>
  );
}
