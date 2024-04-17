const mongoose = require("mongoose"); 

mongoose.connect("mongodb://localhost:27017/ApnaSadhan").then(()=>{
  console.log("database connected succesfully");
}).catch((e)=>{
  console.log(e);
})