const mongoose  = require("mongoose"); 

const BookingdataSchema =  new mongoose.Schema({ 
  phone : {
    type : String,
    require : true
  } ,
  Origincity:{
    type : String , 
    require : true
  } ,
  carName: {
    type : String , 
    require : true
  } ,
  packagetype: {
    type : String , 
    require : true
  },
  tprice: {
    type : String , 
    require : true
  },
  Pickuptime: {
    type : String , 
    require : true
  }, 
  Pickupdate: {
    type : String , 
    require : true
  },
  Ocity:{
    type : String , 
    require : true
  },
  email:{
    type : String , 
    require : true
  },
  fullname: {
    type : String , 
    require : true
  },
  pickuploc:{
    type : String , 
    require : true
  },
}) 

const Bookingdata = mongoose.model("Bookingdata" , BookingdataSchema); 

module.exports = Bookingdata;