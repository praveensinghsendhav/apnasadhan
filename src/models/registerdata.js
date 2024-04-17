const mongoose = require("mongoose"); 
const registerdataSchema = mongoose.Schema({
  userid: {
    type : String , 
    require  :true
  } , 
  password1 : {
    type  :String ,
    require  : true
  }
}); 

const registerData = new mongoose.model("registerdata" , registerdataSchema ); 

module.exports = registerData;
