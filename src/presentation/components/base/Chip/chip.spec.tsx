import { fireEvent, render } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";
import { Chip } from "./view";
import { IChipProps } from "./model";

describe("Chip component", () => {
  const renderComponent = (props: IChipProps) =>
    render(
      <PaperProvider>
        <Chip testID="chip-component" {...props} />
      </PaperProvider>
    );

  it("should render the chip with correct text", () => {
    const { getByText } = renderComponent({ children: "Test Chip" });

    expect(getByText("Test Chip")).toBeOnTheScreen();
  });

  it("should trigger onPress when pressed", () => {
    const handlePress = jest.fn();

    const { getByText } = renderComponent({
      children: "Clickable Chip",
      onPress: handlePress,
    });

    fireEvent.press(getByText("Clickable Chip"));

    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
