import React, { createContext, useContext, useEffect, useState } from 'react';
import { IUserData } from '../interfaces/user';

import * as authService from '../services/auth';
import { Cache } from '../services/cache';
import { unmaskCpf } from '../utils/masks';

interface IAuthContextData {
  auth: boolean;
  user: IUserData | null;
  login(cpf: string, password: string): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<IUserData | null>(null);
  
  useEffect(() => {
    async function renew() {
      const response = await authService.renew();

      const cachedUser = await Cache.getUser();

      const { auth } = response;
      setAuth(auth);
      setUser(cachedUser);
    }
    renew();
  }, []);

  async function login(cpf: string, password: string) {
    const response = await authService.login(unmaskCpf(cpf), password);
    const { auth, user } = response;
    setAuth(auth);
    setUser(user);
  }

  async function logout(){
    const response = await authService.logout();

    const { auth, user } = response;
    setAuth(auth);
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{auth, user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;