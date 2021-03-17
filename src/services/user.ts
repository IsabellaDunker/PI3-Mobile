import { IUserCreateData, IUserData } from '../interfaces/user';
import api from './api';



export const get_all = async () => {
  const response = await api.get('/users');

  return response.data as IUserData[];
}

export const get_one = async (id: number) => {
  const response = await api.get(`/users/${id}`);

  return response.data as IUserData;
}

export const create = async (user: IUserCreateData) => {
  const response = await api.post('/users', user);

  return response.data as IUserData;
}

export const update = async (user: IUserData) => {
  await api.put(`/users/${user.id}`, user);
}

export const remove = async (id: number) => {
  await api.delete(`/users/${id}`);
}
