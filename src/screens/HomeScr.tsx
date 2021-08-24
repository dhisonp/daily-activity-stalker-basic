//React
import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
//Themes
import { ThemeProvider, createBox, createText } from "@shopify/restyle";
import theme from "../themes/default";
import Box from "../components/Box";
import Text from "../components/Text";
import CircleButton from "../components/CircleButton";

export default function HomeScr() {
  const buttonSize = 120;

  const update = () => {
    alert("Update!");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        key="mainContainer"
        backgroundColor="mainBackground"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        <CircleButton
          backgroundColor="buttonColor"
          radius={buttonSize}
          onPress={update}
          label="Button!"
        />
      </Box>
    </ThemeProvider>
  );
}
