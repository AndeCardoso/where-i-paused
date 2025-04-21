import { ControllerProps } from "react-hook-form";
import { ITextProps } from "@components/base/Text/model";
import { IInputProps } from "@components/base/Input/model";

export interface ICrontrolledCounterInputProps
  extends IInputProps,
    Omit<ITextProps, "children" | "style" | "tabIndex" | "selectionColor">,
    Omit<ControllerProps, "render" | "defaultValue"> {
  label?: string;
}
