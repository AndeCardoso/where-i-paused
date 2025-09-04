module.exports = {
  preset: "jest-expo", 
  setupFiles: ["<rootDir>jest.setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native|@react-navigation|react-native-paper|expo-font|@expo|expo(-.*)?))",
  ],
};