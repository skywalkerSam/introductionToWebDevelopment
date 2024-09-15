import { serve } from "@hono/node-server";
import { Hono } from "hono";
import "dotenv/config";
import Stripe from "stripe";
import { HTTPException } from "hono/http-exception";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const app = new Hono();

app.get("/", (c) => {
  return c.text("Welcome to Starboy Payments API...");
});

app.get("/success", (c) => {
  return c.json("Payment Successful🎉🎉");
});

app.get("/cancel", (c) => {
  return c.json("Payment Cancelled❗");
});

app.post("/checkout", async (c) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.PRICE_ID!,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:" + port + "/success",
      cancel_url: "http://localhost:" + port + "/cancel",
    });

    return c.json(session);
  } catch (error: any) {
    console.error(error);
    throw new HTTPException(500, { message: error?.message });
  }
});

const port: number = process.env.PORT ? Number(process.env.port) : 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

/** .env
 * PORT
 * STRIPE_PUBLISHABLE_KEY=
 * STRIPE_SECRET_KEY=
 * STRIPE_WEBHOOK_SECRET=
 * PRICE_ID=
 */

/** Example cards
 * https://docs.stripe.com/testing
 *
 */

/**
 * bun run dev
 */
