import { products } from './Menu';
import { IRequest } from '../models';

export default [
  {
    id: '1',
    status: 'PENDING',
    products,
    created_date: new Date(),
    last_update: new Date(),
  },
] as IRequest[];
