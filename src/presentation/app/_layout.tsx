import { Stack } from "expo-router";
import { Providers } from "@providers/index";
import * as Sentry from "@sentry/react-native";
import "@styles/global.css";

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  sendDefaultPii: true,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [
    Sentry.mobileReplayIntegration(),
    Sentry.feedbackIntegration(),
  ],

  spotlight: __DEV__,
});

function RootLayout() {
  return (
    <Providers>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarBackgroundColor: "transparent",
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="add" />
      </Stack>
    </Providers>
  );
}

export default Sentry.wrap(RootLayout);
