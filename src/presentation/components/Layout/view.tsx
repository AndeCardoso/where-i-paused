import React from "react";
import { View } from "react-native";
import { ILayoutProps } from "./model";

import { Header } from "./Header/view";
import { Content } from "./Content/view";
import { Footer } from "./Footer/view";
import { FloatingActionButton } from "./FloatingActionButton/view";
import { SafeAreaView } from "react-native-safe-area-context";

export const Layout: ILayoutProps = ({ children }) => {
  return (
    <SafeAreaView mode="margin" className="flex-1">
      <View className="h-full pt-11">{children}</View>
    </SafeAreaView>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.FloatingActionButton = FloatingActionButton;
