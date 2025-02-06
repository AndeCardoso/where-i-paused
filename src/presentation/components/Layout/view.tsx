import React from "react";
import { View } from "react-native";
import { ILayoutProps } from "./model";

import { Header } from "./Header/view";
import { Content } from "./Content/view";
import { Footer } from "./Footer/view";
import { FloatingActionButton } from "./FloatingActionButton/view";

export const Layout: ILayoutProps = ({ children }) => {
  return <View style={{ paddingTop: 116 }}>{children}</View>;
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.FloatingActionButton = FloatingActionButton;
