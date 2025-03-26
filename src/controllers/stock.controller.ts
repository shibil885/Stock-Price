import { Request, Response } from "express";
import StockService from "../services/stock.service";
import { StockRepository } from "../repositories/stock.repository";
import { StatusCode } from "../enums/statusCode.enum";
import { ApiError } from "../utils/apiError";
import { ErrorMessages } from "../enums/errorMessage.enum";
import { ApiResponse } from "../utils/apiResponse";
import { SuccessMessages } from "../enums/successMessages.enum";

export class StockController {
  private stockService: StockService;

  constructor() {
    const stockRepo = new StockRepository();
    this.stockService = new StockService(stockRepo);
  }

  /**
   * @class StockController
   * @description Handles stock data retrieval from Alpha Vantage API.
   */

  /**
   * @route GET /api/stock-price
   * @description Fetches stock data from Alpha Vantage based on symbol and date.
   * @param {Request} req - Express request object containing query parameters `symbol` and `date`
   * @param {Response} res - Express response object
   * @returns {Promise<Response>} - JSON response with stock data or an error message
   *
   * @example
   * GET /api/stock-price?symbol=ibm&date=2025-03-24
   *
   * @example Successful Response:
   * {
   *   "status": 200
   *   "message": "Stock data retrieved successfully",
   *   "data": {
   *     "_id": '67e3ec4d8b617fbe105181b5'
   *     "symbol": "AAPL",
   *     "date": "2024-03-25",
   *     "closingPrice": "178.95"
   *     "__v":0
   *   }
   * }
   *
   * @example Error Response:
   * {
   *   "statusCode": 404,
   *   "message": "Stock data not found for the given date"
   * }
   */

  async getOrSetStock(req: Request, res: Response) {
    try {
      const { symbol, date } = req.query;

      if (!symbol || !date) {
        return res
          .status(StatusCode.BAD_REQUEST)
          .json(
            new ApiError(StatusCode.BAD_REQUEST, ErrorMessages.MISSING_FIELDS)
          );
      }

      const stockSymbol = symbol.toString().toUpperCase();
      const stockDate = date.toString();

      const stock = await this.stockService.getOrSetStock(
        stockSymbol,
        stockDate
      );

      if (!stock) {
        return res
          .status(StatusCode.NOT_FOUND)
          .json(
            new ApiError(StatusCode.NOT_FOUND, ErrorMessages.DATA_NOT_FOUND)
          );
      }

      return res
        .status(StatusCode.OK)
        .json(
          new ApiResponse(StatusCode.OK, SuccessMessages.FETCH_SUCCESS, stock)
        );
    } catch (error: any) {
      let status = StatusCode.INTERNAL_SERVER_ERROR;
      return res.status(status).json(new ApiError(status, error.toString()));
    }
  }
}
