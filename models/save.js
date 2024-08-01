import mongoose from "mongoose";

const saveSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      require: true,
    },
  },
  { timestamps: true }
);

const Save = mongoose.model("Save", saveSchema);
export default Save;
