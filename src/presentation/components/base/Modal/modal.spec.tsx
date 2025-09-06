import { render, waitFor } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";
import { Modal } from "./view";
import { IModalProps } from "./model";
import { Text } from "../Text/view";

describe("Modal component", () => {
  const renderComponent = (props: IModalProps) =>
    render(
      <PaperProvider>
        <Modal {...props} />
      </PaperProvider>
    );

  it("should render children when visible is true", async () => {
    const { findByText } = renderComponent({
      visible: true,
      onDismiss: jest.fn(),
      children: <Text>Visible Modal</Text>,
    });

    await waitFor(() => {
      expect(findByText("Visible Modal")).toBeTruthy();
    });
  });

  it("should not render children when visible is false", () => {
    const { queryByText } = renderComponent({
      visible: false,
      onDismiss: jest.fn(),
      children: <Text>Hidden Modal</Text>,
    });

    expect(queryByText("Hidden Modal")).toBeNull();
  });

  it("should call onDismiss when dismissed", () => {
    const handleDismiss = jest.fn();

    const { getByTestId } = renderComponent({
      visible: true,
      onDismiss: handleDismiss,
      children: <Text>Dismiss Modal</Text>,
    });

    expect(getByTestId("modal")).toBeTruthy();
  });
});
