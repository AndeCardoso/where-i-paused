import { Text } from "@components/base/Text/view";
import React from "react";
import { View } from "react-native";
import { Icon, useTheme } from "react-native-paper";
import { IEmptyStateProps } from "./model";

export const EmptyState = ({ icon, title, subtitle }: IEmptyStateProps) => {
  const { colors } = useTheme();
  return (
    <View className="w-full self-stretch items-center gap-4">
      {icon ? (
        <Icon source={icon} size={64} color={colors.primaryContainer} />
      ) : null}
      {title ? (
        <Text size={24} weight="600" color={colors.primaryContainer}>
          {title}
        </Text>
      ) : null}
      {subtitle ? (
        <Text size={18} color={colors.primaryContainer} align="center">
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
};
