import { captureException } from "@sentry/react-native";

export const useSentry = () => {
  const onError = (error: unknown) => {
    captureException(error);
  };

  return { onError };
};
