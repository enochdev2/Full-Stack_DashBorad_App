import User from "../models/User.js"



export const getUser = async(req,res) => {
 const {id} = req.params;
 try {
     const user = await  User.findOne({_id : id})
     if(!user){
        return res.status(404).json({message: "user does not exist"})
    }
    res.status(202).json(user)
 } catch (error) {
    console.log({message : error.message});
 }

}

export const getDashboardStats = async (req, res) => {
   try {
     // hardcoded values
     const currentMonth = "November";
     const currentYear = 2021;
     const currentDay = "2021-11-15";
 
     /* Recent Transactions */
     const transactions = await Transaction.find()
       .limit(50)
       .sort({ createdOn: -1 });
 
     /* Overall Stats */
     const overallStat = await OverallStat.find({ year: currentYear });
 
     const {
       totalCustomers,
       yearlyTotalSoldUnits,
       yearlySalesTotal,
       monthlyData,
       salesByCategory,
     } = overallStat[0];
 
     const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
       return month === currentMonth;
     });
 
     const todayStats = overallStat[0].dailyData.find(({ date }) => {
       return date === currentDay;
     });
 
     res.status(200).json({
       totalCustomers,
       yearlyTotalSoldUnits,
       yearlySalesTotal,
       monthlyData,
       salesByCategory,
       thisMonthStats,
       todayStats,
       transactions,
     });
   } catch (error) {
     res.status(404).json({ message: error.message });
   }
 };

