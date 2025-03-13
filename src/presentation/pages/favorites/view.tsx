import React from "react";
import { FlatList } from "react-native";

import { Layout } from "@components/Layout/view";
import { PauseCard } from "@components/Card/Cards/Pause/view";

import { useFavoritesModelView } from "./viewModal";
import { EmptyState } from "@components/EmptyState/view";

export const FavoritesView = () => {
  const { pausesData, remove, onFavorite } = useFavoritesModelView();
  return (
    <Layout>
      <Layout.Content>
        <FlatList
          data={pausesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PauseCard
              data={item}
              onDelete={remove}
              onFavorite={onFavorite}
              onEdit={() => {}}
            />
          )}
          contentContainerClassName="gap-4 p-4"
          ListEmptyComponent={
            <EmptyState
              icon={"heart-off-outline"}
              title="You don't have favorites"
              subtitle="When you favorite some pause, it will appears here"
            />
          }
        />
      </Layout.Content>
    </Layout>
  );
};
