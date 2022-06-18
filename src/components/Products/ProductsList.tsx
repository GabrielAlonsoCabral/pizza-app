import React from 'react';
import {
  HStack, View, AspectRatio, Text, Image, Badge, Divider,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { IProduct } from '../../models';
import { AppColors } from '../../constants/Colors';

interface ProductsListProps{
    product:IProduct
}

export default function ProductsList({ product }:ProductsListProps) {
  return (
    <View shadow={9} ml={1} mr={3} mb={5}>
      <View>
        <HStack borderRadius={20} justifyContent="center" space={0}>
          <View ml={6} mb={5}>
            <AspectRatio
              width="100%"
              ratio={1}
              maxHeight={100}
            >
              <Image
                resizeMode="cover"
                borderRadius={20}
                source={{
                  uri: product?.image,
                }}
                alt={product?.name}
              />
            </AspectRatio>

          </View>
          <View p={2} width={300} borderRadius={20}>
            <View>
              <HStack space={1}>
                <Text fontWeight="extrabold" fontSize={14}>{product?.name}</Text>
              </HStack>

              <View width={250}>
                <Text fontSize={12}>{product?.description}</Text>
              </View>

              <HStack mt={1} ml={-5}>

                <Badge // bg="red.400"
                  bg={AppColors.red}
                  rounded="full"
                  marginLeft={5}
                  variant="solid"
                  alignSelf="flex-end"
                  _text={{
                    fontSize: 11,
                    color: AppColors.white,
                  }}
                >
                  {product?.price}
                </Badge>

                <View ml="40%" alignSelf="center">
                  {/* <Badge rounded="full"> */}
                  <Ionicons name="cart-outline" color={AppColors.red} size={25} />
                  {/* </Badge> */}
                </View>
              </HStack>
            </View>
          </View>

        </HStack>
      </View>
      <Divider my="0" />
    </View>
  );
}
