import express from "express";
import Review from "../models/reviewSchema.js";

const router = express.Router();

router.route("/")
   // Create
   .post(async (req, res) => {
      let newReview = await Review.insertOne(req.body);

      res.json(newReview);
   })
   // Read - Show All
   .get(async (req, res) => {
      let allReviews = await Review.find(req.body);

      res.json(allReviews);
   });

router.route("/:id")
   // Update
   .put(async (req, res) => {
      let updateReview = await Review.findByIdAndUpdate({new: true, runValidators: true});
      if(!updateReview) return res.status(404).json({error: "Resource Not Found!!"});
      else res.json(updateReview);
   })
   // Delete
   .delete(async (req, res) => {
      let deletedReview = await Review.findByIdAndDelete(req.params.id);
      if(!deletedReview) return res.status(404).json({error: "Resource Not Found!!"});
      else res.json(deletedReview);
   })
   // Show One
   .get(async (req, res) => {
      let oneReview = await Review.findById(req.params.id);
      if(!oneReview) return res.status(404).json({error: "Resource Not Found!!"});
      else res.json(oneReview);
   });

export default router;