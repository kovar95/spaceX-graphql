import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  favouriteMissions: [String],
});

export default model("User", userSchema);
