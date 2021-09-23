import { useRestyle } from "@shopify/restyle";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { borderRadius } from "../themes/default";
import Box from "./Box";
import Text from "./Text";

type Props = {
  label: string;
  onPress: () => void;
  [x: string]: any;
};

const Button = ({ label, onPress, ...rest }: Props) => {
  return (
    <Box
      paddingHorizontal="s"
      paddingVertical="s"
      backgroundColor="buttonColor"
      borderRadius={borderRadius}
      margin="s"
      {...rest}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{label}</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {},
});
