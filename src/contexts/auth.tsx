import React, { createContext, useContext, useEffect, useState } from 'react';

import * as authService from '../services/auth';
import { unmaskCpf } from '../utils/masks';

interface IAuthContextData {
  auth: boolean;
  type: string | null;
  login(cpf: string, password: string): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [type, setType] = useState<string | null>(null);
  
  useEffect(() => {
    async function renew() {
      const response = await authService.renew();

      const { auth, type } = response;
      setAuth(auth);
      setType(type);
    }
    renew();
  }, []);

  async function login(cpf: string, password: string) {
    const response = await authService.login(unmaskCpf(cpf), password);
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
    <AuthContext.Provider value={{auth, type, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;