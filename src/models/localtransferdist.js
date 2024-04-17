const distances = require("../caldistance"); 
const express = require("express"); 

async function localtransferdata(obj)
{
  let Ocity = obj["Ocity"]; 
  let Dcity = obj["Dcity"]; 
  const result = await distances(Ocity , Dcity);  
  let distdata = result.rows[0].elements[0].distance.text; 
  let distanceWithoutUnit = distdata.replace("km", "");
  let distanceInteger = parseInt(distanceWithoutUnit);

   const lt = [
    {
      Ocity : Ocity, 
        Dcity : Dcity, 

        charged :distanceInteger ,
        ratekm:8.5,
        base_fare:8.5*distanceInteger*2,
        min_prday:25 ,
        run_dist: distanceInteger,
        charg_dist:distanceInteger,
        gst:Math.round((5/100)*(8.5*distanceInteger*2)) ,
        total_fare:Math.round( 8.5*distanceInteger*2 + (5/100)*(8.5*distanceInteger*2)),
        tprice:Math.round( 8.5*distanceInteger*2 + (5/100)*(8.5*distanceInteger*2)), 
        extra_km_beyond:8.5 , 
       
        charged2 :distanceInteger ,
        ratekm2:11,
        base_fare2:11*distanceInteger*2,
        min_prday2:25 ,
        run_dist2: distanceInteger,
        charg_dist2:distanceInteger,
        gst2:Math.round((5/100)*(11*distanceInteger*2)) ,
        total_fare2:Math.round( 11*distanceInteger*2 + (5/100)*(11*distanceInteger*2)),
        tprice2: Math.round(11*distanceInteger*2 + (5/100)*(11*distanceInteger*2)), 
        extra_km_beyond2:11 ,  

        charged3 :distanceInteger ,
        ratekm3:13,
        base_fare3:13*distanceInteger*2,
        min_prday3:25 ,
        run_dist3: distanceInteger,
        charg_dist3:distanceInteger,
        gst3:Math.round((5/100)*(13*distanceInteger*2)) ,
        total_fare3:Math.round( 13*distanceInteger*2 + (5/100)*(13*distanceInteger*2)),
        tprice3: Math.round(13*distanceInteger*2 + (5/100)*(13*distanceInteger*2)), 
        extra_km_beyond3:13 ,
        
        charged4 :distanceInteger ,
        ratekm4:14,
        base_fare4:14*distanceInteger*2,
        min_prday4:25 ,
        run_dist4: distanceInteger,
        charg_dist4:distanceInteger,
        gst4:Math.round((5/100)*(14*distanceInteger*2)) ,
        total_fare4:Math.round( 14*distanceInteger*2 + (5/100)*(14*distanceInteger*2)),
        tprice4: Math.round(14*distanceInteger*2 + (5/100)*(14*distanceInteger*2)), 
        extra_km_beyond4:14 ,

        charged5 :distanceInteger ,
        ratekm5:23.5,
        base_fare5:23.5*distanceInteger*2,
        min_prday5:25 ,
        run_dist5: distanceInteger,
        charg_dist5:distanceInteger,
        gst5:Math.round((5/100)*(23.5*distanceInteger*2)) ,
        total_fare5:Math.round( 23.5*distanceInteger*2 + (5/100)*(23.5*distanceInteger*2)),
        tprice5: Math.round(23.5*distanceInteger*2 + (5/100)*(23.5*distanceInteger*2)), 
        extra_km_beyond5:23.5 ,
    } 
    , 
    { 
      Ocity : Ocity, 
        Dcity : Dcity, 
        charged : 25 ,
        ratekm:8.5,
        base_fare:8.5*25*2,
        min_prday:25,
        run_dist:distanceInteger ,
        charg_dist:25,
        gst:Math.round((5/100)*(8.5*25*2) ),
        total_fare:Math.round( 8.5*25*2 + (5/100)*(8.5*25*2) ),
        tprice:Math.round (8.5*25*2 + (5/100)*(8.5*25*2) ), 
        extra_km_beyond:8.5 ,  

        charged2 : 25 ,
        ratekm2:11,
        base_fare2:11*25*2,
        min_prday2:25,
        run_dist2:distanceInteger ,
        charg_dist2:25,
        gst2:Math.round((5/100)*(11*25*2) ),
        total_fare2:Math.round( 11*25*2 + (5/100)*(11*25*2) ),
        tprice2:Math.round (11*25*2 + (5/100)*(11*25*2) ), 
        extra_km_beyond2:11 ,  

        charged3 : 25 ,
        ratekm3:13,
        base_fare3:13*25*2,
        min_prday3:25,
        run_dist3:distanceInteger ,
        charg_dist3:25,
        gst3:Math.round((5/100)*(13*25*2) ),
        total_fare3:Math.round( 13*25*2 + (5/100)*(13*25*2) ),
        tprice3:Math.round (13*25*2 + (5/100)*(13*25*2) ), 
        extra_km_beyond3:13 ,  

        charged4 : 25 ,
        ratekm4:14,
        base_fare4:14*25*2,
        min_prday4:25,
        run_dist4:distanceInteger ,
        charg_dist4:25,
        gst4:Math.round((5/100)*(14*25*2) ),
        total_fare4:Math.round( 14*25*2 + (5/100)*(14*25*2) ),
        tprice4:Math.round (14*25*2 + (5/100)*(14*25*2) ), 
        extra_km_beyond4:14 ,  

        charged5 : 25 ,
        ratekm5:23.5,
        base_fare5:23.5*25*2,
        min_prday5:25,
        run_dist5:distanceInteger ,
        charg_dist5:25,
        gst5:Math.round((5/100)*(23.5*25*2) ),
        total_fare5:Math.round( 23.5*25*2 + (5/100)*(23.5*25*2) ),
        tprice5:Math.round (23.5*25*2 + (5/100)*(23.5*25*2) ), 
        extra_km_beyond5:23.5 , 
    }
   ]

    if(distanceInteger >25)
    {
      return lt[0];
    } 
    else {
      return lt[1];
    }

} 

module.exports = localtransferdata;