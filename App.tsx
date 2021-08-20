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

const Card = createRestyleComponent<
  VariantProps<Theme, "cardVariants"> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: "cardVariants" })], Box);

const themeShowcase = (
  <ThemeProvider theme={theme}>
    <Box backgroundColor="mainBackground" flexGrow={1}>
      <Box paddingTop="xl" paddingLeft="m">
        <Text variant="header">Welcome</Text>
      </Box>
      <Box padding="l" flexGrow={1}>
        <Card
          margin="s"
          variant="primary"
          backgroundColor="primaryCardBackground"
        >
          <Text color="primaryCardText">Card #1</Text>
        </Card>
        <Card
          margin="s"
          variant="primary"
          backgroundColor="secondaryCardBackground"
        >
          <Text color="secondaryCardText">Card #2</Text>
        </Card>
      </Box>
      <Box padding="s">
        <Text>Footer text</Text>
      </Box>
    </Box>
  </ThemeProvider>
);

export default function App() {
  return <HomeScr />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
