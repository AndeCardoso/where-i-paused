jest.mock("expo-font", () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn().mockReturnValue(true),
}));

jest.mock("react-native-paper", () => {
  const actual = jest.requireActual("react-native-paper");

  return {
    ...actual,
    Icon: (props) => {
      return <mock-icon {...props} />;
    },
  };
});

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
);

global.__reanimatedWorkletInit = () => {};

const originalError = console.error;

jest.spyOn(console, "error").mockImplementation((msg, ...args) => {
  if (msg.toString().includes("Warning: An update to Animated")) {
    return;
  }
  if (msg.toString().includes("act(...)" )) {
    return;
  }
  originalError(msg, ...args);
});