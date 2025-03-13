import React from "react";
import { Card } from "react-native-paper";
import { ICardActionsProps } from "./model";

export const Actions = ({ children, style, ...rest }: ICardActionsProps) => {
  return (
    <Card.Actions style={[{ padding: 0 }, style]} {...rest}>
      {children}
    </Card.Actions>
  );
};
