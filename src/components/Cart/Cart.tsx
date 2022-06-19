import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Badge, HStack, Text, View, Button, Actionsheet, useDisclose, Heading, Divider, ScrollView, Pressable, useToast,
} from 'native-base';
import _ from 'lodash';
import { AppColors } from '../../constants/Colors';
import { ICartProduct } from '../../models';
import { useCart, useDispatchCart } from '../../contexts/Cart';
import CartProduct from './CartProduct';
import ModalPayment from '../Modal/ModalPayment';
import ToastMessage from '../ToastMessage';

export default function CartBadge() {
  // @ts-ignore
  const cartList:ICartProduct[] = useCart();
  const dispatch = useDispatchCart();
  const toast = useToast();

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  function getTotalToPay() {
    const getPriceFormatted = (priceString:string) => Number(priceString?.replace('R$ ', '').replace(',', '.'));
    const totalByProduct = cartList?.map((cartProduct:ICartProduct) => cartProduct.amount * getPriceFormatted(cartProduct.price));
    return _.sum(totalByProduct);
  }

  const  BadgeCounter = ()=> { //eslint-disable-line
    return (
      <Badge
        bg={AppColors.red}
        rounded="full"
        mb={-1}
        left={-8}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 10,
        }}
      >
        {cartList ? cartList.length : 0}
      </Badge>
    );
  };

  // @ts-ignore
  function CartIcon({ onPress }) { //eslint-disable-line
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

  function handleRemove(index:string|number) {
    // @ts-ignore
    dispatch({ type: 'REMOVE', index });
  }

  function clearCart() {
    // @ts-ignore
    dispatch({ type: 'CLEAR' });
  }

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const onConfirmCheckout = () => {
    setIsPaymentModalOpen(false);
    ToastMessage({message: 'Pedido confirmado', placement: 'top', toast, duration: 2000});//eslint-disable-line
    clearCart();
  };

  function RenderTotalToPay() {
    return (
      <View ml={3} mt={3}>
        <View>
          <Text fontWeight="bold">Total</Text>
        </View>
        <View marginLeft="auto" position="absolute" right={0}>
          <Badge bgColor={AppColors.gray} colorScheme={AppColors.gray}>
            <Text textAlign="right">
              {`RS ${getTotalToPay().toFixed(2)}`}
            </Text>
          </Badge>
        </View>
      </View>
    );
  }

  function RenderCartList() {
    return (
      <View>

        {
      cartList.map((cartProduct, index) => <CartProduct handleRemove={() => handleRemove(index)} product={cartProduct} />)
    }
        <Divider mt={3} />
      </View>
    );
  }

  function RenderCTA() {
    return (
      <View mt={5}>
        <Button
          _text={{ fontSize: 16, fontWeight: 'bold', color: AppColors.white }}
          colorScheme="danger"
          borderRadius={20}
          bg={AppColors.red}
          onPress={() => (cartList?.length ? openPaymentModal() : null)}
        >
          {cartList?.length ? 'Fazer Pedido' : 'Fechar'}
        </Button>
      </View>
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
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content p={3}>
            <View marginRight="auto" width="100%" mb={3}>
              <Heading>
                {cartList.length ? 'Meu Carrinho' : 'Seu carrinho está vazio'}
              </Heading>
              {cartList.length

                ? (
                  <View right={3} position="absolute">
                    <Pressable onPress={() => clearCart()}>
                      <Text mt={1} fontSize={12}>Limpar carrinho</Text>
                    </Pressable>
                  </View>
                )
                : null}
            </View>
            <ScrollView mt={3} width="100%" marginRight="auto">
              <RenderCartList />

            </ScrollView>
            <View width="100%">
              {cartList.length ? <RenderTotalToPay /> : null}
              {cartList.length ? <RenderCTA /> : null}
            </View>
          </Actionsheet.Content>
          <ModalPayment isOpen={isPaymentModalOpen} onClose={closePaymentModal} onConfirm={onConfirmCheckout} />
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
