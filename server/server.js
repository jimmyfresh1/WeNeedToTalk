import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import { v4 as uuidv4 } from "uuid";
const uniqueId = uuidv4().slice(0, 8);
process.env.LANGCHAIN_PROJECT = `JS Tracing Walkthrough - ${uniqueId}`;

import { RunTree } from "langsmith";
const openai = new OpenAI(process.env.OPENAI_API_KEY);
const app = express();
app.use(express.json(), cors());
dotenv.config();
app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: messages,
    });
    const pipeline = new RunTree({
      name: "Chat Pipeline",
      run_type: "chain",
    });
    const childRun = await pipeline.createChild({
      name: "OpenAI Call",
      run_type: "llm",
      inputs: req.body,
    });
    childRun.end(response.data);
    await childRun.postRun();
    pipeline.end({ outputs: { answer: response.data } });
    await pipeline.postRun();
    console.log(response); // Log the full response for debugging

    if (response) {
      res.json({ response: response.choices[0].message.content });
    } else {
      // If the response structure is not as expected
      res
        .status(500)
        .json({ error: "Unexpected response structure", details: response });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
