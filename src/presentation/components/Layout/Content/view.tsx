import React from "react";
import { ScrollView, View } from "react-native";
import { ILayoutContentProps } from "./model";

export const Content = ({
  hasScroll,
  children,
  ...rest
}: ILayoutContentProps) => {
  if (hasScroll) {
    return (
      <ScrollView
        className="h-full"
        showsVerticalScrollIndicator={false}
        {...rest}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View className="h-full" {...rest}>
      {children}
    </View>
  );
};
