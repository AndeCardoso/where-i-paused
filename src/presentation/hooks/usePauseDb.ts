import { useSQLiteContext } from "expo-sqlite";
import { IPauseDomain } from "@domain/entities/Pause";
import { IAddForm } from "@pages/add/model";
import { useEffect, useState } from "react";

export const usePauseDb = () => {
  const [hasChange, setHasChange] = useState(false);
  const db = useSQLiteContext();

  const create = async ({
    title,
    contentType,
    totalTime,
    paused,
    season,
    episode,
  }: IAddForm) => {
    const statement = await db.prepareAsync(
      `INSERT INTO pauses (title, contentType, totalTime, paused, season, episode) VALUES ($title, $contentType, $totalTime, $paused, $season, $episode)`
    );

    try {
      const result = await statement.executeAsync({
        $title: title,
        $contentType: contentType,
        $totalTime: totalTime,
        $paused: Number(paused),
        $season: season,
        $episode: episode,
      });

      return Boolean(result);
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  };

  const update = async (data: Partial<IPauseDomain>) => {
    if (!data) return;

    const { id, title, contentType, totalTime, paused, season, episode } = data;

    const statement = await db.prepareAsync(
      `UPDATE pauses
      SET title = ${title}, contentType = ${contentType}, totalTime = ${totalTime}, paused = ${paused}, season = ${season}, episode = ${episode}
      WHERE id = ${id}`
    );

    try {
      await statement.executeAsync();
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  };

  const remove = async (id: number) => {
    try {
      await db.execAsync(`DELETE FROM pauses WHERE id = ${id}`);
    } catch (error) {
      throw error;
    }
  };

  const getById = async (id: number) => {
    try {
      return await db.getFirstAsync<IPauseDomain>(
        `SELECT * FROM pauses WHERE id = ${id}`
      );
    } catch (error) {
      throw error;
    }
  };

  const listWithSearch = async (name?: string) => {
    try {
      return await db.getAllAsync<IPauseDomain>(`SELECT * FROM pauses`);
    } catch (error) {
      throw error;
    }
  };

  const listRecents = async (limit?: number) => {
    try {
      return await db.getAllAsync<IPauseDomain>(
        `SELECT * FROM pauses ORDER BY id DESC LIMIT ${limit || 10}`
      );
    } catch (error) {
      throw error;
    }
  };

  const listFavorited = async (name?: string) => {
    try {
      return await db.getAllAsync<IPauseDomain>(
        "SELECT * FROM pauses WHERE favorited = 1"
      );
    } catch (error) {
      throw error;
    }
  };

  const favorite = async (id: number, bol: boolean) => {
    const statement = await db.prepareAsync(
      `UPDATE pauses
      SET favorited = ${bol ? 1 : 0}
      WHERE id = ${Number(id)}`
    );

    try {
      statement.executeAsync();
    } catch (error) {
      throw error;
    } finally {
      statement.finalizeAsync();
    }
  };

  useEffect(() => {
    setHasChange((prevState) => !prevState);
  }, [db.isInTransactionAsync]);

  return {
    create,
    update,
    remove,
    listRecents,
    listWithSearch,
    listFavorited,
    getById,
    favorite,
    hasChange,
  };
};
