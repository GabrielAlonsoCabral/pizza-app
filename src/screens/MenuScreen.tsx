import React from 'react';
import {
  View,
  ScrollView,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../constants/Colors';
import ListCategory from '../components/Category/ListCategory';
import Title from '../components/Title';
import ListProducts from '../components/Products/ListProducts';

export default function MenuScreen() {
  return (
    <ScrollView height="100%">
      <SafeAreaView>
        <View mt={-5} top="-1%">
          <Title label="Categorias" fontSize={18} color={AppColors.black} padding={3} />
          <ListCategory />
          <Title label="Você tem fome do que ?" fontSize={18} color={AppColors.black} padding={3} />
          <ListProducts />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
