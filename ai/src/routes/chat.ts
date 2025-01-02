import { Hono } from "hono";
import ollama from "ollama";

const chat = new Hono();

chat.post("/generate", async (c) => {
  try {
    const { prompt } = await c.req.json();
    const response = await ollama.chat({
      model: "llama3.2:1b",
      messages: [{ role: "user", content: prompt }],
    });
    return c.json({ message: response.message.content });
  } catch (error) {
    console.error('Chat API Error:', error);
    return c.json({ 
      success: false, 
      error: error.message || 'Failed to generate response' 
    }, 500);
  }
});

export default chat; 