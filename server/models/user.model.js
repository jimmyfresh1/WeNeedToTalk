import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
    {
        login: {
            type: String,
            required: [true, "Login is required!"],
            minlength: [2, "Login must be atleast two characters"],
            maxlength: [50, "Login must be less than 50 characters long"]
        },
        email: {
            type: String
        },
        password: {
            type: String,
            required: [true, "Password is required!"],
            minlength: [5, "Password must be atleast five characters"],
            maxlength: [255, "Password must be less than 255 characters long"]
        }
    },
    { timeStamps: true }
);
const User = model("User", UserSchema);
export default User