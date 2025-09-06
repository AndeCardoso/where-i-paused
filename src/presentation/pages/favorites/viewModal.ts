import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";

import { usePauseDb } from "@hooks/usePauseDb";
import { useSentry } from "@hooks/useSentry";
import { IPauseDomain } from "@domain/entities/Pause";

export const useFavoritesModelView = () => {
  const [pausesData, setPausesData] = useState<IPauseDomain[]>([]);
  const [opennedCard, setOpennedCard] = useState<number>();

  const { remove, favorite, listFavorited } = usePauseDb();
  const { onError } = useSentry();

  const handleOpenCard = (value: number) => {
    setOpennedCard((prevState) => (prevState === value ? undefined : value));
  };

  const onDelete = async (id: number) => {
    await remove(id);
    getPauses();
  };

  const getPauses = async () => {
    try {
      const data = await listFavorited();
      if (data) {
        setPausesData(data);
      }
    } catch (error) {
      onError(error);
    }
  };

  const onFavorite = async (id: number, bol: boolean) => {
    await favorite(id, bol);
    getPauses();
  };

  useFocusEffect(
    useCallback(() => {
      getPauses();
    }, [])
  );

  const isEmpty = pausesData.length === 0;

  return {
    onDelete,
    pausesData,
    onFavorite,
    handleOpenCard,
    viewState: { opennedCard, isEmpty },
  };
};
