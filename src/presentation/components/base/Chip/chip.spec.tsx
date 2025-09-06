import { act, fireEvent, render } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";

import { Chip } from "./view";
import { IChipProps } from "./model";

const mockTheme = {
  colors: {
    primary: "blue",
    tertiary: "gray",
  },
};

jest.mock("react-native-paper", () => {
  const actualPaper = jest.requireActual("react-native-paper");
  return {
    ...actualPaper,
    useTheme: () => mockTheme,
  };
});

describe("Chip component", () => {
  const renderComponent = (props: IChipProps) =>
    render(
      <PaperProvider>
        <Chip testID="chip-component" {...props}>
          {props.children}
        </Chip>
      </PaperProvider>
    );

  it("should render the chip correctly", () => {
    const { getByTestId } = renderComponent({ children: "Meu Chip" });

    expect(getByTestId("chip-text")).toBeOnTheScreen();
  });

  it("should render the given text as children", () => {
    const { getByTestId } = renderComponent({ children: "Texto do Chip" });

    expect(getByTestId("chip-text")).toBeTruthy();
  });

  it("should apply default textSize when not provided", () => {
    const { getByTestId } = renderComponent({ children: "Chip default" });

    expect(getByTestId("chip-text").props.style[3][0].fontSize).toBe(10);
  });

  it("should apply custom textSize when provided", () => {
    const { getByTestId } = renderComponent({
      children: "Chip custom",
      textSize: 18,
    });

    expect(getByTestId("chip-text").props.style[3][0].fontSize).toBe(18);
  });

  it("should trigger onPress when pressed", () => {
    const handlePress = jest.fn();

    const { getByText } = renderComponent({
      children: "Chip clicável",
      onPress: handlePress,
    });

    act(() => {
      fireEvent.press(getByText("Chip clicável"));
    });

    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it("should apply the expected static styles", () => {
    const { getByTestId } = renderComponent({ children: "Styled chip" });

    const chip = getByTestId("chip-component");

    expect(chip.props.style[1][0]).toMatchObject({
      borderRadius: 50,
    });
  });
});
