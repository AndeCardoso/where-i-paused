import React from "react";
import { View } from "react-native";
import { Icon, useTheme } from "react-native-paper";
import { Text } from "@components/base/Text/view";
import { IEmptyStateProps } from "./model";

export const EmptyState = ({
  icon,
  title,
  subtitle,
  isContrasted,
}: IEmptyStateProps) => {
  const { colors } = useTheme();

  const color = isContrasted ? colors.onPrimary : colors.primaryContainer;

  return (
    <View className="align-middle justify-center items-center gap-4">
      {icon ? <Icon source={icon} size={64} color={color} /> : null}
      {title ? (
        <Text size={24} weight="600" color={color}>
          {title}
        </Text>
      ) : null}
      {subtitle ? (
        <Text size={18} align="center" color={color}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
};
