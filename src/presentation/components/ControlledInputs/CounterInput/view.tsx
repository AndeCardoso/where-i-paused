import React from "react";
import { View } from "react-native";
import { Controller } from "react-hook-form";
import { HelperText } from "react-native-paper";
import { ICrontrolledCounterInputProps } from "./model";
import { Text } from "@components/base/Text/view";
import { Input } from "@components/base/Input/view";
import { IconButton } from "@components/base/IconButton/view";

export const ControlledCounterInput = ({
  name,
  size = 20,
  label,
  weight = "600",
  control,
  disabled,
  ...rest
}: ICrontrolledCounterInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      {...rest}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const isMinimun = value === 1;

        const increaseValue = () => {
          onChange(Number(value) + 1);
        };

        const decreaseValue = () => {
          if (!isMinimun) {
            onChange(Number(value) - 1);
          }
        };

        return (
          <View className="flex-1 gap-2">
            <View className="flex-row justify-between align-middle">
              <Text className="font-semibold" size={size} weight={weight}>
                {label}
              </Text>
              {error ? (
                <HelperText className="py-0" type="error">
                  {error.message}
                </HelperText>
              ) : null}
            </View>
            <View className="flex-row gap-1">
              <Input
                value={String(value)}
                onChangeText={onChange}
                keyboardType="numeric"
                textAlign="center"
                fontSize={28}
              />
              <View className="justify-around">
                <IconButton icon={"chevron-up"} onPress={increaseValue} />
                <IconButton
                  icon={"chevron-down"}
                  onPress={decreaseValue}
                  disabled={isMinimun}
                />
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};
