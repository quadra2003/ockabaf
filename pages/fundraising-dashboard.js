import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

export default function DonationTracker() {
  const [donationData, setDonationData] = useState({
    auctria: { total: 0, count: 0, recent: [] },
    website: { total: 0, count: 0, recent: [] }
  })
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [error, setError] = useState(null)

  // Configuration - Update these values
  const CONFIG = {
    goal: 65000, // Your fundraising goal in dollars
    auctria: {
      apiUrl: 'https://api.auctria.com/public/44c3e31f-2507-4828-804b-044dff36655b/state/b726a3d7-af3e-4495-ad6e-1631d73cb0c5/3522841447524ee19f2911037e9f4118'
    },
    website: {
      apiUrl: '/api/stripe-donations'
    }
  }

  const formatCurrency = (cents) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(cents / 100)
  }

  const fetchWebsiteData = async () => {
    try {
      const response = await fetch(CONFIG.website.apiUrl)
      if (!response.ok) throw new Error('Failed to fetch website data')
      
      const data = await response.json()
      return {
        total: data.total.amount || 0,
        count: data.total.count || 0,
        recent: data.recent || []
      }
    } catch (error) {
      console.error('Error fetching website data:', error)
      return donationData.website
    }
  }

  const fetchAuctriaData = async () => {
    if (!CONFIG.auctria.apiUrl) {
      return donationData.auctria
    }

    try {
      const response = await fetch(CONFIG.auctria.apiUrl)
      if (!response.ok) throw new Error('Failed to fetch Auctria data')
      
      const data = await response.json()
      console.log('Auctria API Response:', data)
      
      let total = 0
      let count = 0
      let recent = []

      if (Array.isArray(data) && data.length > 0) {
        data.forEach(item => {
          console.log('Auctria item:', item)
          
          let amount = 0
          
          if (item.Amount) amount = parseFloat(item.Amount) * 100
          else if (item.Bid) amount = parseFloat(item.Bid) * 100
          else if (item.Total) amount = parseFloat(item.Total) * 100
          else if (item.Value) amount = parseFloat(item.Value) * 100
          
          if (amount > 0) {
            total += amount
            count++
            
            const firstName = item.BidderFirstName || ''
            const lastName = item.BidderLastName || ''
            const name = `${firstName} ${lastName}`.trim() || item.Bidder || item.Name || item.Donor || 'Anonymous'
            
            recent.push({
              name: name,
              amount: amount,
              timeAgo: 'Current bid',
              created: Date.now()
            })
          }
        })
      }

      return {
        total: Math.round(total),
        count,
        recent: recent.slice(-7)
      }
    } catch (error) {
      console.error('Error fetching Auctria data:', error)
      return donationData.auctria
    }
  }

  const refreshData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const [websiteData, auctriaData] = await Promise.all([
        fetchWebsiteData(),
        fetchAuctriaData()
      ])

      setDonationData({
        website: websiteData,
        auctria: auctriaData
      })
      
      setLastUpdated(new Date())
    } catch (error) {
      setError('Failed to refresh data')
      console.error('Refresh error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refreshData()
    
    // Auto-refresh every 5 seconds
    const interval = setInterval(refreshData, 5 * 1000)
    return () => clearInterval(interval)
  }, [])

  const total = donationData.auctria.total + donationData.website.total
  const percentage = Math.min((total / (CONFIG.goal * 100)) * 100, 100)

  return (
    <Layout title="Fundraising Progress - OCKABA Foundation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fundraising Progress
          </h1>
          <p className="text-lg text-gray-600">
            Supporting Korean American legal professionals together
          </p>
        </div>

        {/* Main Progress Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
            <div className="text-5xl font-bold mb-2">
              {formatCurrency(total)}
            </div>
            <div className="text-xl opacity-90">
              Goal: {formatCurrency(CONFIG.goal * 100)}
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="bg-white bg-opacity-20 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-white h-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="mt-2 text-lg font-semibold">
                {Math.round(percentage)}% Complete
              </div>
            </div>
          </div>

          {/* Sources Grid with Separate Recent Activity */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Website Donations */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Sponsorships & Donations
                  </h3>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatCurrency(donationData.website.total)}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {donationData.website.count} donations
                </div>

                {/* Recent Donations */}
<div className="mt-4">
  <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Donations</h4>
  {donationData.website.recent.length === 0 ? (
    <div className="text-sm text-gray-500 italic">No recent donations</div>
  ) : (
    <div className="space-y-1.5 h-80"> {/* Fixed height for exactly 7 items */}
      {donationData.website.recent.slice(0, 7).map((donation, index) => (
        <div key={index} className="flex items-center justify-between py-2 px-3 bg-white rounded border">
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-900 text-sm truncate">
              {donation.name}
            </div>
            <div className="text-xs text-gray-500">
              {donation.timeAgo}
            </div>
          </div>
          <div className="ml-2 font-semibold text-green-600 text-sm">
            {formatCurrency(donation.amount)}
          </div>
        </div>
      ))}
    </div>
  )}
</div>
              </div>

              {/* Auction Bids */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Silent Auction Bids
                  </h3>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {formatCurrency(donationData.auctria.total)}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {donationData.auctria.count} bids
                </div>

                {/* Current Winning Bids */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Current Winning Bids</h4>
                  {donationData.auctria.recent.length === 0 ? (
                    <div className="text-sm text-gray-500 italic">No bids yet</div>
                  ) : (
                    <div className="space-y-1.5">
                      {donationData.auctria.recent.slice(0, 7).map((bid, index) => (
                        <div key={index} className="flex items-center justify-between py-2 px-3 bg-white rounded border">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-sm truncate">
                              {bid.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {bid.timeAgo}
                            </div>
                          </div>
                          <div className="ml-2 font-semibold text-green-600 text-sm">
                            {formatCurrency(bid.amount)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={refreshData}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Updating...' : 'Refresh Data'}
              </button>
              
              <div className="text-sm text-gray-500">
                {lastUpdated && `Last updated: ${lastUpdated.toLocaleTimeString()}`}
              </div>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Setup Instructions */}
        {!CONFIG.auctria.apiUrl && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Setup Required
            </h3>
            <p className="text-yellow-700 mb-3">
              To display auction data, you need to configure your Auctria API connection:
            </p>
            <ol className="list-decimal list-inside text-yellow-700 space-y-1 text-sm">
              <li>Log into your Auctria admin panel</li>
              <li>Go to Website → Website Editor</li>
              <li>Add a Leaderboard element to any page</li>
              <li>Copy the "API LINK" from the Leaderboard settings</li>
              <li>Add it to the CONFIG in this page's code</li>
            </ol>
          </div>
        )}

        {/* Tax Notice */}
        <div className="text-center text-sm text-gray-500 mt-8">
          OCKABA Foundation is a 501(c)(3) nonprofit organization.<br />
          All donations are tax-deductible to the extent allowed by law.
        </div>
      </div>
    </Layout>
  )
}
