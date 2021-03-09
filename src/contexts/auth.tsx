import React, { createContext, useState } from 'react';

import * as authService from '../services/auth';

interface IAuthContextData {
  auth: boolean;
  type: string;
  login(cpf: string, password: string): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [type, setType] = useState('');
  
  async function login(cpf: string, password: string) {
    const response = await authService.login(cpf, password);

    const { auth, type } = response;
    setAuth(auth);
    setType(type);
  }

  async function logout(){
    const response = await authService.logout();

    const { auth, type } = response;
    setAuth(auth);
    setType(type);
  }

  return (
    <AuthContext.Provider value={{auth, type, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;