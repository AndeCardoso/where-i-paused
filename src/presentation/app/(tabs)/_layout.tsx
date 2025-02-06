import { Tabs } from "expo-router";
import { useTheme } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { headerTheme } from "@styles/header";

export default function TabLayout() {
  const { colors } = useTheme();
  const baseScreenOptions = headerTheme(colors);

  return (
    <Tabs
      initialRouteName="index"
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        ...baseScreenOptions,
      }}
    >
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="star" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recents"
        options={{
          title: "Recents",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="clock-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
