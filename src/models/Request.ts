import { IProduct } from './Product';

export interface IRequest{
    id:string;
    status:string;
    time_estimative?:string;
    products:IProduct[];
    created_date:Date;
    last_update:Date;
}
