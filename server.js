// Imports
import express from "express";
import dotenv from "dotenv";
import {logReq, globalError} from "./middleware/middleware.js";
import connectDB from "./db/conn.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resourceRoutes from "./routes/resourceRoutes.js";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// Middleware
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);
app.use("/api/resources", resourceRoutes);

// Global Error Handling Middleware
app.use(globalError);

// Listener
app.listen(PORT, () => {
   console.log(`Server is Running on PORT: ${PORT}`);
});
