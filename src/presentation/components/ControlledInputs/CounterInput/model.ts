import { ControllerProps, FieldValues } from "react-hook-form";

import { ITextProps } from "@components/base/Text/model";
import { IInputProps } from "@components/base/Input/model";

export interface IControlledCounterInputProps<
  T extends FieldValues = FieldValues
> extends IInputProps,
    Omit<ITextProps, "children" | "style" | "tabIndex" | "selectionColor">,
    Omit<ControllerProps<T>, "render" | "defaultValue"> {
  label?: string;
}
