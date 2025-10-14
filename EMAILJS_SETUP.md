# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email sending functionality in your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click on "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider:

### For Gmail:
- Select "Gmail"
- Click "Connect Account" and authorize with your Google account
- Your Service ID will be generated automatically (e.g., `service_gmail123`)

### For Outlook:
- Select "Outlook"
- Enter your email and password
- Your Service ID will be generated automatically (e.g., `service_outlook456`)

## Step 3: Create Email Template

1. Click on "Email Templates"
2. Click "Create New Template"
3. Use this template content:

### Template Settings:
- **Template Name**: Contact Form N1kodevv
- **Subject**: New Contact from {{from_name}} - {{subject}}

### Template Content:
```
Hello N1kodevv,

You have received a new contact form submission from your portfolio website.

Name: {{from_name}}
Email: {{reply_to}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click "Save" - your Template ID will be generated (e.g., `template_abc123`)

## Step 4: Get Your Public Key

1. Go to "Integration" in your EmailJS dashboard
2. Copy your Public Key (it looks like: `user_abc123xyz`)

## Step 5: Configure Your Project

Open the file `emailjs-config.js` and replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
  // Replace with your actual Public Key from Integration page
  PUBLIC_KEY: 'your_actual_public_key_here',
  
  // Replace with your Service ID from Email Services
  SERVICE_ID: 'your_service_id_here',
  
  // Replace with your Template ID from Email Templates
  TEMPLATE_ID: 'your_template_id_here'
};
```

## Step 6: Test Your Setup

1. Save the `emailjs-config.js` file
2. Open your website in a browser
3. Fill out the contact form and submit it
4. Check your email to see if you received the message

## Troubleshooting

### Common Issues:

1. **"EmailJS არ არის კონფიგურირებული" error**
   - Check that all values in `emailjs-config.js` are replaced with your actual EmailJS credentials

2. **Emails not being sent**
   - Verify your Service ID and Template ID are correct
   - Check that your email service is properly connected in EmailJS dashboard
   - Make sure your Public Key is correct

3. **Template variables not working**
   - Ensure your template uses the correct variable names: `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, `{{message}}`

## Email Template Variables

The contact form sends these variables to your template:
- `from_name` - The sender's name
- `reply_to` - The sender's email address
- `subject` - The message subject
- `message` - The message content

Make sure your EmailJS template uses these exact variable names in double curly braces: `{{variable_name}}`

## Security Notes

- Your Public Key is safe to include in client-side code
- Never include your Private Key in your frontend code
- EmailJS free plan has a limit of 200 emails per month
- Consider upgrading if you need more capacity

## Free Plan Limits

- 200 emails/month
- Up to 2 email services
- Up to 2 email templates
- EmailJS branding in emails

For more features, consider upgrading to a paid plan.

## Support

If you encounter issues:
1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Contact EmailJS support through their dashboard
3. Check the browser console for error messages
