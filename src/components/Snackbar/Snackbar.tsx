import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from 'components/Typography/Typography';

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SnackbarWrapper = styled.div`
  background: #212121;
  border-radius: 8px;
  padding: 12px 32px;
`;

const SnackbarMessage = styled(Typography)`
  color: #fefefe;
`;

interface Props {
  show: boolean;
  message?: string;
}

export default function Snackbar({ show, message }: Props) {
  const [displayState, setDisplayState] = useState(show);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (show) {
      setDisplayState(true);

      timeout = setTimeout(() => {
        setDisplayState(false);
      }, 4000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [show]);

  if (!displayState) {
    return null;
  }

  return (
    <Container>
      <SnackbarWrapper>
        <SnackbarMessage>{message}</SnackbarMessage>
      </SnackbarWrapper>
    </Container>
  );
}
