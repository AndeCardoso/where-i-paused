import { ControllerProps, FieldValues } from "react-hook-form";
import { ITextProps } from "@components/base/Text/model";
import { ISliderProps } from "@components/base/Slider/model";

export interface IControlledSliderInputProps<
  T extends FieldValues = FieldValues
> extends ISliderProps,
    Omit<ITextProps, "children" | "style" | "tabIndex">,
    Omit<ControllerProps<T>, "render"> {
  totalValue: number;
  label?: string;
}
