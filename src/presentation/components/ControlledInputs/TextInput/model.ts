import { ControllerProps, FieldValues } from "react-hook-form";

import { IInputProps } from "@components/base/Input/model";
import { ITextProps } from "@components/base/Text/model";

export interface IControlledTextInputProps<T extends FieldValues = FieldValues>
  extends IInputProps,
    Omit<ITextProps, "children" | "selectionColor" | "tabIndex">,
    Omit<ControllerProps<T>, "render" | "defaultValue"> {
  label?: string;
  textArea?: boolean;
}
