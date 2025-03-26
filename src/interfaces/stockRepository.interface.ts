import { IStock } from "./stock.interface";

export interface IStockRepository {
  findOne(symbol: string, date: string): Promise<IStock | null>;

  insertOne(
    symbol: string,
    date: string,
    closingPrice: string
  ): Promise<IStock>;
  
}
