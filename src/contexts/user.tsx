import React, { createContext, useContext } from 'react';

interface IUserContextData {
}

const UserContext = createContext<IUserContextData>({} as IUserContextData);

export const UserProvider: React.FC = ({ children }) => {

  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IUserContextData {
  const context = useContext(UserContext);

  return context;
}

export default UserContext;