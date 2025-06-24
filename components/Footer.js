import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">OCKABA Foundation</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A 501(c)(3) nonprofit providing free legal services to those in need, scholarships to exceptional law students, and fellowship opportunities for pre-law individuals.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@ockabaf.org"
                className="text-gray-300 hover:text-white transition-colors"
                title="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ockabaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/fellows" className="text-gray-300 hover:text-white transition-colors">
                  Minyard Morris Fellows
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-gray-300 hover:text-white transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/board" className="text-gray-300 hover:text-white transition-colors">
                  Board
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Pro Bono Legal Services
                </Link>
              </li>
              <li>
                <Link href="/fellows" className="text-gray-300 hover:text-white transition-colors">
                  Minyard Morris Fellowship
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-gray-300 hover:text-white transition-colors">
                  Law Student Scholarships
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@ockabaf.org?subject=Legal Assistance Request"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Request Legal Help
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ockabaf.org?subject=Scholarship Application"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Apply for Scholarship
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} OCKABA Foundation. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                OCKABA Foundation is a 501(c)(3) nonprofit organization.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                <a href="mailto:info@ockabaf.org" className="hover:text-white transition-colors">
                  info@ockabaf.org
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="mailto:info@ockabaf.org?subject=Privacy Policy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="mailto:info@ockabaf.org?subject=Terms of Service"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="mailto:info@ockabaf.org?subject=Contact"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
