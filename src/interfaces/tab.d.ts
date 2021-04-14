export interface ITabData {
  id: number;
  user_id: number;
  is_open: boolean;
  orders: Object[];
}

export interface ITabCreateData {
  user_id: number;
}