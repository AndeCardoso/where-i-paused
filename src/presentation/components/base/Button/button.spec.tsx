import { fireEvent, render } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";
import { IButtonProps } from "./model";
import { Button } from "./view";

describe("Button component", () => {
  const renderComponent = (props: IButtonProps) =>
    render(
      <PaperProvider>
        <Button {...props} />
      </PaperProvider>
    );

  it("should render the button with correctly", () => {
    const { getByText } = renderComponent({ children: "Rendered" });

    getByText("Rendered");
  });

  it("should triggers onPress when not disabled", () => {
    const handleClick = jest.fn();

    const { getByText } = renderComponent({
      onPress: handleClick,
      children: "Enabled Button",
    });

    fireEvent(getByText("Enabled Button"), "press");

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not triggers onPress when disabled", () => {
    const handleClick = jest.fn();

    const { getByText } = renderComponent({
      onPress: handleClick,
      disabled: true,
      children: "Disabled Button",
    });

    fireEvent(getByText("Disabled Button"), "press");

    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
