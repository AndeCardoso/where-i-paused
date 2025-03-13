import { type SQLiteDatabase } from "expo-sqlite";

export const initializeDatabase = async (database: SQLiteDatabase) => {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS pauses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
			title TEXT NOT NULL,
			contentType TEXT NOT NULL,
			totalTime TEXT NOT NULL,
			paused INTEGER NOT NULL,
      favorited INTEGER DEFAULT 0
    );
  `);
};
