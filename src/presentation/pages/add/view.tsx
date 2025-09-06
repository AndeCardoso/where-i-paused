import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import Animated from "react-native-reanimated";

import { time } from "@utils/masks";

import { Layout } from "@components/Layout/view";
import { Button } from "@components/base/Button/view";
import { ControlledTextInput } from "@components/ControlledInputs/TextInput/view";
import { ControlledSelectInput } from "@components/ControlledInputs/SelectInput/view";
import { ControlledSliderInput } from "@components/ControlledInputs/SliderInput/view";
import { ControlledCounterInput } from "@components/ControlledInputs/CounterInput/view";

import { useAddViewModel } from "./viewModel";

export const AddView = () => {
  const { back } = useRouter();
  const {
    control,
    onReset,
    onSubmit,
    handleSubmit,
    contentTypeOptions,
    animatedHeightStyle,
    animatedOpacityStyle,
    handleChangeContentType,
    formValues: { totalTime },
    viewState: { isValid },
  } = useAddViewModel();

  return (
    <Layout>
      <Layout.Content
        hasScroll
        className="h-full px-4 pt-8"
        contentContainerStyle={{
          rowGap: 12,
        }}
      >
        <ControlledTextInput
          name="title"
          label="Title"
          placeholder="E.g. Titatinc"
          control={control}
        />
        <ControlledSelectInput
          name="contentType"
          label="Content type"
          placeholder="E.g. Movie"
          control={control}
          onSelect={handleChangeContentType}
          modalTitle="Content type"
          options={contentTypeOptions}
        />
        <Animated.View
          style={[
            animatedHeightStyle,
            animatedOpacityStyle,
            { overflow: "hidden" },
          ]}
        >
          <View className="flex-row gap-4 justify-between">
            <ControlledCounterInput
              name="season"
              label="Season"
              control={control}
            />
            <ControlledCounterInput
              name="episode"
              label="Episode"
              control={control}
            />
          </View>
        </Animated.View>
        <ControlledTextInput
          name="totalTime"
          label="Total time"
          placeholder="E.g. 24:16"
          control={control}
          keyboardType="numeric"
          mask={time}
        />
        <ControlledSliderInput
          name="paused"
          label="Where I paused"
          control={control}
          totalValue={Number(totalTime)}
          disabled={!Boolean(totalTime)}
        />
      </Layout.Content>
      <Layout.FloatingActionButton
        icon={"arrow-left"}
        height={24}
        onPress={back}
        isContrasted
      />
      <Layout.Footer>
        <Button mode="outlined" onPress={onReset}>
          RESET
        </Button>
        <Button
          mode="contained"
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        >
          SAVE
        </Button>
      </Layout.Footer>
    </Layout>
  );
};
