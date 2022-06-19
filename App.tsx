import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/navigation';
import { CartProvider } from './src/contexts/Cart';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <CartProvider>
          <StatusBar style="dark" />
          <Navigation colorScheme="light" />
        </CartProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
