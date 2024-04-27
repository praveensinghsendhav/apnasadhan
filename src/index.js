const express = require("express");     
const roundtripfunt = require("./models/roundtripfun");
const onewayfunt = require("./models/onewayfun"); 
const localtransferdist = require("./models/localtransferdist");
const session = require("express-session")
const bodyParser = require('body-parser'); 
const sendBookingEmails = require("./models/sendBookingEmails") ; 
const Bookingdata = require("./models/BookingDetails"); 
const bcrypt = require("bcrypt"); 
const allfeedbacks =require("./models/allfeedbacks");
const otp_generator = require("otp-generator");
const registerDataa = require("./models/registerdata");
// const dateandtime = require("./models/dateandtime");
const app = express(); 
const port = process.env.PORT || 3000; 
require("./db/conn"); 
const Locals = require("./models/Locals"); 
const Oneways = require("./models/OneWay"); 
const RoadTrip = require("./models/RoadTrip"); 
const LocalTransfer = require("./models/LocalTransfer");
app.use(express.json());  
app.use(express.urlencoded({extended:false}));  
app.use(bodyParser.json());
// const router = require("./routers/rest"); 
const router = new express.Router();
app.use(router);
const hbs = require("hbs");
app.set("view engine" , "hbs");  
const path  = require("path"); 
const { log } = require("console");
const onewayfun = require("./models/onewayfun");
const roundtripfun = require("./models/totalcitydist");
const dateandtime = require("./models/dateandtime");
const otpemail = require("./models/otpemail");
const static_path = path.join(__dirname , "../public"); 
const templete_path = path.join(__dirname , "../templetes/Views"); 
const partials_path = path.join(__dirname , "../templetes/partials");  
hbs.registerPartials(partials_path);
app.set("views" , templete_path );
app.use(express.static(static_path));  
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

//1
app.get("/" , (req, res)=>{
  res.render("index");
})  
app.get("/local" , (req, res)=>{
  res.render("index");
}) 
//2
app.get("/one-way" , (req, res)=>{
  res.render("oneway");
}) 
//3
app.get("/round-trip" , (req, res)=>{
  res.render("roundtrip");
}) 
//4
// app.get("/road-trip" , (req, res)=>{
//   res.render("roadtrip");
// }) 
//5
app.get("/local-transfer" , (req, res)=>{
  res.render("localtransfer");
})

//1
app.post("/" , async (req, res)=>{ 
 const formData = req.body; 
 req.session.formData = formData;  

 res.redirect('/local-search-result');
})  

//2 
app.post("/one-way", async (req , res)=>{
  const formData = req.body;
  req.session.formData = formData; 
  res.redirect('/one-way-search-result');
}) 

//3 

app.post("/round-trip", async (req , res)=>{
  const formData = req.body;
  req.session.formData = formData; 
  res.redirect('/round-trip-search-result');
})  

// app.post("/road-trip", async (req , res)=>{
//   console.log(req.body);
//   try{
//     const r1 = new RoadTrip({
//       origincity : req.body.Ocity ,
//       noofdays: req.body.NoDays,
//       pickupdate : req.body.Pickuptime
//     }) 
//     const result = await r1.save(); 
//     res.status(200).json(result);
//   }catch(e)
//   {
//    res.status(401).send(e);
//   }
// })  


app.post("/local-transfer", async (req , res)=>{
  const formData = req.body;
  req.session.formData = formData;  
  res.redirect('/local-transfer-search-result');
}) 

app.get("/local-search-result" , (req , res)=>{ 
const formData =  req.session.formData;  
const Ocity = formData.Ocity;
if('8hrs/80kms'===formData.Packagecombo){
  res.render("package1" , {
    Ocity : Ocity ,
    Pickuptime : formData.Pickuptime , 
    Dcity : formData.Dcity
  }); 
} else {
  res.render("package12" , {
    Ocity : Ocity , 
    Pickuptime : formData.Pickuptime, 
    Dcity : formData.Dcity
  }); 
}  
}) 

