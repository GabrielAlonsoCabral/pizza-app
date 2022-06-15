import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { Center, View, Heading, Text, Container, Box, HStack, Avatar, Image, Flex, AspectRatio, Stack } from "native-base"

import { banners } from "../fake/ChannelScreen";
const ChannelScreen = () => {

  const ItemRender = ({ item }) => (
    <Box alignItems="center">
      <Box maxW="40" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
        <Box>
          <AspectRatio w="100%" ratio={25 / 9}>
            <Image source={{
              uri: item.uri
            }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
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
            <Text fontSize="xs" minHeight={50} _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
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

  return (<View w="100%">
    <Container safeArea w="100%">
      <Box  p="1" py="8">
        <Flex direction="row" justify={"center"}>
        <Heading>
          <Text color="yellow.500"> Olá, Gabriel !</Text>
        </Heading> 

        {/* <Avatar source={{uri:"https://thispersondoesnotexist.com/image"}}/> */}

        </Flex>
      </Box>
    </Container>
    <Container w="100%">
      <FlatList
        data={banners}
        renderItem={({ item }) => <ItemRender item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        horizontal={true}
        style={{ width: "120%", marginTop:-20 }}
      />

    </Container>
  </View>
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


const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12
  },

  item: {
    padding: 8,
    backgroundColor: '#00C853',
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  }

});

export default ChannelScreen;
