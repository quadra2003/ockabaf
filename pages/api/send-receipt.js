// pages/api/send-receipt.js
import nodemailer from 'nodemailer'
import { format } from 'date-fns'

// Configure your email transporter (example with Gmail)
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your-email@gmail.com
    pass: process.env.EMAIL_APP_PASSWORD // Gmail App Password
  }
})

// Alternative: Use SendGrid, Mailgun, or other email services
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function generateReceiptHTML(donationData) {
  const { donor_name, donor_email, amount, transaction_date, payment_intent_id } = donationData
  const formattedDate = format(new Date(transaction_date), 'MMMM dd, yyyy')
  const receiptNumber = `OCKABA-${payment_intent_id.slice(-8).toUpperCase()}`

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Donation Receipt</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
        .logo { font-size: 24px; font-weight: bold; color: #333; }
        .receipt-info { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .amount { font-size: 28px; font-weight: bold; color: #2563eb; text-align: center; }
        .details { margin: 20px 0; }
        .details td { padding: 8px 0; }
        .tax-info { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">OCKABA Foundation</div>
        <p>Orange County Korean American Bar Association</p>
        <h2>Donation Receipt</h2>
      </div>

      <div class="receipt-info">
        <div class="amount">$${amount}.00</div>
        <p style="text-align: center; margin: 10px 0 0 0;">Thank you for your generous donation!</p>
      </div>

      <table class="details" style="width: 100%;">
        <tr>
          <td><strong>Donor Name:</strong></td>
          <td>${donor_name}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${donor_email}</td>
        </tr>
        <tr>
          <td><strong>Donation Date:</strong></td>
          <td>${formattedDate}</td>
        </tr>
        <tr>
          <td><strong>Receipt Number:</strong></td>
          <td>${receiptNumber}</td>
        </tr>
        <tr>
          <td><strong>Payment Method:</strong></td>
          <td>Credit Card</td>
        </tr>
        <tr>
          <td><strong>Transaction ID:</strong></td>
          <td>${payment_intent_id}</td>
        </tr>
      </table>

      <div class="tax-info">
        <strong>Tax Deductible Information:</strong><br>
        OCKABA Foundation is a 501(c)(3) nonprofit organization (EIN: XX-XXXXXXX). 
        Your donation is tax-deductible to the extent allowed by law. 
        No goods or services were provided in exchange for this donation.
        Please consult your tax advisor for specific deduction information.
      </div>

      <div class="footer">
        <p>OCKABA Foundation<br>
        [Your Address]<br>
        [City, State ZIP]<br>
        Email: info@ockaba.org</p>
        
        <p><em>This receipt was automatically generated on ${format(new Date(), 'MMMM dd, yyyy')}.</em></p>
      </div>
    </body>
    </html>
  `
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { payment_intent_id, amount, donor_email, donor_name, transaction_date } = req.body

    // Validate required fields
    if (!payment_intent_id || !amount || !donor_email || !donor_name || !transaction_date) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Generate receipt HTML
    const receiptHTML = generateReceiptHTML({
      donor_name,
      donor_email,
      amount,
      transaction_date,
      payment_intent_id
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: donor_email,
      subject: 'Your OCKABA Foundation Donation Receipt',
      html: receiptHTML,
      // Optional: Add organization email as BCC for records
      bcc: process.env.ORGANIZATION_EMAIL || process.env.EMAIL_USER
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Optional: Store donation record in database
    // await saveDonationRecord({
    //   payment_intent_id,
    //   donor_name,
    //   donor_email,
    //   amount,
    //   transaction_date,
    //   receipt_sent: true
    // })

    console.log(`Receipt sent to ${donor_email} for donation of $${amount}`)

    res.status(200).json({ 
      success: true, 
      message: 'Receipt sent successfully' 
    })

  } catch (error) {
    console.error('Error sending receipt:', error)
    res.status(500).json({ 
      error: 'Failed to send receipt',
      details: error.message 
    })
  }
}
