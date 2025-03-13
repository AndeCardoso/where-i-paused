import { MD3LightTheme, MD3Theme } from "react-native-paper";
import { light } from "@styles/colors/light";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

interface ITheme extends MD3Theme {
  colors: typeof light & MD3Colors;
}

export const theme: ITheme = {
  ...MD3LightTheme,
  roundness: 1,
  colors: {
    ...MD3LightTheme.colors,
    ...light,
  },
};
