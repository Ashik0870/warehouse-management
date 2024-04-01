import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Email sending endpoint
app.post('/api/sendEmail', (req: Request, res: Response) => {
  const { to, subject, text } = req.body;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hra72020@gmail.com', // Enter your Gmail email address
      pass: 'Belive@m1' // Enter your Gmail password
    }
  });

  // Email options
  const mailOptions: nodemailer.SendMailOptions = {
    from: 'hra72020@gmail.com', // Sender email address
    to: to,
    subject: subject,
    text: text
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
