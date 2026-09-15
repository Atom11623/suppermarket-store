import { pgTable, serial, text, integer, jsonb, timestamp } from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: serial().primaryKey(),
  customerName: text("customer_name").notNull(),
  customerPhone: text("customer_phone").notNull(),
  customerAddress: text("customer_address"),
  notes: text("notes"),
  items: jsonb("items").notNull(),
  total: integer("total").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});
