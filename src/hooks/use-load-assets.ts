import { db } from "@/db/client";
import migrations from "@/drizzle/migrations";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function useLoadAssets() {
  const { success: migrationsSuccess, error: migrationsError } = useMigrations(
    db,
    migrations,
  );

  useEffect(() => {
    if (migrationsError) throw migrationsError;
  }, [migrationsError]);

  useEffect(() => {
    if (migrationsSuccess) {
      SplashScreen.hideAsync();
    }
  }, [migrationsSuccess]);

  return { success: migrationsSuccess };
}
