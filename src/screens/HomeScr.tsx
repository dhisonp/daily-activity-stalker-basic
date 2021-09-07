//React
import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
//Themes
import { ThemeProvider, createBox, createText } from "@shopify/restyle";
import theme from "../themes/default";
import Box from "../components/Box";
import Text from "../components/Text";
import CircleButton from "../components/CircleButton";
import TextInput from "../components/TextInput";

export default function HomeScr() {
  var [activityLabel, updateActivityLabel] = React.useState("");
  var [currentAct, updateAct] = React.useState("Placeholder act");

  const buttonSize = 160;

  const update = () => {
    //Implement exception handling (try/catch)
    Keyboard.dismiss();
    updateAct(activityLabel);
  };

  const onChangeText = (text: string) => {
    updateActivityLabel(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ThemeProvider theme={theme}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box
            key="mainContainer"
            backgroundColor="mainBackground"
            flexGrow={1}
            justifyContent="space-around"
            alignItems="center"
          >
            <Box
              justifyContent="center"
              alignItems="center"
              paddingVertical="m"
            >
              <Text>Current act:</Text>
              <Text>{currentAct}</Text>
            </Box>
            <Box justifyContent="center" alignItems="center" height="40%">
              <CircleButton
                backgroundColor="buttonColor"
                radius={buttonSize}
                onPress={update}
                label="Act!"
              />
            </Box>
            <Box width="100%" alignItems="center">
              <TextInput
                onChangeText={onChangeText}
                value={activityLabel}
                placeholder="Placeholder"
                multiline
              />
            </Box>
          </Box>
        </TouchableWithoutFeedback>
      </ThemeProvider>
    </KeyboardAvoidingView>
  );
}
