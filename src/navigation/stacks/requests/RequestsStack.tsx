import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RequestsScreen from '../../../screens/RequestsScreen';

const Stack = createNativeStackNavigator();

function RequestsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="requests"
        component={RequestsScreen}
        options={({ navigation, route }) => ({
          title: 'Pedidos',
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default RequestsStack;
