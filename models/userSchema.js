import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
   studentId: {
      type: Number,
      unique: true,
      required: true,
   },
   email: {
      type: String,
      unique: true,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   major: {
      type: String,
      required: true,
   },
   year: {
      type: String,
      required: true,
   }
},
);

export default mongoose.model("User", userSchema);