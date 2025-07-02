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

function generateReceiptHTML(donationData, receiptNumber) {
  const { donor_name, donor_email, amount, transaction_date, payment_intent_id, donation_note } = donationData
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

      ${donation_note ? `
      <div class="note-section">
        <strong>💝 Donation Purpose:</strong><br>
        <em>"${donation_note}"</em>
      </div>
      ` : ''}

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
    const { donor_name, donor_email, amount, transaction_date, payment_intent_id, donation_note } = donationData
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
      doc.image(logoPath, 225, 50, { width: 150 })  // Larger logo: 150px instead of 100px
      doc.moveDown(8)  // More space after larger logo
    }

    // Header
    doc.fontSize(20).font('Helvetica-Bold')
       .text('Donation Receipt', { align: 'center' })
       .moveDown(2)

    // Amount section
    doc.rect(50, doc.y, 495, 80).fill('#f9f9f9').stroke('#ddd')
    doc.fillColor('#2563eb').fontSize(32).font('Helvetica-Bold')
       .text(`$${amount}.00`, 50, doc.y + 15, { align: 'center', width: 495 })
    doc.fillColor('black').fontSize(14).font('Helvetica')
       .text('Thank you for your generous donation!', 50, doc.y + 10, { align: 'center', width: 495 })
    doc.moveDown(3)

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

    // Donation note section (if provided)
    if (donation_note) {
      doc.rect(50, doc.y, 495, 60).fill('#f0f9ff').stroke('#0ea5e9')
      doc.fillColor('black').fontSize(11).font('Helvetica-Bold')
         .text('Donation Purpose:', 60, doc.y + 10)
      doc.font('Helvetica').fontSize(10)
         .text(`"${donation_note}"`, 60, doc.y + 25, { width: 475, style: 'italic' })
      doc.y += 80
    }

    // Tax info section - adjust position to prevent overlap
    const taxY = Math.max(doc.y, 580)  // Ensure minimum Y position
    doc.y = taxY
    doc.rect(50, doc.y, 495, 80).fill('#fff3cd').stroke('#ffeaa7')
    doc.fillColor('black').fontSize(10).font('Helvetica-Bold')
       .text('Tax Deductible Information:', 60, doc.y + 10)
    doc.font('Helvetica')
       .text('OCKABA Foundation is a 501(c)(3) nonprofit organization (EIN: 27-4456831). Your donation is tax-deductible to the extent allowed by law. No goods or services were provided in exchange for this donation. Please consult your tax advisor for specific deduction information.', 60, doc.y + 25, { width: 475 })

    // Footer
    doc.y = 680  // Lower position to avoid overlap
    doc.fontSize(10).font('Helvetica')
       .text('OCKABA Foundation', { align: 'center' })
       .moveDown(0.5)
       .text('PO Box 6130', { align: 'center' })
       .moveDown(0.5)
       .text('Newport Beach, CA 92658', { align: 'center' })
       .moveDown(0.5)
       .text('Email: info@ockabaf.org', { align: 'center' })
       .moveDown(1)
       .fillColor('#666')
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
      payment_intent_id,
      donation_note
    }, receiptNumber)

    // Generate PDF receipt
    const pdfBuffer = await generatePDFReceipt({
      donor_name,
      donor_email,
      amount,
      transaction_date,
      payment_intent_id,
      donation_note
    }, receiptNumber)

    // Store PDF temporarily for attachment
    const pdfPath = path.join('/tmp', `receipt-${receiptNumber}.pdf`)
    fs.writeFileSync(pdfPath, pdfBuffer)

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

    // Clean up temporary file after a delay (5 minutes) to allow downloads
    setTimeout(() => {
      try {
        fs.unlinkSync(pdfPath)
      } catch (cleanupError) {
        console.log('PDF cleanup failed:', cleanupError.message)
      }
    }, 5 * 60 * 1000) // 5 minutes

    // Optional: Store donation record in database
    // await saveDonationRecord({
    //   payment_intent_id,
    //   donor_name,
    //   donor_email,
    //   amount,
    //   transaction_date,
    //   donation_note,
    //   receipt_sent: true,
    //   receipt_number: receiptNumber
    // })

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
