import { FlatList } from 'react-native';
import React from 'react';
import {
  View, Heading,
} from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';
import { banners, promotions } from '../fake/Home';
import { AppColors } from '../constants/Colors';
import { BannerProductCategories, BannerPromotions } from '../components/Banner/Banners';
import Config from '../fake/Configs';
import Header from '../components/Header';
import { HorizontalSeparator } from '../components/FlatListSeparator';

function HomeScreen() {
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      <View w="100%">
        <View mt={5}>
          <Heading p={3} fontSize={22} color={AppColors.black}>
            Qual é a sua fome hoje ?
          </Heading>
          <View p={1}>
            <FlatList
              data={banners}
              renderItem={({ item }) => <BannerProductCategories item={item} />}
              ItemSeparatorComponent={HorizontalSeparator}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
        </View>

        <View mt={5}>
          <Heading p={3} fontSize={22} color={AppColors.black}>
            Promoções
          </Heading>
          <View p={1}>
            <FlatList
              data={promotions}
              renderItem={({ item }) => <BannerPromotions item={item} />}
              ItemSeparatorComponent={HorizontalSeparator}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
        </View>

      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default HomeScreen;
