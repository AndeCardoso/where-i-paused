import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "expo-router";

import { contentTypeOptions } from "@constants/contentTypeOptions";
import { formatTimeToSeconds } from "@utils/formatTime";
import { TContentTypes } from "@domain/entities/Pause";
import { usePauseDb } from "@hooks/usePauseDb";

import { IAddForm } from "./model";

export const useAddViewModel = () => {
  const { back } = useRouter();
  const { create } = usePauseDb();

  const {
    watch,
    reset,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FieldValues, IAddForm>({});

  const onSubmit = async (values: IAddForm | FieldValues) => {
    const response = await create({
      title: values.title,
      contentType: values.contentType,
      totalTime: values.totalTime,
      paused: values.paused,
    });

    if (response) {
      back();
    }
  };

  const contentType: TContentTypes = watch("type")?.value;
  const totalTime = formatTimeToSeconds(watch("totalTime"));

  return {
    reset,
    control,
    onSubmit,
    handleSubmit,
    contentTypeOptions,
    formValues: {
      totalTime,
      contentType,
    },
    viewState: { isValid },
  };
};
