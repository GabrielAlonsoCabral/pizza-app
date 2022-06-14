import { View, Text,  StyleSheet } from "react-native";
import React from "react";

const NewChannelScreen = () => {

  return (
    <View style={styles.root}>
        <Text> Novo Canal Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    color: "white",
  },
});

export default NewChannelScreen;
