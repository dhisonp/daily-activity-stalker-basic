import theme from "../themes/default";
import { createText } from "@shopify/restyle";

type Theme = typeof theme;

const Text = createText<Theme>();

export default Text;
