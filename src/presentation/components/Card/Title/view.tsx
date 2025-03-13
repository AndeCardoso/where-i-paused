import React from "react";
import { Card } from "react-native-paper";
import { ICardTitleProps } from "./model";

export const Title = ({ children, ...rest }: ICardTitleProps) => {
  return <Card.Title {...rest}>{children}</Card.Title>;
};
