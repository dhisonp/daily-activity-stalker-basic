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
  const buttonSize = 160;

  const update = () => {
    alert("Update!");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        key="mainContainer"
        backgroundColor="mainBackground"
        flexGrow={1}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box flexGrow={2} />
        <Box flexGrow={5} justifyContent="center" alignItems="center">
          <CircleButton
            backgroundColor="buttonColor"
            radius={buttonSize}
            onPress={update}
            label="Act!"
          />
        </Box>
        <Box flex={2} width="100%" justifyContent='space-around' alignItems='center'>
          <Box backgroundColor='textInput' width="70%" padding='m' borderRadius={6}>
            <Text>Activity name</Text>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
