import React, { createContext, useContext, useEffect, useState } from 'react';
import { ITabData } from '../interfaces/tab';
import * as tabService from '../services/tab';

interface ITabContextData {
  tabs: ITabData[];
  getTabs(): Promise<void>;
  payTab(id: number): Promise<void>;
}

const TabContext = createContext<ITabContextData>({} as ITabContextData);

export const TabProvider: React.FC = ({ children }) => {
  const [ tabs, setTabs ] = useState<ITabData[]>([]);

  async function getTabs(){
    const response = await tabService.get_all();
    setTabs(response);
  }

  async function payTab(id: number){
    await tabService.pay(id);
    await getTabs();
  }

  useEffect(() => {
    getTabs();
  }, []);

  return (
    <TabContext.Provider value={{tabs, getTabs, payTab}}>
      {children}
    </TabContext.Provider>
  );
};

export function useTab(): ITabContextData {
  const context = useContext(TabContext);

  return context;
}

export default TabContext;