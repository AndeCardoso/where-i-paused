import { useState } from "react";
import {
  withTiming,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

export const usePauseCardViewModel = () => {
  const [renderActions, setRenderActions] = useState(false);

  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const rotation = useSharedValue(0);

  const toggleActions = () => {
    setRenderActions((prev) => !prev);
    triggerAnimations();
  };

  const triggerAnimations = () => {
    height.value = withSpring(renderActions ? 0.1 : 70, {
      damping: 5,
      stiffness: 100,
    });

    opacity.value = withTiming(renderActions ? 0 : 1, {
      duration: 300,
    });

    rotation.value = withSpring(renderActions ? 0 : 180, {
      damping: 5,
      stiffness: 100,
    });
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
