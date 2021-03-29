import React, { createContext, useContext, useEffect, useState } from 'react';
import { IProductData } from '../interfaces/product';

import * as productService from '../services/product';
import { brToUsDate, noBarsToUsDate, unmaskCpf } from '../utils/masks';

interface IProductContextData {
  products: IProductData[];
}

const ProductContext = createContext<IProductContextData>({} as IProductContextData);

export const ProductProvider: React.FC = ({ children }) => {
  const [ products, setProducts ] = useState<IProductData[]>([]);

  async function getProducts() {
    const response = await productService.get_all();
    setProducts(response);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct(): IProductContextData {
  const context = useContext(ProductContext);

  return context;
}

export default ProductContext;