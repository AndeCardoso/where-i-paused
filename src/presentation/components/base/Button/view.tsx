import React from "react";
import { Button as PaperButton } from "react-native-paper";
import { IButtonProps } from "./model";

export const Button = ({ children, ...rest }: IButtonProps) => {
  return <PaperButton {...rest}>{children}</PaperButton>;
};
