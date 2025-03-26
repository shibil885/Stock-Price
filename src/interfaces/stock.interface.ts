import { Document } from "mongoose";

export interface IStock extends Document {
  symbol: string;
  date: string;
  closingPrice: string;
}
