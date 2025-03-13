import { TextInputProps } from "react-native-paper";

export interface IInputProps extends TextInputProps {
  value?: string;
  mask?: (value?: string) => string;
}
