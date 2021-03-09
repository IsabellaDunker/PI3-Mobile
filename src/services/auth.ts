import api from './api';
import { Cache } from './cache';

interface ILoginPostResponse {
  auth: boolean;
  token: string;
  type: string;
}

const login = async (cpf: String, password: String) => {
  const response: ILoginPostResponse = await api.post('/login', { cpf, password });

  const { token } = response;

  await Cache.setToken(token);

  return { response };
}