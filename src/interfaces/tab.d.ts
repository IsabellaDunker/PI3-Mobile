import { IUserData } from './user.d';
export interface ITabData {
  id: number;
  user_id: number;
  is_open: boolean;
  orders: Object[];
  user: IUserData[];
}

export interface ITabCreateData {
  user_id: number;
}