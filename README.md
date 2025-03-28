# 📈 Stock Data API

This project provides a stock data API that retrieves stock prices using **Alpha Vantage**. It allows users to fetch stock closing prices for a specific date.

---

## 🚀 **Features**

- Fetch stock closing price by **symbol** and **date** 📅
- Error handling with **status codes and messages** ❌✅
- Fully documented with **Swagger UI** 📝
- Uses **Alpha Vantage API** for real-time stock data 📊

---

## ⚙️ **Installation & Setup**

### 📌 **1. Clone the Repository**

git clone https://github.com/your-username/stock-api.git
cd stock-api

### 📌 **2. Install Dependencies**

npm install

📌 3. Configure Environment Variables

PORT=3000
ALPHA_VANTAGE_API_KEY=your_api_key
ALPHA_URL=https://www.alphavantage.co/query
MONGO_URI = 'you mongo Uri'

📌 4. Start the Server

## npm run dev

📊 API Documentation
📌 Get Stock Data
📍 Endpoint

GET /api/stocks/getOrSetStock
🔹 Query Parameters
Parameter Type Required Description
symbol String ✅ Yes Stock symbol (e.g., "AAPL")
date String ✅ Yes Date in YYYY-MM-DD format
✅ Example Request
GET /api/stocks/getOrSetStock?symbol=AAPL&date=2024-03-25
✅ Example Success Response
{
"status": 200
"message": "Stock data retrieved successfully",
"data": {
"symbol": "AAPL",
"date": "2024-03-25",
"closingPrice": "178.95"
}
}
❌ Example Error Responses

{
"statusCode": 400,
"message": "Missing required fields"
}

{
"statusCode": 404,
"message": "Stock data not found for the given date"
}

{
"statusCode": 429,
"message": "API rate limit exceeded. Try again later."
}

** ============================================================================================================**

"The requested stock data for the given symbol and date is unavailable. Please try with a different date."

Like this:

        {
        "status":200,
        "message":"Stock data retrieved successfully.","data":"Stock data not found for the given symbol and dat"
        }


** ============================================================================================================**
