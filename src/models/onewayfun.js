const distances = require("./caldistance"); 
const express = require("express"); 

async function onewayfun(loc1 , loc2){
  try {
    const result = await distances(loc1, loc2);
    let distdata = result.rows[0].elements[0].distance.text; 
    let distanceWithoutUnit = distdata.replace("km", "");
    let distanceInteger = parseInt(distanceWithoutUnit);
    const ow = [
      { 
        Ocity : loc1, 
        Dcity : loc2, 
        charged : 250 ,
        ratekm:8.5,
        base_fare:8.5*250,
        min_prday:250 ,
        driver_allow:250 ,
        run_dist:distdata ,
        charg_dist:250,
        gst:(5/100)*(8.5*250 + 250) ,
        total_fare: 8.5*250 + (5/100)*(8.5*250 + 250) + 250,
        tprice:8.5*250 + (5/100)*(8.5*250 + 250) + 250, 
        extra_km_beyond:8.5 , 
       
        charged2 : 250 ,
        ratekm2:11,
        base_fare2:11*250,
        min_prday2:250 ,
        driver_allow2:250 ,
        run_dist2:distdata ,
        charg_dist2:250,
        gst2:(5/100)*(11*250 + 250) ,
        total_fare2: 11*250 + (5/100)*(11*250 + 250) + 250,
        tprice2:11*250 + (5/100)*(11*250 + 250) + 250, 
        extra_km_beyond2:11 ,  

        charged3 : 250 ,
        ratekm3:13,
        base_fare3:13*250,
        min_prday3:250 ,
        driver_allow3:250 ,
        run_dist3:distdata ,
        charg_dist3:250,
        gst3:(5/100)*(13*250 + 250) ,
        total_fare3: 13*250 + (5/100)*(13*250 + 250) + 250,
        tprice3:13*250 + (5/100)*(13*250 + 250) + 250, 
        extra_km_beyond3:13 , 
        
        charged4 : 250 ,
        ratekm4:14,
        base_fare4:14*250,
        min_prday4:250 ,
        driver_allow4:250 ,
        run_dist4:distdata ,
        charg_dist4:250,
        gst4:(5/100)*(14*250 + 250) ,
        total_fare4: 14*250 + (5/100)*(14*250 + 250) + 250,
        tprice4:14*250 + (5/100)*(14*250 + 250) + 250, 
        extra_km_beyond4:14,  

        charged5 : 250 ,
        ratekm5:23.5,
        base_fare5:23.5*250,
        min_prday5:250 ,
        driver_allow5:250 ,
        run_dist5:distdata ,
        charg_dist5:250,
        gst5:(5/100)*(23.5*250 + 250) ,
        total_fare5: 23.5*250 + (5/100)*(23.5*250 + 250) + 250,
        tprice5:23.5*250 + (5/100)*(23.5*250 + 250) + 250, 
        extra_km_beyond5:23.5, 
      } ,
        
      { 
        Ocity : loc1, 
        Dcity : loc2,
        charged : distanceInteger ,
        ratekm:8.5,
        base_fare:8.5*distanceInteger,
        min_prday:250 ,
        driver_allow:250 ,
        run_dist:distdata ,
        charg_dist:distanceInteger,
        gst:(5/100)*(8.5*distanceInteger + 250) ,
        total_fare: 8.5*distanceInteger + (5/100)*(8.5*distanceInteger + 250) + 250,
        tprice:Math.round( 8.5*distanceInteger + (5/100)*(8.5*distanceInteger + 250) + 250), 
        extra_km_beyond:8.5, 
       
        charged2 : distanceInteger ,
        ratekm2:11,
        base_fare2:11*distanceInteger,
        min_prday2:250 ,
        driver_allow2:250 ,
        run_dist2:distdata ,
        charg_dist2:distanceInteger,
        gst2:(5/100)*(11*distanceInteger + 250) ,
        total_fare2: 11*distanceInteger + (5/100)*(11*distanceInteger + 250) + 250,
        tprice2:Math.round(11*distanceInteger + (5/100)*(11*distanceInteger + 250) + 250), 
        extra_km_beyond2:11,  

        charged3 : distanceInteger ,
        ratekm3:13,
        base_fare3:13*distanceInteger,
        min_prday3:250 ,
        driver_allow3:250 ,
        run_dist3:distdata ,
        charg_dist3:distanceInteger,
        gst3:(5/100)*(13*distanceInteger + 250) ,
        total_fare3: 13*distanceInteger + (5/100)*(13*distanceInteger + 250) + 250,
        tprice3:Math.round( 13*distanceInteger + (5/100)*(13*distanceInteger + 250) + 250), 
        extra_km_beyond3:13, 
        
        charged4 : distanceInteger ,
        ratekm4:14,
        base_fare4:14*distanceInteger,
        min_prday4:250 ,
        driver_allow4:250 ,
        run_dist4:distdata ,
        charg_dist4:distanceInteger,
        gst4:(5/100)*(14*distanceInteger + 250) ,
        total_fare4: 14*distanceInteger + (5/100)*(14*distanceInteger + 250) + 250,
        tprice4:Math.round(14*distanceInteger + (5/100)*(14*distanceInteger + 250) + 250), 
        extra_km_beyond4:14,  

        charged5 : distanceInteger ,
        ratekm5:23.5,
        base_fare5:23.5*distanceInteger,
        min_prday5:250 ,
        driver_allow5:250 ,
        run_dist5:distdata ,
        charg_dist5:distanceInteger,
        gst5:(5/100)*(23.5*distanceInteger + 250) ,
        total_fare5: 23.5*distanceInteger + (5/100)*(23.5*distanceInteger + 250) + 250,
        tprice5:Math.round(23.5*distanceInteger + (5/100)*(23.5*distanceInteger + 250) + 250), 
        extra_km_beyond5:23.5, 
      }
      
    ] 
     if(distanceInteger>250)
     {
      return ow[1];
     } 
     else {
      return ow[0];
     }

} catch (error) {
    console.error('Error fetching data:', error);
}  
} 
module.exports = onewayfun;