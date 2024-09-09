import { serve } from "@hono/node-server";
import { Hono } from "hono";
import "dotenv/config";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port: number = process.env.PORT ? Number(process.env.port) : 8080;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
