import React, { ReactNode } from 'react';
import CartProvider from './CartProvider';
import FilterProductsProvider from './FilterProductsProvider';

interface IInternalProvidersProps{
  children:ReactNode
}

export default function InternalProviders({ children }:IInternalProvidersProps) {
  return (
    <FilterProductsProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </FilterProductsProvider>
  );
}
