import { IUser } from '../models';

export default {
  id: '1',
  name: 'Gabriel Alonso',
  email: 'gabriel.alonso@development.com',
  phone: {
    prefix: '11',
    number: '123456789',
    country_code: '+55',
  },
  address: {
    city: 'São Paulo',
    state: 'São Paulo',
    street: 'Av. paulista',
    street_number: '100',
    postal_code: '00000-000',
    complement: 'Apto 123 BL 1',
  },

} as IUser;
