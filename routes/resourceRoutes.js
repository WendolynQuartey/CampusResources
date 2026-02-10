import express from "express";
import Resource from "../models/resourceSchema.js";

const router = express.Router();

router.route("/")
   // Create
   .post(async (req, res) => {
      let newResource = await Resource.insertOne(req.body);

      res.json(newResource);
   })
   // Read - Show All
   .get(async (req, res) => {
      let allResources = await Resource.find({});

      res.json(allResources);
   });

router.route("/:id")
   // Update
   .put(async (req, res) => {
      let updateResource = await Resource.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true});
      if(!updateResource) return res.status(404).json({error: "Resource Not Found!!"});
      else res.json(updateResource);
   })
   // Delete
   .delete(async (req, res) => {
      let deletedResource = await Resource.findByIdAndDelete(req.params.id);
      if(!deletedResource) return res.status(404).json({error: "Resource Not Found!!"});
      else res.json(deletedResource);
   })
   // Show One
   .get(async (req, res) => {
      let oneResource = await Resource.findById(req.params.id);
      if(!oneResource) return res.status(404).json({error: "Resource Not Found!!"});
      else res.json(oneResource);
   });

// router.route("/category/:name").get(async (req, res) => {
//    let cat = await Resource.find({category: req.params.category.enumValues()});
//    if(!cat) return res.status(404).json({error: "Category Not Found!!"});
//    else res.json(cat);
// });

export default router;