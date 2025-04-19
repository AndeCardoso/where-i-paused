import { TextInputProps } from "react-native-paper";

export interface IInputProps extends TextInputProps {
  value?: string;
  fontSize?: number;
  mask?: (value?: string) => string;
}
