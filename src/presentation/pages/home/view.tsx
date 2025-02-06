import React from "react";
import { Image, ImageBackground } from "react-native";
import BackgroundFull from "@assets/images/background-full.png";
import TextBrandWhite from "@assets/images/text-brand-w.png";

export const HomeView = () => {
  return (
    <ImageBackground
      source={BackgroundFull}
      className="h-full w-full justify-start items-center py-24"
      resizeMode="cover"
    >
      <Image
        source={TextBrandWhite}
        resizeMethod="resize"
        resizeMode="contain"
        style={{ width: 300, height: 60 }}
      />
    </ImageBackground>
  );
};
