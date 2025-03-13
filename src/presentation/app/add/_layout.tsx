import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";
import { Providers } from "@providers/index";

export default function AddLayout() {
  const { colors } = useTheme();
  return (
    <Stack
      screenOptions={{
        title: "Add",
        headerTransparent: true,
        headerTintColor: colors.onPrimary,
        headerTitleStyle: {
          fontSize: 32,
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
        presentation: "formSheet",
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
