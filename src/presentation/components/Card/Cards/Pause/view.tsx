import React from "react";
import { View, Animated } from "react-native";
import { remapProps } from "nativewind";
import { IconButton, useTheme } from "react-native-paper";

import { Text } from "@components/base/Text/view";
import { Card } from "@components/Card/view";
import { Slider } from "@components/base/Slider/view";

import { formatSecondsToTime, formatTimeToSeconds } from "@utils/formatTime";
import { IPauseCardProps } from "./model";
import { Chip } from "@components/base/Chip/view";
import { usePauseCardViewModel } from "./viewModel";

const CustomizedCard = remapProps(Card, {
  contentStyle: "contentStyle",
});

const CustomizedChip = remapProps(Chip, {
  textStyle: "textStyle",
});

export const PauseCard = ({
  onFavorite,
  onDelete,
  onEdit,
  data: { id, title, contentType, totalTime, paused, favorited },
}: IPauseCardProps) => {
  const { colors } = useTheme();
  const {
    toggleActions,
    animatedHeight,
    animatedOpacity,
    rotate,
    viewState: { shouldRenderActions },
  } = usePauseCardViewModel();

  const handleOpenCard = () => {
    toggleActions();
  };

  const timelinePosition =
    Number(paused) / Number(formatTimeToSeconds(totalTime));

  return (
    <CustomizedCard
      contentStyle="w-full rounded-[15] border-b-8 border-b-primary"
      onPress={handleOpenCard}
    >
      <Card.Content className="w-full flex-row pb-4 gap-2 self-center items-center justify-between">
        <View className=" flex-1">
          <View className="flex-row justify-between">
            <Text size={24} weight="600">
              {title}
            </Text>
            <CustomizedChip textStyle="uppercase">{contentType}</CustomizedChip>
          </View>
          <View className="flex-row gap-2">
            <Text className="self-center">
              {formatSecondsToTime(Number(paused))}
            </Text>
            <Slider
              maximumValue={formatTimeToSeconds(totalTime)}
              value={timelinePosition}
              disabled
            />
            <Text className="self-center">{totalTime}</Text>
          </View>
        </View>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <IconButton
            icon="chevron-down"
            iconColor={colors.primary}
            mode="contained"
            style={{ margin: 0 }}
            size={30}
          />
        </Animated.View>
      </Card.Content>

      <Animated.View
        style={{
          height: animatedHeight,
          opacity: animatedOpacity,
          overflow: "hidden",
        }}
      >
        <Card.Actions>
          <View className="w-full flex-row justify-around">
            <IconButton
              size={30}
              icon="trash-can"
              iconColor={colors.primary}
              containerColor="transparent"
              mode="contained"
              onPress={() => onDelete(id)}
            />
            <IconButton
              size={30}
              icon={`star${favorited ? "" : "-outline"}`}
              iconColor={colors.primary}
              containerColor="transparent"
              mode="contained"
              onPress={() => onFavorite(id, !favorited)}
            />
            <IconButton
              size={30}
              icon="clock-edit-outline"
              iconColor={colors.primary}
              containerColor="transparent"
              mode="contained"
              onPress={() => onEdit(id)}
            />
          </View>
        </Card.Actions>
      </Animated.View>
    </CustomizedCard>
  );
};
