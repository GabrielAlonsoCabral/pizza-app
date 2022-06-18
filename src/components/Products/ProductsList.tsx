import React from 'react';
import {
  HStack, View, AspectRatio, Text, Image, Badge, Divider, Center, Heading, VStack, Box,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { IProduct } from '../../models';
import { AppColors } from '../../constants/Colors';

interface ProductsListProps{
    product:IProduct
}

// export default function ProductsList({ product }:ProductsListProps) {
//   return (
//     <View justifyContent="center" display="flex" mb={5}>
//       <Center>
//         <View borderRadius={20} justifyContent="center">
//           <View mb={5} justifyContent="center" alignSelf="center" />
//           <View borderRadius={20}>
//             <View>
//               <HStack space={1}>
//                 <Text fontWeight="extrabold" fontSize={14}>{product?.name}</Text>
//               </HStack>

//               <View width={250}>
//                 <Text fontSize={12}>{product?.description}</Text>
//               </View>

//               <HStack mt={1} ml={-5}>

//                 <Badge // bg="red.400"
//                   bg={AppColors.red}
//                   rounded="full"
//                   marginLeft={5}
//                   variant="solid"
//                   alignSelf="flex-end"
//                   _text={{
//                     fontSize: 11,
//                     color: AppColors.white,
//                   }}
//                 >
//                   {product?.price}
//                 </Badge>

//                 <View ml="40%" alignSelf="center">
//                   {/* <Badge rounded="full"> */}
//                   <Ionicons name="cart-outline" size={25} />
//                   {/* </Badge> */}
//                 </View>
//               </HStack>
//             </View>
//           </View>

//         </View>
//         <Divider my="0" />
//       </Center>
//     </View>
//   );
// }

export default function ProductsList({ product }:ProductsListProps) {
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
              <Badge
                shadow={5}
                rounded="full"
              >
                -
              </Badge>
              <Badge _text={{ textAlign: 'center' }} shadow={5} rounded="full" borderWidth={0.5}>
                0
              </Badge>
              <Badge
                shadow={5}
                rounded="full"
                _text={{
                  fontSize: 12,
                }}
              >
                +
              </Badge>

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
