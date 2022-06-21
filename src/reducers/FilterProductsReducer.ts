// import { ICartProduct } from '../models';

enum IActionTypes{ //eslint-disable-line
    ADD='ADD',//eslint-disable-line
    REMOVE='REMOVE',//eslint-disable-line
    CLEAR='CLEAR'//eslint-disable-line
}

interface IFilterReducerProps{
    item:any; // inserir o tipo do IFilter
    index:number|string;
    type:IActionTypes;
}

export default function FilterProductsReducer(state:any, action:IFilterReducerProps) {
  const actionTypes = {
    ADD: () => [...state, action.item],
    REMOVE: () => [...state].filter((element, index) => index !== action.index),
    CLEAR: () => [],
  };
  const knowedTypes = Object.keys(actionTypes);

  if (!knowedTypes.includes(action.type)) throw new Error(`Invalid ActionType ${action.type}`);

  return actionTypes[action.type]();
}
