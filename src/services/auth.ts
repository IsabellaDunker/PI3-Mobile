import api from './api';
import { Cache } from './cache';


interface ILoginPostResponse {
  auth: boolean;
  token: string;
  type: string;
}

interface ILoginData {
  auth: boolean;
  type: string;
}

export const login = async (cpf: string, password: string): Promise<ILoginData> => {
  const { data }: { data: ILoginPostResponse}  = await api.post('/login', { cpf, password });

  const { token } = data;

  await Cache.setToken(token);
  
  api.defaults.headers['x-access-token'] = token;

  const response: ILoginData = {
    auth: data.auth,
    type: data.type
  }
  return response;
}

export const logout = async (cpf: string, password: string): Promise<ILoginData> => {
  const { data }: { data: ILoginPostResponse}  = await api.get('/logout');

  const { token } = data;

  await Cache.setToken(token);
  
  api.defaults.headers['x-access-token'] = token;
  
  const response: ILoginData = {
    auth: data.auth,
    type: data.type
  }
  return response;
}
