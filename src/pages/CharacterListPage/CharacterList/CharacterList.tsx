import React, { useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListOnScrollProps, VariableSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import { Character } from 'services/graphql/types';
import CharacterListItem from './CharacterListItem';
import CharacterListContext from './CharacterListContext';
import {
  COMPACT_HEADER_SCROLL_OFFSET,
  HEADER_SIZE,
  ITEM_SIZE,
} from './constants';
import CharacterListWrapper from './CharacterListWrapper';

function getItemSize(index: number) {
  return index === 0 ? HEADER_SIZE : ITEM_SIZE;
}

interface Props {
  characters: Array<Character>;
  onLoadMore: () => void;
  query: string;
  onQueryChange: (query: string) => void;
  loading: boolean;
  error?: Error;
}

export default function CharacterList({
  characters,
  onLoadMore,
  query,
  onQueryChange,
  loading,
  error,
}: Props) {
  const [compactHeader, setCompactHeader] = useState(false);
  const itemData = [null, ...characters, null];
  const itemCount = itemData.length;

  const onScroll = ({ scrollOffset }: ListOnScrollProps) => {
    setCompactHeader(scrollOffset > COMPACT_HEADER_SCROLL_OFFSET);
  };

  return (
    <CharacterListContext.Provider
      value={{
        query,
        onQueryChange,
        compactHeader,
        itemCount: characters.length,
        loading,
        error,
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={(index) => Boolean(characters[index])}
            loadMoreItems={onLoadMore}
            itemCount={itemCount}
            threshold={10}
          >
            {({ ref, onItemsRendered }) => (
              <VariableSizeList
                ref={ref}
                onItemsRendered={onItemsRendered}
                itemCount={itemCount}
                itemSize={getItemSize}
                itemData={itemData}
                height={height}
                width={width}
                innerElementType={CharacterListWrapper}
                onScroll={onScroll}
              >
                {CharacterListItem}
              </VariableSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </CharacterListContext.Provider>
  );
}
