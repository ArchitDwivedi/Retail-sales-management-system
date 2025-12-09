import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import Sales from "./models/Sales.js";

dotenv.config();

// Needed to build correct local paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON file
const salesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./data/sales.json"), "utf8")
);

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Sales.deleteMany();          // Optional: remove old data
    await Sales.insertMany(salesData); // Insert JSON array
    console.log("✔ Data Imported Successfully!");

    process.exit();
  } catch (error) {
    console.error("❌ Error importing data:", error);
    process.exit(1);
  }
};

importData();
