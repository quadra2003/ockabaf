import { useState } from 'react'
import Layout from '../components/Layout'
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

function SponsorshipForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [selectedTier, setSelectedTier] = useState(null)
  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [receiptStatus, setReceiptStatus] = useState('')

  const sponsorshipTiers = [
    {
      id: 'ichthus',
      name: 'Title Sponsor',
      level: 'ICHTHUS INJURY NETWORK',
      status: 'SOLD OUT',
      isMatching: true,
      benefits: [
        'Matching every donation and sponsorship dollar-for-dollar',
        'Doubling the impact of all contributions up to $25,000',
        'Exclusive title sponsor recognition',
        'Premium logo placement on all materials'
      ],
      color: 'bg-red-600',
      textColor: 'text-red-600',
      disabled: true,
      description: 'As our Title Sponsor, Ichthus Injury Network is generously matching all donations and sponsorships dollar-for-dollar!',
      logo: 'ichthus-logo.png'
    },
    {
      id: 'joseon',
      name: 'Joseon 조선 Sponsor',
      level: '$5,000 SPONSORSHIP',
      amount: 5000,
      benefits: [
        'Fifteen (15) tickets',
        'Verbal recognition at Taste of Korea event on August 27',
        'Dedicated social media post',
        'Premium logo recognition at the event, via website, and via e-mail'
      ],
      color: 'bg-blue-600',
      textColor: 'text-blue-600'
    },
    {
      id: 'goryeo',
      name: 'Goryeo 고려 Sponsor',
      level: '$3,500 SPONSORSHIP',
      amount: 3500,
      benefits: [
        'Twelve (12) tickets',
        'Dedicated social media post',
        'Premium logo recognition at the event, via website, and via e-mail'
      ],
      color: 'bg-purple-600',
      textColor: 'text-purple-600'
    },
    {
      id: 'silla',
      name: 'Silla 신라 Sponsor',
      level: '$2,500 SPONSORSHIP',
      amount: 2500,
      benefits: [
        'Ten (10) tickets',
        'Premium logo recognition at the event, via website, and via e-mail'
      ],
      color: 'bg-green-600',
      textColor: 'text-green-600'
    },
    {
      id: 'baekje',
      name: 'Baekje 백제 Sponsor',
      level: '$1,000 SPONSORSHIP',
      amount: 1000,
      benefits: [
        'Four (4) tickets',
        'Preferred logo recognition at the event, via website, and via e-mail'
      ],
      color: 'bg-orange-600',
      textColor: 'text-orange-600'
    },
    {
      id: 'goguryeo',
      name: 'Goguryeo 고구려 Sponsor',
      level: '$500 SPONSORSHIP',
      amount: 500,
      benefits: [
        'Two (2) tickets',
        'Standard logo recognition at the event, via website, and via e-mail'
      ],
      color: 'bg-teal-600',
      textColor: 'text-teal-600'
    },
    {
      id: 'gojoseon',
      name: 'Gojoseon 고조선 Sponsor',
      level: '$250 SPONSORSHIP',
      amount: 250,
      benefits: [
        'Standard logo recognition at the event, via website, and via e-mail'
      ],
      color: 'bg-indigo-600',
      textColor: 'text-indigo-600'
    }
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements || !selectedTier) return

    if (!companyName || !contactName || !email) {
      setMessage('Please fill in all required fields')
      return
    }

    setLoading(true)
    setMessage('')
    setReceiptStatus('')

    try {
      // Create payment intent for sponsorship
      const { data } = await axios.post('/api/create-payment-intent', {
        amount: selectedTier.amount * 100, // Convert to cents
        currency: 'usd',
        donor_email: email,
        donor_name: contactName,
        donation_note: `${selectedTier.level}: ${selectedTier.name} - Taste of Korea 2025 Sponsorship - Company: ${companyName}`
      })

      // Confirm payment
      const result = await stripe.confirmCardPayment(data.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: contactName,
            email: email,
          },
        }
      })

      if (result.error) {
        setMessage(result.error.message)
      } else {
        setMessage('Thank you for your sponsorship!')
        setReceiptStatus('Sending receipt and sponsorship confirmation...')

        try {
          // Send receipt
          await axios.post('/api/send-receipt', {
            payment_intent_id: result.paymentIntent.id,
            amount: selectedTier.amount,
            donor_email: email,
            donor_name: contactName,
            donation_note: `${selectedTier.level}: ${selectedTier.name} - Taste of Korea 2025 Sponsorship - Company: ${companyName}`,
            transaction_date: new Date().toISOString()
          })

          setReceiptStatus('Sponsorship confirmation sent to your email!')
        } catch (receiptError) {
          setReceiptStatus('Payment successful, but confirmation could not be sent. Please contact us.')
        }

        // Clear form
        setSelectedTier(null)
        setCompanyName('')
        setContactName('')
        setEmail('')
        setPhone('')
        elements.getElement(CardElement).clear()
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    }

    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Event Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Taste of Korea 2025
        </h1>
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">
            Wednesday, August 27, 2025 • 6:00 PM - 8:30 PM
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Location:</strong> Crowell & Moring LLP (3 Park Plaza, 20th Floor, Irvine, CA 92614)
          </p>
          <p className="text-gray-600">
            Join us for an exciting evening with fellow legal professionals from Orange County and the greater Southern California region. 
            Our event will include traditional Korean food, drinks, and entertainment.
          </p>
        </div>

      {/* Last Year's Event Photos */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Last Year's Taste of Korea Highlights
        </h2>
        <div className="mb-4 cursor-pointer -mx-4 sm:-mx-6 lg:-mx-8" onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720318269914', '_blank')}>
          <img
            src="/images/taste-of-korea-2024-collage.png"
            alt="Taste of Korea 2024 Event Highlights"
            className="w-full rounded-lg hover:shadow-lg transition-shadow"
            style={{ aspectRatio: '1200/180', objectFit: 'cover' }}
          />
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-3">
            Join 200+ legal professionals for networking, Korean cuisine, and community building
          </p>
          <a
            href="https://www.flickr.com/photos/165825565@N05/albums/72177720318269914"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-block text-sm"
          >
            View All Photos from 2024 Event
          </a>
        </div>
      </div>
      </div>

      {/* Matching Sponsor Callout */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-6 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-3">🎉 Your Impact is DOUBLED! 🎉</h2>
        <p className="text-lg mb-2">
          Thanks to our Title Sponsor <strong>Ichthus Injury Network</strong>, every sponsorship and donation is matched dollar-for-dollar!
        </p>
        <p className="text-sm opacity-90">
          Your $1,000 sponsorship becomes $2,000 of impact • Your $500 becomes $1,000 • Every dollar counts twice!
        </p>
      </div>

      {/* Sponsorship Tiers */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Sponsorship Level</h2>
        <div className="grid gap-6">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedTier?.id === tier.id
                  ? `border-primary-600 bg-primary-50`
                  : tier.disabled
                  ? 'border-gray-300 bg-gray-50 cursor-not-allowed opacity-60'
                  : 'border-gray-300 hover:border-primary-400'
              }`}
              onClick={() => !tier.disabled && setSelectedTier(tier)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-2xl font-bold ${tier.textColor}`}>
                      {tier.name}
                    </h3>
                    {tier.status && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                        {tier.status}
                      </span>
                    )}
                    {tier.isMatching && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        🎁 MATCHING ALL DONATIONS
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-medium mb-3">
                    {tier.level}
                  </p>
                  {tier.logo && (
                    <div className="mb-3">
                      <img
                        src={`/images/${tier.logo}`}
                        alt="Ichthus Injury Network"
                        className="h-16 w-auto"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                  )}
                  {tier.description && (
                    <p className="text-gray-600 text-sm italic">
                      {tier.description}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  {tier.amount ? (
                    <div>
                      <div className={`text-3xl font-bold ${tier.textColor}`}>
                        ${tier.amount.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        + ${tier.amount.toLocaleString()} match!
                      </div>
                      <div className="text-xs text-gray-500">
                        Total Impact: ${(tier.amount * 2).toLocaleString()}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-lg text-green-600 font-semibold">
                        Matching all donations
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-2">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${tier.textColor} mr-2 mt-1`}>✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsorship Form */}
      {selectedTier && (
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Your {selectedTier.name} Sponsorship
          </h3>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h4 className="text-lg font-semibold text-green-800 mb-2">Your Impact Summary:</h4>
            <p className="text-green-700">
              Your ${selectedTier.amount?.toLocaleString()} sponsorship + ${selectedTier.amount?.toLocaleString()} match = 
              <span className="font-bold"> ${((selectedTier.amount || 0) * 2).toLocaleString()} total impact!</span>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization Name *
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Information
              </label>
              <div className="border border-gray-300 rounded-md p-3 bg-white">
                <CardElement options={CARD_ELEMENT_OPTIONS} />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!stripe || loading}
              className={`w-full text-white py-4 px-6 rounded-md font-semibold text-lg transition-colors ${selectedTier.color} hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? 'Processing...' : `Complete ${selectedTier.name} Sponsorship - $${selectedTier.amount?.toLocaleString()}`}
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
              <div className="p-4 rounded-md bg-blue-50 text-blue-800">
                {receiptStatus}
              </div>
            )}
          </form>
        </div>
      )}

      {/* Additional Information */}
      <div className="mt-16 text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Questions About Sponsorship?
          </h3>
          <p className="text-gray-600 mb-6">
            For more information about sponsorship packages or to discuss custom sponsorship opportunities,
            please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@ockabaf.org?subject=Sponsorship Inquiry"
              className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
            >
              Email Us
            </a>
            <a
              href="https://www.ockabaf.org/sponsor"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-600 text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
            >
              Visit www.ockabaf.org/sponsor
            </a>
          </div>
        </div>
      </div>

      {/* Tax Information */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          OCKABA Foundation is a 501(c)(3) nonprofit organization (EIN: 27-4456831).<br />
          Your sponsorship may be tax-deductible to the extent allowed by law.<br />
          A receipt will be automatically sent to your email address.
        </p>
      </div>
    </div>
  )
}

export default function Sponsor() {
  return (
    <Layout title="Sponsor Taste of Korea 2025 - OCKABA Foundation">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <Elements stripe={stripePromise}>
          <SponsorshipForm />
        </Elements>
      </div>
    </Layout>
  )
}
