import { MD3LightTheme, MD3Theme } from "react-native-paper";
import { light } from "@styles/colors/light";
import { base } from "@styles/colors/base";

export const theme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 1,
  colors: {
    ...MD3LightTheme.colors,
    ...light,
    ...base,
  },
};
