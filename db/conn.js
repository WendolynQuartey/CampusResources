import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectStr = proces.env.MONGO_URI || "";

async function connectDB() {
  try {
   await mongoose.connect(connectDB);

   console.log("MongoDB connected...")
  } catch (error) {
   console.error(error.message);
   process.exit(1);
  }
}

export default connectDB;