import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import RestaurantsScreen from "../../../screens/RestaurantsScreen";


const Stack = createNativeStackNavigator();

const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={RestaurantsScreen}
        options={({ navigation, route }) => ({
          title: "Restaurantes",
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default RestaurantsStack;
