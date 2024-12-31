import { serve } from "@hono/node-server";
import { Hono } from "hono";
import ollama from "ollama";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors({
  origin: "http://localhost:5173",
}));

app.post("/generate", async (c) => {
  const { prompt } = await c.req.json();
  const response = await ollama.chat({
    model: "qwen2.5:3b",
    messages: [{ role: "user", content: prompt }],
  });
  return c.json({ message: response.message.content });
});

serve({ fetch: app.fetch, port: 3002 });