import { Text as PaperText } from "react-native-paper";
import { ITextProps } from "./model";

export const Text = ({
  children,
  size = 16,
  color,
  align = "left",
  weight = "400",
  style,
  ...rest
}: ITextProps) => {
  return (
    <PaperText
      style={[
        { fontSize: size, fontWeight: weight, textAlign: align, color },
        style,
      ]}
      {...rest}
    >
      {children}
    </PaperText>
  );
};
