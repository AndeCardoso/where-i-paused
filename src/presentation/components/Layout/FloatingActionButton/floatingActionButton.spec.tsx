import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { FloatingActionButton } from "./view";

jest.mock("react-native-paper", () => {
  const React = require("react");
  const { View, Text, TouchableOpacity } = require("react-native");

  return {
    FAB: ({ icon, color, onPress, style }: any) => (
      <TouchableOpacity onPress={onPress} testID="fab">
        <Text>{`Icon: ${icon}`}</Text>
        <Text>{`Color: ${color}`}</Text>
        <Text>{`Style-bottom: ${style?.bottom}`}</Text>
      </TouchableOpacity>
    ),
    Portal: {
      Host: ({ children }: any) => <View>{children}</View>,
    },
    useTheme: () => ({
      colors: {
        onPrimary: "#FFFFFF",
        primary: "#000000",
      },
    }),
  };
});

describe("FloatingActionButton component", () => {
  it("should render with default props", () => {
    const { getByText } = render(<FloatingActionButton onPress={() => {}} />);

    expect(getByText("Icon: plus")).toBeTruthy();
    expect(getByText("Color: #000000")).toBeTruthy();
    expect(getByText("Style-bottom: 140")).toBeTruthy();
  });

  it("should render with custom icon and height", () => {
    const { getByText } = render(
      <FloatingActionButton icon="edit" height={100} onPress={() => {}} />
    );

    expect(getByText("Icon: edit")).toBeTruthy();
    expect(getByText("Style-bottom: 100")).toBeTruthy();
  });

  it("should apply contrasted colors when isContrasted is true", () => {
    const { getByText } = render(
      <FloatingActionButton isContrasted onPress={() => {}} />
    );

    expect(getByText("Color: #FFFFFF")).toBeTruthy();
  });

  it("should call onPress when pressed", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <FloatingActionButton onPress={mockPress} />
    );

    fireEvent.press(getByTestId("fab"));

    expect(mockPress).toHaveBeenCalled();
  });
});
