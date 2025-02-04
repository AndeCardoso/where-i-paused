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
      borderBottomEndRadius: 30,
      borderBottomStartRadius: 30,
    },
    tabBarActiveTintColor: colors.onPrimary,
    tabBarInactiveTintColor: colors.tertiary,
    tabBarStyle: {
      borderRadius: 15,
      bottom: 24,
      margin: 24,
      backgroundColor: colors.primary,
      position: "absolute",
    },
    animation: "shift",
  } as BottomTabNavigationOptions;
};
