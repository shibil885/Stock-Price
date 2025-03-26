import { ErrorMessages } from "../enums/errorMessage.enum";
import { IStockRepository } from "../interfaces/stockRepository.interface";
import getStockFromAlphaVantage from "../utils/getStock.util";
export default class StockService {
  private stockRepo: IStockRepository;
  constructor(stockRepo: IStockRepository) {
    this.stockRepo = stockRepo;
  }

  async getOrSetStock(symbol: string, date: string) {
    if (!symbol || !date) {
      return { error: ErrorMessages.MISSING_FIELDS };
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return { error: ErrorMessages.INVALID_DATE_FORMAT };
    }
    let stock = await this.stockRepo.findOne(symbol, date);
    if (!stock) {
      const newStock = await getStockFromAlphaVantage(symbol, date);

      if (newStock?.error) {
        return { error: newStock.error };
      } else if (newStock?.symbol) {
        return await this.stockRepo.insertOne(
          newStock.symbol,
          newStock.date,
          newStock.closingPrice
        );
      } else {
        return { error: ErrorMessages.DATA_NOT_FOUND };
      }
    }
    return stock;
  }
}
