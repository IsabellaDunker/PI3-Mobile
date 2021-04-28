import { ITabData, ITabCreateData } from '../interfaces/tab';
import api from './api';

export const get_all = async () => {
  const response = await api.get('/tabs');

  return response.data as ITabData[];
}

export const get_one = async (id: number) => {
  const response = await api.get(`/tabs/${id}`);

  return response.data as ITabData;
}

export const create = async (tab: ITabCreateData) => {
  const response = await api.post('/tabs', tab);

  return response.data as ITabData;
}
