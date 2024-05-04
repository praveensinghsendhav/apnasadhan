const mongoose = require("mongoose"); 

mongoose.connect("mongodb+srv://apnasadhan:praveenas1@apnasadhan.fstmz0q.mongodb.net/?retryWrites=true&w=majority&appName=Apnasadhan").then(()=>{
  console.log("database connected succesfully"); 
}).catch((e)=>{
  console.log(e);
})