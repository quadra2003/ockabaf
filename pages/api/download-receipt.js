// pages/api/download-receipt.js
import PDFDocument from 'pdfkit'
import { format } from 'date-fns'
import fs from 'fs'
import path from 'path'

async function generatePDFOnDemand(receiptData) {
  return new Promise((resolve, reject) => {
    const { donor_name, donor_email, amount, donation_date, receipt_number, transaction_id } = receiptData
    
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
      doc.moveDown(4)
    }

    // Header
    doc.fontSize(20).font('Helvetica-Bold')
       .text('Donation Receipt', { align: 'center' })
       .moveDown(1)

    // Amount section
    doc.rect(50, doc.y, 495, 80).fill('#f9f9f9').stroke('#ddd')
    doc.fillColor('#2563eb').fontSize(32).font('Helvetica-Bold')
       .text(`${amount}.00`, 50, doc.y + 15, { align: 'center', width: 495 })
    doc.fillColor('black').fontSize(14).font('Helvetica')
       .text('Thank you for your generous donation!', 50, doc.y + 10, { align: 'center', width: 495 })
    doc.moveDown(2)

    // Details section
    const startY = doc.y
    doc.fontSize(12).font('Helvetica-Bold').text('Donor Name:', 50, startY)
    doc.font('Helvetica').text(donor_name, 150, startY)
    
    doc.font('Helvetica-Bold').text('Email:', 50, startY + 20)
    doc.font('Helvetica').text(donor_email, 150, startY + 20)
    
    doc.font('Helvetica-Bold').text('Donation Date:', 50, startY + 40)
    doc.font('Helvetica').text(donation_date, 150, startY + 40)
    
    doc.font('Helvetica-Bold').text('Receipt Number:', 50, startY + 60)
    doc.font('Helvetica').text(receipt_number, 150, startY + 60)
    
    doc.font('Helvetica-Bold').text('Payment Method:', 50, startY + 80)
    doc.font('Helvetica').text('Credit Card', 150, startY + 80)
    
    doc.font('Helvetica-Bold').text('Transaction ID:', 50, startY + 100)
    doc.font('Helvetica').text(transaction_id, 150, startY + 100)
    
    doc.y = startY + 140

    // Tax info section
    doc.rect(50, doc.y, 495, 90).fill('#fff3cd').stroke('#ffeaa7')  // Taller box
    doc.fillColor('black').fontSize(10).font('Helvetica-Bold')
       .text('Tax Deductible Information:', 60, doc.y + 10)
    doc.font('Helvetica').fontSize(9)
       .text('OCKABA Foundation is a 501(c)(3) nonprofit organization (EIN: 27-4456831). Your donation is tax-deductible to the extent allowed by law. No goods or services were provided in exchange for this donation. Please consult your tax advisor for specific deduction information.', 60, doc.y + 25, { width: 475, lineGap: 2 })

    // Footer
    doc.y += 105  // Adjust for taller tax box
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
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { receipt, donor_name, donor_email, amount, donation_date, transaction_id } = req.query

    if (!receipt) {
      return res.status(400).json({ error: 'Receipt number required' })
    }

    // Validate receipt number format
    if (!receipt.startsWith('OCKABA-')) {
      return res.status(400).json({ error: 'Invalid receipt number' })
    }

    // If we have all the data, generate PDF on-demand
    if (donor_name && donor_email && amount && donation_date && transaction_id) {
      console.log(`Generating PDF on-demand for receipt: ${receipt}`)
      console.log(`Amount received: ${amount}`)
      
      const pdfBuffer = await generatePDFOnDemand({
        donor_name: decodeURIComponent(donor_name),
        donor_email: decodeURIComponent(donor_email),
        amount: amount, // Keep as string/number, format in PDF generation
        donation_date: decodeURIComponent(donation_date),
        receipt_number: receipt,
        transaction_id: decodeURIComponent(transaction_id)
      })

      // Set headers for PDF download with consistent filename
      res.setHeader('Content-Type', 'application/pdf')
      res.setHeader('Content-Disposition', `attachment; filename="OCKABAF-Donation-Receipt-${receipt}.pdf"`)
      res.setHeader('Content-Length', pdfBuffer.length)
      res.setHeader('Cache-Control', 'no-cache')

      console.log(`PDF generated successfully: ${receipt}`)
      return res.send(pdfBuffer)
    }

    // Fallback: try to find the temporary file
    const pdfPath = path.join('/tmp', `ockabaf-receipt-${receipt}.pdf`)
    
    console.log(`Looking for PDF at: ${pdfPath}`)
    console.log(`File exists: ${fs.existsSync(pdfPath)}`)

    if (!fs.existsSync(pdfPath)) {
      console.log(`PDF not found for receipt: ${receipt}`)
      return res.status(404).json({ 
        error: 'Receipt not found',
        message: 'The PDF may have expired. Please check your email for the attached receipt.'
      })
    }

    const pdfBuffer = fs.readFileSync(pdfPath)
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `attachment; filename="OCKABAF-Donation-Receipt-${receipt}.pdf"`)
    res.setHeader('Content-Length', pdfBuffer.length)
    res.setHeader('Cache-Control', 'no-cache')

    console.log(`PDF downloaded successfully: ${receipt}`)
    res.send(pdfBuffer)

  } catch (error) {
    console.error('Error downloading receipt:', error)
    res.status(500).json({ 
      error: 'Failed to download receipt',
      details: error.message 
    })
  }
}
