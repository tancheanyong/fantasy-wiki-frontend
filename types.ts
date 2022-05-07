export interface characterNames {
  _id: string;
  name: string;
}

export interface characterInfo {
  _id: string;
  name: string;
  age: Number;
  description: string;
}

export interface deleteObject {
  acknowledged: Boolean;
  deletedCount: Number;
}
