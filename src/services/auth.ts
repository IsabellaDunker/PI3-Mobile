import { userType } from '../enums/userType';
import api from './api';
import { Cache } from './cache';


interface ILoginPostResponse {
  auth: boolean;
  token: string;
  type: userType;
}

interface ILoginData {
  auth: boolean;
  type: userType | null;
}

export const login = async (cpf: string, password: string): Promise<ILoginData> => {
  const { data }: { data: ILoginPostResponse}  = await api.post('/login', { cpf, password });

  const { token, type } = data;

  await Cache.setToken(token);
  await Cache.save('type', type);
  await Cache.setCpf(cpf);

  api.defaults.headers['x-access-token'] = token;

  const response: ILoginData = {
    auth: data.auth,
    type: data.type
  }
  return response;
}

export const logout = async (): Promise<ILoginData> => {
  const { data }: { data: ILoginPostResponse}  = await api.get('/logout');

  const { token, type } = data;

  await Cache.setToken(token);
  await Cache.save('type', type);
  
  api.defaults.headers['x-access-token'] = token;
  
  const response: ILoginData = {
    auth: data.auth,
    type: data.type
  }
  return response;
}

export const renew = async (): Promise<ILoginData> => {
  const token = await Cache.getToken();
  
  if(token) {
    api.defaults.headers['x-access-token'] = token;
    const response = await api.get('/renew');
    const { auth } = response.data;
    const type = await Cache.get('type') as string;

    return { auth, type };
  } else {
    return { auth: false, type: null }
  }
}