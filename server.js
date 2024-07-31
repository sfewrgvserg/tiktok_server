import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
  }
});
