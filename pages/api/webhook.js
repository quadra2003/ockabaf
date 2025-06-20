import Stripe from 'stripe'
import axios from 'axios'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const sig = req.headers['stripe-signature']
    let event

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message)
      return res.status(400).send(`Webhook signature verification failed.`)
    }

    // Handle the payment_intent.succeeded event
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object
      
      // Send thank you email via Mailgun
      try {
        await axios.post(
          `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
          {
            from: 'OCKABA Foundation <info@ockabaf.org>',
            to: paymentIntent.metadata.donor_email,
            subject: 'Thank you for your donation to OCKABA Foundation',
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="color: #2563eb; margin-bottom: 10px;">Thank you for your generous donation!</h1>
                </div>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                  <p style="margin: 0 0 15px 0; font-size: 16px;">Dear ${paymentIntent.metadata.donor_name},</p>
                  
                  <p style="margin: 0 0 15px 0;">We have received your donation of <strong>$${(paymentIntent.amount / 100).toFixed(2)}</strong> to the OCKABA Foundation.</p>
                  
                  <p style="margin: 0 0 15px 0;">Your support helps us empower Korean American legal professionals and promote diversity in the legal field through our scholarship programs, mentorship opportunities, and community initiatives.</p>
                </div>
                
                <div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                  <h3 style="margin: 0 0 10px 0; color: #2563eb;">Donation Details:</h3>
                  <p style="margin: 5px 0;"><strong>Amount:</strong> $${(paymentIntent.amount / 100).toFixed(2)}</p>
                  <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                  <p style="margin: 5px 0;"><strong>Transaction ID:</strong> ${paymentIntent.id}</p>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                  <p style="margin: 0; font-size: 14px; color: #92400e;">
                    <strong>Tax Information:</strong> OCKABA Foundation is a 501(c)(3) nonprofit organization. 
                    Your donation may be tax-deductible to the extent allowed by law. 
                    Please consult your tax advisor for specific guidance.
                  </p>
                </div>
                
                <p style="margin: 20px 0;">If you have any questions about your donation, please don't hesitate to contact us at <a href="mailto:info@ockabaf.org" style="color: #2563eb;">info@ockabaf.org</a>.</p>
                
                <p style="margin: 20px 0;">With gratitude,<br><strong>The OCKABA Foundation Team</strong></p>
                
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <div style="text-align: center; font-size: 12px; color: #6b7280;">
                  <p style="margin: 5px 0;">OCKABA Foundation</p>
                  <p style="margin: 5px 0;">Email: info@ockabaf.org</p>
                  <p style="margin: 5px 0;">Website: https://ockabaf.org</p>
                </div>
              </div>
            `
          },
          {
            auth: {
              username: 'api',
              password: process.env.MAILGUN_API_KEY
            }
          }
        )
        console.log('Thank you email sent successfully')
      } catch (error) {
        console.error('Error sending email:', error.response?.data || error.message)
      }
    }

    res.json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
