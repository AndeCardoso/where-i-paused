import React from "react";
import { Card as PaperCard } from "react-native-paper";

import { Content } from "./Content/view";
import { Actions } from "./Actions/view";
import { Title } from "./Title/view";

import { ICardProps } from "./model";

export const Card: ICardProps = ({ mode = "contained", children, ...rest }) => {
  return (
    <PaperCard
      mode={mode}
      theme={{
        roundness: 5,
      }}
      {...rest}
    >
      {children}
    </PaperCard>
  );
};

Card.Content = Content;
Card.Actions = Actions;
Card.Title = Title;
