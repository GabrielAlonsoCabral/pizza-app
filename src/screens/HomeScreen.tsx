import { FlatList } from "react-native";
import React from "react";
import { Center, View, Heading, Text, Container, Box, HStack, Avatar, Image, Flex, AspectRatio, Stack, Divider, IconButton, Button, ArrowForwardIcon, ChevronRightIcon } from "native-base"

import { banners } from "../fake/ChannelScreen";
import { IBanner } from "../models/interfaces/Banner";
import { AppColors } from "../constants/Colors";

interface banner {
  item: IBanner;
}

const HomeScreen = () => {

  const ItemRender = ({ item }: banner) => (
    <Box alignItems="center" backgroundColor={AppColors.white}>
      <Box maxW="40" rounded="lg" overflow="hidden" borderColor={AppColors.red} borderRadius={15} borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
        <Box>
          <AspectRatio w="100%" ratio={25 / 10}>
            <Image source={{
              uri: item.uri
            }} alt="image" />
          </AspectRatio>
          <Center bg={AppColors.red} _dark={{
            bg: "violet.400"
          }} _text={{
            color: AppColors.white,
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
            {item.name}
          </Center>
        </Box>
        <Stack p="3" space={3}>
          <Stack space={2}>
            {/* <Heading size="md" ml="-1">
              The Garden City
            </Heading> */}
            <Text fontSize="xs" color={AppColors.black} minHeight={50} _light={{
              color: "#011627"
            }} _dark={{
              color: "#011627"
            }} fontWeight="500" ml="-0.5" mt="-1">
              {item.description}
            </Text>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );

  return (<View w="130%" height={"100%"} backgroundColor={AppColors.white}>
    <Container safeArea w="100%">
      <Box p="4" py="3" bg={AppColors.red} borderRadius={0}>
        <HStack space={2}>
          <Box h="10" w="200" justifyContent={"center"} rounded="md" shadow={3}>
            <Heading fontSize={22} ml="1" color={AppColors.white} >Pizzaria Morumbi</Heading>
          </Box>
          <Box h="10" w="150" rounded="md" shadow={3} >
            <Flex direction="row" mr="3" justifyContent={"flex-end"}>
              <Avatar bg={AppColors.white} mt={2} size="sm" source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw"
              }} >GA</Avatar>
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
        renderItem={({ item }) => <ItemRender item={item} />}
        ItemSeparatorComponent={Separator}
        horizontal={true}
        style={{ width: "120%" }}
      />
    </Container>

    <Container>
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
    </Container>

    <Container mt={3}>
      <Box p={3}>
        <Heading fontSize={20} ml="1" color={AppColors.black} >Mais pedidos</Heading>
      </Box>

    </Container>


  </View >
  );
};

const Separator = () => {
  return (
    <View
      style={{
        width: 10,
      }}
    />
  );
}


export default HomeScreen;
