import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config({
  path: "./env",
});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `Connection Eshtablished! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`Connection Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
