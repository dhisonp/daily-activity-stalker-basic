import * as React from "react";
import Text from "./Text";
import Box from "./Box";

type Props = {
  actName: string;
};

const ActHeader = ({ actName, ...rest }: Props) => {
  return (
    <Box
      paddingHorizontal="m"
      paddingVertical="s"
      // backgroundColor="debug"
    >
      <Text variant="subheader">Current act: </Text>
      <Text>{actName}</Text>
    </Box>
  );
};

export default ActHeader;
