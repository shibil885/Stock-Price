import express from "express";
import { StockController } from "../controllers/stock.controller";

const router = express.Router();
const stockController = new StockController();

router.get("/stock-price", (req, res) => {
  stockController.getOrSetStock(req, res);
});

export default router;
