import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const isActive = (path) => router.pathname === path
  const primaryBlue = '#0047A0'
  const primaryBlueHover = '#003d8b'

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/ockaba-foundation-logo.png" 
                alt="OCKABA Foundation"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className={`text-gray-600 transition-colors relative ${
                isActive('/') ? 'font-semibold' : ''
              }`}
              style={{ 
                color: isActive('/') ? primaryBlue : '#6b7280',
                fontWeight: isActive('/') ? '600' : '400'
              }}
              onMouseOver={(e) => e.target.style.color = primaryBlue}
              onMouseOut={(e) => e.target.style.color = isActive('/') ? primaryBlue : '#6b7280'}
            >
              <span className="invisible font-semibold absolute">Home</span>
              <span className="relative">Home</span>
            </Link>
            <Link 
              href="/about"
              className={`text-gray-600 transition-colors relative ${
                isActive('/about') ? 'font-semibold' : ''
              }`}
              style={{ 
                color: isActive('/about') ? primaryBlue : '#6b7280',
                fontWeight: isActive('/about') ? '600' : '400'
              }}
              onMouseOver={(e) => e.target.style.color = primaryBlue}
              onMouseOut={(e) => e.target.style.color = isActive('/about') ? primaryBlue : '#6b7280'}
            >
              <span className="invisible font-semibold absolute">About</span>
              <span className="relative">About</span>
            </Link>
            <Link 
              href="/programs"
              className={`text-gray-600 transition-colors relative ${
                isActive('/programs') ? 'font-semibold' : ''
              }`}
              style={{ 
                color: isActive('/programs') ? primaryBlue : '#6b7280',
                fontWeight: isActive('/programs') ? '600' : '400'
              }}
              onMouseOver={(e) => e.target.style.color = primaryBlue}
              onMouseOut={(e) => e.target.style.color = isActive('/programs') ? primaryBlue : '#6b7280'}
            >
              <span className="invisible font-semibold absolute">Programs</span>
              <span className="relative">Programs</span>
            </Link>
            <Link 
              href="/fellows"
              className={`text-gray-600 transition-colors relative ${
                isActive('/fellows') ? 'font-semibold' : ''
              }`}
              style={{ 
                color: isActive('/fellows') ? primaryBlue : '#6b7280',
                fontWeight: isActive('/fellows') ? '600' : '400'
              }}
              onMouseOver={(e) => e.target.style.color = primaryBlue}
              onMouseOut={(e) => e.target.style.color = isActive('/fellows') ? primaryBlue : '#6b7280'}
            >
              <span className="invisible font-semibold absolute">Minyard Morris Fellows</span>
              <span className="relative">Minyard Morris Fellows</span>
            </Link>
            <Link 
              href="/scholarships"
              className={`text-gray-600 transition-colors relative ${
                isActive('/scholarships') ? 'font-semibold' : ''
              }`}
              style={{ 
                color: isActive('/scholarships') ? primaryBlue : '#6b7280',
                fontWeight: isActive('/scholarships') ? '600' : '400'
              }}
              onMouseOver={(e) => e.target.style.color = primaryBlue}
              onMouseOut={(e) => e.target.style.color = isActive('/scholarships') ? primaryBlue : '#6b7280'}
            >
              <span className="invisible font-semibold absolute">Scholarships</span>
              <span className="relative">Scholarships</span>
            </Link>
            <Link 
              href="/board"
              className={`text-gray-600 transition-colors relative ${
                isActive('/board') ? 'font-semibold' : ''
              }`}
              style={{ 
                color: isActive('/board') ? primaryBlue : '#6b7280',
                fontWeight: isActive('/board') ? '600' : '400'
              }}
              onMouseOver={(e) => e.target.style.color = primaryBlue}
              onMouseOut={(e) => e.target.style.color = isActive('/board') ? primaryBlue : '#6b7280'}
            >
              <span className="invisible font-semibold absolute">Board</span>
              <span className="relative">Board</span>
            </Link>
            <Link 
              href="/sponsor"
              className={`text-gray-600 transition-colors relative ${
                isActive('/sponsor') ? 'font-semibold' : ''
              }`}
              style={{ 
                color: isActive('/sponsor') ? primaryBlue : '#6b7280',
                fontWeight: isActive('/sponsor') ? '600' : '400'
              }}
              onMouseOver={(e) => e.target.style.color = primaryBlue}
              onMouseOut={(e) => e.target.style.color = isActive('/sponsor') ? primaryBlue : '#6b7280'}
            >
              <span className="invisible font-semibold absolute">Taste of Korea</span>
              <span className="relative">Taste of Korea</span>
            </Link>
            <Link 
              href="/donate"
              className="text-white px-4 py-2 rounded-md transition-colors"
              style={{ backgroundColor: primaryBlue }}
              onMouseOver={(e) => e.target.style.backgroundColor = primaryBlueHover}
              onMouseOut={(e) => e.target.style.backgroundColor = primaryBlue}
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
            <Link href="/fellows" className="block px-3 py-2 text-gray-600">Minyard Morris Fellows</Link>
            <Link href="/scholarships" className="block px-3 py-2 text-gray-600">Scholarships</Link>
            <Link href="/board" className="block px-3 py-2 text-gray-600">Board</Link>
            <Link href="/sponsor" className="block px-3 py-2 text-gray-600">Taste of Korea</Link>
            <Link 
              href="/donate" 
              className="block px-3 py-2 font-semibold"
              style={{ color: primaryBlue }}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
