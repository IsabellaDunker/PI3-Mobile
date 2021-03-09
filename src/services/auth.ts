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

interface IRenewData {
  auth: boolean
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

export const logout = async (): Promise<ILoginData> => {
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

export const renew = async (token: string): Promise<IRenewData> => {
  api.defaults.headers['x-access-token'] = token;
  
  const { data }: { data: IRenewData } = await api.get('/renew');

  return data;
}