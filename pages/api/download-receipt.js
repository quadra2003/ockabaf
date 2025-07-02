// pages/api/download-receipt.js
import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { receipt } = req.query

    if (!receipt) {
      return res.status(400).json({ error: 'Receipt number required' })
    }

    // Validate receipt number format
    if (!receipt.startsWith('OCKABA-')) {
      return res.status(400).json({ error: 'Invalid receipt number' })
    }

    const pdfPath = path.join(process.cwd(), 'temp', `receipt-${receipt}.pdf`)

    // Check if PDF exists
    if (!fs.existsSync(pdfPath)) {
      return res.status(404).json({ error: 'Receipt not found' })
    }

    // Read the PDF file
    const pdfBuffer = fs.readFileSync(pdfPath)

    // Set headers for PDF download
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `attachment; filename="OCKABA-Receipt-${receipt}.pdf"`)
    res.setHeader('Content-Length', pdfBuffer.length)

    // Send the PDF
    res.send(pdfBuffer)

  } catch (error) {
    console.error('Error downloading receipt:', error)
    res.status(500).json({ 
      error: 'Failed to download receipt',
      details: error.message 
    })
  }
}
