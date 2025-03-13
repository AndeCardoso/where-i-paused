import React from "react";
import { View } from "react-native";
import { Controller } from "react-hook-form";
import { HelperText } from "react-native-paper";
import { Text } from "@components/base/Text/view";
import { Input } from "@components/base/Input/view";
import { ICrontrolledTextInputProps } from "./model";

export const ControlledTextInput = ({
  name,
  size = 20,
  label,
  weight = "600",
  textArea = false,
  control,
  disabled,
  placeholder,
  defaultValue,
  ...rest
}: ICrontrolledTextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      defaultValue={defaultValue}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <View className="gap-2">
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
            <Input
              value={value}
              placeholder={placeholder}
              numberOfLines={textArea ? 4 : undefined}
              multiline={textArea}
              onChangeText={onChange}
              {...rest}
            />
          </View>
        );
      }}
    />
  );
};
