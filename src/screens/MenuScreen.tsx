import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Select,
  CheckIcon,
  FormControl,
  Heading,
  Avatar,
  VStack,
  Center,
  HStack,
  Box,
  Pressable,
  AspectRatio,
  Image, Stack,
  Badge,
  Divider,
  ScrollView,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Configs from '../fake/Configs';
import { categories as dataCategories, products as dataProducts } from '../fake/Menu';
import { IEstablishment, ICategory, IProduct } from '../models';
import { AppColors } from '../constants/Colors';
import { HorizontalSeparator } from '../components/FlatListSeparator';
import ProductsList from '../components/Products/ProductsList';

function MenuScreen() {
  const [establishment, setEstablishment] = useState<IEstablishment>();
  const [establishments, setEstablishments] = useState<IEstablishment[]>([]);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const [activeCategories, setActiveCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    setEstablishments(Configs.establishments);
    setCategories(dataCategories);
    setProducts(dataProducts);
  }, []);

  function SelectEstablishment() {
    return (
      <View marginTop={-3} p={3}>
        <FormControl isRequired>
          <HStack space={1}>
            <Center mt={2}>
              <Heading justifyContent="center" textAlign="center" color={AppColors.black} fontSize={14}>
                Estabelecimento:
                {' '}
                <Text color={AppColors.red}>*</Text>
              </Heading>
            </Center>

            <View ml={2}>
              <Select
                borderRadius={20}
                borderWidth={0.5}
                selectedValue={establishment?.id}
                fontSize={12}
                accessibilityLabel="Selecione uma unidade"
                minWidth={200}
                placeholder="Selecione uma unidade"
                _selectedItem={{
                  bg: AppColors.yellow,
                  borderRadius: 20,
                  endIcon: <CheckIcon size="5" color={AppColors.black} />,
                }}
                mt={1}
                onValueChange={(itemValue) => setEstablishment(establishments.find((_establishment) => _establishment.id === itemValue))}
              >
                {establishments.map((_establishment) => <Select.Item label={_establishment.name} value={_establishment.id} />)}
              </Select>
            </View>
          </HStack>
        </FormControl>
      </View>
    );
  }

  function handleCategories(categoryItem:ICategory) {
    const activeCategory:ICategory|undefined = activeCategories.find((_activeCategory) => _activeCategory === categoryItem);

    activeCategory //eslint-disable-line
      ? setActiveCategories(activeCategories.filter((_activeCategory) => _activeCategory !== activeCategory))
      : setActiveCategories([...activeCategories, categoryItem]);

    // if (!activeCategories.length) {
    //   const categoryAll = categories.find((_category) => _category.is_all);
    // }
  }

  function Categories({ item }) {
    return (
      <Pressable onPress={() => handleCategories(item)}>
        <View
          mb={4}
          py={3}
          borderColor={AppColors.black}
          backgroundColor={activeCategories.find((activeCategory) => activeCategory === item) ? AppColors.yellow : AppColors.gray}
          shadow="9"
          borderRadius={20}
        >
          <VStack px={2} space={1} alignItems="center">
            <Center>
              <Avatar bg={AppColors.yellow} justifyContent="center" size="sm" source={{ uri: item.icon }} />
            </Center>
            <Center>
              <Text fontSize={10} fontWeight="bold" textAlign="center">{item.name}</Text>
            </Center>
          </VStack>
        </View>
      </Pressable>
    );
  }
  return (
    <SafeAreaView>
      <View>
        <Header title="Cardápio" />

        <View mt={3}>
          <Heading p={3} fontSize={18} color={AppColors.black}>
            Você tem fome do que ?
          </Heading>
          <View p={1}>
            <FlatList
              data={categories}
              renderItem={({ item }) => <Categories item={item} />}
              ItemSeparatorComponent={HorizontalSeparator}
              horizontal
            />
          </View>
        </View>

        {establishments.length > 1 ? <SelectEstablishment /> : null}

        <ScrollView shadow={9}>
          <View shadow={9} bg="#FAFFFD" borderRadius={50} mb={550} p={1}>
            <View mt={8}>
              {products.map((product) => <ProductsList product={product} />)}
            </View>
          </View>
        </ScrollView>
      </View>

    </SafeAreaView>
  );
}

export default MenuScreen;
