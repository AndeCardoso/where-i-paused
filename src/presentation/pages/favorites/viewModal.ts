import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { usePauseDb } from "@hooks/usePauseDb";
import { IPauseDomain } from "@domain/entities/Pause";

export const useFavoritesModelView = () => {
  const [pausesData, setPausesData] = useState<IPauseDomain[]>([]);

  const { remove, favorite, listFavorited, hasChange } = usePauseDb();

  const getPauses = async () => {
    try {
      const data = await listFavorited();
      if (data) {
        setPausesData(data);
      }
    } catch (error) {
      console.log("e", error);
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

  return { pausesData, remove, onFavorite };
};
