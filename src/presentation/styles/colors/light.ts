import { MD3Colors } from "react-native-paper/lib/typescript/types";
import { base } from "./base";

export const light: MD3Colors | typeof base = {
  primary: "#FF7700",
  primaryContainer: "#FFA657",
  secondary: "#FFD300",
  secondaryContainer: "#FFE66F",
  tertiary: "#FFCCA0",
  tertiaryContainer: "#FFB16D",
  outline: "#FF7700",
  surfaceVariant: "#ffffff",
  ...base,
};
