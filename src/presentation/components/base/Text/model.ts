import { TextProps } from "react-native-paper";

export interface ITextProps extends TextProps<string> {
  size?: number;
  color?: string;
  align?: "auto" | "left" | "right" | "center" | "justify";
  weight?:
    | "400"
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}
