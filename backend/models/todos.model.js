import mongoose , { Schema } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
},{timestamps:true});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;