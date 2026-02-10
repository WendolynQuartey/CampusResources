import mongoose from "mongoose";
import dotenv from "dotenv";
import Resource from "../models/resourceSchema.js";
import resourceData from "./resourceData.js";
import Review from "../models/reviewSchema.js";
import revieweData from "./reviewData.js";
import User from "../models/userSchema.js";
import userData from "./userData.js";

dotenv.config();

const connectionStr = process.env.MOGO_URI || "";

async function seedDatabase() {
   console.log("🚀 Starting Seed...");
   try {
      await mongoose.connect(connectionStr);
      console.log("✅Connected to DB");

      await Review.deleteMany({});
      await Resource.deleteMany({});
      await User.deleteMany({});
      console.log("✅ Deleted Previous");

      await Review.create(revieweData);
      console.log("✅ Added New Reviews");
      await Resource.create(resourceData);
      console.log("✅ Added New Resources");
      await User.create(userData);
      console.log("✅ Added New Users");

      console.log("🎉 Successfully Seeded!");
      process.exit(1);

   } catch (error) {
      console.error(error.message);
      process.exit(1);
   }
}

seedDatabase();