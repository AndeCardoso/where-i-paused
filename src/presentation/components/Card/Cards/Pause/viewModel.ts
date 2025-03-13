import { useRef, useState } from "react";
import { Animated, Easing } from "react-native";

export const usePauseCardViewModel = () => {
  const [shouldRenderActions, setShouldRenderActions] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  const toggleActions = () => {
    setShouldRenderActions((prev) => !prev);

    Animated.timing(opacityAnimation, {
      toValue: shouldRenderActions ? 0 : 1,
      duration: 1500,
      easing: Easing.inOut(Easing.exp),
      useNativeDriver: false,
    }).start(() => {
      if (shouldRenderActions) {
        setShouldRenderActions(false);
      } else {
        setShouldRenderActions(true);
      }
    });

    Animated.timing(animation, {
      toValue: shouldRenderActions ? 0 : 1,
      duration: 1000,
      easing: Easing.inOut(Easing.exp),
      useNativeDriver: false,
    }).start(() => {
      if (shouldRenderActions) {
        setShouldRenderActions(false);
      } else {
        setShouldRenderActions(true);
      }
    });

    Animated.timing(rotateAnimation, {
      toValue: shouldRenderActions ? 0 : 1,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 70],
  });

  const animatedOpacity = opacityAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-180deg"],
  });

  return {
    rotate,
    animatedOpacity,
    animatedHeight,
    toggleActions,
    viewState: { shouldRenderActions },
  };
};
