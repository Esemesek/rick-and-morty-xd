import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_CHARACTERS } from 'services/graphql/queries';
import CharacterList from 'pages/CharacterListPage/CharacterList/CharacterList';
import useDebounce from 'utils/useDebounce';
import Snackbar from 'components/Snackbar/Snackbar';
import { CharacterQueryResult } from 'services/graphql/types';

const DEBOUNCE_TIME = 500;

const Main = styled.main`
  position: relative;
  background: #eeeeee;
  height: 100vh;
  width: 100vw;
`;

export default function Home() {
  const [page, setPage] = useState(1);
  const [fetchMoreError, setFetchMoreError] = useState<Error | undefined>();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, DEBOUNCE_TIME);

  const { loading, error, data, fetchMore, refetch } =
    useQuery<CharacterQueryResult>(GET_CHARACTERS, {
      notifyOnNetworkStatusChange: true,
      variables: { page: 1, filter: { name: '' } },
    });

  useEffect(() => {
    refetch({ page: 1, filter: { name: debouncedQuery } });
  }, [refetch, debouncedQuery]);

  const onQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
  };

  const onLoadMoreItems = async () => {
    if (!loading) {
      setFetchMoreError(undefined);
      try {
        await fetchMore({
          variables: { page: page + 1, filter: { name: debouncedQuery } },
        });
        setPage((e) => e + 1);
      } catch (e) {
        setFetchMoreError(e as Error);
      }
    }
  };

  return (
    <Main>
      <CharacterList
        characters={data?.characters?.results || []}
        onLoadMore={onLoadMoreItems}
        query={query}
        onQueryChange={onQueryChange}
        loading={loading}
        error={error || fetchMoreError}
      />
      <Snackbar
        show={Boolean(error || fetchMoreError)}
        message="Couldn't fetch the characters"
      />
    </Main>
  );
}
