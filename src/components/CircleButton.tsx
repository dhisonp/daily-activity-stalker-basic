import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from "@shopify/restyle";
import theme from "../themes/default";

import Text from "./Text";
import Box from "./Box";

type Theme = typeof theme;

const restyleFunctions = [spacing, border, backgroundColor];
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void;
    label: string;
    radius: number;
  };

const CircleButton = ({ onPress, label, radius, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Box width={radius} height={radius} borderRadius={radius / 2} {...props}>
      <TouchableOpacity
        style={{
          flex: 1,
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fontSize={24} fontWeight='bold' color="primaryCardText">{label}</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default CircleButton;
