import { createTheme, spacing } from "@shopify/restyle";
import { ThemeContext } from "@shopify/restyle/dist/context";
const palette = {
  purpleLight: "#C7B7FF",
  purple: "#5A31F4",
  purpleDark: "#3F22AB",
  greenLight: "#56DCBA",
  green: "#0ECD9D",
  greenDark: "#0A906E",
  black: "#0B0B0B",
  white: "#F0F2F3",
  darkGray: "#333",
  lightGray: "#EEE",
  gray: '#d9d4d9',
};
const theme = createTheme({
  spacing: {
    s: 8,
    m: 16,
    l: 32,
    xl: 48,
  },
  colors: {
    mainBackground: palette.lightGray,
    mainForeground: palette.black,

    primaryCardBackground: palette.purple,
    secondaryCardBackground: palette.greenLight,
    primaryCardText: palette.darkGray,
    secondaryCardText: palette.black,
    headerTextColor: palette.darkGray,

    buttonColor: palette.purpleLight,
    textInput: palette.gray,

    debug: palette.green,
  },
  breakpoints: {},
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "mainForeground",
    },
    header: {
      fontSize: 32,
      lineHeight: 30,
      color: "headerTextColor",
      fontWeight: "bold",
    },
  },
  cardVariants: {
    primary: {
      //   backgroundColor: "primaryCardBackground",
      shadowOpacity: 0.3,
      borderRadius: 4,
      padding: "m",
    },
    secondary: {
      //   backgroundColor: "secondaryCardBackground",
      shadowOpacity: 0.1,
      padding: "s",
    },
  },
});

const darkTheme = createTheme({
  ...theme,
});

export type Theme = typeof theme;
export default theme;
