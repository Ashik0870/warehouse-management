// import nodemailer from "nodemailer";

// const sendEmailNotification = async () => {
//   // Create a transporter object using SMTP transport
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "pavan123kumaruppara@gmail.com", // Your Gmail email address
//       pass: "Pavan@123kumar", // Your Gmail password
//     },
//   });

//   const mailOptions: nodemailer.SendMailOptions = {
//     from: "pavan123kumaruppara@gmail.com", 
//     to: "ashik72020@gmail.com", 
//     subject: "Low Availability Notification",
//     text: "The availability percentage is less than 25%.",
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Email notification sent successfully.");
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// export default sendEmailNotification;
