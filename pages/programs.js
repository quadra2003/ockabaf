import Layout from '../components/Layout'
import Link from 'next/link'

export default function Programs() {
  return (
    <Layout title="Programs - OCKABA Foundation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-gray-600">
            Three focused programs serving our community and developing future legal professionals
          </p>
        </div>

        <div className="space-y-8">
          {/* Pro Bono Legal Services */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="border-l-4 border-primary-600 pl-6">
              <h2 className="text-2xl font-bold text-primary-600 mb-2">
                Pro Bono Legal Services
              </h2>
              <p className="text-lg text-accent-600 font-semibold mb-4">
                Free Legal Assistance for Community Members in Need
              </p>
              <p className="text-gray-600 mb-4">
                Our primary charitable mission is providing free legal services to community members who cannot afford representation. Through our network of volunteer attorneys and law student fellows, we offer assistance with immigration matters, family law, housing issues, consumer protection, and other essential legal needs.
              </p>
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Legal Areas We Cover:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Immigration assistance and naturalization</li>
                  <li>• Family law matters and domestic relations</li>
                  <li>• Housing and tenant rights issues</li>
                  <li>• Consumer protection and debt relief</li>
                  <li>• Employment law and workplace rights</li>
                  <li>• Benefits applications and appeals</li>
                  <li>• Small business legal guidance</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-900 mb-2">Who Qualifies:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Individuals and families with limited financial resources</li>
                  <li>• Community members facing legal challenges they cannot afford to address</li>
                  <li>• Cases where pro bono assistance can make a meaningful difference</li>
                  <li>• Priority given to urgent matters affecting basic needs and rights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Law Student Scholarships */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Law Student Scholarships
            </h2>
            <p className="text-lg text-gray-600 font-semibold mb-4">
              Merit-Based Financial Support for Exceptional Students
            </p>
            <p className="text-gray-600 mb-4">
              We provide merit-based scholarships to outstanding law students who demonstrate academic excellence and a commitment to ethical legal practice. These scholarships help reduce financial barriers and enable students to focus on their studies and professional development.
            </p>
            <div className="bg-blue-50 p-4 rounded-md mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Scholarship Benefits:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Financial assistance for law school tuition and expenses</li>
                <li>• Recognition as a scholarship recipient</li>
                <li>• Networking opportunities within the legal community</li>
                <li>• Support for academic and professional development</li>
                <li>• Connection to foundation mission and values</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-semibold text-gray-900 mb-2">Scholarship Criteria:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Current enrollment in an accredited law school</li>
                <li>• Outstanding academic performance and class ranking</li>
                <li>• Demonstrated commitment to community service and ethics</li>
                <li>• Financial need consideration</li>
                <li>• Strong letters of recommendation</li>
                <li>• Compelling personal statement and application essay</li>
              </ul>
            </div>
          </div>

          {/* Minyard Morris Fellowship - Pre-Law Program */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="border-l-4 border-accent-500 pl-6">
              <h2 className="text-2xl font-bold text-accent-600 mb-2">
                Minyard Morris Fellowship
              </h2>
              <p className="text-lg text-primary-600 font-semibold mb-4">
                Pre-Law Individual Development Program
              </p>
              <p className="text-gray-600 mb-4">
                Our fellowship program provides pre-law individuals with hands-on experience assisting with foundation operations and pro bono legal work. Fellows gain valuable skills and exposure to legal practice while contributing to our mission of serving community members in need.
              </p>
              <div className="bg-green-50 p-4 rounded-md mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Fellowship Responsibilities:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Assist with foundation operations and administration</li>
                  <li>• Support pro bono legal services under supervision</li>
                  <li>• Help with client intake and case management</li>
                  <li>• Participate in community outreach programs</li>
                  <li>• Conduct legal research and document preparation</li>
                  <li>• Gain exposure to various areas of legal practice</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-900 mb-2">Current Fellows:</h3>
                <p className="text-gray-600 mb-3">
                  Our current fellowship recipients were selected for this year and are actively contributing to foundation operations and community service. The fellowship provides valuable experience in legal advocacy and nonprofit management.
                </p>
                <Link
                  href="/fellows"
                  className="text-accent-600 hover:text-accent-700 font-semibold"
                >
                  Meet Our Current Fellows →
                </Link>
              </div>
            </div>
          </div>

          {/* Taste of Korea Annual Fundraiser */}
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 border border-primary-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="border-l-4 border-accent-600 pl-6">
              <h2 className="text-2xl font-bold text-accent-600 mb-2">
                Taste of Korea Annual Fundraiser
              </h2>
              <p className="text-lg text-primary-600 font-semibold mb-4">
                Our Signature Community Event & Fundraiser
              </p>
              <p className="text-gray-700 mb-4">
                Join us for our annual signature event featuring traditional Korean food, drinks, and entertainment. This event brings together legal professionals from Orange County and Southern California while raising crucial funds for our pro bono services, scholarships, and fellowship programs.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-md p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">2025 Event Details:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• <strong>Date:</strong> Wednesday, August 27, 2025</li>
                  <li>• <strong>Time:</strong> 6:00 PM - 8:30 PM</li>
                  <li>• <strong>Location:</strong> Crowell & Moring LLP (3 Park Plaza, 20th Floor, Irvine, CA 92614)</li>
                  <li>• <strong>Features:</strong> Korean cuisine, networking, legal community gathering</li>
                </ul>
              </div>

              <div className="bg-accent-100 p-4 rounded-md mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sponsorship Opportunities:</h3>
                <p className="text-gray-700 mb-3">
                  We offer multiple sponsorship levels to accommodate different partnership interests and budgets. 
                  Sponsors receive event tickets, logo recognition, and marketing benefits while supporting our charitable mission.
                </p>
                <ul className="text-gray-700 space-y-1 mb-3">
                  <li>• Multiple sponsorship tiers available ($250 - $5,000+)</li>
                  <li>• Event tickets and premium recognition included</li>
                  <li>• Logo placement on marketing materials and website</li>
                  <li>• Dedicated social media recognition</li>
                  <li>• Tax-deductible charitable contribution</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sponsor"
                  className="bg-accent-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-700 transition-colors text-center"
                >
                  Become a Sponsor
                </Link>
                <a
                  href="mailto:info@ockabaf.org?subject=Taste of Korea Sponsorship Inquiry"
                  className="border-2 border-accent-600 text-accent-600 px-6 py-3 rounded-md font-semibold hover:bg-accent-50 transition-colors text-center"
                >
                  Contact About Sponsorship
                </a>
              </div>
            </div>
          </div>

          {/* How to Access Our Services */}
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">
              How to Access Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Legal Help?</h3>
                <p className="text-gray-600 mb-3">
                  If you're facing legal challenges and cannot afford representation, contact us to discuss your situation. We'll assess your needs and connect you with appropriate pro bono assistance.
                </p>
                <a
                  href="mailto:info@ockabaf.org?subject=Legal Assistance Request"
                  className="bg-primary-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  Request Legal Help
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scholarship Applications</h3>
                <p className="text-gray-600 mb-3">
                  Law students seeking merit-based financial assistance can apply for our scholarship program. Applications are typically accepted twice per year.
                </p>
                <a
                  href="mailto:info@ockabaf.org?subject=Scholarship Application"
                  className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors inline-block"
                >
                  Apply for Scholarship
                </a>
              </div>
            </div>
            <div className="pt-4 border-t border-primary-200">
              <p className="text-sm text-gray-600 text-center">
                OCKABA Foundation is a 501(c)(3) nonprofit organization. All services are provided free of charge to qualifying community members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
