import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

export const headerTheme = (colors: MD3Colors) => {
  return {
    headerTransparent: true,
    headerTintColor: colors.onPrimary,
    headerTitleAllowFontScaling: true,
    headerTitleStyle: {
      fontSize: 32,
      fontWeight: "bold",
    },
    headerStyle: {
      backgroundColor: colors.primary,
    },
    animation: "shift",
  } as BottomTabNavigationOptions;
};
