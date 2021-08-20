//React
import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
//Themes
import { ThemeProvider, createBox, createText } from "@shopify/restyle";
import theme from "../themes/default";

type Theme = typeof theme;
const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function HomeScr() {
  const buttonSize = 120;

  return (
    <ThemeProvider theme={theme}>
      <Box
        key="mainContainer"
        backgroundColor="mainBackground"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          key="circle"
          backgroundColor="buttonColor"
          justifyContent="center"
          alignItems="center"
          width={buttonSize}
          height={buttonSize}
          borderRadius={buttonSize / 2}
        >
          <Text>
            Start!
          </Text>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
