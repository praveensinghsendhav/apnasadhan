const mongoose = require("mongoose"); 
const onewayschema =  new mongoose.Schema({
  origincity : {
    type : String,
    require : true
  } ,
  destinationcity:{
    type : String , 
    require : true
  } ,
  pickupdate : {
    type : String , 
    require : true
  }
}) 

const oneways = mongoose.model("oneway" , onewayschema); 

module.exports = oneways;