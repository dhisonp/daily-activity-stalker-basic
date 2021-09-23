//React
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
//Themes
import { ThemeProvider, createBox, createText } from "@shopify/restyle";
import theme, { palette } from "../themes/default";
import Box from "../components/Box";
import Text from "../components/Text";
import Button from "../components/Button";
// import CircleButton from "../components/CircleButton";
import CircleTimer from "../components/CircleTimer";
import TextInput from "../components/TextInput";
//System/Db
import { setCurrentAct } from "../db/firebase";
import firebase from "firebase/app";
import ActHeader from "../components/ActHeader";
import { SafeAreaView } from "react-native-safe-area-context";
require("@firebase/database");

export default function HomeScr() {
  var [activityLabelInput, updateActivityLabel] = React.useState("");
  var [currentAct, updateAct] = React.useState("");
  var [timer, setTimer] = React.useState("14m 15s");

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
      
        <ThemeProvider theme={theme}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Box
              key="mainContainer"
              backgroundColor="mainBackground"
              flexGrow={1}
              justifyContent="space-between"
              paddingVertical="s"
            >
              <Box justifyContent="center" alignItems="center">
                <ActHeader actName={currentAct} />
              </Box>
              <Box justifyContent="center" alignItems="center">
                <CircleTimer
                  backgroundColor="buttonColor"
                  radius={buttonSize}
                  label={timer}
                />
              </Box>
              <SafeAreaView>
                <Box alignItems="center" justifyContent="center">
                  <Box
                    flexGrow={1}
                    justifyContent="center"
                    alignItems="center"
                    maxWidth="90%"
                    flexDirection="row"
                  >
                    <TextInput
                      onChangeText={onChangeText}
                      value={activityLabelInput}
                      placeholder="Placeholder"
                      multiline
                      maxWidth="65%"
                    />
                    <Button
                      label="Act!"
                      onPress={update}
                      flexGrow={1}
                      height="100%"
                    />
                  </Box>
                </Box>
              </SafeAreaView>
            </Box>
          </TouchableWithoutFeedback>
        </ThemeProvider>
    );
  }
}
