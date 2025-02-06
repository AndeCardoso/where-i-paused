import { PropsWithChildren } from "react";
import { ViewProps } from "react-native";

export interface ILayoutContentProps extends PropsWithChildren, ViewProps {
  hasScroll?: boolean;
}
