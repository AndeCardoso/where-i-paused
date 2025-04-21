import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useForm } from "react-hook-form";
import { ControlledCounterInput } from "./view";

jest.mock("@components/base/Text/view", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    Text: ({ children, ...props }: any) => <Text {...props}>{children}</Text>,
  };
});

jest.mock("@components/base/Input/view", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    Input: ({ value }: any) => <Text testID="input">{value}</Text>,
  };
});

jest.mock("@components/base/IconButton/view", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    IconButton: ({ icon, onPress, disabled }: any) => (
      <Text onPress={disabled ? undefined : onPress} testID={icon}>
        {icon}
      </Text>
    ),
  };
});

const renderComponent = (props = {}) => {
  const Wrapper = () => {
    const { control } = useForm<{ quantity: number }>({
      defaultValues: {
        quantity: 1,
      },
    });

    return (
      <ControlledCounterInput
        name="quantity"
        label="Quantity"
        control={control}
        {...props}
      />
    );
  };

  return render(<Wrapper />);
};

describe("ControlledCounterInput component", () => {
  it("should render with initial value and label", () => {
    const { getByText } = renderComponent();

    expect(getByText("Quantity")).toBeTruthy();
    expect(getByText("1")).toBeTruthy();
  });

  it("should increase value when icon button 'chevron-up' is pressed", () => {
    const { getByText } = renderComponent();

    fireEvent.press(getByText("chevron-up"));
    expect(getByText("2")).toBeTruthy();
  });

  it("should not decrease when value is 1", () => {
    const { getByText } = renderComponent();

    fireEvent.press(getByText("chevron-down"));
    expect(getByText("1")).toBeTruthy();
  });

  it("should decrease correctly if value > 1", () => {
    const { getByText } = renderComponent();

    fireEvent.press(getByText("chevron-up")); // agora valor é 2
    fireEvent.press(getByText("chevron-down")); // volta pra 1
    expect(getByText("1")).toBeTruthy();
  });
});
