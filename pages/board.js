import Layout from '../components/Layout'

export default function Board() {
  const officers = [
    { name: "Chang Lim", title: "President & Fundraising Committee Chair", affiliation: "Knobbe Martens", photo: "Chang.jpg", website: "https://www.knobbe.com/professionals/chang-lim/", linkedin: "https://www.linkedin.com/in/changsiklim/" },
    { name: "Eric Lim", title: "President-Elect & Pro Bono Committee Chair", affiliation: "American Healthcare REIT", photo: "Eric.jpg", website: "", linkedin: "https://www.linkedin.com/in/eric-lim-01/" },
    { name: "Jung Ah Kim", title: "Treasurer", affiliation: "Verve Law Group", photo: "JungAh.jpg", website: "", linkedin: "https://www.linkedin.com/in/jung-ah-kim-03044b218/" },
    { name: "Christopher Kim", title: "Secretary", affiliation: "Kim Law", photo: "Chris.jpg", website: "https://www.kimlawapc.com/about-christopher-kim/", linkedin: "https://www.linkedin.com/in/christopher-t-kim/" }
  ]

  const directors = [
    { name: "Mimi Ahn", affiliation: "Kahana Feld", photo: "Mimi.jpg", website: "https://kahanafeld.com/team-member/mimi-ahn-esq/", linkedin: "https://www.linkedin.com/in/mimi-ahn-81480389/" },
    { name: "Gahram Kang Chao", affiliation: "Avodah Law Group", photo: "Gahram.jpg", website: "https://avodahlawgroup.com/about-us/gahram-kang-chao/", linkedin: "https://www.linkedin.com/in/gahram-kang-chao-1040001/" },
    { name: "Janet Park Dennerline", affiliation: "KTGY Group", photo: "Janet.jpg", website: "", linkedin: "https://www.linkedin.com/in/jdennerline/" },
    { name: "Young Ham", affiliation: "Qcells USA", photo: "Young.jpg", website: "", linkedin: "https://www.linkedin.com/in/jdyoungham/" },
    { name: "Cecilia Hong", affiliation: "Kahana Feld", photo: "Cecilia.jpg", website: "https://kahanafeld.com/team-member/cecilia-hong-esq/", linkedin: "https://www.linkedin.com/in/cecilia-hong-bb614830/" },
    { name: "Susan Kang", affiliation: "Susan Kang Group", photo: "Susan.jpg", website: "https://susankanggroup.com/", linkedin: "https://www.linkedin.com/in/susan-heesoo-%ED%9D%AC%EC%88%98-kang-%EA%B0%95-89829950/" },
    { name: "Ellen Kim", affiliation: "Umberg Zipser", photo: "Ellen.jpg", website: "https://www.umbergzipser.com/profiles/ellen-kim/", linkedin: "https://www.linkedin.com/in/ellen-kim-1ab58859/" },
    { name: "Joshua Lee", affiliation: "Law Office of Joshua Y. Lee", photo: "Joshua.jpg", website: "https://lawandevidence.com/", linkedin: "https://www.linkedin.com/in/joshuaylee/" },
    { name: "Suoo Lee", affiliation: "SL Law", photo: "Suoo.jpg", website: "https://sllawpc.com/suoo-lee/", linkedin: "https://www.linkedin.com/in/suoo-lee-9a1636139/" },
    { name: "Evelyn Moon", affiliation: "Evelyn Moon Law", photo: "Evelyn.jpg", website: "https://evelynmoon.com/about/", linkedin: "https://www.linkedin.com/in/attorneyevelyn/" },
    { name: "Ho-El Park", affiliation: "Law Office of Ho-El Park", photo: "HoEl.jpg", website: "https://www.hparklaw.com/attorney-profile", linkedin: "https://www.linkedin.com/in/ho-el-park-a038b13/" },
    { name: "Alexander Payne", affiliation: "Minyard Morris", photo: "Alex.jpg", website: "https://www.minyardmorris.com/attorney/alexander-payne/", linkedin: "https://www.linkedin.com/in/alexander-payne-cfls-26b76050/" },
    { name: "Deborah Song", affiliation: "Minyard Morris", photo: "Deborah.jpg", website: "https://www.minyardmorris.com/attorney/deborah-j-song/", linkedin: "https://www.linkedin.com/in/deborah-jieun-song-esq-b245521aa/" },
    { name: "Ja H. Suh", affiliation: "Law Offices of Suh & Suh", photo: "Ja.jpg", website: "https://suhlaw.com/about-1", linkedin: "https://www.linkedin.com/in/ja-h-suh-3235282/" },
    { name: "Samuel Yu", affiliation: "Kahana Feld", photo: "Samuel.jpg", website: "https://kahanafeld.com/team-member/samuel-yu-esq/", linkedin: "https://www.linkedin.com/in/samuel-yu-6277721b/" }
  ]

  const renderMemberCard = (member, isOfficer = false) => (
    <div key={member.name} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Photo - Made smaller */}
      <div className="aspect-square w-full">
        <img
          src={`/images/${member.photo}`}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNjAgMTYwQzYwIDEyNSA3NyAxMDAgMTAwIDEwMFMxNDAgMTI1IDE0MCAxNjBINjBaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo='
          }}
        />
      </div>
      
      {/* Member Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
          {member.name}
        </h3>
        {isOfficer && member.title && (
          <p className="text-xs text-blue-600 font-medium mb-1 leading-tight">
            {member.title}
          </p>
        )}
        <p className="text-xs text-gray-600 mb-3 leading-tight">
          {member.affiliation}
        </p>
        
        {/* Social Links */}
        {(member.website || member.linkedin) && (
          <div className="flex gap-2">
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors"
                title="Website"
                style={{ '--hover-bg': '#e6f3ff' }}
              >
                <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#0047A0' }}>
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors"
                title="LinkedIn"
              >
                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <Layout title="Board of Directors - OCKABA Foundation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Board of Directors
          </h1>
          <p className="text-lg text-gray-600">
            Meet the dedicated professionals leading OCKABA Foundation's mission to support and advance Korean-American legal professionals.
          </p>
        </div>

        {/* Officers Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Officers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 justify-center">
            {officers.map((officer) => renderMemberCard(officer, true))}
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Directors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {directors.map((director) => renderMemberCard(director, false))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="border border-gray-200 rounded-lg p-8" style={{ backgroundColor: '#f0f4ff', borderColor: '#ccd9ff' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#0047A0' }}>
              Connect with Our Board
            </h2>
            <p className="text-gray-600 mb-6">
              Interested in learning more about our foundation or getting involved? Our board members are passionate about mentoring the next generation of legal professionals.
            </p>
            <a
              href="mailto:info@ockabaf.org?subject=Board Inquiry"
              className="text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block"
              style={{ backgroundColor: '#0047A0' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#003d8b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#0047A0'}
            >
              Contact Our Board
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
