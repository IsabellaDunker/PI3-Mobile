import React, { createContext, useContext, useEffect, useState } from 'react';
import { IProductOnCart } from '../interfaces/order';
import * as orderService from '../services/order';

interface IOrderContextData {
  cart: IProductOnCart[];
}

const OrderContext = createContext<IOrderContextData>({} as IOrderContextData);

export const OrderProvider: React.FC = ({ children }) => {
  const [ cart, setCart ] = useState<IProductOnCart[]>([]);

  return (
    <OrderContext.Provider value={{cart}}>
      {children}
    </OrderContext.Provider>
  );
};

export function useOrder(): IOrderContextData {
  const context = useContext(OrderContext);

  return context;
}

export default OrderContext;