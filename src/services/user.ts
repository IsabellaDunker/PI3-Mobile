import api from './api';

interface IUserData {
  id: number;
  name: string;
  cpf: string;
  cellphone: string;
  birth_data: string;
  type: string;
}

interface IUserCreateData {
  name: string;
  cpf: string;
  cellphone: string;
  birth_data: string;
  type: string;
  password: string;
}

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

  delete response.data['password'];

  return response.data as IUserData;
}

export const update = async (user: IUserData) => {
  await api.put(`/users/${user.id}`, user);
}

export const remove = async (id: number) => {
  await api.delete(`/users/${id}`);
}
