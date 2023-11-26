import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authHandler from "./route/auth.js";

const PORT = process.env.PORT;
const app = express();

const corsOptions = {
  origin: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/auth/", authHandler);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Db connected successfully");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("server running");
});
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
