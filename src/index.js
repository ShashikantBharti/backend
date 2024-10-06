import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
connectDB();

/*

const app = express();

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    app.on("error", (error) => {
      console.log(`Error: ${error}`);
      throw error;
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
})();

*/
