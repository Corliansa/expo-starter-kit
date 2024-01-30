import { sql } from "drizzle-orm";
import { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";

export function resetDb(db: ExpoSQLiteDatabase<any>) {
  db.all(sql.raw("SELECT name FROM sqlite_master WHERE type='table';")).forEach(
    (table: { name: string }) => {
      switch (table.name) {
        case "sqlite_sequence":
          db.run(sql.raw("DELETE FROM sqlite_sequence;"));
          break;
        default:
          db.run(sql.raw(`DROP TABLE IF EXISTS ${table.name};`));
      }
    }
  );
}
