import { ImageURISource, Platform } from "react-native";
import { act, fireEvent, render } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";

import { ISliderProps } from "./model";

import PauseImageIos from "@assets/images/ios/pause.png";
import DisabledPauseImageIos from "@assets/images/ios/pause-disabled.png";
import PauseImageAndroid from "@assets/images/android/pause.png";
import DisabledPauseImageAndroid from "@assets/images/android/pause-disabled.png";

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
    useTheme: () => mockTheme,
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

    act(() => {
      fireEvent(getByTestId("slider-component"), "onValueChange", 50);
    });

    expect(handleValueChange).toHaveBeenCalledTimes(1);
    expect(handleValueChange).toHaveBeenCalledWith(50);
  });

  it("should set the correct thumb image", () => {
    const disabled = false;

    const { getByTestId } = renderComponent({
      maximumValue: 100,
      disabled,
    });

    const thumbImageByPlatform: Record<"ios" | "android", ImageURISource> = {
      ios: disabled
        ? (DisabledPauseImageIos as ImageURISource)
        : (PauseImageIos as ImageURISource),
      android: disabled
        ? (DisabledPauseImageAndroid as ImageURISource)
        : (PauseImageAndroid as ImageURISource),
    };

    expect(getByTestId("slider-component").props.thumbImage).toBe(
      thumbImageByPlatform[Platform.OS as "ios" | "android"]
    );
  });
});
