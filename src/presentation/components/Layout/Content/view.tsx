import React from "react";
import { ScrollView, View } from "react-native";
import { ILayoutContentProps } from "./model";

export const Content = ({ hasScroll, children }: ILayoutContentProps) => {
  if (hasScroll) {
    return <ScrollView className="h-full">{children}</ScrollView>;
  }

  return <View className="h-full">{children}</View>;
};
