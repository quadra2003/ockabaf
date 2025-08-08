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
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [ticketQuantity, setTicketQuantity] = useState(1)
  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [receiptStatus, setReceiptStatus] = useState('')

  // Individual ticket options
  const ticketOptions = [
    {
      id: 'regular',
      name: 'General Admission',
      price: 100,
      description: 'Includes authentic Korean food and beverages',
      color: 'bg-gray-600',
      textColor: 'text-gray-600',
      features: [
        'Authentic Korean cuisine',
        'Premium beverages',
        'Networking with legal professionals',
        'Traditional Korean entertainment'
      ]
    },
    {
      id: 'poker',
      name: 'General Admission + Poker',
      price: 175,
      description: 'Everything in General Admission plus charity poker tournament seat',
      color: 'bg-amber-600',
      textColor: 'text-amber-600',
      saveAmount: 25,
      features: [
        'Everything in General Admission',
        'Reserved seat at charity poker tournament',
        'Trophy for tournament winner',
        'Save $25 vs. buying poker add-on at event ($100)'
      ]
    },
    {
      id: 'poker-addon',
      name: 'Poker Tournament Add-On',
      price: 75,
      description: 'For those who already have a ticket (purchased or sponsored)',
      color: 'bg-orange-600',
      textColor: 'text-orange-600',
      saveAmount: 25,
      features: [
        'Reserved seat at charity poker tournament',
        'Trophy for tournament winner',
        'Save $25 vs. day-of registration ($100)',
        'Must already have event ticket'
      ]
    }
  ]

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
      textColor: 'text-blue-600',
      sponsors: [
        { name: 'Minyard Morris', logo: 'minyard.png' }
      ]
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
      textColor: 'text-purple-600',
      sponsors: [
        { name: 'Briana Kim PC', logo: 'briana.jpg' }
      ]
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
      textColor: 'text-green-600',
      sponsors: [
        { name: 'Crowell & Moring LLP', logo: 'crowell.png' },
        { name: 'Knobbe Martens', logo: 'knobbe.jpg' },
        { name: 'OCKABA', logo: 'ockaba.jpg' }
      ]
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
      textColor: 'text-orange-600',
      sponsors: [
        { name: 'John Cha', logo: null },
        { name: 'Kahana Feld', logo: null },
        { name: 'Kim Law APC', logo: null },
        { name: 'OCAABA', logo: null },
        { name: 'SL Law', logo: null },
        { name: 'Womble Bond Dickinson', logo: null }
      ]
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
      textColor: 'text-teal-600',
      sponsors: [
        { name: 'April Gilbert', logo: null },
        { name: 'Avodah Law Group', logo: null },
        { name: 'Capto Advisors', logo: null },
        { name: 'Chin Law Group', logo: null },
        { name: 'FLOC', logo: null },
        { name: 'GS Medical', logo: null },
        { name: 'In-sīt Coffee', logo: null },
        { name: 'Judicate West', logo: null },
        { name: 'KABA SoCal', logo: null },
        { name: 'Nationwide Legal', logo: null },
        { name: 'RO & YOU', logo: null },
        { name: 'Sgt. Pepperoni\'s Pizza', logo: null },
        { name: 'Signature Resolution', logo: null },
        { name: 'Steno', logo: null },
        { name: 'Susan Kang Group', logo: null },
        { name: 'UCI Law Korea Law Center', logo: null },
        { name: 'Umberg Zipser', logo: null },
        { name: 'ZC Settlement Advisors', logo: null }
      ]
    },
    {
      id: 'gojoseon',
      name: 'Gojoseon 고조선 Sponsor',
      level: '$250 SPONSORSHIP',
      amount: 250,
      benefits: [
        'Standard logo recognition at the event, via website, and via e-mail',
        'Tickets not included (may be purchased separately)'
      ],
      color: 'bg-indigo-600',
      textColor: 'text-indigo-600',
      sponsors: [
        { name: 'Kairos Academics', logo: null }
      ]
    }
  ]

  const scrollToSponsorships = () => {
    document.getElementById('sponsorship-section').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const scrollToTickets = () => {
    document.getElementById('tickets-section').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements || (!selectedTier && !selectedTicket)) return

    if (!contactName || !email) {
      setMessage('Please fill in all required fields')
      return
    }

    // For sponsorships, require company name
    if (selectedTier && !companyName) {
      setMessage('Company name is required for sponsorships')
      return
    }

    setLoading(true)
    setMessage('')
    setReceiptStatus('')

    try {
      let amount, donationNote

      if (selectedTicket) {
        amount = selectedTicket.price * ticketQuantity * 100 // Convert to cents
        donationNote = `${ticketQuantity}x ${selectedTicket.name} Ticket${ticketQuantity > 1 ? 's' : ''} - Taste of Korea 2025`
      } else {
        amount = selectedTier.amount * 100 // Convert to cents
        donationNote = `${selectedTier.level}: ${selectedTier.name} - Taste of Korea 2025 Sponsorship - Company: ${companyName}`
      }

      // Create payment intent
      const { data } = await axios.post('/api/create-payment-intent', {
        amount,
        currency: 'usd',
        donor_email: email,
        donor_name: contactName,
        donation_note: donationNote
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
        const successMessage = selectedTicket 
          ? `Thank you for your ticket purchase!` 
          : `Thank you for your sponsorship!`
        setMessage(successMessage)
        
        const statusMessage = selectedTicket
          ? 'Sending ticket confirmation...'
          : 'Sending receipt and sponsorship confirmation...'
        setReceiptStatus(statusMessage)

        try {
          // Send receipt
          await axios.post('/api/send-receipt', {
            payment_intent_id: result.paymentIntent.id,
            amount: selectedTicket ? selectedTicket.price * ticketQuantity : selectedTier.amount,
            donor_email: email,
            donor_name: contactName,
            donation_note: donationNote,
            transaction_date: new Date().toISOString()
          })

          const confirmationMessage = selectedTicket
            ? 'Ticket confirmation sent to your email!'
            : 'Sponsorship confirmation sent to your email!'
          setReceiptStatus(confirmationMessage)
        } catch (receiptError) {
          setReceiptStatus('Payment successful, but confirmation could not be sent. Please contact us.')
        }

        // Clear form
        setSelectedTier(null)
        setSelectedTicket(null)
        setTicketQuantity(1)
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

  const clearSelection = () => {
    setSelectedTier(null)
    setSelectedTicket(null)
    setTicketQuantity(1)
  }

  return (
    <div className="max-w-4xl mx-auto overflow-hidden">
      {/* Event Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Taste of Korea 2025
        </h1>
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">
            Wednesday, August 27, 2025 • 6:00 PM - 9:00 PM
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Location:</strong> Crowell & Moring LLP (3 Park Plaza, 20th Floor, Irvine, CA 92614)
          </p>
          <p className="text-gray-600">
            Join us for an exciting evening with fellow legal professionals from Orange County and the greater Southern California region. 
            Our event will include traditional Korean food, drinks, and entertainment.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={scrollToSponsorships}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            🤝 Sponsorship Opportunities
          </button>
          <button
            onClick={scrollToTickets}
            className="bg-gray-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-colors"
          >
            🎫 Individual Tickets
          </button>
        </div>

        {/* Last Year's Event Photos */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Last Year's Taste of Korea Highlights
          </h2>
          <div className="mb-4 cursor-pointer" onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720318269914', '_blank')}>
            <img
              src="/images/taste-of-korea-2024-collage.png"
              alt="Taste of Korea 2024 Event Highlights"
              className="w-full rounded-lg hover:shadow-lg transition-shadow"
              style={{ aspectRatio: '1200/180', objectFit: 'contain' }}
            />
          </div>
          <div className="text-center">
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
      <div id="sponsorship-section" className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-6 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-3">🎉 Sponsorship Impact is DOUBLED! 🎉</h2>
        <p className="text-lg mb-2">
          Thanks to our Title Sponsor <strong>Ichthus Injury Network</strong>, every sponsorship is matched dollar-for-dollar!
        </p>
        <p className="text-sm opacity-90">
          Your $1,000 sponsorship becomes $2,000 of impact • Your $500 becomes $1,000 • Every dollar counts twice!
        </p>
      </div>

      {/* Sponsorship Tiers */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Sponsorship Opportunities</h2>
        <p className="text-gray-600 text-center mb-8">
          Support our mission while gaining valuable exposure to the legal community
        </p>
        
        <div className="grid gap-6">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`border-2 rounded-lg p-6 transition-all ${
                selectedTier?.id === tier.id
                  ? `border-primary-600 bg-primary-50`
                  : tier.disabled
                  ? 'border-gray-300 bg-gray-50 cursor-not-allowed'
                  : 'border-gray-300 hover:border-primary-400 cursor-pointer'
              }`}
              onClick={() => {
                if (!tier.disabled) {
                  setSelectedTier(tier)
                  setSelectedTicket(null)
                }
              }}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="flex-1 lg:pr-4">
                  <div className="flex justify-between items-start lg:items-center lg:justify-start gap-3 mb-2">
                    <h3 className={`text-xl lg:text-2xl font-bold ${tier.textColor}`}>
                      {tier.name}
                    </h3>
                    {tier.status && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                        {tier.status}
                      </span>
                    )}
                    {/* Mobile pricing - top right */}
                    <div className="lg:hidden text-right">
                      {tier.amount ? (
                        <div>
                          <div className={`text-xl font-bold ${tier.textColor}`}>
                            ${tier.amount.toLocaleString()}
                          </div>
                          <div className="text-xs text-green-600 font-semibold">
                            + ${tier.amount.toLocaleString()} match!
                          </div>
                          <div className="text-xs text-gray-500">
                            Total Impact: ${(tier.amount * 2).toLocaleString()}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-sm text-green-600 font-semibold">
                            Matching all donations
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-medium mb-3">
                    {tier.level}
                  </p>
                  {tier.description && (
                    <p className="text-gray-600 text-sm italic mb-3">
                      {tier.description}
                    </p>
                  )}
                </div>
                {tier.logo && (
                  <div className="mb-3 lg:mb-0 lg:ml-4 flex justify-center lg:justify-end">
                    <img
                      src={`/images/${tier.logo}`}
                      alt="Ichthus Injury Network"
                      className="h-12 sm:h-16 w-auto max-w-full"
                      style={{ maxWidth: 'none' }}
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
                {/* Desktop pricing - right side */}
                <div className="hidden lg:block text-right lg:ml-4">
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

              {tier.sponsors && (
                <div className="flex justify-center lg:justify-end mt-4">
                  <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
                    <div className="text-xs text-gray-500 mb-2 font-medium text-center lg:text-right">
                      Current {tier.name}s:
                    </div>
                    <div className={`flex gap-2 lg:gap-3 justify-center lg:justify-end items-center ${
                      tier.sponsors.length > 6 
                        ? 'flex-wrap max-w-full lg:max-w-[420px]' 
                        : tier.sponsors.length === 4
                        ? 'flex-wrap lg:flex-nowrap max-w-full lg:max-w-none'
                        : tier.sponsors.length <= 4
                        ? 'flex-wrap lg:flex-nowrap max-w-full lg:max-w-none'
                        : 'flex-wrap lg:flex-nowrap'
                    }`}>
                      {tier.sponsors.map((sponsor, index) => (
                        sponsor.logo ? (
                          <img
                            key={index}
                            src={`/${sponsor.logo}`}
                            alt={sponsor.name}
                            className={`w-auto object-contain ${
                              tier.id === 'joseon' 
                                ? 'h-16 sm:h-20 lg:h-24 max-w-[150px] lg:max-w-[300px]' 
                                : tier.id === 'goryeo'
                                ? 'h-16 sm:h-20 lg:h-24 max-w-[150px] lg:max-w-[300px]'
                                : 'h-10 sm:h-12 lg:h-16 max-w-[80px] lg:max-w-[120px]'
                            }`}
                            style={tier.id === 'joseon' || tier.id === 'goryeo' ? { objectPosition: 'center' } : {}}
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        ) : (
                          <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded border ${tier.textColor} bg-white border-current whitespace-nowrap`}
                          >
                            {sponsor.name}
                          </span>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Purchase Form - shows when sponsorship is selected */}
      {selectedTier && (
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-16">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Complete Your {selectedTier.name} Sponsorship
            </h3>
            <button
              onClick={clearSelection}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ✕ Clear Selection
            </button>
          </div>
          
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

      {/* Individual Tickets Section - moved to bottom */}
      <div id="tickets-section" className="mb-12 border-t-2 border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">Individual Tickets</h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Can't sponsor but still want to attend? Purchase individual tickets below.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {ticketOptions.map((ticket) => (
            <div
              key={ticket.id}
              className={`border-2 rounded-lg p-6 transition-all cursor-pointer ${
                selectedTicket?.id === ticket.id
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => {
                setSelectedTicket(ticket)
                setSelectedTier(null)
              }}
            >
              <div className="text-center mb-4">
                <h3 className={`text-xl font-bold ${ticket.textColor} mb-2`}>
                  {ticket.name === 'Poker Tournament Add-On' ? (
                    <>Poker Tournament <span className="whitespace-nowrap">Add-On</span></>
                  ) : (
                    ticket.name
                  )}
                </h3>
                <div className={`text-3xl font-bold ${ticket.textColor} mb-2`}>
                  ${ticket.price}
                </div>
                {ticket.saveAmount && (
                  <div className="text-sm text-green-600 font-semibold mb-1">
                    Save ${ticket.saveAmount} vs. day-of pricing
                  </div>
                )}
                <p className="text-gray-600 text-sm">
                  {ticket.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {ticket.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${ticket.textColor} mr-2 mt-1`}>✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 mb-8">
          <p>Note: Poker tournament add-on will be available at the event for $100 (vs. $75 when purchased in advance)</p>
        </div>
      </div>

      {/* Ticket Purchase Form - shows when ticket is selected */}
      {selectedTicket && (
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-16">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Purchase Tickets
            </h3>
            <button
              onClick={clearSelection}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ✕ Clear Selection
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Ticket Summary:</h4>
            <div className="flex items-center gap-4 mb-3">
              <label className="text-blue-700 font-medium">Quantity:</label>
              <select
                value={ticketQuantity}
                onChange={(e) => setTicketQuantity(parseInt(e.target.value))}
                className="border border-gray-300 rounded px-3 py-1"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <p className="text-blue-700">
              {ticketQuantity}x {selectedTicket.name} = 
              <span className="font-bold"> ${(selectedTicket.price * ticketQuantity).toLocaleString()}</span>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
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
              className={`w-full text-white py-4 px-6 rounded-md font-semibold text-lg transition-colors ${selectedTicket.color} hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? 'Processing...' : 
                `Purchase ${ticketQuantity} Ticket${ticketQuantity > 1 ? 's' : ''} - ${(selectedTicket.price * ticketQuantity).toLocaleString()}`
              }
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
            Questions About Tickets or Sponsorship?
          </h3>
          <p className="text-gray-600 mb-6">
            For more information about tickets, sponsorship packages, or to discuss custom sponsorship opportunities,
            please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@ockabaf.org?subject=Event Inquiry"
              className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
            >
              Email Us
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
    <Layout title="Taste of Korea 2025 - Tickets & Sponsorship - OCKABA Foundation">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <Elements stripe={stripePromise}>
          <SponsorshipForm />
        </Elements>
      </div>
    </Layout>
  )
}
