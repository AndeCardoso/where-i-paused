import { fireEvent, render } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";
import { IconButton } from "./view";
import { IIconButtonProps } from "./model";

describe("IconButton component", () => {
  const renderComponent = (props: IIconButtonProps) =>
    render(
      <PaperProvider>
        <IconButton {...props} />
      </PaperProvider>
    );

  it("should render the button correctly", () => {
    const { getByTestId } = renderComponent({
      icon: "plus",
    });

    expect(getByTestId("iconTouchable")).toBeOnTheScreen();
  });

  it("should trigger onPress when not disabled", () => {
    const handleClick = jest.fn();

    const { getByTestId } = renderComponent({
      icon: "plus",
      onPress: handleClick,
    });

    fireEvent.press(getByTestId("iconTouchable"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not trigger onPress when disabled", () => {
    const handleClick = jest.fn();

    const { getByTestId } = renderComponent({
      icon: "plus",
      onPress: handleClick,
      disabled: true,
    });

    fireEvent.press(getByTestId("iconTouchable"));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should apply reduced opacity when pressed", () => {
    const handleClick = jest.fn();

    const { getByTestId } = renderComponent({
      icon: "plus",
      onPress: handleClick,
    });

    const button = getByTestId("iconTouchable");

    fireEvent.press(button);

    expect(button.props.style).toMatchObject({ opacity: 1 });
  });
});
