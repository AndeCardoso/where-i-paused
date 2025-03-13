import { ControllerProps } from "react-hook-form";
import { ITextProps } from "@components/base/Text/model";
import { ISliderProps } from "@components/base/Slider/model";

export interface ICrontrolledSliderInputProps
  extends ISliderProps,
    Omit<ITextProps, "children" | "style" | "tabIndex">,
    Omit<ControllerProps, "render" | "defaultValue"> {
  label?: string;
  totalValue?: number;
}
