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
import { setCurrentAct } from "../db/firebase";
import firebase from "firebase/app";
require("@firebase/database");

export default function HomeScr() {
  var [activityLabelInput, updateActivityLabel] = React.useState("");
  var [currentAct, updateAct] = React.useState("");

  const getAct = () => {
    console.log("Fetching current act...");
    try {
      let x = "";
      const ref = firebase.database().ref("app/currentAct");
      ref.on("value", (snapshot) => {
        //this acts like some sort of event listener, bro
        let data = snapshot.child("name").val();
        x += data;
        updateAct(x);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getTimestamp = () => {
    return new Date().toISOString();
    //to convert back to Date object, use new Date('ISOSTRING')
  };

  React.useEffect(() => {
    getAct();
  }, [currentAct]);

  const buttonSize = 160;

  const firebaseUpdateCurrAct = () => {
    updateAct(activityLabelInput);
    setCurrentAct(activityLabelInput, getTimestamp());
  };

  const update = () => {
    try {
      const ref = firebase.database().ref("app/currentAct");
      ref.get().then((snapshot) => {
        if (snapshot.exists()) {
          firebase.database().ref("app/pastActs/").push(snapshot.val());
          firebaseUpdateCurrAct();
        } else {
          firebaseUpdateCurrAct();
        }
      });
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

  const date = new Date().toLocaleString();

  if (currentAct === "") {
    return (
      <Box justifyContent="center" alignItems="center" flexGrow={1}>
        <Text>Loading...</Text>
      </Box>
    );
  } else {
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
                <Text>Current date: {date}</Text>
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
}
