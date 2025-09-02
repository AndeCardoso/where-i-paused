import { act, fireEvent, render } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";
import { IInputProps } from "./model";
import { Input } from "./view";
jest.useFakeTimers();

describe("Input component", () => {
  const renderComponent = (props: IInputProps) =>
    render(
      <PaperProvider>
        <Input {...props} testID="input-component" />
      </PaperProvider>
    );

  it("should render the input with correctly", () => {
    const { getByTestId } = renderComponent({});

    expect(getByTestId("input-component")).toBeOnTheScreen();
  });

  it("should accepts a placeholder and displays it", () => {
    const { getByPlaceholderText } = renderComponent({
      placeholder: "Test",
    });

    expect(getByPlaceholderText("Test")).toBeTruthy();
  });

  it("should calls onChangeText when text is entered", () => {
    const mockOnChangeText = jest.fn();
    const { getByTestId } = renderComponent({ onChangeText: mockOnChangeText });

    act(() => {
      fireEvent.changeText(getByTestId("input-component"), "Novo texto");
    });

    expect(mockOnChangeText).toHaveBeenCalledWith("Novo texto");
  });
});
