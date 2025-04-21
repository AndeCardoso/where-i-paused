import React from "react";
import { FAB, Portal, useTheme } from "react-native-paper";
import { IFloatingActionButtonProps } from "./model";

export const FloatingActionButton = ({
  icon = "plus",
  height = 140,
  onPress,
  isContrasted,
}: IFloatingActionButtonProps) => {
  const { colors } = useTheme();

  return (
    <Portal.Host>
      <FAB
        icon={icon}
        color={isContrasted ? colors.onPrimary : colors.primary}
        onPress={onPress}
        mode="flat"
        style={{
          position: "absolute",
          borderRadius: 50,
          right: 32,
          bottom: height,
          backgroundColor: isContrasted ? colors.primary : colors.onPrimary,
        }}
      />
    </Portal.Host>
  );
};
