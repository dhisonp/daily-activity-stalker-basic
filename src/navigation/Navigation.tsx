import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import CategoriesScr from "../screens/CategoriesScr";
import HomeScr from "../screens/HomeScr";
import { palette } from "../themes//default";

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: palette.white}}
    >
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerContentContainerStyle: {
              flex: 1,
              justifyContent: "center",
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScr}
            options={{
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
                backgroundColor: palette.white,
              },

              // headerShown: false,
            }}
          />
          <Drawer.Screen name="Categories" component={CategoriesScr} />
        </Drawer.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

export default Navigation;
