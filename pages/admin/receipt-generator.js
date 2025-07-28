// pages/admin/receipt-generator.js
import { useState } from 'react'
import Layout from '../../components/Layout'

export default function AdminReceiptGenerator() {
  const [formData, setFormData] = useState({
    donorName: 'Linda Carter',
    donorEmail: 'lcarter@kahanafeld.com',
    amount: '1000',
    donationDate: 'July 21, 2025',
    receiptNumber: 'OCKABAF-1XXHD0YA',
    transactionId: 'pi_3RnQkGBjlJm8Jh2R1XxHD0yA'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Auto-generate receipt number from transaction ID
    if (name === 'transactionId' && value.startsWith('pi_') && value.length > 8) {
      const receiptNumber = 'OCKABAF-' + value.slice(-8).toUpperCase()
      setFormData(prev => ({
        ...prev,
        receiptNumber
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const params = new URLSearchParams({
      receipt: formData.receiptNumber,
      donor_name: formData.donorName,
      donor_email: formData.donorEmail,
      amount: formData.amount,
      donation_date: formData.donationDate,
      transaction_id: formData.transactionId
    })
    
    const downloadUrl = `/api/download-receipt?${params.toString()}`
    window.open(downloadUrl, '_blank')
  }

  const handleResend = () => {
    alert('🚧 Resend functionality would need to be implemented in your backend.\n\nFor now, you can:\n1. Download the PDF using the button above\n2. Manually email it to the donor\n3. Or implement an admin resend API endpoint')
  }

  return (
    <Layout title="Admin Receipt Generator - OCKABA Foundation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
            🧾 Admin Receipt Generator
          </h1>
          
          <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">📧 Sample from Internal Notification Email:</h3>
            <div className="text-sm font-mono space-y-1">
              <p><strong>Donor Name:</strong> Linda Carter</p>
              <p><strong>Email:</strong> lcarter@kahanafeld.com</p>
              <p><strong>Amount:</strong> $1000.00</p>
              <p><strong>Date:</strong> July 21, 2025 at 8:55 PM</p>
              <p><strong>Receipt Number:</strong> OCKABAF-1XXHD0YA</p>
              <p><strong>Transaction ID:</strong> pi_3RnQkGBjlJm8Jh2R1XxHD0yA</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <strong>📝 Note:</strong> Copy the information from your internal notification email into the form below to regenerate the donor receipt.
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="donorName" className="block text-sm font-medium text-gray-700 mb-1">
                  Donor Name:
                </label>
                <input
                  type="text"
                  id="donorName"
                  name="donorName"
                  value={formData.donorName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Donor Email:
                </label>
                <input
                  type="email"
                  id="donorEmail"
                  name="donorEmail"
                  value={formData.donorEmail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Amount ($):
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="donationDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Donation Date:
                </label>
                <input
                  type="text"
                  id="donationDate"
                  name="donationDate"
                  value={formData.donationDate}
                  onChange={handleInputChange}
                  placeholder="July 21, 2025"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="receiptNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Receipt Number:
                </label>
                <input
                  type="text"
                  id="receiptNumber"
                  name="receiptNumber"
                  value={formData.receiptNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction ID:
                </label>
                <input
                  type="text"
                  id="transactionId"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
            >
              📄 Download Receipt PDF
            </button>
          </form>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📧 Resend Receipt to Donor</h3>
            <p className="text-gray-600 mb-4">
              If the donor needs the receipt resent to their email, you can also use the regenerated PDF and manually email it to them, or implement an admin resend function.
            </p>
            <button
              type="button"
              onClick={handleResend}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              📨 Resend to Donor Email
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
