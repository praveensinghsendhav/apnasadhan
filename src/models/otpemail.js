  const nodemailer =  require("nodemailer");
  function otpemail(otp) {
    return new Promise((resolve, reject) => {
        // Create a Nodemailer transporter object
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'apnasadhan2002@gmail.com',
              pass: 'ztgkwxvdjtuoqrki'// Replace with your Gmail password
            }
        });
        // Email options
        const mailOptions = {
            from: 'apnasadhan2002@gmail.com',
            to: 'apnasadhan2002@gmail.com',
            subject: 'OTP Verification',
            text: `Your OTP is: ${otp}`
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                reject(error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(info.response);
            }
        });
    });
}
module.exports =otpemail;