app.get("/one-way-search-result" , async (req , res)=>{ 
  const formData =  req.session.formData;  
  const Ocity = formData.Ocity;
  const Dcity = formData.Dcity;  
    try {
          const onewayfun = await onewayfunt(Ocity , Dcity);
          res.render("onewaypkg" , {...onewayfun , Pickuptime: formData.Pickuptime}); 
      } catch (error) {
          console.error('Error fetching data:', error);
          res.status(500).render("error");
      }   
  }) 
 
  app.get("/round-trip-search-result" , async (req ,res)=>{
    const formData =  req.session.formData;   
    try {
      const roundtripfun = await roundtripfunt(formData); 
     res.render("roundtrippkg" , {...roundtripfun ,  Pickuptime: formData.Pickuptime , Droptime : formData.Droptime});
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).render("error");
  }   
  })

  app.get('/local-transfer-search-result' , async (req , res)=>{
    const formData = req.session.formData; 
    try { 
      const ltdata = await localtransferdist(formData); 
      res.render("localtransferpkg" , {...ltdata , Pickuptime: formData.Pickuptime , Triptype : formData.packagecombo});
    //   const roundtripfun = await roundtripfunt(formData); 
    //  res.render("roundtrippkg" , roundtripfun);
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).render("error");
  }   
  }) 

  app.post("/local-search-result", (req, res) => {
    const databutton = req.body; 
    req.session.databutton = databutton;  
    res.redirect("/local-search-booking-page");
});

app.post("/one-way-search-result", (req, res) => {
  const databutton = req.body; 
  req.session.databutton = databutton;  
  res.redirect("/one-way-search-booking-page");
});
 
app.post("/round-trip-search-result", (req, res) => {
  const databutton = req.body; 
  req.session.databutton = databutton;  
   res.redirect("/round-trip-search-booking-page");
}); 

app.post("/local-transfer-search-result", (req, res) => {
  const databutton = req.body; 
  req.session.databutton = databutton;  
  res.redirect("/local-transfer-search-booking-page");
});
 
app.get("/local-search-booking-page" , (req, res)=>{
let databtn = req.session.databutton;  
  res.render("localbooking" , { 
    Ocity : databtn.Origincity, 
    Origincity: databtn.Origincity,
    carName:  databtn.carName,
    packagetype: databtn.packagetype,
    tprice:  databtn.tprice,
    Pickuptime: databtn.Pickuptime , 
    Droptime : "NaN" , 
    Dcity :databtn.Dcity
  })
}) 

