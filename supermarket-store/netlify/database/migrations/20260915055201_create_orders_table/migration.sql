CREATE TABLE "orders" (
	"id" serial PRIMARY KEY,
	"customer_name" text NOT NULL,
	"customer_phone" text NOT NULL,
	"customer_address" text,
	"notes" text,
	"items" jsonb NOT NULL,
	"total" integer NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now()
);
