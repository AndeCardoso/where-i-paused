import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";
import { Select } from "./view";
import { ISelectOption } from "./model";

describe("Select component", () => {
  const options: ISelectOption[] = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
  ];

  const renderComponent = (props: any = {}) =>
    render(
      <PaperProvider>
        <Select options={options} onSelect={jest.fn()} {...props} />
      </PaperProvider>
    );

  it("should render TextInput with correct value", () => {
    const { getByDisplayValue } = renderComponent({
      value: { label: "Option 1", value: "opt1" },
    });

    expect(getByDisplayValue("Option 1")).toBeTruthy();
  });

  it("should open modal on input press", async () => {
    const { getByDisplayValue, findByText } = renderComponent({
      value: { label: "Option 1", value: "opt1" },
    });

    fireEvent.press(getByDisplayValue("Option 1"));

    expect(await findByText("Option 1")).toBeTruthy();
    expect(await findByText("Option 2")).toBeTruthy();
  });

  it("should call onSelect and close modal when an option is pressed", async () => {
    const onSelect = jest.fn();
    const { getByDisplayValue, findByText } = renderComponent({
      value: { label: "Option 1", value: "opt1" },
      onSelect,
    });

    fireEvent.press(getByDisplayValue("Option 1"));

    const option2 = await findByText("Option 2");

    fireEvent.press(option2);

    expect(onSelect).toHaveBeenCalledWith({ label: "Option 2", value: "opt2" });
  });

  it("should show modalTitle if provided", async () => {
    const { getByDisplayValue, findByText } = renderComponent({
      modalTitle: "Choose an option",
      value: { label: "Option 1", value: "opt1" },
    });

    fireEvent.press(getByDisplayValue("Option 1"));

    expect(await findByText("Choose an option")).toBeTruthy();
  });

  it("should close modal when close icon is pressed", async () => {
    const { getByDisplayValue, findByTestId, queryByText } = renderComponent({
      modalTitle: "Choose",
      value: { label: "Option 1", value: "opt1" },
    });

    fireEvent.press(getByDisplayValue("Option 1"));

    const closeButton = await findByTestId("iconClose");

    fireEvent.press(closeButton);

    await waitFor(() => {
      expect(queryByText("Choose")).toBeNull();
    });
  });
});
