import { PropsWithChildren } from "react";
import { ScrollViewProps, ViewProps } from "react-native";

export interface ILayoutContentProps
  extends PropsWithChildren,
    ViewProps,
    ScrollViewProps {
  hasScroll?: boolean;
}
