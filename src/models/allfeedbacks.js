const mongoose = require("mongoose");  

const allfeedback = mongoose.Schema({
  name : {
    type : String , 
    require : true
  }, 
  email: {
    type : String , 
    require : true
  } ,
  phone : {
    type : String , 
    require : true
  },
  msg : {
    type : String , 
    require : true
  }
}) 
const allfeedbacks = mongoose.model("allfeedback",allfeedback); 

module.exports = allfeedbacks;