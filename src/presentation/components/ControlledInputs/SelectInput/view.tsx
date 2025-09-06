import React from "react";
import { View } from "react-native";
import { HelperText } from "react-native-paper";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";

import { Text } from "@components/base/Text/view";
import { Select } from "@components/base/Select/view";
import { ISelectOption } from "@components/base/Select/model";

import { IControlledSelectInputProps } from "./model";

export function ControlledSelectInput<T extends FieldValues>({
  name,
  size = 20,
  label,
  weight = "600",
  textArea = false,
  options,
  control,
  disabled,
  modalTitle,
  placeholder,
  defaultValue,
  onSelect,
}: IControlledSelectInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const handleChange = (option: ISelectOption) => {
          onSelect && onSelect(option);
          onChange(option);
        };
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
            <Select
              value={value}
              modalTitle={modalTitle}
              placeholder={placeholder}
              numberOfLines={textArea ? 4 : undefined}
              multiline={textArea}
              onSelect={handleChange}
              options={options}
            />
          </View>
        );
      }}
    />
  );
}
