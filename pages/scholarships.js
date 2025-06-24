import Layout from '../components/Layout'
import Link from 'next/link'

export default function Scholarships() {
  const recipients = [
    {
      name: "Yonghyung (Thomas) Chung",
      photo: "Thomas.jpg",
      linkedin: "https://www.linkedin.com/in/yonghyung-thomas-chung-b41591257/",
      school: "UCI Law '25",
      year: "2025"
    },
    {
      name: "Annie Hong",
      photo: "Annie.jpg",
      linkedin: "https://www.linkedin.com/in/annie--hong/",
      school: "UCI Law '26",
      year: "2026"
    },
    {
      name: "Raiden Huang",
      photo: "Raiden.jpg",
      linkedin: "https://www.linkedin.com/in/raiden-huang-30b77a1a2/",
      school: "Chapman Law '25",
      year: "2025"
    },
    {
      name: "Amina Khosbayar",
      photo: "Amina.jpg",
      linkedin: "https://www.linkedin.com/in/amina-khosbayar/",
      school: "Chapman Law '26",
      year: "2026"
    },
    {
      name: "Seoungjun (SJ) Lee",
      photo: "SJ.jpg",
      linkedin: "https://www.linkedin.com/in/seoungjun-sj-lee-0b22b9153/",
      school: "UCI Law '25",
      year: "2025"
    },
    {
      name: "Yi-Jeong (Allison) Yoo",
      photo: "Allison.jpg",
      linkedin: "https://www.linkedin.com/in/yi-jeong-allison-yoo-a05374125/",
      school: "UCI Law '25",
      year: "2025"
    }
  ]

  return (
    <Layout title="Scholarships - OCKABA Foundation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            2024 Scholarship Recipients
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Celebrating outstanding law students who demonstrate academic excellence and commitment to ethical legal practice.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-green-700 mb-4">About Our Scholarships</h2>
            <p className="text-gray-700 leading-relaxed">
              Our merit-based scholarship program supports exceptional law students who demonstrate both academic excellence 
              and a commitment to ethical legal practice. These scholarships help reduce financial barriers and enable 
              students to focus on their studies while developing into community-minded legal professionals.
            </p>
          </div>
        </div>

        {/* Recipients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recipients.map((recipient, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                {/* Recipient Header */}
                <div className="text-center mb-4">
                  {/* Profile photo */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                    <img
                      src={`/images/${recipient.photo}`}
                      alt={recipient.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjQ4IiBjeT0iMzYiIHI9IjEyIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yNCA3MkMyNCA2MCAzNCA0OCA0OCA0OFM3MiA2MCA3MiA3MkgyNFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cg=='
                      }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{recipient.name}</h3>
                    {recipient.linkedin && (
                      <a
                        href={recipient.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
                        title="LinkedIn Profile"
                      >
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                  
                  {/* Academic Info */}
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {recipient.school}
                  </span>
                </div>
                
                {/* Achievement Badge */}
                <div className="text-center">
                  <div className="inline-flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    2024 Scholarship Recipient
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Information */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Apply for 2025 Scholarships</h2>
          <p className="text-xl mb-6 opacity-90">
            Applications for our merit-based scholarship program are typically accepted twice per year. 
            Join our community of exceptional law students committed to excellence and ethical practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors"
            >
              Learn About Our Programs
            </Link>
            <a
              href="mailto:info@ockabaf.org?subject=Scholarship Application"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Apply for Scholarship
            </a>
          </div>
        </div>

        {/* Impact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Scholarship Program Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600">2024 Scholarship Recipients</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">$25K+</div>
              <div className="text-gray-600">Total Scholarships Awarded</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Academic Excellence Standard</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
