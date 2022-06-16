import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MenuScreen from '../../../screens/MenuScreen';

const Stack = createNativeStackNavigator();

function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="menu"
        component={MenuScreen}
        options={({ navigation, route }) => ({
          title: 'Cardápio',
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default MenuStack;
