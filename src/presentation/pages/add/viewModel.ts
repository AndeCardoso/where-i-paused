import { useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";

import { ISelectOption } from "@components/base/Select/model";
import { EContentTypes, IPauseDomain } from "@domain/entities/Pause";
import { contentTypeOptions } from "@constants/contentTypeOptions";
import { formatTimeToSeconds } from "@utils/formatTime";
import { usePauseDb } from "@hooks/usePauseDb";

export const useAddViewModel = () => {
  const { back } = useRouter();
  const { create } = usePauseDb();
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  const {
    watch,
    reset,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IPauseDomain>({
    defaultValues: {
      title: "",
      contentType: EContentTypes.MOVIE,
      totalTime: "",
      paused: "",
      season: 1,
      episode: 1,
      favorited: false,
    },
  });

  const totalTime = formatTimeToSeconds(watch("totalTime"));
  const contentType = watch("contentType");

  const onSubmit = async (values: IPauseDomain) => {
    const response = await create({
      ...values,
      contentType: values.contentType,
    });

    if (response) {
      back();
    }
  };

  const onReset = async () => {
    reset();
  };

  const handleChangeContentType = (value: ISelectOption) => {
    triggerAnimations(value.value === "series");
  };

  const triggerAnimations = (shouldShow: boolean) => {
    height.value = withSpring(shouldShow ? 100 : 0, {
      damping: 50,
      stiffness: 50,
    });

    opacity.value = withTiming(shouldShow ? 1 : 0, {
      duration: 300,
    });
  };

  const animatedHeightStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const animatedOpacityStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return {
    control,
    onReset,
    onSubmit,
    handleSubmit,
    animatedHeightStyle,
    animatedOpacityStyle,
    contentTypeOptions,
    handleChangeContentType,
    formValues: {
      totalTime,
    },
    viewState: { isValid },
  };
};
