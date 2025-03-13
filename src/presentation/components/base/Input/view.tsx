import React from "react";
import { TextInput, useTheme } from "react-native-paper";
import { IInputProps } from "./model";

export const Input = ({
  mode = "outlined",
  mask,
  onChangeText,
  ...rest
}: IInputProps) => {
  const { colors } = useTheme();

  const handleChange = (value: string) => {
    if (!onChangeText) return;

    onChangeText(mask ? mask(value) : value);
  };

  return (
    <TextInput
      mode={mode}
      onChangeText={handleChange}
      outlineStyle={{ borderRadius: 8, backgroundColor: colors.transparent }}
      {...rest}
    />
  );
};
