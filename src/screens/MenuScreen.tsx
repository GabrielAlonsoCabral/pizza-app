import React, { useEffect, useState } from 'react';
import {
  View,
  Heading,
  ScrollView,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products as dataProducts } from '../fake/Menu';
import { IProduct } from '../models';
import { AppColors } from '../constants/Colors';
import CardProduct from '../components/Products/CardProduct';
import ListCategory from '../components/Category/ListCategory';

function MenuScreen() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(dataProducts);
  }, []);

  return (
    <ScrollView height="100%">
      <SafeAreaView>
        <View top="-1%">
          <View>
            <Heading p={3} fontSize={18} color={AppColors.black}>
              Categorias
            </Heading>
            <View p={1}>
              <ListCategory />
            </View>
          </View>

          <View p={3}>
            <Heading fontSize={18}>Qual é a sua fome hoje ?</Heading>
          </View>

          <View shadow={9} borderRadius={20} p={3}>
            <View shadow={2} mt={2} mb="-10%">
              {products.map((product) => <CardProduct product={product} />)}
            </View>
          </View>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
}

export default MenuScreen;
