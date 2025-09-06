import { useState } from "react";
import {
  withTiming,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

export const usePauseCardViewModel = () => {
  const [renderActions, setRenderActions] = useState(false);

  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const rotation = useSharedValue(0);

  const toggleActions = () => {
    const next = !renderActions;
    setRenderActions(next);
    triggerAnimations(next);
  };

  const triggerAnimations = (next: boolean) => {
    height.value = next
      ? withSpring(70, { damping: 8, stiffness: 120 })
      : withTiming(0.1, { duration: 250 });

    opacity.value = withTiming(next ? 1 : 0, { duration: 300 });

    rotation.value = next
      ? withSpring(180, { damping: 8, stiffness: 120 })
      : withTiming(0, { duration: 250 });
  };

  const animatedHeight = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const rotate = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return {
    rotate,
    animatedOpacity,
    animatedHeight,
    toggleActions,
    viewState: { renderActions },
  };
};
