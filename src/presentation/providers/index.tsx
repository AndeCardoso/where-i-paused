import React, { PropsWithChildren } from "react";
import { PaperProvider } from "react-native-paper";
import { SQLiteProvider } from "expo-sqlite";
import { theme } from "@styles/paperTheme/theme";
import { initializeDatabase } from "@infra/db/initializeDb";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SQLiteProvider
      databaseName="whereipaused.db"
      onInit={initializeDatabase}
      options={{
        enableChangeListener: true,
      }}
    >
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </SQLiteProvider>
  );
};
