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
            
            <div className="text-center">
              <img
                src="/taste2025thankyou.png"
                alt="Taste of Korea 2025 Sponsors and Donors"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                style={{ aspectRatio: 'auto', objectFit: 'contain' }}
              />
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