app.get("/one-way-search-booking-page" , (req, res)=>{
  let databtn = req.session.databutton;  
  let formdata = req.session.formData;
    res.render("onewaybooking" , { 
      Ocity : databtn.Origincity, 
      Origincity: databtn.Origincity,
      carName:  databtn.carName,
      packagetype: databtn.packagetype,
      tprice:  databtn.tprice,
      Pickuptime: databtn.Pickuptime , 
      Droptime : "NaN" , 
      Dcity :formdata.Dcity
    })
  }) 

  app.get("/round-trip-search-booking-page" , (req, res)=>{
    let databtn = req.session.databutton;  
      res.render("roundtripbooking" , { 
        Ocity : databtn.Origincity, 
        Origincity: databtn.Origincity,
        carName:  databtn.carName,
        packagetype: databtn.packagetype,
        tprice:  databtn.tprice,
        Pickuptime: databtn.Pickuptime , 
        Droptime : databtn.Droptime , 
        Dcity1 :databtn.Desticity
      })
    }) 
 
    app.get("/local-transfer-search-booking-page" , (req, res)=>{
      let databtn = req.session.databutton;  
        res.render("localtransferbooking" , { 
          Ocity : databtn.Origincity, 
          Origincity: databtn.Origincity,
          carName:  databtn.carName,
          packagetype: databtn.packagetype,
          tprice:  databtn.tprice,
          Pickuptime: databtn.Pickuptime , 
          Droptime : databtn.Droptime , 
          Dcity :databtn.Desticity
        })
      }) 


     app.post("/local-search-booking-page" , async (req, res)=>{
   
          try{ 
             const booking = await sendBookingEmails(req.body); 
            const date =  dateandtime(req.body.Pickuptime);
            const b1 = new Bookingdata({
              phone: req.body.phone,
              Origincity: req.body.Origincity,
              carName: req.body.carName,
              packagetype: req.body.packagetype,
              tprice: req.body.tprice,
              Pickupdate:date.Date,
              Pickuptime: date.Time,
              Ocity: req.body.Ocity,
              email: req.body.email,
              fullname: req.body.fullname,
              pickuploc: req.body.pickuploc
            })
                const result = await b1.save(); 
                   setTimeout(()=>{ 
                    res.render("index");
                   },5000);
              }catch(e)
              {
               res.status(401).render("error404");
              }
        })  
     
        app.post("/one-way-search-booking-page" ,async (req, res)=>{
          try{ 
            const booking = await sendBookingEmails(req.body);  
            const date =  dateandtime(req.body.Pickuptime);
               const b1 = new Bookingdata({
                 phone: req.body.phone,
                 Origincity: req.body.Origincity,
                 carName: req.body.carName,
                 packagetype: req.body.packagetype,
                 tprice: req.body.tprice,
                 Pickupdate:date.Date,
                 Pickuptime: date.Time,
                 Ocity: req.body.Ocity,
                 email: req.body.email,
                 fullname: req.body.fullname,
                 pickuploc: req.body.pickuploc
               }) 
               const result = await b1.save(); 
               setTimeout(()=>{ 
                res.render("index");
               },5000);
             }catch(e)
             {
              res.status(401).render("error404");
             }
            })
  
        
          app.post("/round-trip-search-booking-page" ,async (req, res)=>{
            try{ 
              const booking = await sendBookingEmails(req.body);  
            const date =  dateandtime(req.body.Pickuptime);
               const b1 = new Bookingdata({
                 phone: req.body.phone,
                 Origincity: req.body.Origincity,
                 carName: req.body.carName,
                 packagetype: req.body.packagetype,
                 tprice: req.body.tprice,
                 Pickupdate:date.Date,
                 Pickuptime: date.Time,
                 Ocity: req.body.Ocity,
                 email: req.body.email,
                 fullname: req.body.fullname,
                 pickuploc: req.body.pickuploc
               }) 
                 const result = await b1.save(); 
                 setTimeout(()=>{ 
                  res.render("index");
                 },5000);
               }catch(e)
               {
                res.status(401).render("error404");
               }
            }) 
         
            app.post("/local-transfer-search-booking-page" ,async (req, res)=>{
              try{  
                const booking = await sendBookingEmails(req.body);  
            const date =  dateandtime(req.body.Pickuptime);
               const b1 = new Bookingdata({
                 phone: req.body.phone,
                 Origincity: req.body.Origincity,
                 carName: req.body.carName,
                 packagetype: req.body.packagetype,
                 tprice: req.body.tprice,
                 Pickupdate:date.Date,
                 Pickuptime: date.Time,
                 Ocity: req.body.Ocity,
                 email: req.body.email,
                 fullname: req.body.fullname,
                 pickuploc: req.body.pickuploc
               }) 
                   const result = await b1.save(); 
                   setTimeout(()=>{ 
                    res.render("index");
                   },5000);
                 }catch(e)
                 {
                  res.status(401).render("error404");
                 }
              })   

              function authenticate(req, res, next) {
                if (req.session.userId) {
                  // If user is authenticated, proceed to next middleware or route
                  next();
                } else {
                  // If user is not authenticated, redirect them to login page
                  res.redirect('/login');
                }
              }

              app.get('/admin', authenticate, async (req, res) => {
                try {
                  const users = await Bookingdata.find();
                  res.render('adminpage', { users });
                } catch (err) {
                  console.error('Error fetching data:', err);
                  res.status(500).render("servererror");
                }
              });
              
              app.get('/admin/search', authenticate, async (req, res) => {
                try {
                  const query = req.query.q;
                  const users = await Bookingdata.find({
                    $or: [
                      { fullname: { $regex: query, $options: 'i' } },
                      { phone: { $regex: query, $options: 'i' } },
                      { carName: { $regex: query, $options: 'i' } },
                      { Origincity: { $regex: query, $options: 'i' } },
                      {  packagetype: { $regex: query, $options: 'i' } },
                      { tprice: { $regex: query, $options: 'i' } },
                      { Pickuptime: { $regex: query,$options: 'i' } }, 
                      { Pickupdate: { $regex: query,$options: 'i' } },
                      { Ocity: { $regex: query, $options: 'i' } },
                      { email: { $regex: query, $options: 'i' } },
                      { pickuploc: { $regex: query, $options: 'i' } },
                    ]
                  });
                  res.render('adminpage', { users });
                } catch (err) {
                  console.error('Error searching data:', err);
                  res.status(500).render("servererror");
                }
              }); 

              // Route to handle date range search
              app.get('/admin/searchs', authenticate, async (req, res) => {
                try {
                  const startDate = req.query.startDate;
                  const endDate = req.query.endDate;  
              
                  const data = await Bookingdata.find({
                    // Filter documents where Pickupdate falls within the specified date range
                    // Convert the Pickupdate strings to Date objects for comparison
                    Pickupdate: {
                      $gte: startDate,
                      $lte: endDate // Use $lte instead of $lt
                    }
                  }); 
                  res.render('adminpagednt', { data });
                } catch (err) {
                  console.error('Error searching data:', err);
                  res.status(500).render("servererror");
                }
              }); 

              app.get("/login",(req , res)=>{
                res.render("loginpage");
              }) 

        app.post("/login" , (req , res)=>{ 
          const { userid, password } = req.body;
          registerDataa.findOne({ userid: userid }).exec()
            .then(user => {
              if (user && bcrypt.compareSync(password, user.password1)) {
                req.session.userId = user.id;
                res.redirect('/admin');
              } else {
                res.status(401).send('Invalid username or password');
              }
            })
            .catch(err => {
              console.error('Error:', err);
              res.status(500).render("servererror");
            });
              }) 

              app.get("/register",(req,res)=>{ 
                const otp = otp_generator.generate(8, { upperCase: false, specialChars: false }); 
                req.session.otp = otp; 
                otpemail(otp)
                    .then(() => {
                      res.render("registerpage");
                    })
                    .catch(err => {
                        console.error('Error sending email:', err);
                        res.status(500).render("servererror");
                    });
              }) 
              app.post("/register" ,async (req ,res)=>{
                const otp = req.session.otp;  
                const userOTP = req.body.otp; // Assuming OTP is submitted via POST request body 
                const hashedPassword = bcrypt.hashSync(req.body.password1, 8); 
                if (userOTP === otp) { 
                 const result = new registerDataa({
                  userid : req.body.userid, 
                  password1 : hashedPassword
                 }); 
                 const s = await result.save();
                    res.redirect("/login");
                } else {
                    res.redirect("/register");
                }
              }) 


              app.get("/quikbooking" , (req , res)=>{
                res.render("quikbooking");
              }) 
              app.post("/quikbooking" , async (req , res)=>{  
                let objdata = req.body; 
                objdata.Origincity = objdata.pickuploc; 
                objdata.Pickuptime = objdata.Pickuptime; 
                objdata.carName = req.body.car;
                try{  
                  const booking = await sendBookingEmails(objdata); 
                const date =  dateandtime(objdata.Pickuptime);
                   const b1 = new Bookingdata({
                     phone: req.body.phone,
                     carName: req.body.car,
                     packagetype: req.body.packagetype,
                     Pickupdate:date.Date,
                     Pickuptime: date.Time,
                     email: req.body.email,
                     fullname: req.body.fullname,
                     pickuploc: req.body.pickuploc
                   }) 
                     const result = await b1.save(); 
                     setTimeout(()=>{ 
                      res.render("index");
                     },5000);
                   }catch(e)
                   {
                    res.status(401).send(e);
                   }
              }) 
              app.get("/feedback" ,authenticate, async (req, res)=>{
                try {
                  const users = await allfeedbacks.find();
                  res.render('feedbackpage', { users });
                } catch (err) {
                  console.error('Error fetching data:', err);
                  res.status(500).render("servererror");
                }
              })
             app.post("/feedback" , async (req, res)=>{
              try{  
                 const b1 = new allfeedbacks(req.body); 
                   const result = await b1.save(); 
                   res.redirect("/");
                 }catch(e)
                 {
                  res.status(401).send(e);
                 }
             }) 
             app.get("/blog" , (req, res)=>{
              res.render("blog");
             }) 
             app.get("/faqs" , (req, res)=>{
              res.render("faqs");
             }) 
app.listen(port , ()=>{
  console.log(`your port is connected ${port}`);
}) 

