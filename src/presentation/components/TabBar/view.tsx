import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { BlurView } from "expo-blur";
import { useTheme } from "react-native-paper";
import { headerTheme } from "@styles/header";
import { ITabBarProps } from "./model";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const TabBar = ({ tabButtons }: ITabBarProps) => {
  const { colors } = useTheme();
  const baseScreenOptions = headerTheme(colors);

  return (
    <Tabs
      initialRouteName="index"
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        ...baseScreenOptions,
        tabBarBackground: () => (
          <View style={{ flex: 1, borderRadius: 8, overflow: "hidden" }}>
            <BlurView
              intensity={40}
              tint="dark"
              style={{
                flex: 1,
                backgroundColor: colors.backgroundBlur,
              }}
            />
          </View>
        ),
        animation: "shift",
      }}
    >
      {tabButtons.map(({ name, title, icon, hasHeader }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: title,
            headerShown: hasHeader,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                size={focused ? 30 : 24}
                name={icon as any}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};
