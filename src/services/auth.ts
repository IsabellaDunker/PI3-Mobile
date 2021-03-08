import api from './api';

interface ILoginPostResponse {
  auth: boolean;
  token: string;
  type: string;
}

const login = async (cpf: String, password: String) => {
  const response: ILoginPostResponse = await api.post('/login', { cpf, password });

  
}