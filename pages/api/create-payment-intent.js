import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount, currency, donor_email, donor_name } = req.body

      // Create payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          donor_email,
          donor_name,
        },
      })

      res.status(200).json({
        client_secret: paymentIntent.client_secret,
      })
    } catch (error) {
      console.error('Error creating payment intent:', error)
      res.status(500).json({ error: error.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
