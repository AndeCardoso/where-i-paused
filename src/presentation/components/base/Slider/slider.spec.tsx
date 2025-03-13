import { fireEvent, render } from "@testing-library/react-native";
import { ISliderProps } from "./model";
import PauseImage from "@assets/images/pause.png";
import { PaperProvider } from "react-native-paper";
import { Slider } from "./view";

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
    useTheme: () => mockTheme, // Mock do useTheme()
  };
});

describe("Slider component", () => {
  const renderComponent = (props: ISliderProps) =>
    render(
      <PaperProvider>
        <Slider testID="slider-component" {...props} />
      </PaperProvider>
    );

  it("should render the slider correctly", () => {
    const { getByTestId } = renderComponent({ maximumValue: 100 });

    expect(getByTestId("slider-component")).toBeOnTheScreen();
  });

  it("should apply theme colors correctly", () => {
    const { getByTestId } = renderComponent({ maximumValue: 100 });

    const slider = getByTestId("slider-component");

    expect(slider.props.minimumTrackTintColor).toBe("blue");
    expect(slider.props.maximumTrackTintColor).toBe("gray");
  });

  it("should trigger onValueChange when value is changed", () => {
    const handleValueChange = jest.fn();

    const { getByTestId } = renderComponent({
      maximumValue: 100,
      onValueChange: handleValueChange,
    });

    fireEvent(getByTestId("slider-component"), "onValueChange", 50);

    expect(handleValueChange).toHaveBeenCalledTimes(1);
    expect(handleValueChange).toHaveBeenCalledWith(50);
  });

  it("should set the correct thumb image", () => {
    const { getByTestId } = renderComponent({ maximumValue: 100 });

    expect(getByTestId("slider-component").props.thumbImage).toBe(PauseImage);
  });
});
