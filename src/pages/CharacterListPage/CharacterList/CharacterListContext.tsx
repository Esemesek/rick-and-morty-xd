import { createContext } from 'react';

export interface CharacterListContextType {
  query: string;
  onQueryChange: (query: string) => void;
  compactHeader: boolean;
  itemCount: number;
  loading: boolean;
  error?: Error;
}

const CharacterListContext = createContext<CharacterListContextType>({} as any);

export default CharacterListContext;
