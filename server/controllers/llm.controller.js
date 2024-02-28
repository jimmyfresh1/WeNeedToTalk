import { completionCall } from "../models/api.model.js";

async function fullCall(req, res) {
  try {
    //the full chat history is sent as the request body
    const { messages, maxTokens } = req.body;
    const response = await completionCall(messages, maxTokens);
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
}

export { fullCall };
