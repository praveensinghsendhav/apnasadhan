const nodemailer = require('nodemailer'); 
async function sendBookingEmails(objdata){
  
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or your email service provider
    auth: {
        user: 'apnasadhan2002@gmail.com',
        pass: 'ztgkwxvdjtuoqrki'
    }
  });
  const city = objdata.pickuploc.charAt(0).toUpperCase() + objdata.pickuploc.slice(1);
    // Email content
    const mailOptions = {
      from: 'apnasadhan2002@gmail.com',
      to: `${objdata.email}`,
      subject: `Booking Confirmation - Your Car Rental with ${objdata.carName} in ${city}`,
      html: `
        <p>Dear ${objdata.fullname},</p>
        <p>We are thrilled to inform you that your booking with our car rental service has been successfully confirmed. Here are the details of your booking:</p>
        <ul>
          <li>Selected Car: ${objdata.carName}</li>
          <li>Your Package Type: ${objdata.packagetype}</li>
          <li>Total Price: ${objdata.tprice} INR</li>
          <li>Pickup Location: ${objdata.Origincity.charAt(0).toUpperCase() + objdata.Origincity.slice(1)} </li>
          <li>Pickup Time: ${objdata.Pickuptime}</li>
        </ul>
        <p>We would like to thank you for choosing our services. Your booking is important to us, and we are committed to providing you with a safe and comfortable ride.</p>
        <p>Should you have any questions or require further assistance, please do not hesitate to contact us at <a href="mailto:apnasadhan2002@gmail.com">apnasadhan2002@gmail.com</a> or call us at 9827217315, 7225955494.</p>
        <p>Thank you once again for choosing our car rental service. We look forward to serving you.</p>
        <p>Best regards,<br>ApnaSadhan </p>
      `
    };
    const mailOptionss = {
      from: 'apnasadhan2002@gmail.com',
      to: 'sandhevjipraveen7697@gmail.com',
      subject: 'New Booking Confirmation - Customer Details',
      html: `
        <p>Hello Owner,</p>
        <p>A new booking has been confirmed. Here are the customer details:</p>
        <ul>
          <li>Full Name: ${objdata.fullname}</li>
          <li>Email:${objdata.email}</li>
          <li>Mobile No: ${objdata.phone}</li>
          <li>Car: ${objdata.carName}</li>
          <li>Package Type: ${objdata.packagetype}</li>
          <li>Total Price: ${objdata.tprice} INR</li>
          <li>Pickup Location: ${objdata.Origincity.charAt(0).toUpperCase() + objdata.Origincity.slice(1)}</li>
          <li>Pickup Time: ${objdata.Pickuptime}</li>
        </ul>
        <p>Please follow up with the customer as needed.</p>
        <p>Best regards,<br>ApnaSadhan</p>
      `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    }); 
    transporter.sendMail(mailOptionss, (error, info) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error sending email');
      } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent successfully');
      }
  });
} 

module.exports = sendBookingEmails;