export enum CharacterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export enum CharacterGender {
  Male = 'Male',
  Female = 'Female',
  Genderless = 'Genderless',
  Unknown = 'unknown',
}

export interface Character {
  status: CharacterStatus;
  gender: CharacterGender;
  species: string;
  image: string;
  name: string;
  id: number;
}

export interface CharacterQueryResult {
  characters: {
    results: Array<Character>;
  };
}
