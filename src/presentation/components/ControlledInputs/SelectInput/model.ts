import { ControllerProps, FieldValues } from "react-hook-form";

import { ISelectOption, ISelectProps } from "@components/base/Select/model";
import { ITextProps } from "@components/base/Text/model";

export interface IControlledSelectInputProps<
  T extends FieldValues = FieldValues
> extends Omit<ISelectProps, "onSelect">,
    Omit<ITextProps, "children" | "selectionColor" | "tabIndex">,
    Omit<ControllerProps<T>, "render" | "defaultValue"> {
  label?: string;
  textArea?: boolean;
  onSelect?: (option: ISelectOption) => void;
}
