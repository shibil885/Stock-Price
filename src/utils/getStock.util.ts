import axios from "axios";
import dotenv from "dotenv";
import { ErrorMessages } from "../enums/errorMessage.enum";
dotenv.config();

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = process.env.ALPHA_URL;

export default async function getStockFromAlphaVantage(
  symbol: string,
  date: string
) {
  try {
    if (!BASE_URL) {
      return { error: ErrorMessages.NETWORK_ERROR };
    }
    const response = await axios.get(BASE_URL, {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: symbol.toUpperCase(),
        apikey: API_KEY,
      },
    });
    const data = response.data["Time Series (Daily)"];
    if (!data || !data[date]) {
      return { error: ErrorMessages.DATA_NOT_FOUND };
    }

    return { symbol, date, closingPrice: data[date]["4. close"] };
  } catch (error) {
    return { error: ErrorMessages.UNEXPECTED_RESPONSE };
  }
}
