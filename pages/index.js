import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              OCKABA Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              A 501(c)(3) nonprofit providing free legal services to those in need and scholarships to exceptional law students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
                className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors"
              >
                Our Programs
              </Link>
              <Link
                href="/donate"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Donate Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensuring access to justice and investing in the future of legal advocacy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-5xl mb-6 text-center">⚖️</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 text-center">Pro Bono Legal Services</h3>
              <p className="text-gray-600 text-center mb-4">
                Providing free legal assistance to community members who cannot afford representation. Our volunteer attorneys help with immigration, family law, housing, and other critical legal matters.
              </p>
              <div className="text-center">
                <Link
                  href="mailto:legal@ockabaf.org?subject=Legal Assistance Request"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Request Legal Help →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-5xl mb-6 text-center">🎓</div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 text-center">Law Student Scholarships</h3>
              <p className="text-gray-600 text-center mb-4">
                Supporting outstanding law students through merit-based scholarships, enabling them to focus on their studies and develop into ethical, community-minded legal professionals.
              </p>
              <div className="text-center">
                <Link
                  href="mailto:scholarships@ockabaf.org?subject=Scholarship Application"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Apply for Scholarships →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fellows Spotlight Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Scholarship Recipients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our Minyard Morris Fellowship recipients who are making a difference through pro bono legal work while pursuing their law degrees
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 border border-gray-200 rounded-lg p-8 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
                <div className="text-gray-600">Current Fellows</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
                <div className="text-gray-600">Pro Bono Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Cases Assisted</div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our scholarship recipients are exceptional law students who demonstrate both academic excellence and a commitment to public service, providing valuable legal assistance to community members in need.
            </p>
            
            <Link
              href="/fellows"
              className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Meet Our Fellows
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need Legal Help?</h2>
              <p className="text-xl mb-6 opacity-90">
                If you're facing legal challenges and cannot afford representation, we're here to help.
              </p>
              <Link
                href="mailto:legal@ockabaf.org"
                className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors inline-block"
              >
                Request Legal Assistance
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Support Our Work</h2>
              <p className="text-xl mb-6 opacity-90">
                Your tax-deductible donation helps us provide free legal services and educational scholarships.
              </p>
              <Link
                href="/donate"
                className="bg-accent-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-600 transition-colors inline-block"
              >
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
