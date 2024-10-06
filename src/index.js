import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}).catch((error) => console.log(`Mongo DB Connection Failed! Error: ${error}`));

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
