import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
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
