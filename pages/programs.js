import Layout from '../components/Layout'

export default function Programs() {
  return (
    <Layout title="Programs - OCKABA Foundation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-gray-600">
            Two focused programs serving our community's most critical needs
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

          {/* Minyard Morris Fellowship - Law Student Scholarships */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="border-l-4 border-accent-500 pl-6">
              <h2 className="text-2xl font-bold text-accent-600 mb-2">
                Minyard Morris Fellowship
              </h2>
              <p className="text-lg text-primary-600 font-semibold mb-4">
                Law Student Scholarship Program
              </p>
              <p className="text-gray-600 mb-4">
                Our scholarship program supports exceptional law students who demonstrate both academic excellence and a commitment to public service. Fellows receive financial support to focus on their studies while gaining valuable experience providing pro bono legal services to community members in need.
              </p>
              <div className="bg-green-50 p-4 rounded-md mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Fellowship Benefits:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Merit-based scholarship funding for law school expenses</li>
                  <li>• Supervised pro bono legal experience</li>
                  <li>• Direct service to community members in need</li>
                  <li>• Professional references and recommendations</li>
                  <li>• Training in client services and legal advocacy</li>
                  <li>• Building a foundation for ethical legal practice</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-900 mb-2">Eligibility Requirements:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Current law school enrollment with strong academic standing</li>
                  <li>• Demonstrated commitment to public service and community advocacy</li>
                  <li>• Financial need consideration</li>
                  <li>• Commitment to providing pro bono legal services</li>
                  <li>• Written application including essays and references</li>
                  <li>• Interview process with selection committee</li>
                </ul>
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
                  href="mailto:legal@ockabaf.org?subject=Legal Assistance Request"
                  className="bg-primary-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  Request Legal Help
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Law Student Applications</h3>
                <p className="text-gray-600 mb-3">
                  Scholarship applications are typically accepted twice per year. We encourage all eligible law students who are committed to public service to apply for our fellowship program.
                </p>
                <a
                  href="mailto:scholarships@ockabaf.org?subject=Fellowship Application"
                  className="bg-accent-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-accent-700 transition-colors inline-block"
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
}
