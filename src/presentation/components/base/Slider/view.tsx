import React from "react";
import { useTheme } from "react-native-paper";
import CommunitySlider from "@react-native-community/slider";
import { ISliderProps } from "./model";

import PauseImage from "@assets/images/pause.png";

export const Slider = ({
  maximumValue,
  width = "100%",
  style,
  ...rest
}: ISliderProps) => {
  const { colors } = useTheme();
  return (
    <CommunitySlider
      tapToSeek
      minimumValue={0}
      minimumTrackTintColor={colors.primary}
      maximumTrackTintColor={colors.tertiary}
      style={[{ width, flex: 1 }, style]}
      thumbImage={PauseImage}
      {...rest}
    />
  );
};
