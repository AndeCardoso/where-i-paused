import React from "react";
import { View } from "react-native";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
import { HelperText } from "react-native-paper";
import { Text } from "@components/base/Text/view";
import { Input } from "@components/base/Input/view";
import { IControlledTextInputProps } from "./model";

export function ControlledTextInput<T extends FieldValues>({
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
}: IControlledTextInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
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
      )}
    />
  );
}
