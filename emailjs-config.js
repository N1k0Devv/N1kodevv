// EmailJS Configuration
// Follow these steps to set up EmailJS:

// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from the Integration page
// 6. Replace the placeholders below with your actual values

const EMAILJS_CONFIG = {
  // Replace with your actual EmailJS Public Key
  PUBLIC_KEY: "4rL--eLDuIOnpT6bj",

  // Replace with your Service ID (from EmailJS dashboard)
  SERVICE_ID: "service_s3b20l9",

  // Replace with your Template ID (from EmailJS dashboard)
  TEMPLATE_ID: "template_7px1pqc",
};

// Initialize EmailJS when the script loads
if (typeof emailjs !== 'undefined') {
  emailjs.init({
    publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
  });
  console.log('📧 EmailJS initialized successfully!');
} else {
  console.warn('EmailJS library not loaded');
}

// Export configuration for use in other scripts
if (typeof window !== 'undefined') {
  window.EMAILJS_CONFIG = EMAILJS_CONFIG;
}
