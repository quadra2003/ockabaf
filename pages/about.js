import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About - OCKABA Foundation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            About OCKABA Foundation
          </h1>
          <p className="text-lg text-gray-600">
            A 501(c)(3) nonprofit providing pro bono legal services and educational scholarships to strengthen our community
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              The OCKABA Foundation is a 501(c)(3) charitable organization dedicated to serving our community through our pro bono legal services program, providing free legal assistance to those who cannot afford representation. We also support the next generation of legal professionals through educational scholarships for law students and engage pre-law individuals through our fellowship program.
            </p>
            <p className="text-gray-600">
              We believe that access to justice should not depend on one's ability to pay, and that investing in promising law students while engaging dedicated pre-law individuals creates a ripple effect of positive impact throughout our community for years to come.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Justice for All</h3>
                <p className="text-gray-600">We believe everyone deserves access to quality legal representation regardless of their financial circumstances.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Educational Investment</h3>
                <p className="text-gray-600">We invest in exceptional law students through scholarships and engage pre-law individuals through hands-on fellowship opportunities.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Community Service</h3>
                <p className="text-gray-600">Our work is driven by a deep commitment to strengthening and supporting our local communities.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Transparency</h3>
                <p className="text-gray-600">As a 501(c)(3) organization, we operate with full transparency and accountability to our donors and community.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">1,000+</div>
                <div className="text-gray-600">Community Members Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
                <div className="text-gray-600">2024 Fellowship Recipients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">$25K+</div>
                <div className="text-gray-600">Law Student Scholarships Awarded</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                OCKABA Foundation is a 501(c)(3) tax-exempt nonprofit organization. 
                All donations are tax-deductible to the fullest extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
