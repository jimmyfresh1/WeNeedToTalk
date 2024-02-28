import Conversation from "../models/conversation.model";

async function getTsundereConvos(req, res) {
  try {
    const tsundereConvos = await Conversation.find({ character: "tsundere" });
    res.json(tsundereConvos);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
export { getTsundereConvos };
