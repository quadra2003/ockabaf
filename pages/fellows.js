import Layout from '../components/Layout'
import Link from 'next/link'

export default function Fellows() {
  const fellows = [
    {
      name: "Ashley Kim",
      photo: "Ashley.jpg",
      linkedin: "https://www.linkedin.com/in/ashley-kim-ak/",
      bio: "Ashley is a dedicated undergraduate student pursuing a career in law. Through the Minyard Morris Fellowship, she assists with foundation operations while gaining valuable experience in legal advocacy and nonprofit management. Ashley is committed to using her legal education, combined with her strong liberal arts background, to advance ethical practices and promote justice in the communities and spaces she serves.",
      year: "2026",
      university: "Cornell '26",
      major: "History of Art & Cultural Property Studies"
    },
    {
      name: "Catherine Park",
      photo: "Catherine.jpg",
      linkedin: "https://www.linkedin.com/in/catpa/",
      bio: "Catherine is a double major in Economics and English at UC Berkeley with a passion for law and social justice. As a Minyard Morris Fellow, she contributes to foundation operations and pro bono initiatives while preparing for her future legal career. Catherine's interdisciplinary background in economics and literature provides her with a unique perspective on legal issues affecting communities.",
      year: "2024",
      university: "UC Berkeley '24",
      major: "Economics & English"
    }
  ]

  return (
    <Layout title="Fellows - OCKABA Foundation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            2025 Minyard Morris Fellows
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet our outstanding fellowship recipients who assist with foundation operations while gaining valuable experience in legal advocacy and community service.
          </p>
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">About the Fellowship</h2>
            <p className="text-gray-700 leading-relaxed">
              Our current fellowship recipients are exceptional pre-law individuals who contribute to foundation operations 
              and gain hands-on experience in legal advocacy while helping serve community members in need. The fellowship 
              provides valuable exposure to nonprofit management and pro bono legal work, building skills for future legal careers.
            </p>
          </div>
        </div>

        {/* Fellows Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {fellows.map((fellow, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex gap-6 mb-4">
                  {/* Fellow Photo - Small and Left */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-lg overflow-hidden">
                      <img
                        src={`/images/${fellow.photo}`}
                        alt={fellow.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjQ4IiBjeT0iMzYiIHI9IjEyIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yNCA3MkMyNCA2MCAzNCA0OCA0OCA0OFM3MiA2MCA3MiA3MkgyNFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cg=='
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Fellow Header Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{fellow.name}</h3>
                      {fellow.linkedin && (
                        <a
                          href={fellow.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors ml-2"
                          title="LinkedIn Profile"
                        >
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                    
                    {/* Academic Info */}
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {fellow.university}
                      </span>
                      <span className="bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-medium">
                        {fellow.major}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Bio */}
                <p className="text-gray-600 leading-relaxed">{fellow.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Learn About Our Programs</h2>
          <p className="text-xl mb-6 opacity-90">
            Discover more about our pro bono legal services, scholarship opportunities, 
            and how we're making a difference in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors"
            >
              Our Programs
            </Link>
            <Link
              href="/scholarship-recipients-2024"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              2024 Scholarship Recipients
            </Link>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fellowship Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Hours of Foundation Support</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Cases Assisted</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">2</div>
              <div className="text-gray-600">Current Fellows</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
