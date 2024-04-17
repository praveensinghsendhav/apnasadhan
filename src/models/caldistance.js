require("express");
async function distance(loc1 , loc2){

  const response1 = await fetch(`https://api-v2.distancematrix.ai/maps/api/geocode/json?address=${loc1}&key=zQ9fpfYZJFEr7nFjRaVRDTOflt6W946ijUF5VheUItW6lC2m8EOVCH3PBbkqWPxy`);
  const data1 = await response1.json();
  let lat1 = data1.result[0].geometry.location.lat; 
  let lng1 = data1.result[0].geometry.location.lng; 

  const response2 = await fetch(`https://api-v2.distancematrix.ai/maps/api/geocode/json?address=${loc2}&key=zQ9fpfYZJFEr7nFjRaVRDTOflt6W946ijUF5VheUItW6lC2m8EOVCH3PBbkqWPxy`);
  const data2 = await response2.json();
  let lat2 = data2.result[0].geometry.location.lat; 
  let lng2 = data2.result[0].geometry.location.lng; 

  const response3 = await fetch(`https://api-v2.distancematrix.ai/maps/api/distancematrix/json?origins=${lat1},${lng1}&destinations=${lat2},${lng2}&key=ir4haUOGM7TLpbC3WBTBlBizcSX88ht3qihmDVxIhykWQC92XD8dEXUVqW0CNqyk`); 
  const data3 = await response3.json(); 
   return data3; 

} 
module.exports = distance;
