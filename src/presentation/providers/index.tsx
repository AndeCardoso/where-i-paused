import React, { PropsWithChildren } from "react";
import { PaperProvider } from "react-native-paper";

export const Providers = ({ children }: PropsWithChildren) => {
  return <PaperProvider>{children}</PaperProvider>;
};
