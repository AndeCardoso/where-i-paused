import React from "react";
import { Platform } from "react-native";
import { useTheme } from "react-native-paper";
import CommunitySlider from "@react-native-community/slider";

import PauseImageIos from "@assets/images/ios/pause.png";
import PauseImageAndroid from "@assets/images/android/pause.png";

import { ISliderProps } from "./model";

const ios = Platform.OS === "ios";

export const Slider = ({
  maximumValue,
  width = "100%",
  style,
  ...rest
}: ISliderProps) => {
  const { colors } = useTheme();
  const thumbImageByPlatform = ios ? PauseImageIos : PauseImageAndroid;
  return (
    <CommunitySlider
      minimumValue={0}
      minimumTrackTintColor={colors.primary}
      maximumTrackTintColor={colors.tertiary}
      style={[{ width, flex: 1 }, style]}
      thumbImage={thumbImageByPlatform}
      {...rest}
    />
  );
};
