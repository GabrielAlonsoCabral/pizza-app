import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/navigation';
import { CartProvider } from './src/components/Cart/Cart';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <CartProvider>
          <Navigation colorScheme="light" />
          <StatusBar style="dark" />
        </CartProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
