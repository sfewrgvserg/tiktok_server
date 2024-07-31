import mongoose from "mongoose";
import "dotenv/config";

const connected = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
  } catch (err) {
    console.error("error for db.js:\n", err.message);
  }
};

export default connected;
