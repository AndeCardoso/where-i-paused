import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { IPauseDomain } from "@domain/entities/Pause";
import { usePauseDb } from "@hooks/usePauseDb";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const useRecentsViewModel = () => {
  const [opennedCard, setOpennedCard] = useState<number>();
  const [pausesData, setPausesData] = useState<IPauseDomain[]>([]);

  const { listRecents, remove, favorite } = usePauseDb();

  const handleOpenCard = (value: number) => {
    setOpennedCard((prevState) => (prevState === value ? undefined : value));
  };

  const getPauses = async () => {
    try {
      const data = await listRecents();
      if (data) {
        setPausesData(data);
      }
    } catch (error) {
      console.log("e", error);
    }
  };

  const onDelete = async (id: number) => {
    await remove(id);
    getPauses();
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

  return {
    pausesData,
    onDelete,
    onFavorite,
    handleOpenCard,
    viewState: { opennedCard },
  };
};
