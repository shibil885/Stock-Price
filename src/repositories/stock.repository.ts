import { IStock } from "../interfaces/stock.interface";
import { IStockRepository } from "../interfaces/stockRepository.interface";
import Stock from "../models/stock.model";

export class StockRepository implements IStockRepository {
  async findOne(symbol: string, date: string): Promise<IStock | null> {
    return await Stock.findOne({ symbol, date });
  }

  async insertOne(
    symbol: string,
    date: string,
    closingPrice: string
  ): Promise<IStock> {
    return await new Stock({ symbol, date, closingPrice }).save();
  }
}
