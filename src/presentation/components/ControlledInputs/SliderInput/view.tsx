import React from "react";
import { View } from "react-native";
import { Controller } from "react-hook-form";
import { HelperText } from "react-native-paper";
import { ICrontrolledSliderInputProps } from "./model";
import { formatSecondsToTime } from "presentation/utils/formatTime";
import { Slider } from "@components/base/Slider/view";
import { Text } from "@components/base/Text/view";

export const ControlledSliderInput = ({
  name,
  size = 20,
  label,
  weight = "600",
  control,
  disabled,
  totalValue,
}: ICrontrolledSliderInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        if (isNaN(Number(value))) {
          value = "00:00";
        }

        const onChangeFormatted = (newValue: number) => {
          onChange((newValue * Number(totalValue)).toFixed());
        };

        return (
          <View>
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
            <Text size={24} className="self-center py-4">
              {formatSecondsToTime(Number(value))}
            </Text>
            <Slider
              onValueChange={onChangeFormatted}
              maximumValue={totalValue}
              disabled={disabled}
            />
            <View className="flex-row w-full justify-between px-1">
              <Text size={14}>00:00</Text>
              <Text size={14}>{formatSecondsToTime(Number(totalValue))}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};
