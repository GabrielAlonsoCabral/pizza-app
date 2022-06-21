import { ICartProduct } from '../models';

enum ICartTypes{ //eslint-disable-line
    ADD='ADD',//eslint-disable-line
    REMOVE='REMOVE',//eslint-disable-line
    CLEAR='CLEAR'//eslint-disable-line
}

interface ICartAction{
    item:ICartProduct;
    index:number|string;
    type:ICartTypes;
}

export default function CartReducer(state:ICartProduct[], action:ICartAction) {
  const actionTypes = {
    ADD: () => [...state, action.item],
    REMOVE: () => [...state].filter((element, index) => index !== action.index),
    CLEAR: () => [],
  };
  const knowedTypes = Object.keys(actionTypes);

  if (!knowedTypes.includes(action.type)) throw new Error(`Invalid ActionType ${action.type}`);

  return actionTypes[action.type]();
}
