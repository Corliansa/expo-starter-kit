import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import * as schema from "./schema";

const expo = openDatabaseSync("db");
export const db = drizzle(expo, {
  schema,
  logger: process.env.NODE_ENV === "development",
});
