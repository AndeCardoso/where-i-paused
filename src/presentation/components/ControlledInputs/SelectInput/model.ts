import { ControllerProps } from "react-hook-form";
import { ITextProps } from "@components/base/Text/model";
import { ISelectOption, ISelectProps } from "@components/base/Select/model";

export interface ICrontrolledSelectInputProps
  extends Omit<ISelectProps, "onSelect">,
    Omit<ITextProps, "children" | "selectionColor" | "tabIndex">,
    Omit<ControllerProps, "render" | "defaultValue"> {
  label?: string;
  textArea?: boolean;
  onSelect?: (option: ISelectOption) => void;
}
