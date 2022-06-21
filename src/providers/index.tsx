import React, { ReactNode } from 'react';
import CartProvider from './CartProvider';

interface IInternalProvidersProps{
  children:ReactNode
}

export default function InternalProviders({ children }:IInternalProvidersProps) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
