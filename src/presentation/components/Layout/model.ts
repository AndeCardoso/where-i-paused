import { FC, PropsWithChildren } from "react";
import { Content } from "./Content/view";
import { Footer } from "./Footer/view";
import { Header } from "./Header/view";
import { FloatingActionButton } from "./FloatingActionButton/view";

export interface ILayoutProps extends FC<PropsWithChildren> {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
  FloatingActionButton: typeof FloatingActionButton;
}
