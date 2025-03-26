import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { connectDB } from "./config/db.config";
import stockRouter from "./routes/stock.router";
dotenv.config();
const app = express();
const httpServer = createServer(app);
const port = process.env.PORT;

connectDB();

app.use("/api", stockRouter);

httpServer.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
