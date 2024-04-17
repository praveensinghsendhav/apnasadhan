const mongoose = require("mongoose"); 
const LocalTransferSchema = mongoose.Schema({
  origincity  : {
    type : String , 
    require  :true
  } , 
  destinationcity : {
    type  :String ,
    require  : true
  } , 
  triptype : {
    type : String , 
    require  : true
  } 
  , 
  pickupdate : {
    type : String , 
    require  : true
  }
});  

const LocalTransfer =  new mongoose.model("localtransfer" , LocalTransferSchema); 

module.exports = LocalTransfer;