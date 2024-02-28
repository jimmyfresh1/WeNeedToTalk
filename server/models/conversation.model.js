import { model, Schema } from "mongoose";

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
      required: [true, "Password is required!"],
      minlength: [10, "Password must be atleast five characters"],
    },
  },
  { timeStamps: true }
);
const User = model("Conversation", ConversationSchema);
export default Conversation;
