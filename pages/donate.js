import Layout from '../components/Layout'
import DonationForm from '../components/DonationForm'

export default function Donate() {
  return (
    <Layout title="Donate - OCKABA Foundation">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h1>
          <p className="text-lg text-gray-600">
            Your donation helps us empower Korean American legal professionals and promote diversity in the legal field.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <DonationForm />
        </div>
      </div>
    </Layout>
  )
}
