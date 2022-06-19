import { IPhone } from './Phone';
import { IAddress } from './Address';

export interface IUser{
    id:string;
    name:string;
    email:string;
    address?:IAddress;
    phone?:IPhone;
  }
