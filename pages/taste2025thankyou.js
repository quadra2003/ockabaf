import { useState } from 'react'
import Layout from '../components/Layout'

export default function TasteOfKoreaThankYou() {
  return (
    <Layout title="Taste of Korea 2025 - Thank You - OCKABA Foundation">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Thank You Message */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Making Taste of Korea 2025 a Success!
            </h1>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
              <p className="text-base text-gray-700">
                We are deeply grateful to everyone who joined us on August 27, 2025. Through your generous support, we strengthened our mission of supporting the Korean-American legal community.
              </p>
            </div>
          </div>

          {/* Photo Collage */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Highlights from Taste of Korea 2025
            </h2>
            
            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <img
                src="/images/taste2025-photo1.jpg"
                alt="Taste of Korea 2025 - Event Photo 1"
                className="w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform cursor-pointer bg-gray-50"
                onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720328655570', '_blank')}
              />
              <img
                src="/images/taste2025-photo2.jpg"
                alt="Taste of Korea 2025 - Event Photo 2"
                className="w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform cursor-pointer bg-gray-50"
                onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720328655570', '_blank')}
              />
              <img
                src="/images/taste2025-photo3.jpg"
                alt="Taste of Korea 2025 - Event Photo 3"
                className="w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform cursor-pointer bg-gray-50"
                onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720328655570', '_blank')}
              />
              <img
                src="/images/taste2025-photo4.jpg"
                alt="Taste of Korea 2025 - Event Photo 4"
                className="w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform cursor-pointer bg-gray-50"
                onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720328655570', '_blank')}
              />
              <img
                src="/images/taste2025-photo5.jpg"
                alt="Taste of Korea 2025 - Event Photo 5"
                className="w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform cursor-pointer bg-gray-50"
                onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720328655570', '_blank')}
              />
              <img
                src="/images/taste2025-photo6.jpg"
                alt="Taste of Korea 2025 - Event Photo 6"
                className="w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform cursor-pointer bg-gray-50"
                onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720328655570', '_blank')}
              />
              <img
                src="/images/taste2025-photo7.jpg"
                alt="Taste of Korea 2025 - Event Photo 7"
                className="w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform cursor-pointer bg-gray-50"
                onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720328655570', '_blank')}
              />
              <img
                src="/images/taste2025-photo8.jpg"
                alt="Taste of Korea 2025 - Event Photo 8"
                className="w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform cursor-pointer bg-gray-50"
                onClick={() => window.open('https://www.flickr.com/photos/165825565@N05/albums/72177720328655570', '_blank')}
              />
            </div>

            {/* Flickr Album Link */}
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
