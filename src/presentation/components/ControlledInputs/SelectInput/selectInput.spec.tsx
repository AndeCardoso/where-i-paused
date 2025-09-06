import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { ControlledSelectInput } from "./view";
import { useForm } from "react-hook-form";

jest.mock("@components/base/Text/view", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    Text: ({ children, ...props }: any) => <Text {...props}>{children}</Text>,
  };
});

jest.mock("@components/base/Select/view", () => {
  const React = require("react");
  const { Text, TouchableOpacity } = require("react-native");
  return {
    Select: ({ value, onSelect, options }: any) => (
      <>
        <TouchableOpacity testID="select" onPress={() => onSelect(options[1])}>
          <Text>{value?.label || "Select..."}</Text>
        </TouchableOpacity>
      </>
    ),
  };
});

describe("ControlledSelectInput", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ];

  const Wrapper = ({ onSelect }: any) => {
    const { control } = useForm({
      defaultValues: {
        test: options[0],
      },
    });

    return (
      <ControlledSelectInput
        name="test"
        label="Test"
        control={control}
        options={options}
        modalTitle="Select a option"
        placeholder="Select..."
        onSelect={onSelect}
      />
    );
  };

  it("should render the label", () => {
    const { getByText } = render(<Wrapper />);
    expect(getByText("Test")).toBeTruthy();
  });

  it("should show the initial value and change when a new option is selected", () => {
    const mockSelect = jest.fn();
    const { getByText, getByTestId } = render(
      <Wrapper onSelect={mockSelect} />
    );

    expect(getByText("Option 1")).toBeTruthy();

    act(() => {
      fireEvent.press(getByTestId("select"));
    });

    expect(getByText("Option 2")).toBeTruthy();

    expect(mockSelect).toHaveBeenCalledWith(options[1]);
  });
});
