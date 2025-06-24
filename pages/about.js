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
            Empowering Korean-American legal professionals through education, mentorship, and community
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              The OCKABA Foundation was established to address the unique challenges and opportunities facing Korean-American students pursuing careers in law. We recognized the need for targeted support, mentorship, and resources to help talented individuals navigate the path from undergraduate studies to successful legal careers.
            </p>
            <p className="text-gray-600">
              Through our comprehensive programs, we bridge the gap between academic achievement and professional success, creating a supportive community that extends far beyond graduation.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for the highest standards in everything we do, supporting students and professionals in achieving their full potential.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Integrity</h3>
                <p className="text-gray-600">We operate with honesty, transparency, and ethical principles in all our interactions and programs.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Community</h3>
                <p className="text-gray-600">We foster connections and collaboration, building lasting relationships within the Korean-American legal community.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-2">Service</h3>
                <p className="text-gray-600">We are committed to giving back to our communities and supporting those who serve others through pro bono work.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">1,000+</div>
                <div className="text-gray-600">Community Members Assisted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                <div className="text-gray-600">Volunteer Attorneys</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">$25K+</div>
                <div className="text-gray-600">Scholarships Awarded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
