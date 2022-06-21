import React, { ReactNode, useReducer } from 'react';
import { CartStateContext, CartDispatchContext } from '../contexts/CartContext';
import CartReducer from '../reducers/CartReducer';

interface ICartProviderProps{
  children:ReactNode
}

export default function CartProvider({ children }:ICartProviderProps) {
  const [state, dispatch] = useReducer(CartReducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}
