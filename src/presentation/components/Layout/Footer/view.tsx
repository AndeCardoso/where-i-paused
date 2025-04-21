import React, { PropsWithChildren } from "react";
import { Platform, View } from "react-native";

const android = Platform.OS === "android";

export const Footer = ({ children }: PropsWithChildren) => {
  return (
    <View
      className={`h-auto gap-2 pt-4 px-6 ${
        android && "pb-4"
      } border-t-hairline`}
    >
      {children}
    </View>
  );
};
