import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  created_by_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  caption: {
    type: String,
    require: true,
  },
  media_file: {
    type: String,
    require: true,
  },
});

const Post = mongoose.model("post", postSchema);
export default Post;
