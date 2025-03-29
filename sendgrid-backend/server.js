const express = require("express");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 
app.use(cors());

// Set your SendGrid API Key
if (!process.env.SENDGRID_API_KEY) {
  console.error(
    "Error: SENDGRID_API_KEY is not set in the environment variables"
  );
  process.exit(1);
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// API endpoint to send OTP
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  const { firstName } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000); // Generate OTP
  const message = {
    to: email,
    from: process.env.VERIFIED_SENDER_EMAIL, // Your verified sender email
    subject: `Your EMS Registration OTP Code: ${otp}`,
    text: `
      Dear ${firstName},
  
      Thank you for registering with EMS. Your OTP code is: ${otp}.
      Please complete your registration using this OTP.
  
      If you have any questions, feel free to contact us at ${process.env.VERIFIED_SENDER_EMAIL}.
  
      Thank you,
      Team EMS.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">Dear ${firstName},</h2>
        <p>Thank you for registering with EMS. Your OTP code is:</p>
        <p style="font-size: 1.5em; font-weight: bold; color: #007BFF;">${otp}</p>
        <p>Please complete your registration using this OTP.</p>
        <hr style="border: none; border-top: 1px solid #CCC;" />
        <p>If you have any questions, feel free to contact us at:</p>
        <p><strong>${process.env.VERIFIED_SENDER_EMAIL}</strong></p>
        <p>Thank you,<br>Team EMS</p>
      </div>
    `,
  };
  try {
    await sgMail.send(message);
    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp, // Include the OTP in the response only for testing (remove in production)
    });
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response?.body || error.message
    );
    res.status(500).json({
      success: false,
      message: "Failed to send OTP",
      error: error.response?.body || error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
