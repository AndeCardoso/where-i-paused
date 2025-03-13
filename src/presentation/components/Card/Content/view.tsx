import React from "react";
import { Card } from "react-native-paper";
import { ICardContentProps } from "./model";

export const Content = ({ children, ...rest }: ICardContentProps) => {
  return <Card.Content {...rest}>{children}</Card.Content>;
};
