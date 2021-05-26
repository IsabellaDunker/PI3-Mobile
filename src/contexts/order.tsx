import React, { createContext, useContext, useEffect, useState } from 'react';
import { IOrderData, IProductsOrderedData } from '../interfaces/order';
import * as orderService from '../services/order';

interface IOrderContextData {
  cart: IProductsOrderedData[];
  orders: IOrderData[];
}

const OrderContext = createContext<IOrderContextData>({} as IOrderContextData);

export const OrderProvider: React.FC = ({ children }) => {
  const [ cart, setCart ] = useState<IProductsOrderedData[]>([]);
  const [ orders, setOrders ] = useState<IOrderData[]>([]);

  return (
    <OrderContext.Provider value={{cart, orders}}>
      {children}
    </OrderContext.Provider>
  );
};

export function useOrder(): IOrderContextData {
  const context = useContext(OrderContext);

  return context;
}

export default OrderContext;