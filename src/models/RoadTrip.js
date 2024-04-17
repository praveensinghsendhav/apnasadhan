const mongoose = require("mongoose"); 
const RoadTripSchema = mongoose.Schema({
  origincity  : {
    type : String , 
    require  :true
  } , 
  noofdays : {
    type  :String ,
    require  : true
  } , 
  pickupdate : {
    type : String , 
    require  : true
  }
}); 

const RoadTrip = new mongoose.model("RoadTrip" , RoadTripSchema); 
module.exports = RoadTrip;
