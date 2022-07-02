export interface characterNames {
  _id: string;
  name: string;
}

export interface CharacterInfo {
  _id: string;
  name: string;
  age: Number;
  description: string;
}

export interface deleteObject {
  acknowledged: Boolean;
  deletedCount: Number;
}

export type EventCardInfo = {
  id: string;
  title: string;
  characters: Array<any>;
};
