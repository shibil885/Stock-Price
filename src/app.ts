import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { connectDB } from "./config/db.config";

dotenv.config();
const app = express();
const httpServer = createServer(app);
const port = process.env.PORT;

connectDB();

httpServer.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
