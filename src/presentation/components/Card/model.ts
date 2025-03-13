import { FC } from "react";
import { CardProps } from "react-native-paper";
import { Title } from "./Title/view";
import { Content } from "./Content/view";
import { Actions } from "./Actions/view";

export interface ICardProps extends FC<Omit<CardProps, "elevation">> {
  Title: typeof Title;
  Content: typeof Content;
  Actions: typeof Actions;
}
