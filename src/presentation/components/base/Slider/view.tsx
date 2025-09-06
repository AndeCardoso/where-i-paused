import React from "react";
import { Platform, ImageURISource } from "react-native";
import { useTheme } from "react-native-paper";
import CommunitySlider from "@react-native-community/slider";

import PauseImageIos from "@assets/images/ios/pause.png";
import DisabledPauseImageIos from "@assets/images/ios/pause-disabled.png";
import PauseImageAndroid from "@assets/images/android/pause.png";
import DisabledPauseImageAndroid from "@assets/images/android/pause-disabled.png";

import { ISliderProps } from "./model";

const os = Platform.OS;

export const Slider = ({
  maximumValue,
  width = "100%",
  style,
  disabled,
  ...rest
}: ISliderProps) => {
  const { colors } = useTheme();
  const thumbImageByPlatform: Record<"ios" | "android", ImageURISource> = {
    ios: disabled
      ? (DisabledPauseImageIos as ImageURISource)
      : (PauseImageIos as ImageURISource),
    android: disabled
      ? (DisabledPauseImageAndroid as ImageURISource)
      : (PauseImageAndroid as ImageURISource),
  };

  return (
    <CommunitySlider
      minimumValue={0}
      minimumTrackTintColor={colors.primary}
      maximumTrackTintColor={colors.tertiary}
      style={[{ width, flex: 1 }, style]}
      thumbImage={thumbImageByPlatform[os as "ios" | "android"]}
      disabled={disabled}
      {...rest}
    />
  );
};
