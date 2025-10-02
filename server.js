const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(".")); // Serve static files from current directory

// Input validation and sanitization
function validateAndSanitize(data) {
  const { name, email, subject, message } = data;

  // Check required fields
  if (!name || !email || !subject || !message) {
    throw new Error("All fields are required");
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // Sanitize inputs (basic HTML escaping)
  const sanitize = (str) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .trim();
  };

  return {
    name: sanitize(name),
    email: sanitize(email),
    subject: sanitize(subject),
    message: sanitize(message),
  };
}

// Create nodemailer transporter
function createTransporter() {
  // Validate required environment variables
  const requiredEnvVars = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "TO_EMAIL",
  ];
  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }

  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Additional options for common providers
    ...(process.env.SMTP_HOST.includes("gmail") && {
      service: "gmail",
    }),
  });
}

// Email sending endpoint
app.post("/api/send", async (req, res) => {
  try {
    // Validate and sanitize input
    const sanitizedData = validateAndSanitize(req.body);
    const { name, email, subject, message } = sanitizedData;

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.TO_EMAIL, // recipient
      replyTo: email, // reply to the sender
      subject: `Portfolio Contact: ${subject}`,
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    
                    <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                        <h3 style="color: #374151; margin-top: 0;">Message:</h3>
                        <p style="line-height: 1.6; color: #6b7280;">${message.replace(
                          /\n/g,
                          "<br>"
                        )}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px;">
                        <p style="margin: 0; font-size: 14px; color: #1e40af;">
                            <strong>Reply to:</strong> ${email}<br>
                            <strong>Sent at:</strong> ${new Date().toLocaleString()}
                        </p>
                    </div>
                </div>
            `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Reply to: ${email}
Sent at: ${new Date().toLocaleString()}
            `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    res.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Email sending error:", error);

    // Determine error type and status code
    let statusCode = 500;
    let errorMessage = "Internal server error";

    if (
      error.message.includes("required") ||
      error.message.includes("Invalid email")
    ) {
      statusCode = 400;
      errorMessage = error.message;
    } else if (
      error.message.includes("Missing required environment variables")
    ) {
      statusCode = 500;
      errorMessage = "Server configuration error";
      console.error("Configuration error:", error.message);
    } else if (error.code === "EAUTH" || error.code === "ENOTFOUND") {
      statusCode = 500;
      errorMessage = "Email service configuration error";
    }

    res.status(statusCode).json({
      success: false,
      error: errorMessage,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: {
      smtp_configured: !!(process.env.SMTP_HOST && process.env.SMTP_USER),
      to_email_configured: !!process.env.TO_EMAIL,
    },
  });
});

// Serve the frontend
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment check:`);
  console.log(
    `- SMTP Host: ${process.env.SMTP_HOST ? "Configured" : "Missing"}`
  );
  console.log(
    `- SMTP User: ${process.env.SMTP_USER ? "Configured" : "Missing"}`
  );
  console.log(`- To Email: ${process.env.TO_EMAIL ? "Configured" : "Missing"}`);
});

module.exports = app;
