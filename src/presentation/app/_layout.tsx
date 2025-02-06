import { Stack } from "expo-router";
import { Providers } from "@providers/index";
import "@styles/global.css";

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Providers>
  );
}
