import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={({ navigation, route }) => ({ //eslint-disable-line
          title: 'Inicío',
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
