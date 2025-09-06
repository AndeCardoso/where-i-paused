import React from "react";
import { FlatList, View } from "react-native";

import { Layout } from "@components/Layout/view";
import { PauseCard } from "@components/Card/Cards/Pause/view";

import { useFavoritesModelView } from "./viewModal";
import { EmptyState } from "@components/EmptyState/view";

export const FavoritesView = () => {
  const {
    pausesData,
    onDelete,
    onFavorite,
    handleOpenCard,
    viewState: { opennedCard, isEmpty },
  } = useFavoritesModelView();
  return (
    <Layout>
      <Layout.Content>
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
              isContrasted
            />
          )}
          contentContainerClassName="gap-4 p-4"
          bounces={!isEmpty}
          centerContent={isEmpty}
          className="flex-1 h-full pt-8"
          contentContainerStyle={{ flex: 1 }}
          ListEmptyComponent={
            <View className="flex-1 justify-center">
              <EmptyState
                icon={"heart-off-outline"}
                title="You don't have favorites"
                subtitle="When you favorite some pause, it will appears here"
              />
            </View>
          }
        />
      </Layout.Content>
    </Layout>
  );
};
