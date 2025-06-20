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
            Comprehensive support for aspiring legal professionals
          </p>
        </div>

        <div className="space-y-8">
          {/* Minyard Morris Fellowship */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="border-l-4 border-primary-600 pl-6">
              <h2 className="text-2xl font-bold text-primary-600 mb-2">
                Minyard Morris Fellowship
              </h2>
              <p className="text-lg text-accent-600 font-semibold mb-4">
                Pro Bono Excellence Program
              </p>
              <p className="text-gray-600 mb-4">
                Our flagship fellowship program recognizes outstanding undergraduate students who demonstrate exceptional commitment to public service and legal excellence. Fellows receive financial support, mentorship from experienced attorneys, and hands-on experience with real legal work that makes a difference in their communities.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-900 mb-2">Program Benefits:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Fellowship stipend for academic and living expenses</li>
                  <li>• One-on-one mentorship with practicing attorneys</li>
                  <li>• Networking opportunities with legal professionals</li>
                  <li>• Law school application guidance and preparation</li>
                  <li>• Professional development workshops and seminars</li>
                  <li>• Hands-on pro bono legal experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pre-Law Mentorship */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Pre-Law Mentorship Program
            </h2>
            <p className="text-lg text-gray-600 font-semibold mb-4">
              Guidance from Legal Professionals
            </p>
            <p className="text-gray-600 mb-4">
              Connect with experienced Korean-American attorneys and legal professionals who provide guidance on law school applications, career planning, and professional development. Our mentors are committed to helping the next generation succeed in the legal field.
            </p>
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-semibold text-gray-900 mb-2">What Mentors Provide:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Law school application strategy and review</li>
                <li>• LSAT preparation guidance and resources</li>
                <li>• Career path exploration and planning</li>
                <li>• Professional networking opportunities</li>
                <li>• Interview preparation and mock interviews</li>
                <li>• Ongoing support throughout law school</li>
              </ul>
            </div>
          </div>

          {/* Educational Scholarships */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Educational Scholarships
            </h2>
            <p className="text-lg text-gray-600 font-semibold mb-4">
              Financial Support for Academic Excellence
            </p>
            <p className="text-gray-600 mb-4">
              Merit-based scholarships to support outstanding students in their undergraduate studies, helping them focus on academic achievement and preparing for law school without the burden of financial stress.
            </p>
            <div className="bg-green-50 p-4 rounded-md">
              <h3 className="font-semibold text-gray-900 mb-2">Scholarship Criteria:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Strong academic performance (3.5+ GPA)</li>
                <li>• Demonstrated commitment to community service</li>
                <li>• Clear interest in pursuing a legal career</li>
                <li>• Financial need consideration</li>
                <li>• Essay submission and interview process</li>
                <li>• Letters of recommendation required</li>
              </ul>
            </div>
          </div>

          {/* Application Information */}
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">
              How to Apply
            </h2>
            <p className="text-gray-600 mb-4">
              Applications for our programs are typically accepted twice per year - in the fall and spring semesters. We encourage all eligible students to apply and take advantage of these opportunities to advance their legal careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@ockabaf.org?subject=Program Application Inquiry"
                className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Contact Us About Applications
              </a>
              <a
                href="mailto:info@ockabaf.org?subject=Mentorship Interest"
                className="border border-primary-600 text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors text-center"
              >
                Become a Mentor
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
