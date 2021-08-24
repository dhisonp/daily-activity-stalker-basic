import { createBox } from "@shopify/restyle";
import theme from "../themes/default";

type Theme = typeof theme;

const Box = createBox<Theme>();

export default Box;
