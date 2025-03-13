import React from "react";
import { useRouter } from "expo-router";

import { time } from "@utils/masks";
import { Layout } from "@components/Layout/view";
import { Button } from "@components/base/Button/view";
import { ControlledTextInput } from "@components/ControlledInputs/TextInput/view";
import { ControlledSelectInput } from "@components/ControlledInputs/SelectInput/view";
import { ControlledSliderInput } from "@components/ControlledInputs/SliderInput/view";

import { useAddViewModel } from "./viewModel";

export const AddView = () => {
  const { back } = useRouter();
  const {
    reset,
    control,
    onSubmit,
    handleSubmit,
    contentTypeOptions,
    formValues: { totalTime, contentType },
    viewState: { isValid },
  } = useAddViewModel();

  return (
    <Layout>
      <Layout.Content
        hasScroll
        className="h-full px-4 pt-4"
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
          modalTitle="Content type"
          options={contentTypeOptions}
        />
        {/* <ControlledTextInput
          name="genre"
          label="Genre"
          placeholder="E.g. Drama"
          control={control}
        /> */}
        {/* <ControlledTextInput
          name="description"
          label="Description"
          placeholder="E.g. A poor artist and a rich debutante meet and fall in love on the famously ill-fated maiden voyage of the `unsinkable' RMS Titanic in 1912."
          control={control}
          textArea
        /> */}
        {contentType === "serie" ? (
          <>
            <ControlledTextInput
              name="season"
              label="Season"
              placeholder="E.g. Drama"
              control={control}
            />
            <ControlledTextInput
              name="episode"
              label="Episode"
              placeholder="E.g. 06"
              control={control}
            />
          </>
        ) : null}
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
      />
      <Layout.Footer>
        <Button mode="outlined" onPress={reset}>
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
