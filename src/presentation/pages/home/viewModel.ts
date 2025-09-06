import { useCallback, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { IPauseDomain } from "@domain/entities/Pause";
import { usePauseDb } from "@hooks/usePauseDb";
import { ROUTES_NAMES_ENUM } from "@routes/index";
import { useSentry } from "@hooks/useSentry";

export const useHomeViewModel = () => {
  const [opennedCard, setOpennedCard] = useState<number>();
  const [pausesData, setPausesData] = useState<IPauseDomain[]>([]);

  const { listRecents, remove, favorite } = usePauseDb();
  const { onError } = useSentry();
  const { navigate } = useRouter();

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
      onError(error);
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

  const goToAdd = () => {
    navigate({ pathname: ROUTES_NAMES_ENUM.ADD });
  };

  useFocusEffect(
    useCallback(() => {
      getPauses();
    }, [])
  );

  const isEmpty = pausesData.length === 0;

  return {
    pausesData,
    goToAdd,
    onDelete,
    onFavorite,
    handleOpenCard,
    viewState: { opennedCard, isEmpty },
  };
};
