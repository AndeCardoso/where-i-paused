import React from "react";
import { FlatList } from "react-native";

import { Layout } from "@components/Layout/view";
import { PauseCard } from "@components/Card/Cards/Pause/view";

import { useRecentsViewModel } from "./viewModel";
import { EmptyState } from "@components/EmptyState/view";

export const RecentsView = () => {
  const {
    pausesData,
    onDelete,
    onFavorite,
    handleOpenCard,
    viewState: { opennedCard },
  } = useRecentsViewModel();
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
            />
          )}
          contentContainerClassName="gap-4 p-4"
          ListEmptyComponent={
            <EmptyState
              icon={"pause-circle-outline"}
              title="You don't have pauses"
              subtitle="When you add a new pause, it will appears here"
            />
          }
        />
      </Layout.Content>
    </Layout>
  );
};
