import Layout from '../components/Layout'
import Link from 'next/link'

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
            <p className="text-gray-600 mb-4">
              We believe that access to justice should not depend on one's ability to pay, and that investing in promising law students while engaging dedicated pre-law individuals creates a ripple effect of positive impact throughout our community for years to come.
            </p>
            <p className="text-gray-600">
              Through strategic partnerships with corporate sponsors and community supporters, we amplify our impact and ensure the sustainability of our programs. Our annual Taste of Korea fundraiser and corporate sponsorship opportunities enable us to expand our services and reach more community members in need.
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
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Strategic Partnerships</h3>
                <p className="text-gray-600">We collaborate with corporate partners, law firms, and community organizations to maximize our collective impact and sustainability.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Transparency</h3>
                <p className="text-gray-600">As a 501(c)(3) organization, we operate with full transparency and accountability to our donors and community.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Innovation</h3>
                <p className="text-gray-600">We continuously seek new ways to serve our community and develop future legal professionals through innovative programs and partnerships.</p>
              </div>
            </div>
          </div>

          {/* Corporate Partnership Section */}
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 border border-primary-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">Corporate Partnerships</h2>
            <p className="text-gray-700 mb-4">
              We work closely with corporate sponsors and partners who share our commitment to access to justice and legal education. 
              Through our annual Taste of Korea fundraiser and ongoing sponsorship opportunities, businesses and law firms join us in making a meaningful difference in our community.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Partner With Us?</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Support meaningful charitable work in your community</li>
                  <li>• Gain recognition among legal professionals and community leaders</li>
                  <li>• Demonstrate corporate social responsibility</li>
                  <li>• Network with influential members of the legal community</li>
                  <li>• Receive tax-deductible charitable contribution benefits</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership Opportunities</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Taste of Korea event sponsorship (multiple levels)</li>
                  <li>• Annual program sponsorship and support</li>
                  <li>• Scholarship fund contributions and naming rights</li>
                  <li>• Pro bono legal clinic support and volunteer opportunities</li>
                  <li>• Fellowship program partnerships and mentorship</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/sponsor"
                className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-block mr-4"
              >
                Explore Sponsorship Opportunities
              </Link>
              <a
                href="mailto:info@ockabaf.org?subject=Corporate Partnership Inquiry"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors inline-block"
              >
                Contact About Partnerships
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">1,000+</div>
                <div className="text-gray-600">Community Members Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
                <div className="text-gray-600">Current Fellowship Recipients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">$25K+</div>
                <div className="text-gray-600">Law Student Scholarships Awarded</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-accent-600 mb-2">200+</div>
                <div className="text-gray-600">Pro Bono Hours by Fellows</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-600 mb-2">15+</div>
                <div className="text-gray-600">Corporate Partners & Sponsors</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                OCKABA Foundation is a 501(c)(3) tax-exempt nonprofit organization. 
                All donations and sponsorships are tax-deductible to the fullest extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
