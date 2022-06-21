import { useContext, createContext } from 'react';

// @ts-ignore
export const FilterProductStateContext = createContext();
// @ts-ignore
export const FilterProductDispatchContext = createContext();

export const useFilterProduct = () => useContext(FilterProductStateContext);
export const useDispatchFilterProduct = () => useContext(FilterProductDispatchContext);
