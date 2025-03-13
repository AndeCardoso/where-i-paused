import React from "react";
import { View } from "react-native";
import { Controller } from "react-hook-form";
import { HelperText } from "react-native-paper";
import { Text } from "@components/base/Text/view";
import { Select } from "@components/base/Select/view";
import { ICrontrolledSelectInputProps } from "./model";

export const ControlledSelectInput = ({
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
}: ICrontrolledSelectInputProps) => {
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
            <Select
              value={value}
              modalTitle={modalTitle}
              placeholder={placeholder}
              numberOfLines={textArea ? 4 : undefined}
              multiline={textArea}
              onSelect={onChange}
              options={options}
            />
          </View>
        );
      }}
    />
  );
};
