import React, { ReactNode, useReducer } from 'react';
import { FilterProductStateContext, FilterProductDispatchContext } from '../contexts/FilterProductsContext';
import FilterProductsReducer from '../reducers/FilterProductsReducer';

interface IFilterProductProvider{
  children:ReactNode
}

export default function FilterProductProvider({ children }:IFilterProductProvider) {
  const [state, dispatch] = useReducer(FilterProductsReducer, []);
  return (
    <FilterProductStateContext.Provider value={dispatch}>
      <FilterProductDispatchContext.Provider value={state}>
        {children}
      </FilterProductDispatchContext.Provider>
    </FilterProductStateContext.Provider>
  );
}
