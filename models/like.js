import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
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

const Like = mongoose.model("like", likeSchema);

export default Like;
