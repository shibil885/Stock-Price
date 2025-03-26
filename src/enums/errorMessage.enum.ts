export enum ErrorMessages {
  MISSING_FIELDS = "Missing required fields: symbol and date are mandatory.",
  INVALID_SYMBOL = "Invalid stock symbol provided.",
  NETWORK_ERROR = "Network issue while fetching stock data.",
  UNEXPECTED_RESPONSE = "Unexpected response format from stock API.",
  DATA_NOT_FOUND = "Stock data not found for the given symbol and date.",
  API_FAILURE = "Failed to retrieve stock data from the API.",
  INVALID_DATE_FORMAT = "Invalid date format. Please use YYYY-MM-DD.",
}
