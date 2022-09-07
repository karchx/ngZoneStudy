import { User } from "./user";

export interface Room {
  nameRoom: string;
  students: User[];
  createdAt: Date;
  updatedAt: Date;
  _id?: string;
}
