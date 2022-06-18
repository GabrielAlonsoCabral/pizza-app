import { IEstablishment } from '../models';

interface IConfigs{
  company_name:string;
  logo:string;
  establishments:Array<IEstablishment>
}

export default {
  company_name: 'Pizzaria Morumbi',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjfA4F0dNF3JUEZrtmXcaW9_dO1m7KGL8ww&usqp=CAU',
  establishments: [
    {
      name: 'Unidade Morumbi',
      address: 'Avenida Giovanni Gronchi, 123',
      id: '1',
    },
    {
      name: 'Unidade Paulista',
      address: 'Avenida Paulista, 123',
      id: '2',
    },
    {
      name: 'Unidade Moema',
      address: 'Avenida Ibirapuera, 123',
      id: '3',
    },
    {
      name: 'Shopping Pátio Paulista',
      address: 'Avenida Paulista, 321',
      id: '4',
    },
  ],
} as IConfigs;
