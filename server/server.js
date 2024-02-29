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
import router from "./routes/user.routes.js";
import router2 from "./routes/llm.routes.js";
import cookieParser from "cookie-parser";
import router3 from "./routes/conversation.routes.js";

const app = express();
app.use(
  express.json(),
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
//route for login and registration stuff
app.use("/api", router);
app.use("/api", router2);

app.use("/api", router3);
dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
