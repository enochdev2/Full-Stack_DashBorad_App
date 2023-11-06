import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  userId: String,
  cost: Number,
  proucts: {
     type: [ mongoose.Types.ObjectId],
     of: Number
  }
}, {timeStamps:true});

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
