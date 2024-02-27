import OpenAI from "openai"; //openai for api call
const openai = new OpenAI(process.env.OPENAI_API_KEY);

//langsmith imports, which needs unique id to do tracing
import { v4 as uuidv4 } from "uuid";
const uniqueId = uuidv4().slice(0, 8);
process.env.LANGCHAIN_PROJECT = `JS Tracing Walkthrough - ${uniqueId}`;
import { RunTree } from "langsmith";

async function completionCall(messages) {
  try {
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
      inputs: { messages },
    });
    childRun.end(response.data);
    await childRun.postRun();
    pipeline.end({ outputs: { answer: response.data } });
    await pipeline.postRun();
    console.log(response);
    // above is pipeline stuff for langsmith
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { completionCall };
