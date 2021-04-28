import { IOrderData } from '../interfaces/order';
import api from './api';

export const get_all = async () => {
  const response = await api.get('/orders');

  return response.data as IOrderData[];
}

export const get_one = async (id: number) => {
  const response = await api.get(`/orders/${id}`);

  return response.data as IOrderData;
}

export const create = async (order: Object) => {
  const response = await api.post('/orders', order);

  return response.data as IOrderData;
}

export const remove = async (id: number) => {
  await api.delete(`/orders/${id}`);
}