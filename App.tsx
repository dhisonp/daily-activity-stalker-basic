import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  ThemeProvider,
  createBox,
  createText,
  createRestyleComponent,
  SpacingProps,
  VariantProps,
  createVariant,
} from "@shopify/restyle";

//Theming and Restyle definitions
import theme from "./src/themes/default";
type Theme = typeof theme;
const Box = createBox<Theme>();
const Text = createText<Theme>();
//Screens
import HomeScr from "./src/screens/HomeScr";
//Firebase
import fbInit, { getCurrentAct } from "./src/db/firebase";
import Navigation from "./src/navigation/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
fbInit();

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
