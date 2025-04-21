import React from "react";
import { render } from "@testing-library/react-native";
import { EmptyState } from "./view";

jest.mock("@components/base/Text/view", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    Text: ({ children, ...props }: any) => <Text {...props}>{children}</Text>,
  };
});

jest.mock("react-native-paper", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    Icon: ({ source, ...props }: any) => <Text {...props}>Icon: {source}</Text>,
    useTheme: () => ({
      colors: {
        onPrimary: "#fff",
        primaryContainer: "#000",
      },
    }),
  };
});

describe("EmptyState", () => {
  it("should render title, subtitle, and icon", () => {
    const { getByText } = render(
      <EmptyState
        icon="test-icon"
        title="No data"
        subtitle="We couldn't find any results."
        isContrasted={true}
      />
    );

    expect(getByText("Icon: test-icon")).toBeTruthy();
    expect(getByText("No data")).toBeTruthy();
    expect(getByText("We couldn't find any results.")).toBeTruthy();
  });

  it("should not render icon, title or subtitle if not provided", () => {
    const { queryByText } = render(<EmptyState />);

    expect(queryByText(/Icon/)).toBeNull();
    expect(queryByText("No data")).toBeNull();
    expect(queryByText("We couldn't find any results.")).toBeNull();
  });

  it("should use onPrimary color when isContrasted is true", () => {
    const { getByText } = render(
      <EmptyState title="Contrast color" isContrasted={true} />
    );

    const text = getByText("Contrast color");
    expect(text.props.color).toBe("#fff");
  });

  it("should use primaryContainer color when isContrasted is false", () => {
    const { getByText } = render(
      <EmptyState title="Default color" isContrasted={false} />
    );

    const text = getByText("Default color");
    expect(text.props.color).toBe("#000");
  });
});
