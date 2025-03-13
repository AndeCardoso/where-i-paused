import React, { PropsWithChildren } from "react";
import { View } from "react-native";

export const Footer = ({ children }: PropsWithChildren) => {
  return (
    <View className="h-auto gap-2 pt-4 px-6 border-t-hairline">{children}</View>
  );
};
