const mongoose = require("mongoose"); 
const validator = require("validator"); 
const Localschema = new mongoose.Schema({
  origincity : {
    type : String, 
    require:true
    }
  , packagetype:{
    type : String , 
    require:true 
  },
  pickupdate : {
    type : String , 
    require : true 
  }
}) 

const Locals = new mongoose.model("local" , Localschema ); 

module.exports = Locals;