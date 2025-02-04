import React from "react";
import { View } from "react-native";
import { ILayoutHeaderProps } from "./model";

export const Header = ({ children }: ILayoutHeaderProps) => {
  return <View className="px-6 pb-4">{children}</View>;
};
