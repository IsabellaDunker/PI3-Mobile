import { IProductData } from '../interfaces/product';
import api from './api';

export const get_all = async () => {
  const response = await api.get('/products');

  return response.data as IProductData[];
}

export const get_one = async (id: number) => {
  const response = await api.get(`/products/${id}`);

  return response.data as IProductData;
}

export const create = async (product: IProductData) => {
  const response = await api.post('/products', product);

  return response.data as IProductData;
}

export const update = async (product: IProductData) => {
  await api.put(`/products/${product.id}`, product);
}

export const remove = async (id: number) => {
  await api.delete(`/products/${id}`);
}
