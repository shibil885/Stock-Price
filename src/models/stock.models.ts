import mongoose, { Schema } from "mongoose";
import { IStock } from "../interfaces/stock.interface";

const StockSchema = new Schema<IStock>({
  symbol: { type: String, required: true },
  date: { type: String, required: true },
  closingPrice: { type: String, required: true },
});

export default mongoose.model<IStock>("Stock", StockSchema);
