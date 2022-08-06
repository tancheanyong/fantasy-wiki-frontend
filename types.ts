export interface CharacterNames {
  _id: string;
  name: string;
}

export interface CharacterInfo {
  _id: string;
  name: string;
  age: Number;
  description: string;
}

export interface CharacterWikiType {
  characterId: String;
  characterInfo: {
    name: String;
    age: Number;
    description: String;
  };
  // TODO: Should these be optional?
  mainSection?: {
    header: String;
    content: String;
  };
  optionalSections?: {};
}

export interface DeleteObject {
  acknowledged: Boolean;
  deletedCount: Number;
}

export type EventCardInfo = {
  id: string;
  title: string;
  characters: Array<any>;
};
