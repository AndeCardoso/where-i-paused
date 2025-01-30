import { render } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";
import { ITextProps } from "./model";
import { Text } from "./view";

describe("Text component", () => {
  const renderComponent = (props: ITextProps) =>
    render(
      <PaperProvider>
        <Text {...props} />
      </PaperProvider>
    );

  it("should render the text with correctly", () => {
    const { getByText } = renderComponent({ children: "Rendered" });

    getByText("Rendered");
  });
});
