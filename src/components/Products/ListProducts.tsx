import React, { useState, useEffect } from 'react';
import { View } from 'native-base';
import { IProduct } from '../../models';
import CardProduct from './CardProduct';
import { products as dataProducts } from '../../fake/Menu';

export default function ListProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(dataProducts);
  }, []);

  return (
    <View shadow={9} borderRadius={20} p={3}>
      {products.map((product) => <CardProduct product={product} />)}
    </View>
  );
}
