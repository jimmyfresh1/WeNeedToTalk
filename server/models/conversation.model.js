import { model, Schema, mongoose } from "mongoose";

const ConversationSchema = new Schema(
  {
    title: {
      type: String,
      required: [true],
      minlength: [1],
      maxlength: [50],
    },
    character: {
      type: String,
      required: [true],
      minlength: [1],
    },
    message_list: {
      type: String,
      required: [true],
      minlength: [10],
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timeStamps: true }
);
const Conversation = model("Conversation", ConversationSchema);
export default Conversation;
