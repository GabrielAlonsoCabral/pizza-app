import React from 'react';
import {
  View, Pressable, Text, HStack, Badge,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { AppColors } from '../../constants/Colors';
import { ICartProduct } from '../../models';

interface IProductCardProps{
    product:ICartProduct;
    handleRemove:any
  }

export default function CartProduct({ product, handleRemove }:IProductCardProps) {
  return (
    <View mb={5}>
      <HStack ml={3} space={2}>
        <View>
          <Pressable onPress={handleRemove}>
            <Badge bg={AppColors.red} rounded="full">
              <Ionicons size={16} color={AppColors.white} name="trash-outline" />
            </Badge>
          </Pressable>
        </View>
        <Text fontWeight="medium">{product?.name}</Text>
        <Text>
          x
          {product?.amount}
        </Text>
      </HStack>
      <View marginLeft="auto" position="absolute" right={3}>
        <Text textAlign="right">{product.price}</Text>
      </View>
    </View>
  );
}
