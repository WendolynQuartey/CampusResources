import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
   {
   name: {
      type: String,
      required: true,
   },
   description: {
      type: String
   },
   location: {
      building: {
         type: String,
         required: true,
      },
      room: {
         type: Number,
         required: true,
      }
   },
});

export default mongoose.model("Resource", resourceSchema);