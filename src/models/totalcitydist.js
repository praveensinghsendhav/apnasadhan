const distance = require("../models/caldistance"); 
require("express");
async function totalcitydist  (obj){
 try{  
  const keyys= Object.keys(obj); 
  const totalDcities = keyys.length-3; 
  let sum=0;
  if(totalDcities==1)
  {
     const result =  await distance(obj.Ocity , obj.Dcity1); 
     let distdata = result.rows[0].elements[0].distance.text; 
    let distanceWithoutUnit = distdata.replace("km", "");
    let distanceInteger = parseInt(distanceWithoutUnit); 
    return distanceInteger*2;
  } 
   else { 
    let i;
    const result =  await distance(obj.Ocity , obj.Dcity1);  
    let distdata = result.rows[0].elements[0].distance.text; 
    let distanceWithoutUnit = distdata.replace("km", "");
    let distanceInteger = parseInt(distanceWithoutUnit); 
    sum = sum+distanceInteger;
    console.log(`distance between ${obj.Ocity} and ${obj.Dcity1} = ${distanceInteger}`); 
    for(i=1;i<totalDcities;i++)
    {
      let Dcity = "Dcity"+i; 
      let Dcityy = "Dcity"+(i+1); 
      const result =  await distance(obj[Dcity] , obj[Dcityy]); 
      let distdata = result.rows[0].elements[0].distance.text; 
      let distanceWithoutUnit = distdata.replace("km", "");
      let distanceInteger = parseInt(distanceWithoutUnit); 
      console.log(`distance between ${obj[Dcity]} and ${obj[Dcityy]} = ${distanceInteger}`);
      sum = sum+distanceInteger; 

    }  
    let Dcityy = "Dcity"+i; 
    const resultt =  await distance(obj[Dcityy] , obj.Ocity); 
    let distdataa = resultt.rows[0].elements[0].distance.text; 
    let distanceWithoutUnits = distdataa.replace("km", "");
    let distanceIntegerr = parseInt(distanceWithoutUnits); 
    sum = sum+distanceIntegerr; 
    console.log(`distance between ${obj[Dcityy]} and ${obj.Ocity} = ${distanceIntegerr}`);
    return sum;
   }
 }catch (error) {
  console.error('Error fetching data:', error);
 }
} 

module.exports = totalcitydist ;