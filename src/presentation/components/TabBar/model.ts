import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

export interface ITabBarProps {
  tabButtons: ITabButton[];
}

export interface ITabButton {
  name: string;
  title: string;
  hasHeader: boolean;
  icon: IconSource;
}
