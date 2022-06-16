import { FlatList, ScrollView } from 'react-native';
import React from 'react';
import {
  View, Heading, Container, Box, HStack, Avatar, Flex,
} from 'native-base';

import { banners } from '../fake/ChannelScreen';
import { AppColors } from '../constants/Colors';
import BannerHorizontalList from '../components/Banner/BannerHorizontalList';

function HomeScreen() {
  return (
    <View w="130%" height="100%" backgroundColor={AppColors.white}>
      <Container safeArea w="100%">
        <Box p="4" py="3" bg={AppColors.red} borderRadius={0}>
          <HStack space={2}>
            <Box h="10" w="200" justifyContent="center" rounded="md" shadow={3}>
              <Heading fontSize={22} ml="1" color={AppColors.white}>Pizzaria Morumbi</Heading>
            </Box>
            <Box h="10" w="150" rounded="md" shadow={3}>
              <Flex direction="row" mr="3" justifyContent="flex-end">
                <Avatar
                  bg={AppColors.white}
                  mt={2}
                  size="sm"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw',
                  }}
                >
                  GA
                </Avatar>
              </Flex>
            </Box>
          </HStack>
        </Box>
      </Container>

      <Container w="100%" p={3} mt={-5}>
        <Heading fontSize={18} color={AppColors.black} mb={5}>
          Qual é a sua fome hoje ?
        </Heading>
        <FlatList
          data={banners}
          renderItem={({ item }) => <BannerHorizontalList item={item} />}
          ItemSeparatorComponent={Separator}
          horizontal
          style={{ width: '120%' }}
        />
      </Container>

      {/* <Container>
      <Box p="4" py="1" mt={2} bg={AppColors.red} borderRadius={20}>
        <HStack space={2}>
          <Box h="10" w="200" justifyContent={"center"} rounded="md" shadow={3}>
            <Heading fontSize={18} ml="1" color={AppColors.white} >Ver cardápio</Heading>
          </Box>
          <Box h="10" w="150" rounded="md" shadow={3} >
            <Flex direction="row" mr="3" justifyContent={"flex-end"} >
              <ChevronRightIcon color={AppColors.white} mt={1} size={8} />
            </Flex>
          </Box>
        </HStack>
      </Box>
    </Container> */}

      <Container mt={3} p={3}>
        <Box>
          <Heading fontSize={20} ml="1" color={AppColors.black}>Mais pedidos</Heading>
        </Box>

      </Container>
    </View>
  );
}

function Separator() {
  return (
    <View
      style={{
        width: 10,
      }}
    />
  );
}

export default HomeScreen;
