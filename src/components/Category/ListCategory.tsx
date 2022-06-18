import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {
  Pressable, View, VStack, Text, Avatar, Center,
} from 'native-base';
import { ICategory } from '../../models';
import { categories as dataCategories } from '../../fake/Menu';
import { AppColors } from '../../constants/Colors';
import { HorizontalSeparator } from '../FlatListSeparator';

interface ICardCategory{
    category:ICategory;
  }

export default function ListCategory() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const [activeCategories, setActiveCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    setCategories(dataCategories);
  }, []);

  function handleCategories(categoryItem:ICategory) {
    const activeCategory:ICategory|undefined = activeCategories.find((_activeCategory) => _activeCategory === categoryItem);

        activeCategory //eslint-disable-line
      ? setActiveCategories(activeCategories.filter((_activeCategory) => _activeCategory !== activeCategory))
      : setActiveCategories([...activeCategories, categoryItem]);
  }

  function CardCategory({ category }:ICardCategory) {
    return (
      <Pressable onPress={() => handleCategories(category)}>
        <View
          mb={4}
          py={3}
          borderColor={AppColors.black}
          backgroundColor={activeCategories.some((activeCategory) => activeCategory.id === category.id) ? AppColors.yellow : AppColors.gray}
          shadow="9"
          borderRadius={20}
        >
          <VStack px={2} space={1} alignItems="center">
            <Center>
              <Avatar bg={AppColors.yellow} justifyContent="center" size="sm" source={{ uri: category.icon }} />
            </Center>
            <Center>
              <Text fontSize={10} fontWeight="bold" textAlign="center">{category.name}</Text>
            </Center>
          </VStack>
        </View>
      </Pressable>
    );
  }
  return (
    <View p={1}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CardCategory category={item} />}
        ItemSeparatorComponent={HorizontalSeparator}
        horizontal
      />
    </View>
  );
}
