import { View, StyleSheet } from "react-native";
import React from "react";
import {Center, Heading, Text, Container} from "native-base"

const ChannelScreen = () => {
  return (<Center>
    <Container>
      <Heading>
        <Text color="yellow.500"> Eazy Pizza</Text>
      </Heading>
      <Text mt="3" fontWeight="medium" color="white">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </Container>
  </Center>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  errorText: {
    color: "white",
    fontSize: 16,
  },
});

export default ChannelScreen;
