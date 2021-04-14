import React, { createContext, useContext, useEffect, useState } from 'react';
import { IUserData, IUserFormSubmitData } from '../interfaces/user';

import * as userService from '../services/user';
import { brToUsDate, noBarsToUsDate, unmaskCpf } from '../utils/masks';

interface IUserContextData {
  users: IUserData[];
  getUsers(): void;
  saveForm(user: IUserFormSubmitData): Promise<void>;
}

const UserContext = createContext<IUserContextData>({} as IUserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [ users, setUsers ] = useState<IUserData[]>([]);

  async function getUsers() {
    const response = await userService.get_all();
    setUsers(response);
  }

  async function saveForm(user: IUserFormSubmitData) {
    if(user.id) {
      const updatedUserData = {
        id: user.id,
        name: user.name,
        birth_date: noBarsToUsDate(user.birth_date),
        cellphone: user.cellphone,
        cpf: user.cpf,
        type: user.type
      }
      await userService.update(updatedUserData as IUserData);

      getUsers();

    } else {
      const newUserData = {
        name: user.name,
        birth_date: brToUsDate(user.birth_date),
        cellphone: user.cellphone,
        cpf: unmaskCpf(user.cpf),
        type: user.type,
        password: user.type !== 'Customer' ? user.password : ''
      }

      await userService.create(newUserData);
      getUsers();
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{users, getUsers, saveForm}}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IUserContextData {
  const context = useContext(UserContext);

  return context;
}

export default UserContext;