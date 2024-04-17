const express = require("express"); 
const router = new express.Router(); 
const Demo = require("../models/demo"); 

router.get("/" , async (req ,res)=>{
  try{
    const dta = await Demo.find(); 
    res.status(200).send(dta);
  }catch(e)
  {
    res.status(400).send(e);
  }
})  


router.post("/" , async (req , res)=>{
try{
   const user = await Demo.insertOne(req.body);
   res.status(200).send(user);
}catch(e){
 res.status(401).send(e);} 
})  


router.post("/manypost" , async (req , res)=>{
  try{ 
     const user = await Demo.insertMany(req.body); 
     res.status(200).send(user);
  }catch(e){
   res.status(401).send(e);} 
  }) 


router.patch("/:email", async (req ,res)=>{
  try{
    const email = req.params.email; 
   const user =  await Demo.updateOne({email : email} , {$set:req.body} , {
    new : true
  }); 
  res.status(200).send(user);
  }catch(e)
  {
    res.status(400).send(e);
  }
}) 

router.delete("/:email" , async (req, res)=>{
  try{ 
    const email = req.params.email;
    const user  = await Demo.deleteOne({email : email} , {new : true}); 
    res.status(200).send(user);
  }catch(e)
  {
    res.status(400).send(e);
  }
}) 

module.exports = router;