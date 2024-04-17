const totalcitydis = require("./totalcitydist"); 
const express = require("express"); 

function calculateDaysDifference(pickupTimeStr, dropTimeStr) {
  // Convert pickup and drop times to Date objects
  var pickupTime = new Date(pickupTimeStr);
  var dropTime = new Date(dropTimeStr);
  
  // Calculate the difference in milliseconds
  var timeDifference = dropTime - pickupTime;
  
  // Convert milliseconds to days
  var daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  
  // Round the result to get the number of full days
  daysDifference = Math.round(daysDifference);
  
  return daysDifference;
}

async function roundtripfun(formData){
  try {
    const distanceInteger = await totalcitydis(formData); 
    const distdata = distanceInteger + "Km"; 
      
var pickupTime = formData["Pickuptime"];
var dropTime = formData["Droptime"];
var daysDifference = calculateDaysDifference(pickupTime, dropTime)+1;
    const ow = [
      { //14 , 23.5
       ...formData,
        charged : 250*daysDifference ,
        ratekm:8.5,
        base_fare:8.5*250*daysDifference,
        min_prday:250*daysDifference ,
        driver_allow:250*daysDifference ,
        run_dist:distdata ,
        charg_dist:250*daysDifference,
        gst:(5/100)*(8.5*250 + 250)*daysDifference ,
        total_fare: 8.5*250*daysDifference + (5/100)*(8.5*250 + 250)*daysDifference + 250*daysDifference,
        tprice:8.5*250*daysDifference + (5/100)*(8.5*250 + 250)*daysDifference + 250*daysDifference, 
        extra_km_beyond:8.5 , 
        nofdays:daysDifference, 
        DA_day:`250*${daysDifference}`, 
        beyond:daysDifference*250,
       
        charged2 : 250*daysDifference ,
        ratekm2:11,
        base_fare2:11*250*daysDifference,
        min_prday2:250*daysDifference  ,
        driver_allow2:250*daysDifference ,
        run_dist2:distdata ,
        charg_dist2:250*daysDifference,
        gst2:(5/100)*(11*250 + 250)*daysDifference ,
        total_fare2: 11*250*daysDifference + (5/100)*(11*250 + 250)*daysDifference + 250*daysDifference,
        tprice2:11*250*daysDifference + (5/100)*(11*250 + 250)*daysDifference + 250*daysDifference, 
        extra_km_beyond2:11 , 
        nofdays2:daysDifference, 
        DA_day2:`250*${daysDifference}`, 
        beyond2:daysDifference*250, 

        charged3 : 250*daysDifference ,
        ratekm3:13,
        base_fare3:13*250*daysDifference,
        min_prday3:250*daysDifference ,
        driver_allow3:250*daysDifference ,
        run_dist3:distdata ,
        charg_dist3:250*daysDifference,
        gst3:(5/100)*(13*250 + 250)*daysDifference ,
        total_fare3: 13*250*daysDifference + (5/100)*(13*250 + 250)*daysDifference + 250*daysDifference,
        tprice3:13*250*daysDifference + (5/100)*(13*250 + 250)*daysDifference + 250*daysDifference, 
        extra_km_beyond3:13 , 
        nofdays3:daysDifference, 
        DA_day3:`250*${daysDifference}`, 
        beyond3:daysDifference*250, 
        
        charged4 : 250*daysDifference ,
        ratekm4:14,
        base_fare4:14*250*daysDifference,
        min_prday4:250*daysDifference ,
        driver_allow4:250*daysDifference ,
        run_dist4:distdata ,
        charg_dist4:250*daysDifference,
        gst4:(5/100)*(14*250 + 250)*daysDifference ,
        total_fare4: 14*250*daysDifference + (5/100)*(14*250 + 250)*daysDifference + 250*daysDifference,
        tprice4:14*250*daysDifference + (5/100)*(14*250 + 250)*daysDifference + 250*daysDifference, 
        extra_km_beyond4:14 , 
        nofdays4:daysDifference, 
        DA_day4:`250*${daysDifference}`, 
        beyond4:daysDifference*250,  

        charged5 : 250*daysDifference ,
        ratekm5:23.5,
        base_fare5:23.5*250*daysDifference,
        min_prday5:250*daysDifference ,
        driver_allow5:250*daysDifference ,
        run_dist5:distdata ,
        charg_dist5:250*daysDifference,
        gst5:(5/100)*(23.5*250 + 250)*daysDifference ,
        total_fare5: 23.5*250*daysDifference + (5/100)*(23.5*250 + 250)*daysDifference + 250*daysDifference,
        tprice5:23.5*250*daysDifference + (5/100)*(23.5*250 + 250)*daysDifference + 250*daysDifference, 
        extra_km_beyond5:23.5 , 
        nofdays5:daysDifference, 
        DA_day5:`250*${daysDifference}`, 
        beyond5:daysDifference*250, 

      } ,
        
      { 
       ...formData,
        charged : distanceInteger ,
        ratekm:8.5,
        base_fare:8.5*distanceInteger,
        min_prday:250*daysDifference ,
        driver_allow:250*daysDifference  ,
        run_dist:distdata ,
        charg_dist:distanceInteger,
        gst:(5/100)*(8.5*distanceInteger + 250*daysDifference) ,
        total_fare: 8.5*distanceInteger + (5/100)*(8.5*distanceInteger + 250*daysDifference) + 250*daysDifference,
        tprice:Math.round( 8.5*distanceInteger + (5/100)*(8.5*distanceInteger + 250*daysDifference) + 250*daysDifference), 
        extra_km_beyond:8.5, 
        nofdays:daysDifference, 
        DA_day:`250*${daysDifference}`, 
        beyond:daysDifference*250, 
       
        charged2 : distanceInteger ,
        ratekm2:11,
        base_fare2:11*distanceInteger,
        min_prday2:250*daysDifference ,
        driver_allow2:250*daysDifference  ,
        run_dist2:distdata ,
        charg_dist2:distanceInteger,
        gst2:(5/100)*(11*distanceInteger + 250*daysDifference) ,
        total_fare2: 11*distanceInteger + (5/100)*(11*distanceInteger + 250*daysDifference) + 250*daysDifference,
        tprice2:Math.round( 11*distanceInteger + (5/100)*(11*distanceInteger + 250*daysDifference) + 250*daysDifference), 
        extra_km_beyond2:11, 
        nofdays2:daysDifference, 
        DA_day2:`250*${daysDifference}`, 
        beyond2:daysDifference*250, 

        charged3 : distanceInteger ,
        ratekm3:13,
        base_fare3:13*distanceInteger,
        min_prday3:250*daysDifference ,
        driver_allow3:250*daysDifference  ,
        run_dist3:distdata ,
        charg_dist3:distanceInteger,
        gst3:(5/100)*(13*distanceInteger + 250*daysDifference) ,
        total_fare3: 13*distanceInteger + (5/100)*(13*distanceInteger + 250*daysDifference) + 250*daysDifference,
        tprice3:Math.round( 13*distanceInteger + (5/100)*(13*distanceInteger + 250*daysDifference) + 250*daysDifference), 
        extra_km_beyond3:13, 
        nofdays3:daysDifference, 
        DA_day3:`250*${daysDifference}`, 
        beyond3:daysDifference*250, 
        
        charged4 : distanceInteger ,
        ratekm4:14,
        base_fare4:14*distanceInteger,
        min_prday4:250*daysDifference ,
        driver_allow4:250*daysDifference  ,
        run_dist4:distdata ,
        charg_dist4:distanceInteger,
        gst4:(5/100)*(14*distanceInteger + 250*daysDifference) ,
        total_fare4: 14*distanceInteger + (5/100)*(14*distanceInteger + 250*daysDifference) + 250*daysDifference,
        tprice4:Math.round( 14*distanceInteger + (5/100)*(14*distanceInteger + 250*daysDifference) + 250*daysDifference), 
        extra_km_beyond4:14, 
        nofdays4:daysDifference, 
        DA_day4:`250*${daysDifference}`, 
        beyond4:daysDifference*250,  

        charged5 : distanceInteger ,
        ratekm5:23.5,
        base_fare5:23.5*distanceInteger,
        min_prday5:250*daysDifference ,
        driver_allow5:250*daysDifference  ,
        run_dist5:distdata ,
        charg_dist5:distanceInteger,
        gst5:(5/100)*(23.5*distanceInteger + 250*daysDifference) ,
        total_fare5: 23.5*distanceInteger + (5/100)*(23.5*distanceInteger + 250*daysDifference) + 250*daysDifference,
        tprice5:Math.round( 23.5*distanceInteger + (5/100)*(23.5*distanceInteger + 250*daysDifference) + 250*daysDifference), 
        extra_km_beyond5:23.5, 
        nofdays5:daysDifference, 
        DA_day5:`250*${daysDifference}`, 
        beyond5:daysDifference*250, 
      }
    ] 
    if(distanceInteger>250*daysDifference)
    {
      return ow[1];
    }else{
      return ow[0];
    }

} catch (error) {
    console.error('Error fetching data:', error);
}  
} 
module.exports = roundtripfun;