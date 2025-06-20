import Layout from '../components/Layout'
import Link from 'next/link'

export default function Fellows() {
  const fellows = [
    {
      name: "Ashley Kim",
      photo: "Ashley.jpg",
      linkedin: "https://www.linkedin.com/in/ashley-kim-ak/",
      bio: "Ashley is a dedicated undergraduate student pursuing a career in law. Through the Minyard Morris Fellowship, she has gained valuable experience in pro bono legal work while developing her skills in legal research and client advocacy. Ashley is committed to using her legal education to serve underrepresented communities and promote access to justice.",
      year: "2025",
      university: "University of California",
      major: "Pre-Law"
    },
    {
      name: "Catherine Park",
      photo: "Catherine.jpg",
      linkedin: "https://www.linkedin.com/in/catpa/",
      bio: "Catherine is an Economics and English double major at UC Berkeley with a passion for law and social justice. As a Minyard Morris Fellow, she has contributed to important pro bono initiatives while preparing for her future legal career. Catherine's interdisciplinary background in economics and literature provides her with a unique perspective on legal issues affecting communities.",
      year: "2025",
      university: "UC Berkeley",
      major: "Economics & English"
    }
  ]

  return (
    <Layout title="Minyard Morris Fellows - OCKABA Foundation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Minyard Morris Fellows
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet our outstanding fellowship recipients who are making a difference through pro bono legal work while preparing for their future careers in law.
          </p>
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">About the Fellowship</h2>
            <p className="text-gray-700 leading-relaxed">
              The Minyard Morris Fellowship is our flagship program recognizing exceptional undergraduate students 
              who demonstrate outstanding commitment to public service and legal excellence. Fellows receive financial 
              support, mentorship from experienced attorneys, and hands-on experience with meaningful pro bono legal work 
              that makes a real difference in their communities.
            </p>
          </div>
        </div>

        {/* Fellows Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {fellows.map((fellow, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Fellow Photo */}
              <div className="aspect-square">
                <img
                  src={`/images/${fellow.photo}`}
                  alt={fellow.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTgwIDI0MEM4MCAyMDAgMTEyIDE2MCAxNjAgMTYwUzI0MCAyMDAgMjQwIDI0MEg4MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cg=='
                  }}
                />
              </div>
              
              {/* Fellow Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{fellow.name}</h3>
                  {fellow.linkedin && (
                    <a
                      href={fellow.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
                
                {/* Academic Info */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      Class of {fellow.year}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {fellow.university}
                    </span>
                    <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">
                      {fellow.major}
                    </span>
                  </div>
                </div>
                
                {/* Bio */}
                <p className="text-gray-600 leading-relaxed">{fellow.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Application Information */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Becoming a Fellow?</h2>
          <p className="text-xl mb-6 opacity-90">
            Applications for the Minyard Morris Fellowship are typically accepted twice per year. 
            Join our community of future legal leaders making a difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors"
            >
              Learn About Our Programs
            </Link>
            <a
              href="mailto:info@ockabaf.org?subject=Fellowship Application Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fellowship Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Hours of Pro Bono Service</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Community Members Served</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Law School Acceptance Rate</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
