import { IEstablishment, IPaymentMethod, IDeliveryMethod } from '../models';

interface IConfigs{
  company_name:string;
  logo:string;
  establishments:Array<IEstablishment>;
  payment_methods:IPaymentMethod[];
  delivery_methods:IDeliveryMethod[]
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
  payment_methods: [
    {
      id: '1',
      name: 'Cartão de Crédito - pagar na entrega',
      description: 'Pagar na entrega',
    },
    {
      id: '2',
      name: 'Cartão de Débito - pagar na entrega',
      description: 'Pagar na entrega',
    },
    {
      id: '3',
      name: 'Dinheiro - pagar na entrega',
      description: 'Pagar na entrega',
    },
    {
      id: '4',
      name: 'Pix - pagar na entrega',
      description: '',
    },
  ],
  delivery_methods: [
    {
      id: '1',
      name: 'Encontrar Entregador - Portão/Portaria',
      description: '',
      is_delivery: true,
    },
    {
      id: '2',
      name: 'Retirar na loja',
      description: '',
      is_delivery: false,
    },
  ],
} as IConfigs;
