import React from "react";
import { Tabs } from "expo-router";
import { Platform, View } from "react-native";
import { BlurView } from "expo-blur";
import { useTheme } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { headerTheme } from "@styles/header";
import { ITabBarProps } from "./model";

const ios = Platform.OS === "ios";

export const TabBar = ({ tabButtons }: ITabBarProps) => {
  const { colors } = useTheme();
  const baseScreenOptions = headerTheme(colors);

  return (
    <Tabs
      initialRouteName="index"
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        ...baseScreenOptions,
        tabBarActiveTintColor: colors.onPrimary,
        tabBarInactiveTintColor: colors.tertiary,
        tabBarStyle: {
          borderRadius: 12,
          bottom: 24,
          margin: 24,
          borderTopWidth: 0,
          position: "absolute",
          backgroundColor: ios ? "transparent" : colors.primaryContainer,
          elevation: ios ? 0 : 4,
        },
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <BlurView
              intensity={20}
              tint={ios ? "dark" : "light"}
              style={{
                flex: 1,
                backgroundColor: ios ? colors.backgroundBlur : colors.primary,
              }}
            />
          </View>
        ),
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
