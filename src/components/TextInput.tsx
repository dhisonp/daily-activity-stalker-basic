import * as React from "react";
import { Text, View, TextInput as Input } from "react-native";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from "@shopify/restyle";
import theme, { borderRadius } from "../themes/default";
import Box from "./Box";

type Theme = typeof theme;

const restyleFunctions = [spacing, border, backgroundColor];
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    placeholder: string;
    onChangeText: any;
    value: string;
    multiline: boolean;
    [x: string]: any;
  };

const TextInput = ({ onChangeText, value, placeholder, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Box
      backgroundColor="textInput"
      width="80%"
      padding="m"
      borderRadius={borderRadius}
      {...props}
    >
      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        multiline
      />
    </Box>
  );
};

export default TextInput;
