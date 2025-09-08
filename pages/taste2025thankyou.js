import { useState } from 'react'
import Layout from '../components/Layout'

export default function TasteOfKoreaThankYou() {
  return (
    <Layout title="Taste of Korea 2025 - Thank You - OCKABA Foundation">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Thank You Message */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Thank You for Making Taste of Korea 2025 a Success!
            </h1>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                We are deeply grateful to everyone who joined us on Wednesday, August 27, 2025, for an unforgettable evening 
                celebrating Korean culture and community. Your participation made this event truly special.
              </p>
              <p className="text-gray-600">
                Through your generous support as sponsors, donors, and attendees, we were able to strengthen our mission 
                of supporting the Korean-American legal community and fostering connections that will last for years to come. 
                The authentic Korean cuisine, traditional entertainment, and warm fellowship created memories we'll treasure.
              </p>
            </div>
          </div>

          {/* Photo Collage */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Highlights from Taste of Korea 2025
            </h2>
            <div className="mb-6 cursor-pointer" onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720328655570', '_blank')}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Row 1 */}
                <img
                  src="https://live.staticflickr.com/65535/53943276044_b5f1b5c8a8_z.jpg"
                  alt="Taste of Korea 2025 - Group Photo"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <img
                  src="https://live.staticflickr.com/65535/53943275974_0a5c7a7e6a_z.jpg"
                  alt="Taste of Korea 2025 - Networking"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <img
                  src="https://live.staticflickr.com/65535/53942950471_7c2e2b3e8c_z.jpg"
                  alt="Taste of Korea 2025 - Korean Food"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <img
                  src="https://live.staticflickr.com/65535/53943275934_ba7c5b0a4c_z.jpg"
                  alt="Taste of Korea 2025 - Entertainment"
                  className="w-full h-32 md:h-40 object-cover"
                />
                {/* Row 2 */}
                <img
                  src="https://live.staticflickr.com/65535/53942950426_0b8e9a7d2e_z.jpg"
                  alt="Taste of Korea 2025 - Attendees"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <img
                  src="https://live.staticflickr.com/65535/53943275889_c3f8e9a5bc_z.jpg"
                  alt="Taste of Korea 2025 - Speakers"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <img
                  src="https://live.staticflickr.com/65535/53942950381_d4a9b0c6fd_z.jpg"
                  alt="Taste of Korea 2025 - Cultural Display"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <img
                  src="https://live.staticflickr.com/65535/53943275844_e5c0d1e7ae_z.jpg"
                  alt="Taste of Korea 2025 - Community"
                  className="w-full h-32 md:h-40 object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <a
                href="https://www.flickr.com/photos/165825565@N05/albums/72177720328655570"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors inline-block"
              >
                View All Photos from Taste of Korea 2025
              </a>
            </div>
          </div>

          {/* Sponsors Display */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Thank You to Our Sponsors & Donors
            </h2>
            
            <div className="space-y-8">
              
              {/* Title Sponsor */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">TITLE SPONSOR</h3>
                <div className="bg-white rounded-lg p-4 inline-block">
                  <div className="text-2xl font-bold text-blue-600">ICHTHUS</div>
                  <div className="text-xl text-blue-600">INJURY NETWORK</div>
                </div>
              </div>

              {/* Joseon Sponsor */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">JOSEON (조선) SPONSOR</h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">MINYARD | MORRIS</div>
                </div>
              </div>

              {/* Goryeo Sponsor */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">GORYEO (고려) SPONSOR</h3>
                <div className="text-center">
                  <div className="bg-red-500 text-white rounded-lg p-3 inline-block">
                    <div className="text-sm">WAGE</div>
                    <div className="text-sm">RECOVERY</div>
                    <div className="text-sm">QUEEN</div>
                    <div className="text-xs">.COM</div>
                    <div className="text-xs">BRIANA KIM, P.C.</div>
                  </div>
                </div>
              </div>

              {/* Silla Sponsors */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">SILLA (신라) SPONSORS</h3>
                <div className="flex flex-wrap justify-center items-center gap-6">
                  <div className="text-red-600 font-bold">OCKABA</div>
                  <div className="text-blue-600 font-bold">Knobbe Martens</div>
                  <div className="text-gray-800 font-bold">Crowell</div>
                </div>
              </div>

              {/* Baekje Sponsors */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">BAEKJE (백제) SPONSORS</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div className="text-gray-700 font-semibold">JOHN CHA</div>
                  <div className="text-gray-700 font-semibold">KAHANA FELD</div>
                  <div className="text-gray-700 font-semibold">KIM LAW</div>
                  <div className="text-orange-600 font-bold">WOMBLE BOND DICKINSON</div>
                  <div className="text-gray-700 font-semibold">SL LAW</div>
                  <div className="text-orange-600 font-bold">OCAABA</div>
                </div>
              </div>

              {/* Goguryeo Sponsors */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">GOGURYEO (고구려) SPONSORS</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
                  <div className="text-gray-700">LAW OFFICE OF APRIL GILBERT</div>
                  <div className="text-blue-600 font-bold">KABA</div>
                  <div className="text-yellow-600 font-bold">avodah LAW GROUP</div>
                  <div className="text-blue-600 font-bold">GS Medical</div>
                  <div className="text-gray-700">UMBERG ZIPSER LLP</div>
                  <div className="text-orange-600 font-bold">SUSAN KANG GROUP</div>
                  <div className="text-blue-600 font-bold">FLOC</div>
                  <div className="text-gray-700">STENO</div>
                  <div className="text-blue-600 font-bold">CHIN LAW GROUP</div>
                  <div className="text-gray-700">[in-sit] coffee</div>
                  <div className="text-red-600 font-bold">NATIONWIDE LEGAL</div>
                  <div className="text-blue-600 font-bold">CAPTO</div>
                  <div className="text-gray-700">ZC SETTLEMENT ADVISORS</div>
                  <div className="text-blue-600 font-bold">UCI Law Korea Law Center</div>
                  <div className="text-red-600 font-bold">RO & YOU</div>
                  <div className="text-red-600 font-bold">SGT PEPPERONI'S GROSSOLOGY</div>
                  <div className="text-red-600 font-bold">ginsa</div>
                  <div className="text-gray-700">JUDICATE WEST</div>
                  <div className="text-gray-700">SIGNATURE RESOLUTION</div>
                  <div className="text-gray-700">MAKKU</div>
                  <div className="text-gray-700">INNOVATUS</div>
                  <div className="text-teal-600 font-bold">The Plug</div>
                  <div className="text-gray-700">VERITEXT</div>
                  <div className="text-blue-600 font-bold">HITEJIHO AMERICA</div>
                  <div className="text-gray-700">ENG LAW</div>
                </div>
              </div>

              {/* Gojoseon Sponsors */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">GOJOSEON (고조선) SPONSORS</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="text-gray-700 font-semibold">KAIROS ACADEMICS</div>
                  <div className="text-gray-700 font-semibold">JOSEPH CHAIREZ</div>
                  <div className="text-gray-700 font-semibold">HON. JOSEPH KANG</div>
                  <div className="text-gray-700 font-semibold">MARY KIM</div>
                </div>
              </div>

              {/* Donors */}
              <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-center mb-4">DONORS</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
                  <div>CHRISTINA AHN</div>
                  <div>MONICA GLICKEN</div>
                  <div>CHANG LIM</div>
                  <div>ELLEN KIM</div>
                  <div>STEVE SONG</div>
                  <div>ERIC LIM</div>
                  <div>JA H. SUH</div>
                  <div>JANET PARK DENNERLINE</div>
                  <div>JOSHUA LEE</div>
                  <div>MIMI AHN</div>
                  <div>ROBERT KOLLAR</div>
                  <div>SAM YU</div>
                  <div>SUSAN KANG</div>
                  <div>TEDDY NGUYEN</div>
                  <div>YOUNG HAM</div>
                  <div>SUZY LEE</div>
                </div>
              </div>

              {/* Final Thank You */}
              <div className="bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold">THANK YOU TO ALL OUR SPONSORS & DONORS!</h3>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                OCKABA Foundation
              </h3>
              <p className="text-gray-600 mb-4">
                Orange County Korean American Bar Association Foundation
              </p>
              <p className="text-sm text-gray-500">
                OCKABA Foundation is a 501(c)(3) nonprofit organization (EIN: 27-4456831)
              </p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
