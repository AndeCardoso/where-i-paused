import { IInputProps } from "@components/base/Input/model";
import { ITextProps } from "@components/base/Text/model";
import { ControllerProps } from "react-hook-form";

export interface ICrontrolledTextInputProps
  extends IInputProps,
    Omit<ITextProps, "children" | "selectionColor" | "tabIndex">,
    Omit<ControllerProps, "render" | "defaultValue"> {
  label?: string;
  textArea?: boolean;
}
