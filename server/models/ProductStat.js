import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema({
productId: String,
yearlySalesTotal:Number,
yearlyTotalSoldUnits: Number,
montlyData:[
    {
        month: String,
        totalSales: Number,
        totalUnits: Number
    }
],
dailyData:[{
    date: String,
     totalSales: Number,
     totalUnits: Number,
}]
}, {timeStamps:true});

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
