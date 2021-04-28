import { IUserData } from '../interfaces/user';
import api from './api';
import { Cache } from './cache';


interface ILoginPostResponse {
  auth: boolean;
  token: string;
  user: IUserData;
}

interface ILoginData {
  auth: boolean;
  user: IUserData | null;
}

interface IRenewLoginData {
  auth: boolean;
}

export const login = async (cpf: string, password: string): Promise<ILoginData> => {
  const { data }: { data: ILoginPostResponse}  = await api.post('/login', { cpf, password });

  const { token, user } = data;

  await Cache.setToken(token);
  await Cache.setUser(user);
  await Cache.setCpf(cpf);

  api.defaults.headers['x-access-token'] = token;

  const response: ILoginData = {
    auth: data.auth,
    user: data.user
  }
  return response;
}

export const logout = async (): Promise<ILoginData> => {
  const { data }: { data: ILoginPostResponse}  = await api.get('/logout');

  const { auth, token, user } = data;

  await Cache.setToken(token);
  await Cache.setUser(user);
  
  api.defaults.headers['x-access-token'] = token;
  
  const response: ILoginData = {
    auth,
    user
  }
  return response;
}

export const renew = async (): Promise<IRenewLoginData> => {
  const token = await Cache.getToken();
  
  if(token) {
    api.defaults.headers['x-access-token'] = token;
    const response = await api.get('/renew');
    const { auth } = response.data;

    return { auth };
  } else {
    return { auth: false }
  }
}