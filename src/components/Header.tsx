import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Box, Heading } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { AppColors } from '../constants/Colors';
import Configs from '../fake/Configs';
import CartBadge from './Cart/CartBadge';

interface IHeaderProps{
  title:string;
}

export default function Header({ title }:IHeaderProps) {
  return (
    <View>
      <Box maxHeight={70} py="0" bg={AppColors.black} borderRadius={0}>
        <ImageBackground source={{ uri: Configs.logo }} style={{ height: 70, opacity: 0.4 }}>
          <View style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
          />
        </ImageBackground>
        <View position="absolute">
          <CartBadge />
        </View>
        <View style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
        }}
        >
          <Heading
            color={AppColors.white}
            fontSize={26}
          >
            {title}

          </Heading>
        </View>
      </Box>
    </View>
  );
}
