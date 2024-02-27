import OpenAI from "openai"; //openai for api call
const openai = new OpenAI(process.env.OPENAI_API_KEY);

//langsmith imports, which needs unique id to do tracing
import { v4 as uuidv4 } from "uuid";
const uniqueId = uuidv4().slice(0, 8);
process.env.LANGCHAIN_PROJECT = `JS Tracing Walkthrough - ${uniqueId}`;
import { RunTree } from "langsmith";

//MERN stuff taught in class
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/user.routes.js"



const app = express();
app.use(express.json(), cors());
//route for login and registration stuff
app.use("/api", router);
dotenv.config();

//the actual api call
app.post("/chat", async (req, res) => {
  try {
    //the full chat history is sent as the request body
    const { messages } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: messages,
      max_tokens: 60,
      temperature: 1.2,
      frequency_penalty: 1.1,
      presence_penalty: 1.1,
      n: 1,
    });

    //below is just pipeline stuff for langsmith to run traces
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
    console.log(response);
    // above is pipeline stuff for langsmith

    //if it responds, then resolve the response to an object, else give an error
    if (response) {
      res.json({ response: response.choices[0].message.content });
    } else {
      res
        .status(500)
        .json({ error: "Unexpected response structure", details: response });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
