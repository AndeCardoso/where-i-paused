import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

export interface IFloatingActionButtonProps {
  icon?: IconSource;
  height?: number;
  onPress: VoidFunction;
  isContrasted?: boolean;
}
