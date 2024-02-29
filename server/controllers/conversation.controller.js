import Conversation from "../models/conversation.model.js";

async function getTsundereConvos(req, res) {
  try {
    const tsundereConvos = await Conversation.find({ character: "tsundere" });
    res.json(tsundereConvos);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getSingleTsundereConvo(req, res) {
  try {
    const singleTsundereConvo = await Conversation.findById(req.params.id);
    res.json(singleTsundereConvo);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function createConvo(req, res) {
  try {
    const newConvo = await Conversation.create(req.body);
    res.json(newConvo);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
export { getTsundereConvos, getSingleTsundereConvo, createConvo };
