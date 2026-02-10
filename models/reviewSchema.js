import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
   {
      resourceName: {
         type: String,
         required: true,
      },
      userId: {
         type: Number,
         required: true,
      },
      rating: {
         type: Number,
         required: true,
         min: 0,
         max: 5,
      },
      pros: {
         type: [String],
         required: true,
      },
      cons: {
         type: [String],
         required: true,
      },
      comment: {
         type: String,
      },
   },
   { timestamps: true },
);


// Indexes 
reviewSchema.index({ rating: 1 });
reviewSchema.index({ timestamps: 1 });

export default mongoose.model("Review", reviewSchema);