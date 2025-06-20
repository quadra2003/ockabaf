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
              Empowering the next generation of Korean-American legal professionals through mentorship, education, and opportunity.
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
                Support Our Mission
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
              Building bridges between academic excellence and professional success in the legal field
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Education</h3>
              <p className="text-gray-600">
                Supporting undergraduate students with scholarships, mentorship, and resources needed to excel in their pre-law studies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Legal Excellence</h3>
              <p className="text-gray-600">
                Fostering a community of future legal leaders committed to justice, integrity, and positive impact.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Community</h3>
              <p className="text-gray-600">
                Creating lasting connections between students, professionals, and mentors that extend into successful careers.
              </p>
            </div>
          </div>
        </div>
      </section>

  {/* Fellows Spotlight Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Fellows</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the outstanding students in our Minyard Morris Fellowship program who are making a difference through pro bono legal work
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 border border-gray-200 rounded-lg p-8 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
                <div className="text-gray-600">Current Fellows</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600">Pro Bono Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-gray-600">Community Members Served</div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our Minyard Morris Fellows are exceptional undergraduate students who combine academic excellence with a commitment to public service, gaining valuable legal experience while making a real difference in their communities.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a student seeking opportunities or a professional looking to give back, we'd love to hear from you.
          </p>
          <Link
            href="mailto:info@ockabaf.org"
            className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  )
}
