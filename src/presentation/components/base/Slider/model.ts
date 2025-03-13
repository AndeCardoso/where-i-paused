import { SliderProps } from "@react-native-community/slider";
import { DimensionValue } from "react-native";

export interface ISliderProps extends SliderProps {
  width?: DimensionValue;
}
