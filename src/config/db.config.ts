import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/stock-price";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "stock-price",
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};
