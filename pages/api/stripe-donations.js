// pages/api/donation-tracker.js
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Cache to avoid hitting Stripe API too frequently
let cache = {
  data: null,
  lastUpdated: null,
  cacheExpiry: 5 * 1000 // 5 seconds
}

function getTimeAgo(timestamp) {
  const now = Date.now()
  const diff = now - timestamp
  
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  return `${days} day${days > 1 ? 's' : ''} ago`
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Check cache first
    const now = Date.now()
    if (cache.data && cache.lastUpdated && 
        (now - cache.lastUpdated) < cache.cacheExpiry) {
      return res.json(cache.data)
    }

    console.log('Fetching 2025 donation data from Stripe...')

    // 2025 date range
    const start2025 = Math.floor(new Date('2025-01-01T00:00:00Z').getTime() / 1000)
    const end2025 = Math.floor(new Date('2025-12-31T23:59:59Z').getTime() / 1000)

    let allPayments = []
    let hasMore = true
    let startingAfter = undefined

    while (hasMore) {
      const params = {
        limit: 100,
        expand: ['data.latest_charge'],
        created: {
          gte: start2025,
          lte: end2025
        },
        ...(startingAfter && { starting_after: startingAfter })
      }

      const paymentIntents = await stripe.paymentIntents.list(params)
      
      // Filter for succeeded payments only
      const succeededPayments = paymentIntents.data.filter(pi => 
        pi.status === 'succeeded' && pi.amount_received > 0
      )
      
      allPayments = allPayments.concat(succeededPayments)
      
      hasMore = paymentIntents.has_more
      if (hasMore && paymentIntents.data.length > 0) {
        startingAfter = paymentIntents.data[paymentIntents.data.length - 1].id
      }

      // Safety break
      if (allPayments.length > 1000) {
        console.log('Safety break: retrieved 1000+ payments')
        break
      }
    }

    console.log(`Total successful payments found in 2025: ${allPayments.length}`)

    // Calculate totals
    const totalAmount = allPayments.reduce((sum, donation) => sum + donation.amount, 0)
    const donationCount = allPayments.length

    // Get recent donations (last 10)
    const recentDonations = allPayments
      .sort((a, b) => b.created - a.created)
      .slice(0, 10)
      .map(donation => {
        const charge = donation.latest_charge
        
        let customerName = 'Anonymous'
        if (charge?.billing_details?.name) {
          customerName = charge.billing_details.name
        } else if (donation.metadata?.donor_name) {
          customerName = donation.metadata.donor_name
        } else if (donation.metadata?.bidder_name) {
          customerName = donation.metadata.bidder_name
        } else if (donation.receipt_email) {
          customerName = donation.receipt_email.split('@')[0]
        }
        
        return {
          id: donation.id,
          amount: donation.amount,
          name: customerName,
          email: donation.receipt_email || donation.metadata?.donor_email || donation.metadata?.bidder_email,
          created: donation.created * 1000,
          timeAgo: getTimeAgo(donation.created * 1000)
        }
      })

    const responseData = {
      total: {
        amount: totalAmount,
        count: donationCount,
        currency: allPayments[0]?.currency || 'usd'
      },
      recent: recentDonations,
      lastUpdated: new Date().toISOString(),
      success: true
    }

    console.log(`2025 total: ${(totalAmount / 100).toFixed(2)} from ${donationCount} donations`)

    // Update cache
    cache.data = responseData
    cache.lastUpdated = now

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    res.json(responseData)

  } catch (error) {
    console.error('Error fetching donation data:', error)
    
    if (cache.data) {
      console.log('Returning cached data due to error')
      return res.json({
        ...cache.data,
        error: 'Using cached data - Stripe API temporarily unavailable'
      })
    }
    
    res.status(500).json({ 
      error: 'Failed to fetch donation data',
      message: error.message 
    })
  }
}
