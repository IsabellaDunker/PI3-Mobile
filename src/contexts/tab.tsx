import React, { createContext, useContext, useEffect, useState } from 'react';
import { ITabData } from '../interfaces/tab';
import * as tabService from '../services/tab';

interface ITabContextData {
  tabs: ITabData[];
}

const TabContext = createContext<ITabContextData>({} as ITabContextData);

export const TabProvider: React.FC = ({ children }) => {
  const [ tabs, setTabs ] = useState<ITabData[]>([]);

  async function getTabs(){
    const response = await tabService.get_all();
    setTabs(response);
  }

  useEffect(() => {
    getTabs();
  }, []);

  return (
    <TabContext.Provider value={{tabs}}>
      {children}
    </TabContext.Provider>
  );
};

export function useTab(): ITabContextData {
  const context = useContext(TabContext);

  return context;
}

export default TabContext;