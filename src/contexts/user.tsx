import React, { createContext, useContext, useEffect, useState } from 'react';
import { IUserData } from '../interfaces/user';

import * as userService from '../services/user';

interface IUserContextData {
  users: IUserData[];
  updateUsers(): void;
}

const UserContext = createContext<IUserContextData>({} as IUserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [ users, setUsers ] = useState<IUserData[]>([]);

  async function updateUsers() {
    const response = await userService.get_all();
    setUsers(response);
  }

  useEffect(() => {
    updateUsers();
  }, []);

  return (
    <UserContext.Provider value={{users, updateUsers}}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IUserContextData {
  const context = useContext(UserContext);

  return context;
}

export default UserContext;