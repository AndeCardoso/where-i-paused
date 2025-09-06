import React from "react";
import { View } from "react-native";
import { HelperText } from "react-native-paper";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";

import { formatSecondsToTime } from "@utils/formatTime";

import { Slider } from "@components/base/Slider/view";
import { Text } from "@components/base/Text/view";

import { IControlledSliderInputProps } from "./model";

export function ControlledSliderInput<T extends FieldValues>({
  name,
  size = 20,
  label,
  weight = "600",
  control,
  disabled,
  totalValue,
  defaultValue,
}: IControlledSliderInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const numericValue = Number(value);
        const safeValue = isNaN(numericValue) ? 0 : numericValue;

        const onChangeFormatted = (newValue: number) => {
          onChange(Math.round(newValue * totalValue));
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
              {formatSecondsToTime(Number(safeValue))}
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
}
