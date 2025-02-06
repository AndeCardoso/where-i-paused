import { render } from "@testing-library/react-native";
import { Layout } from "./view";
import { PropsWithChildren } from "react";
import { Text } from "react-native";

describe("Layout component", () => {
  const renderComponent = (props: PropsWithChildren) =>
    render(<Layout {...props} />);

  it("should render the layout with correctly", () => {
    const { getByText } = renderComponent({ children: <Text>Rendered</Text> });

    getByText("Rendered");
  });
});
