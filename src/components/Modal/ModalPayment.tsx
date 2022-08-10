import React, { useEffect, useState } from 'react';
import {
  Modal, Button, FormControl, Input, View, HStack, VStack, Select, TextArea,
} from 'native-base';
import { AppColors } from '../../constants/Colors';
import UserData from '../../fake/User';
import Configs from '../../fake/Configs';
import { IDeliveryMethod, IPaymentMethod, IUser } from '../../models';

interface IModalPaymentProps{
    isOpen:boolean;
    onClose:any;
    onConfirm:any;
}

export default function ModalPayment({ isOpen, onClose, onConfirm }:IModalPaymentProps) {
  const [user, setUser] = useState<IUser>();

  const [paymentMethod, setPaymentMethod] = useState<string>();
  const [paymentMethods, setPaymentMethods] = useState<IPaymentMethod[]>();

  const [isDelivery, setIsDelivery] = useState<boolean>();
  const [deliveryMethod, setDeliveryMethod] = useState<string>();
  const [deliveryMethods, setDeliveryMethods] = useState<IDeliveryMethod[]>();

  useEffect(() => {
    setUser(UserData);
    setPaymentMethods(Configs?.payment_methods);
    setDeliveryMethods(Configs?.delivery_methods);
  }, []);

  function RenderAddressForm() {
    return (
      <View mt={3}>
        <FormControl.Label _text={{ fontSize: 14 }}>Endereço</FormControl.Label>
        <Input w="101%" type="text" defaultValue={user?.address?.street} placeholder="Av. Paulista" />

        <HStack mt={3} w="100%" space={1}>
          <VStack w="30%">
            <FormControl.Label _text={{ fontSize: 14 }}>Número</FormControl.Label>
            <Input type="text" defaultValue={user?.address?.street_number} placeholder="123" />
          </VStack>

          <VStack w="70%">
            <FormControl.Label _text={{ fontSize: 14 }}>Cep</FormControl.Label>
            <Input type="text" defaultValue={user?.address?.postal_code} placeholder="01234-000" />
          </VStack>
        </HStack>

        <HStack mt={3} w="100%" space={1}>
          <VStack w="30%">
            <FormControl.Label _text={{ fontSize: 14 }}>DDD</FormControl.Label>
            <Input type="text" defaultValue={user?.phone?.prefix} placeholder="11" />
          </VStack>

          <VStack w="70%">
            <FormControl.Label _text={{ fontSize: 14 }}>Celular</FormControl.Label>
            <Input type="text" defaultValue={user?.phone?.number} placeholder="9 1234-5678" />
          </VStack>
        </HStack>

        <View mt={3}>
          <FormControl.Label _text={{ fontSize: 14 }}>Complemento</FormControl.Label>
          <Input w="101%" type="text" defaultValue={user?.address?.complement} placeholder="apto 123 BL 2" />
        </View>
      </View>
    );
  }

  function handleDeliveryMethod(selectedValue:string) {
    const checkIsDelivery = deliveryMethods?.some((_deliveryMethod) => _deliveryMethod.id === selectedValue && _deliveryMethod.is_delivery);
    setIsDelivery(checkIsDelivery);
    setDeliveryMethod(selectedValue);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content width="90%">
        <Modal.CloseButton />
        <Modal.Header>Checkout de Pagamento</Modal.Header>
        <Modal.Body>
          <View>
            {/* <Heading mb={1} fontSize={14}>Endereço de entrega</Heading> */}
            <FormControl>

              <View>
                <FormControl.Label _text={{ fontSize: 14 }}>Método de Entrega</FormControl.Label>
                <Select
                  selectedValue={deliveryMethod}
                  accessibilityLabel="Selecione o método de entrega"
                  placeholder="Selecione o método de entrega"
                  _selectedItem={{
                    bg: AppColors.green,
                  }}
                  mt={1}
                  onValueChange={(selectedValue) => handleDeliveryMethod(selectedValue)}
                >
                  {deliveryMethods?.map((_deliveryMethod) => (
                    <Select.Item
                      _text={{ color: AppColors.black, fontSize: 12, fontWeight: '500' }}
                      label={_deliveryMethod.name}
                      value={_deliveryMethod.id}
                    />
                  ))}
                </Select>
              </View>

              { isDelivery && <RenderAddressForm /> }

              <View mt={3}>
                <FormControl.Label _text={{ fontSize: 14 }}>Método de Pagamento</FormControl.Label>
                <Select
                  selectedValue={paymentMethod}
                  accessibilityLabel="Selecione o método de pagamento"
                  placeholder="Selecione o método de pagamento"
                  _selectedItem={{
                    bg: AppColors.green,
                  }}
                  mt={1}
                  onValueChange={(paymentId) => setPaymentMethod(paymentId)}
                >
                  {paymentMethods?.map((_paymentMethod) => (
                    <Select.Item
                      _text={{ color: AppColors.black, fontSize: 14, fontWeight: '500' }}
                      label={_paymentMethod.name}
                      value={_paymentMethod.id}
                    />
                  ))}
                </Select>
              </View>

              <View mt={3}>
                <FormControl.Label _text={{ fontSize: 14 }}>Observações</FormControl.Label>
                <TextArea h={20} placeholder="Retirar a cebola, troco para 50 ...etc" />
              </View>

            </FormControl>

          </View>

        </Modal.Body>
        <Modal.Footer>
          <Button
            colorScheme="danger"
            borderRadius={5}
            _text={{ color: AppColors.white }}
            onPress={onConfirm}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
