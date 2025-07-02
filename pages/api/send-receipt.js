// pages/api/send-receipt.js
import mailgun from 'mailgun-js'
import { format } from 'date-fns'
import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'

// Configure Mailgun
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
})

async function sendInternalNotification(donationData) {
  const { donor_name, donor_email, amount, transaction_date, payment_intent_id, donation_note, receiptNumber } = donationData
  const formattedDate = format(new Date(transaction_date), 'MMMM dd, yyyy')
  const formattedTime = format(new Date(transaction_date), 'h:mm a')

  const internalHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Donation Received</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .amount { font-size: 24px; font-weight: bold; color: #2563eb; text-align: center; margin: 15px 0; }
        .details { background: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .details table { width: 100%; }
        .details td { padding: 8px 0; border-bottom: 1px solid #eee; }
        .details td:first-child { font-weight: bold; width: 150px; }
        .purpose { background: #e3f2fd; border: 1px solid #2196f3; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .no-purpose { background: #f5f5f5; border: 1px solid #ddd; padding: 15px; border-radius: 5px; margin: 15px 0; color: #666; font-style: italic; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>🎉 New Donation Received!</h2>
        <p>OCKABA Foundation</p>
      </div>
      
      <div class="content">
        <div class="amount">$${amount}.00</div>
        
        <div class="details">
          <table>
            <tr>
              <td>Donor Name:</td>
              <td>${donor_name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>${donor_email}</td>
            </tr>
            <tr>
              <td>Date & Time:</td>
              <td>${formattedDate} at ${formattedTime}</td>
            </tr>
            <tr>
              <td>Receipt Number:</td>
              <td>${receiptNumber}</td>
            </tr>
            <tr>
              <td>Transaction ID:</td>
              <td>${payment_intent_id}</td>
            </tr>
          </table>
        </div>

        ${donation_note ? `
        <div class="purpose">
          <strong>💝 Donation Purpose:</strong><br>
          "${donation_note}"
        </div>
        ` : `
        <div class="no-purpose">
          No specific donation purpose provided.
        </div>
        `}

        <p><strong>Next Steps:</strong></p>
        <ul>
          <li>Donation receipt has been automatically sent to ${donor_email}</li>
          <li>Consider sending a personal thank you note</li>
          <li>Update your donor database with this information</li>
        </ul>
      </div>
    </body>
    </html>
  `

  // Send internal notification email
  const internalMailData = {
    from: 'OCKABA Foundation <noreply@ockabaf.org>',
    to: 'info@ockabaf.org',
    subject: `New Donation: $${amount} from ${donor_name}`,
    html: internalHTML
  }

  try {
    await new Promise((resolve, reject) => {
      mg.messages().send(internalMailData, (error, body) => {
        if (error) {
          console.error('Internal notification failed:', error)
          reject(error)
        } else {
          console.log('Internal notification sent successfully')
          resolve(body)
        }
      })
    })
  } catch (error) {
    console.error('Failed to send internal notification:', error)
    // Don't throw error - donor receipt is more important
  }
}

function generateReceiptHTML(donationData, receiptNumber) {
  const { donor_name, donor_email, amount, transaction_date, payment_intent_id } = donationData
  const formattedDate = format(new Date(transaction_date), 'MMMM dd, yyyy')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Donation Receipt</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
        .logo { margin-bottom: 15px; }
        .logo img { max-height: 80px; width: auto; }
        .org-name { font-size: 24px; font-weight: bold; color: #333; margin: 10px 0 5px 0; }
        .org-subtitle { font-size: 16px; color: #666; margin-bottom: 15px; }
        .receipt-info { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .amount { font-size: 28px; font-weight: bold; color: #2563eb; text-align: center; }
        .details { margin: 20px 0; }
        .details td { padding: 8px 0; }
        .note-section { background: #f0f9ff; border: 1px solid #0ea5e9; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .tax-info { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .download-section { background: #e3f2fd; border: 1px solid #2196f3; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center; }
        .download-btn { 
          display: inline-block; 
          background: #2196f3; 
          color: white; 
          padding: 12px 24px; 
          text-decoration: none; 
          border-radius: 5px; 
          font-weight: bold;
          margin-top: 10px;
        }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">
          <img src="${process.env.NEXT_PUBLIC_BASE_URL}/images/ockabaf-logo.png" alt="OCKABA Foundation Logo" />
        </div>
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
        OCKABA Foundation is a 501(c)(3) nonprofit organization (EIN: 27-4456831). 
        Your donation is tax-deductible to the extent allowed by law. 
        No goods or services were provided in exchange for this donation.
        Please consult your tax advisor for specific deduction information.
      </div>

      <div class="footer">
        <p>OCKABA Foundation<br>
        PO Box 6130<br>
        Newport Beach, CA 92658<br>
        Email: info@ockabaf.org</p>
        
        <p><em>This receipt was automatically generated on ${format(new Date(), 'MMMM dd, yyyy')}.</em></p>
      </div>
    </body>
    </html>
  `
}

async function generatePDFReceipt(donationData, receiptNumber) {
  return new Promise((resolve, reject) => {
    const { donor_name, donor_email, amount, transaction_date, payment_intent_id } = donationData
    const formattedDate = format(new Date(transaction_date), 'MMMM dd, yyyy')
    
    // Create PDF document
    const doc = new PDFDocument({ margin: 50 })
    const chunks = []
    
    // Collect PDF data
    doc.on('data', chunk => chunks.push(chunk))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)

    // Add logo if it exists
    const logoPath = path.join(process.cwd(), 'public', 'images', 'ockabaf-logo.png')
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 200, 50, { width: 200 })
      doc.moveDown(4)  // Much less space after logo
    }

    // Header - closer to logo
    doc.fontSize(20).font('Helvetica-Bold')
       .text('Donation Receipt', { align: 'center' })
       .moveDown(1)  // Less space before amount section

    // Amount section
    doc.rect(50, doc.y, 495, 80).fill('#f9f9f9').stroke('#ddd')
    doc.fillColor('#2563eb').fontSize(32).font('Helvetica-Bold')
       .text(`$${amount}.00`, 50, doc.y + 15, { align: 'center', width: 495 })
    doc.fillColor('black').fontSize(14).font('Helvetica')
       .text('Thank you for your generous donation!', 50, doc.y + 10, { align: 'center', width: 495 })
    doc.moveDown(2)  // Less space after amount section

    // Details section
    const startY = doc.y
    doc.fontSize(12).font('Helvetica-Bold').text('Donor Name:', 50, startY)
    doc.font('Helvetica').text(donor_name, 150, startY)
    
    doc.font('Helvetica-Bold').text('Email:', 50, startY + 20)
    doc.font('Helvetica').text(donor_email, 150, startY + 20)
    
    doc.font('Helvetica-Bold').text('Donation Date:', 50, startY + 40)
    doc.font('Helvetica').text(formattedDate, 150, startY + 40)
    
    doc.font('Helvetica-Bold').text('Receipt Number:', 50, startY + 60)
    doc.font('Helvetica').text(receiptNumber, 150, startY + 60)
    
    doc.font('Helvetica-Bold').text('Payment Method:', 50, startY + 80)
    doc.font('Helvetica').text('Credit Card', 150, startY + 80)
    
    doc.font('Helvetica-Bold').text('Transaction ID:', 50, startY + 100)
    doc.font('Helvetica').text(payment_intent_id, 150, startY + 100)
    
    doc.y = startY + 140

    // Tax info section - more compact
    doc.rect(50, doc.y, 495, 90).fill('#fff3cd').stroke('#ffeaa7')  // Taller height
    doc.fillColor('black').fontSize(10).font('Helvetica-Bold')
       .text('Tax Deductible Information:', 60, doc.y + 10)
    doc.font('Helvetica').fontSize(9)  // Smaller font
       .text('OCKABA Foundation is a 501(c)(3) nonprofit organization (EIN: 27-4456831). Your donation is tax-deductible to the extent allowed by law. No goods or services were provided in exchange for this donation. Please consult your tax advisor for specific deduction information.', 60, doc.y + 25, { width: 475, lineGap: 2 })

    // Footer - positioned right after tax info
    doc.y += 105  // Position footer after taller box
    doc.fontSize(10).font('Helvetica').fillColor('black')
       .text('OCKABA Foundation', { align: 'center' })
       .moveDown(0.3)
       .text('PO Box 6130', { align: 'center' })
       .moveDown(0.3)
       .text('Newport Beach, CA 92658', { align: 'center' })
       .moveDown(0.3)
       .text('Email: info@ockabaf.org', { align: 'center' })
       .moveDown(0.5)
       .fillColor('#666').fontSize(9)
       .text(`This receipt was automatically generated on ${format(new Date(), 'MMMM dd, yyyy')}.`, { align: 'center' })

    doc.end()
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { payment_intent_id, amount, donor_email, donor_name, donation_note, transaction_date } = req.body

    // Validate required fields
    if (!payment_intent_id || !amount || !donor_email || !donor_name || !transaction_date) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const receiptNumber = `OCKABA-${payment_intent_id.slice(-8).toUpperCase()}`

    // Generate receipt HTML
    const receiptHTML = generateReceiptHTML({
      donor_name,
      donor_email,
      amount,
      transaction_date,
      payment_intent_id
    }, receiptNumber)

    // Generate PDF receipt
    const pdfBuffer = await generatePDFReceipt({
      donor_name,
      donor_email,
      amount,
      transaction_date,
      payment_intent_id
    }, receiptNumber)

    // Store PDF temporarily for attachment
    const pdfPath = path.join('/tmp', `ockabaf-receipt-${receiptNumber}.pdf`)
    
    try {
      fs.writeFileSync(pdfPath, pdfBuffer)
      console.log(`PDF saved successfully at: ${pdfPath}`)
      console.log(`PDF file size: ${pdfBuffer.length} bytes`)
      console.log(`File exists after write: ${fs.existsSync(pdfPath)}`)
    } catch (writeError) {
      console.error('Failed to write PDF file:', writeError)
      throw writeError
    }

    // Email data for Mailgun with file attachment
    const mailData = {
      from: 'OCKABA Foundation <noreply@ockabaf.org>',
      to: donor_email,
      subject: 'Your OCKABA Foundation Donation Receipt',
      html: receiptHTML,
      attachment: pdfPath, // Mailgun-js expects file path for attachments
      // BCC organization email for records
      bcc: 'info@ockabaf.org'
    }

    // Send email via Mailgun
    await new Promise((resolve, reject) => {
      mg.messages().send(mailData, (error, body) => {
        if (error) {
          reject(error)
        } else {
          resolve(body)
        }
      })
    })

    // Clean up temporary file after a longer delay (30 minutes) to allow downloads
    setTimeout(() => {
      try {
        fs.unlinkSync(pdfPath)
        console.log(`PDF file cleaned up: ${receiptNumber}`)
      } catch (cleanupError) {
        console.log('PDF cleanup failed:', cleanupError.message)
      }
    }, 30 * 60 * 1000) // 30 minutes instead of 5

    // Send internal notification to organization
    await sendInternalNotification({
      donor_name,
      donor_email,
      amount,
      transaction_date,
      payment_intent_id,
      donation_note,
      receiptNumber
    })

    console.log(`Receipt sent to ${donor_email} for donation of $${amount}`)

    res.status(200).json({ 
      success: true, 
      message: 'Receipt sent successfully',
      receipt_number: receiptNumber
    })

  } catch (error) {
    console.error('Error sending receipt:', error)
    res.status(500).json({ 
      error: 'Failed to send receipt',
      details: error.message 
    })
  }
}
