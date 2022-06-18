import React, { useState } from 'react';
import {
  HStack, View, Text, Image, Badge, Center, Heading, Box,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { IProduct } from '../../models';
import { AppColors } from '../../constants/Colors';

interface ICardProductProps{
    product:IProduct
}

export default function CardProduct({ product }:ICardProductProps) {
  const [amountsToBuy, setAmountsToBuy] = useState<number>(0);

  function handleAmountsToBuy(isIncrease:boolean) {
    if (isIncrease) return setAmountsToBuy(amountsToBuy + 1);

    if (!isIncrease && amountsToBuy === 0) return null;

    setAmountsToBuy(amountsToBuy - 1);
    return null;
  }

  return (
    <View shadow={4} bg="#FAFFFD" borderBottomRadius={20} borderTopRadius={20} justifyContent="center" display="flex" mb={5}>

      <Box>
        <Image
          resizeMode="cover"
          borderTopRadius={20}
          height={100}
          w="100%"
          source={{
            uri: product.image,
          }}
          alt="image"
        />
        <Center
          bg={AppColors.red}
          _text={{
            color: AppColors.white,
            fontWeight: '700',
            fontSize: 'sm',
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          {product.price}
        </Center>
      </Box>

      <View p={3}>

        <View mb={1}>
          <View mb={3}>
            <View><Heading color={AppColors.black} fontSize={16}>{product.name}</Heading></View>
          </View>
          <View mb={3}>
            <Text fontSize={12} color={AppColors.black}>{product.description}</Text>
          </View>

        </View>

        <View mb={3} mr={3}>
          <View position="absolute">
            <HStack space={2}>
              <Pressable onPress={() => handleAmountsToBuy(false)}>
                <Badge
                  shadow={5}
                  rounded="full"
                >
                  -
                </Badge>
              </Pressable>
              <Badge _text={{ textAlign: 'center' }} shadow={5} rounded="full" borderWidth={0.5}>
                {amountsToBuy}
              </Badge>
              <Pressable onPress={() => handleAmountsToBuy(true)}>
                <Badge
                  shadow={5}
                  rounded="full"
                  _text={{
                    fontSize: 12,
                  }}
                >
                  +
                </Badge>
              </Pressable>

            </HStack>
          </View>

          <HStack marginLeft="auto" space={10}>

            <View>
              <Ionicons name="cart-outline" size={25} />
            </View>

          </HStack>
        </View>
      </View>
    </View>
  );
}
