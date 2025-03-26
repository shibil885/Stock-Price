import { IStock } from "../interfaces/stock.interface";
import Stock from "../models/stock.model";

export class StockRepository {
  constructor() {}

  async findOne(symbol: string, date: string): Promise<IStock | null> {
    return await Stock.findOne({ symbol: symbol, date: date });
  }

  async insertOne(symbol: string, date: string, closingPrice: string) {
    return await new Stock({ symbol, date, closingPrice }).save();
  }
}
