import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { connectDB } from "./config/db";
import authRouter from "./routers/auth";
import productRouter from "./routers/product";
import categoryRouter from "./routers/category";
import cartRouter from "./routers/cart";
import orderRouter from "./routers/order";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// Connect DB
const dbURI = process.env.MONGO_URI || "mongodb://localhost:27017/web209";
connectDB(dbURI).catch((err) => {
  console.error("Failed to connect to the database:", err);
  process.exit(1); // Exit the application if the database connection fails
});

// Routers
app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", cartRouter);
app.use("/api", orderRouter);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export const viteNodeApp = app;
