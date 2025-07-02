import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#424770',
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#9e2146',
      iconColor: '#9e2146'
    }
  }
}

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [donationNote, setDonationNote] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [receiptStatus, setReceiptStatus] = useState('')
  const [receiptNumber, setReceiptNumber] = useState('')

  const presetAmounts = [25, 50, 100, 250, 500, 1000]

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) return

    if (!amount || !email || !name) {
      setMessage('Please fill in all fields')
      return
    }

    setLoading(true)
    setMessage('')
    setReceiptStatus('')

    try {
      // Create payment intent
      const { data } = await axios.post('/api/create-payment-intent', {
        amount: parseInt(amount) * 100, // Convert to cents
        currency: 'usd',
        donor_email: email,
        donor_name: name,
        donation_note: donationNote
      })

      // Confirm payment
      const result = await stripe.confirmCardPayment(data.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: name,
            email: email,
          },
        }
      })

      if (result.error) {
        setMessage(result.error.message)
      } else {
        // Payment successful - now send receipt
        setMessage('Thank you for your donation!')
        setReceiptStatus('Sending receipt...')

        try {
          // Send receipt
          const receiptResponse = await axios.post('/api/send-receipt', {
            payment_intent_id: result.paymentIntent.id,
            amount: parseInt(amount),
            donor_email: email,
            donor_name: name,
            donation_note: donationNote,
            transaction_date: new Date().toISOString()
          })

          setReceiptStatus('Receipt sent to your email!')
          // Make sure we capture the receipt number from the response
          if (receiptResponse.data && receiptResponse.data.receipt_number) {
            setReceiptNumber(receiptResponse.data.receipt_number)
          }
        } catch (receiptError) {
          console.error('Receipt sending failed:', receiptError)
          setReceiptStatus('Payment successful, but receipt could not be sent. Please contact us for your receipt.')
        }

        // Clear form
        setAmount('')
        setEmail('')
        setName('')
        setDonationNote('')
        elements.getElement(CardElement).clear()
        // Don't clear receiptNumber here - we need it for the download button!
      }
    } catch (error) {
      console.error('Payment error:', error)
      setMessage('An error occurred. Please try again.')
    }

    setLoading(false)
  }

  // Clear receipt info when starting new donation
  const handleNewDonation = () => {
    setReceiptStatus('')
    setReceiptNumber('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Preset amounts */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select an amount
        </label>
        <div className="grid grid-cols-3 gap-3">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setAmount(preset.toString())}
              className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                amount === preset.toString()
                  ? 'border-primary-600 bg-primary-50 text-primary-600'
                  : 'border-gray-300 text-gray-700 hover:border-primary-300'
              }`}
            >
              ${preset}
            </button>
          ))}
        </div>
      </div>

      {/* Custom amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom Amount
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
              handleNewDonation() // Clear receipt info when amount changes
            }}
            className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="0"
            min="1"
          />
        </div>
      </div>

      {/* Donor information */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
      </div>

      {/* Donation note/purpose */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What is this donation for? <span className="text-gray-500">(Optional)</span>
        </label>
        <textarea
          value={donationNote}
          onChange={(e) => setDonationNote(e.target.value)}
          placeholder="e.g., Scholarship fund, General operations, Event sponsorship..."
          className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 resize-none"
          rows="3"
          maxLength="500"
        />
        <p className="text-xs text-gray-500 mt-1">
          {donationNote.length}/500 characters
        </p>
      </div>

      {/* Card element */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Information
        </label>
        <div className="border border-gray-300 rounded-md p-3 bg-white">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
      >
        {loading ? 'Processing...' : `Donate $${amount || '0'}`}
      </button>

      {/* Messages */}
      {message && (
        <div className={`p-4 rounded-md ${
          message.includes('Thank you') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {message}
        </div>
      )}

      {receiptStatus && (
        <div className={`p-3 rounded-md text-sm ${
          receiptStatus.includes('sent to your email') 
            ? 'bg-blue-50 text-blue-800' 
            : receiptStatus.includes('could not be sent')
            ? 'bg-yellow-50 text-yellow-800'
            : 'bg-gray-50 text-gray-800'
        }`}>
          <div className="flex items-center justify-between">
            <span>{receiptStatus}</span>
            {receiptNumber && receiptStatus.includes('sent to your email') && (
              <a
                href={`/api/download-receipt?receipt=${receiptNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors"
              >
                📄 Download PDF
              </a>
            )}
          </div>
        </div>
      )}

      {/* Tax deductible notice */}
      <p className="text-xs text-gray-500 text-center">
        OCKABA Foundation is a 501(c)(3) nonprofit organization.<br />
        Your donation may be tax-deductible to the extent allowed by law.<br />
        <em>A receipt will be automatically sent to your email address.</em>
      </p>
    </form>
  )
}

export default function DonationForm() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}
