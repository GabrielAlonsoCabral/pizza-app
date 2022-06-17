import { FlatList, ImageBackground } from 'react-native';
import React from 'react';
import {
  View, Heading, Box,
} from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';
import { banners, promotions } from '../fake/Home';
import { AppColors } from '../constants/Colors';
import { BannerProductCategories, BannerPromotions } from '../components/Banner/Banners';
import Config from '../fake/Configs';

function Separator() {
  return (
    <View
      style={{
        width: 10,
      }}
    />
  );
}

function HomeScreen() {
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      <View w="100%">
        <View>
          <Box maxHeight={70} py="0" bg={AppColors.black} borderRadius={0}>
            <ImageBackground source={{ uri: Config.logo }} style={{ height: 70, opacity: 0.4 }}>
              <View style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
              }}
              />
            </ImageBackground>
            <View style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
            }}
            >
              <Heading
                color={AppColors.white}
                fontSize={26}
              >
                {Config.company_name}

              </Heading>
            </View>

            {/* <Heading fontSize={22} textAlign="center" color={AppColors.white}>
                {ScreensConfig.home.title}
              </Heading> */}
          </Box>
        </View>

        <View mt={5}>
          <Heading p={3} fontSize={22} color={AppColors.black}>
            Qual é a sua fome hoje ?
          </Heading>
          <View p={1}>
            <FlatList
              data={banners}
              renderItem={({ item }) => <BannerProductCategories item={item} />}
              ItemSeparatorComponent={Separator}
              horizontal
              style={{ width: '120%' }}
            />
          </View>
        </View>

        <View mt={5}>
          <Heading p={3} fontSize={22} color={AppColors.black} mb={5}>
            Promoções
          </Heading>
          <View p={1}>
            <FlatList
              data={promotions}
              renderItem={({ item }) => <BannerPromotions item={item} />}
              ItemSeparatorComponent={Separator}
              horizontal
              style={{ width: '120%' }}
            />
          </View>
        </View>

      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default HomeScreen;
