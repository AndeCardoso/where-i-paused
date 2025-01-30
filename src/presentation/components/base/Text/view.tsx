import { Text as PaperText } from "react-native-paper";
import { ITextProps } from "./model";

export const Text = ({ children, ...rest }: ITextProps) => {
  return <PaperText {...rest}>{children}</PaperText>;
};
