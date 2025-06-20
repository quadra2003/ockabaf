import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const isActive = (path) => router.pathname === path

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              OCKABA Foundation
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className={`text-gray-600 hover:text-primary-600 transition-colors ${
                isActive('/') ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`text-gray-600 hover:text-primary-600 transition-colors ${
                isActive('/about') ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link 
              href="/programs"
              className={`text-gray-600 hover:text-primary-600 transition-colors ${
                isActive('/programs') ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              Programs
            </Link>
            <Link 
              href="/board"
              className={`text-gray-600 hover:text-primary-600 transition-colors ${
                isActive('/board') ? 'text-primary-600 font-semibold' : ''
              }`}
            >
              Board
            </Link>
            <Link 
              href="/donate"
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-600">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-600">About</Link>
            <Link href="/programs" className="block px-3 py-2 text-gray-600">Programs</Link>
            <Link href="/board" className="block px-3 py-2 text-gray-600">Board</Link>
            <Link href="/donate" className="block px-3 py-2 text-primary-600 font-semibold">Donate</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
