import { IEnvironmentData } from './environment.d';
interface IProductsOrderedData {
  price: number;
  units: number;
  note: string | null;
}

export interface IProductsData {
  id: number;
  name: string;
  is_available: boolean;
  has_stock: boolean;
  number: number;
  unit_type: string;
  price: number;
  imageUrl: string | null;
  description: string | null;
  environment: IEnvironmentData;
  products_ordereds: IProductsOrderedData;  
}

export interface IOrderData {
  id: number;
  waiter_id: number;
  products: IProductsData[];
  createdAt: string;
}