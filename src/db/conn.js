const mongoose = require("mongoose"); 

mongoose.connect("mongodb+srv://apnasadhan:praveen%40as1@apnasadhan.fstmz0q.mongodb.net/ApnaSadhan").then(()=>{
  console.log("database connected succesfully");
}).catch((e)=>{
  console.log(e);
})