import React from "react";
import { FlatList, Image, ImageBackground, Platform, View } from "react-native";

import { Layout } from "@components/Layout/view";
import { PauseCard } from "@components/Card/Cards/Pause/view";
import { EmptyState } from "@components/EmptyState/view";

import BackgroundFull from "@assets/images/background-full.png";
import TextBrandWhite from "@assets/images/text-brand-w.png";

import { useHomeViewModel } from "./viewModel";

export const HomeView = () => {
  const {
    pausesData,
    handleOpenCard,
    goToAdd,
    onDelete,
    onFavorite,
    viewState: { opennedCard, isEmpty },
  } = useHomeViewModel();

  return (
    <Layout.Content>
      <ImageBackground
        source={BackgroundFull}
        className="h-full w-full justify-start items-center py-12"
        resizeMode="cover"
      >
        <Image
          source={TextBrandWhite}
          resizeMethod="resize"
          resizeMode="contain"
          style={{ width: 300, height: 60 }}
        />
        <FlatList
          data={pausesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PauseCard
              data={item}
              onDelete={onDelete}
              onFavorite={onFavorite}
              onEdit={() => {}}
              onOpen={handleOpenCard}
              isOpenned={opennedCard === item.id}
            />
          )}
          contentContainerClassName="gap-4 p-4"
          bounces={!isEmpty}
          centerContent={isEmpty}
          className="flex-1 h-full"
          contentContainerStyle={{ flex: 1 }}
          ListEmptyComponent={
            <View className="flex-1 justify-center">
              <EmptyState
                icon={"pause-circle-outline"}
                title="You don't have pauses"
                subtitle="When you add a new pause, it will appears here"
                isContrasted
              />
            </View>
          }
        />
      </ImageBackground>
      <Layout.FloatingActionButton onPress={goToAdd} />
    </Layout.Content>
  );
};
