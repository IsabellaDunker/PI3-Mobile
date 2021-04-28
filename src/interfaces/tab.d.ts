import { IOrderData } from './order.d';
import { IUserData } from './user.d';
export interface ITabData {
  id: number;
  is_open: boolean;
  orders: IOrderData[];
  user: IUserData;
}

export interface ITabCreateData {
  user_id: number;
}