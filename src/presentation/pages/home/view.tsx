import React from "react";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Image, ImageBackground } from "react-native";
import { Layout } from "@components/Layout/view";
import { ROUTES_NAMES_ENUM } from "@routes/index";
import BackgroundFull from "@assets/images/background-full.png";
import TextBrandWhite from "@assets/images/text-brand-w.png";

export const HomeView = () => {
  const { navigate } = useRouter();

  const goToAdd = () => {
    navigate({ pathname: ROUTES_NAMES_ENUM.ADD });
  };
  return (
    <Layout.Content>
      <ImageBackground
        source={BackgroundFull}
        className="h-full w-full justify-start items-center py-24"
        resizeMode="cover"
      >
        <BlurView
          className="h-full w-full justify-start items-center "
          intensity={10}
        >
          <Image
            source={TextBrandWhite}
            resizeMethod="resize"
            resizeMode="contain"
            style={{ width: 300, height: 60 }}
          />
        </BlurView>
      </ImageBackground>
      <Layout.FloatingActionButton onPress={goToAdd} />
    </Layout.Content>
  );
};
