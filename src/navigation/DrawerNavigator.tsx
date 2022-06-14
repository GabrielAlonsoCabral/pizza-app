import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import UserListScreen from "../screens/UserListScreen";
import Button from "../components/Button";
import NewChannelScreen from "../screens/NewChannelScreen";
import ChannelStack from "./ChannelStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="ChannelScreen"
        component={ChannelStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="UserList"
        component={UserListScreen}
        options={{ title: "Users" }}
      />

      <Drawer.Screen
        name="NewChannel"
        component={NewChannelScreen}
        options={{ title: "New Channel" }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  const [tab, setTab] = useState("private");
  const { navigation } = props;

  const onChannelSelect = (channel) => {
    // navigate to a screen for this channel
    navigation.navigate("ChannelScreen", {
      screen: "Chat",
      params: { channel },
    });
  };
  const logout = () => {
    return navigation.push("SignIn")
  };

  return (
    <SafeAreaView {...props} style={{ flex: 1 }}>
      <Text style={styles.title}>notJust Development</Text>

      <View style={styles.tabs}>
        <Text
          onPress={() => setTab("public")}
          style={[
            styles.groupTitle,
            { color: tab === "public" ? "white" : "gray" },
          ]}
        >
          Public
        </Text>
        <Text
          onPress={() => setTab("private")}
          style={[
            styles.groupTitle,
            { color: tab === "private" ? "white" : "gray" },
          ]}
        >
          Private
        </Text>
      </View>

      {tab === "public" ? (
        <>
          <Button
            title="Start new channel"
            onPress={() => {
              navigation.navigate("NewChannel");
            }}
          />
        </>
      ) : (
        <>
          <Button
            title="Start new conversation"
            onPress={() => {
              navigation.navigate("UserList");
            }}
          />
        </>
      )}

      <Text style={styles.logout} onPress={logout}>
        Logout
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 16,
    margin: 10,
  },
  groupTitle: {
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  logout: {
    color: "white",
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default DrawerNavigator;
