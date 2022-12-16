import {IUser} from "types/domain/User.types";

export type IToDo = {
  userId: IUser['id']
  id: number
  title: string
  completed: boolean
};