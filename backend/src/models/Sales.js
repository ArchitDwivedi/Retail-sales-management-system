import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
  transactionId: String,
  date: String,
  customerId: String,
  customerName: String,
  phoneNumber: String,
  gender: String,
  age: Number,
  productCategory: String,
  productId: String,
  quantity: Number,
  finalAmount: Number,
  customerRegion: String,
  employeeName: String,
});

export default mongoose.model("Sales", salesSchema);
