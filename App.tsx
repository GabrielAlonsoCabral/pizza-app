import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { SSRProvider } from '@react-aria/ssr';
import Navigation from './src/navigation';
import InternalProviders from './src/providers';

export default function App() {
  return (
    <SafeAreaProvider>
      <SSRProvider>
        <NativeBaseProvider>
          <InternalProviders>
            <StatusBar style="dark" /> {/*eslint-disable-line */}
            <Navigation colorScheme="light" />
          </InternalProviders>
        </NativeBaseProvider>
      </SSRProvider>
    </SafeAreaProvider>
  );
}
