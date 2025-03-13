import React from "react";
import { FAB, Portal, useTheme } from "react-native-paper";
import { IFloatingActionButtonProps } from "./model";

export const FloatingActionButton = ({
  icon = "plus",
  height = 160,
  onPress,
}: IFloatingActionButtonProps) => {
  const { colors } = useTheme();

  return (
    <Portal.Host>
      <FAB
        icon={icon}
        color={colors.onPrimary}
        onPress={onPress}
        mode="flat"
        style={{
          position: "absolute",
          borderRadius: 50,
          right: 32,
          bottom: height,
        }}
      />
    </Portal.Host>
  );
};
