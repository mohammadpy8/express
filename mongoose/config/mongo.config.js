const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/mongoose-test";

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Connection error:", err.message);
  }
};

connectDB();
