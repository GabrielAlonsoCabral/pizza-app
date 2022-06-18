import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Badge, HStack, Text, View, Button, Actionsheet, useDisclose, Heading, Divider,
} from 'native-base';
import { Pressable } from 'react-native';
import { AppColors } from '../../constants/Colors';

export default function CartBadge() {
  const  BadgeCounter = ()=> { //eslint-disable-line
    return (
      <Badge
        bg={AppColors.red}
        rounded="full"
        mb={-2}
        left={-10}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 10,
        }}
      >
        2
      </Badge>
    );
  };

  function CartIcon({ onPress }) {
    return (
      <Pressable
        onPress={onPress}
      >
        <View>
          <HStack>
            <Ionicons
              color="black"
              name="cart-outline"
              size={25}
            />
            <BadgeCounter />
          </HStack>
        </View>
      </Pressable>
    );
  }

  function Cart() {
    const {
      isOpen,
      onOpen,
      onClose,
    } = useDisclose();
    return (
      <View>
        <CartIcon onPress={onOpen} />
        {/* <Button onPress={onOpen}>Actionsheet</Button> */}
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content p={3}>
            <View marginRight="auto" mb={3}>
              <Heading> Meu Carrinho </Heading>
            </View>
            <View width="100%" marginRight="auto">
              <View>
                <HStack ml={3} space={1}>
                  <Text fontWeight="medium">Pizza de Calabresa</Text>
                  <Text>x2</Text>
                </HStack>
                <View marginLeft="auto" position="absolute" right={3}>
                  <Text textAlign="right">R$ 39,99</Text>
                </View>
              </View>

              <Divider mt={3} />
              <View ml={3} mt={3}>
                <View>
                  <Text fontWeight="bold">Total</Text>
                </View>
                <View marginLeft="auto" position="absolute" right={0}>
                  <Badge bgColor={AppColors.gray} colorScheme={AppColors.gray}>
                    <Text textAlign="right">R$ 79,98</Text>
                  </Badge>
                </View>
              </View>
            </View>
            <View mt={5}>
              <Button borderRadius={20} color={AppColors.white} bg={AppColors.red}>
                Fazer Pedido
              </Button>
            </View>
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    );
  }

  return (
    <View>
      <Cart />
    </View>
  );
}
