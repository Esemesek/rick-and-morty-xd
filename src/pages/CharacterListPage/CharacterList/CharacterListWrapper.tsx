import React, { useContext, forwardRef } from 'react';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import Header from 'pages/CharacterListPage/CharacterList/CharacterListHeader';
import CharacterListContext from './CharacterListContext';
import { HEADER_SIZE, ITEM_SIZE } from './constants';
import NoCharacters from './NoCharacters';

interface Props {
  children: React.ReactElement;
  style: React.CSSProperties;
}

function CharacterListWrapper(
  { children, style, ...rest }: Props,
  ref: React.Ref<any>,
) {
  const { query, onQueryChange, compactHeader, itemCount, error, loading } =
    useContext(CharacterListContext);

  const isEmpty = itemCount === 0 && !loading && !error;

  const mergedStyle = {
    ...style,
    height: isEmpty ? `calc(100% - ${HEADER_SIZE}px)` : style.height,
  };

  return (
    <div ref={ref} {...rest} style={mergedStyle}>
      <Header
        query={query}
        onQueryChange={onQueryChange}
        compact={compactHeader}
      />
      {isEmpty && <NoCharacters />}
      {children}
      <LoadingIndicator
        show={loading}
        top={itemCount * ITEM_SIZE + HEADER_SIZE}
      />
    </div>
  );
}

export default forwardRef(CharacterListWrapper);
