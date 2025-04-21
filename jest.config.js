module.exports = {
  preset: "jest-expo", 
  setupFiles: ["<rootDir>/__tests__/setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native|@react-navigation|react-native-paper|expo-font|@expo|expo(-.*)?))",
  ],
};