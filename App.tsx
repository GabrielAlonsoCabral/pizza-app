import "react-native-gesture-handler";
import "react-native-get-random-values";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { NativeBaseProvider } from "native-base"

export default function App() {

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation colorScheme={"dark"} />
        <StatusBar style="light" />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );

}