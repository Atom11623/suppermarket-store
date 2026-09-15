import type { Config, Context } from "@netlify/functions";
import { getUser } from "@netlify/identity";
import { db } from "../../db/index.js";
import { orders } from "../../db/schema.js";

type CartItemPayload = {
  id: string;
  name: string;
  unit: string;
  price: number;
  wholesalePrice: number;
  wholesaleMinimum: number;
  quantity: number;
};

function lineTotal(item: CartItemPayload) {
  const unitPrice =
    item.quantity >= item.wholesaleMinimum ? item.wholesalePrice : item.price;
  return unitPrice * item.quantity;
}

export default async (req: Request, context: Context) => {
  if (req.method === "POST") {
    const body = await req.json();
    const { customerName, customerPhone, customerAddress, notes, items } =
      body as {
        customerName?: string;
        customerPhone?: string;
        customerAddress?: string;
        notes?: string;
        items?: CartItemPayload[];
      };

    if (
      !customerName?.trim() ||
      !customerPhone?.trim() ||
      !items?.length
    ) {
      return Response.json(
        { error: "Name, phone and at least one item are required." },
        { status: 400 }
      );
    }

    const total = items.reduce((sum, item) => sum + lineTotal(item), 0);

    const [order] = await db
      .insert(orders)
      .values({
        customerName: customerName.trim(),
        customerPhone: customerPhone.trim(),
        customerAddress: customerAddress?.trim() || null,
        notes: notes?.trim() || null,
        items,
        total,
        status: "pending",
      })
      .returning();

    return Response.json({ order }, { status: 201 });
  }

  if (req.method === "GET") {
    const user = await getUser();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const allOrders = await db
      .select()
      .from(orders)
      .orderBy(orders.createdAt);

    return Response.json({ orders: allOrders.reverse() });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config: Config = {
  path: "/api/orders",
  method: ["GET", "POST"],
};
