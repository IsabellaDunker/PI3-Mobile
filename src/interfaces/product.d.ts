import { IEnvironmentData } from './environment.d';

export interface IProductData {
  id: number;
  name: string;
  is_available: boolean;
  has_stock: boolean;
  number: number | null;
  unit_type: string;
  price: number;
  environment: IEnvironmentData
}