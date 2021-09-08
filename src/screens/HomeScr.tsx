//React
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Button,
} from "react-native";
//Themes
import { ThemeProvider, createBox, createText } from "@shopify/restyle";
import theme from "../themes/default";
import Box from "../components/Box";
import Text from "../components/Text";
import CircleButton from "../components/CircleButton";
import TextInput from "../components/TextInput";
//System/Db
import { setCurrentAct, getCurrentAct } from "../db/firebase";
require("@firebase/database");

export default function HomeScr() {
  var [activityLabelInput, updateActivityLabel] = React.useState("");
  var [currentAct, updateAct] = React.useState("...loading");

  React.useEffect(() => {
    //use async? how the f do you do this? problem since 2019 jesus
    let x = "";
    try {
      x = getCurrentAct()!;
    } catch (error) {
      console.log(error);
    } finally {
      updateAct(x);
      console.log(`Current act fetched on launch: ${x}`);
    }
  }, []);

  const buttonSize = 160;

  const update = () => {
    try {
      updateAct(activityLabelInput);
      setCurrentAct(activityLabelInput);
    } catch (err) {
      console.log(err);
    }
    Keyboard.dismiss();
  };

  const onChangeText = (text: string) => {
    updateActivityLabel(text);
  };

  const debug = () => {
    var x;
    try {
      x = getCurrentAct();
    } catch (error) {
      console.log(error);
    } finally {
      console.log(x);
    }
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
              {/* <Button title="debug" onPress={debug} /> */}
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
                value={activityLabelInput}
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
