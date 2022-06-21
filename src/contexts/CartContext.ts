import { useContext, createContext } from 'react';

// @ts-ignore
export const CartStateContext = createContext();
// @ts-ignore
export const CartDispatchContext = createContext();

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
