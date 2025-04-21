import React from "react";
import { Icon, useTheme } from "react-native-paper";
import { IIconButtonProps } from "./model";
import { TouchableOpacity } from "react-native";

export const IconButton = ({
  icon,
  iconColor,
  disabled,
  onPress,
}: IIconButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      className="border border-primary rounded-md px-4"
      style={[{ opacity: disabled ? 0.4 : 1 }]}
      testID="iconTouchable"
    >
      <Icon
        // testID="iconButton"
        source={icon}
        color={iconColor || colors.primary}
        size={22}
      />
    </TouchableOpacity>
  );
};
