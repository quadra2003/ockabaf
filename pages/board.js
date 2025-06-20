import Layout from '../components/Layout'
import Image from 'next/image'

export default function Board() {
  const boardMembers = [
    { name: "Mimi Ahn", email: "mahn@kahanafeld.com", photo: "Mimi.jpg" },
    { name: "Gahram Kang Chao", email: "gahram@avodahlawgroup.com", photo: "Gahram.jpg" },
    { name: "Janet Park Dennerline", email: "janet.dennerline@gmail.com", photo: "Janet.jpg" },
    { name: "Young Ham", email: "young.ham@qcells.com", photo: "Young.jpg" },
    { name: "Cecilia Hong", email: "ceciliajhong@gmail.com", photo: "Cecilia.jpg" },
    { name: "Susan Kang", email: "susan@susankanggroup.com", photo: "Susan.jpg" },
    { name: "Jung Ah Kim", email: "jungahkim11@gmail.com", photo: "JungAh.jpg" },
    { name: "Christopher Kim", email: "chris@kimlawapc.com", photo: "Chris.jpg" },
    { name: "Ellen Kim", email: "ekim@umbergzipser.com", photo: "Ellen.jpg" },
    { name: "Joshua Lee", email: "josh@lawandevidence.com", photo: "Joshua.jpg" },
    { name: "Suoo Lee", email: "slee@sllawpc.com", photo: "Suoo.jpg" },
    { name: "Chang Lim", email: "chang.lim@knobbe.com", photo: "Chang.jpg" },
    { name: "Eric Lim", email: "ericlim1310@gmail.com", photo: "Eric.jpg" },
    { name: "Evelyn Moon", email: "evelynm@evelynmoon.com", photo: "Evelyn.jpg" },
    { name: "Ho-El Park", email: "hpark@hparklaw.com", photo: "HoEl.jpg" },
    { name: "Alexander Payne", email: "alex@minyardmorris.com", photo: "Alex.jpg" },
    { name: "Deborah Song", email: "dsong@minyardmorris.com", photo: "Deborah.jpg" },
    { name: "Ja H. Suh", email: "jhsuh@suhlaw.com", photo: "Ja.jpg" },
    { name: "Samuel Yu", email: "syu@kahanafeld.com", photo: "Samuel.jpg" }
  ]

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

        {/* Board Stats */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{boardMembers.length}</div>
              <div className="text-gray-600">Board Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Legal Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
          </div>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={`/images/${member.photo}`}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjAgNjBDMTM2LjU2OSA2MDE1MCA4My40MzEgMTUwIDEwMFMxMzYuNTY5IDE0MCAxMjAgMTQwUzEwMCAxMjMuNDMxIDEwMCAxMDBTMTE2LjU2OSA2MCAxMjAgNjBaTTEyMCAxODBDMTUwIDIwNSAxODUgMTk1IDE4NUMxOTUgMTYwIDEzNSAxNjAgMTIwQzEwNSAxNjAgNTUgMTk1IDU1IDE4NUMxNSAxNzAgNzAgMjA1IDEyMCAxODBaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo='
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 break-all">
                  {member.email}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">
              Connect with Our Board
            </h2>
            <p className="text-gray-600 mb-6">
              Interested in learning more about our foundation or getting involved? Our board members are passionate about mentoring the next generation of legal professionals.
            </p>
            <a
              href="mailto:info@ockabaf.org?subject=Board Inquiry"
              className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Contact Our Board
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
