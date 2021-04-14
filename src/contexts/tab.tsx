import React, { createContext, useContext, useEffect, useState } from 'react';

interface ITabContextData {
}

const TabContext = createContext<ITabContextData>({} as ITabContextData);

export const TabProvider: React.FC = ({ children }) => {
  return (
    <TabContext.Provider value={{}}>
      {children}
    </TabContext.Provider>
  );
};

export function useTab(): ITabContextData {
  const context = useContext(TabContext);

  return context;
}

export default TabContext;