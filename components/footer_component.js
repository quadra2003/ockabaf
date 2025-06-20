export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 OCKABA Foundation. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            OCKABA Foundation is a 501(c)(3) nonprofit organization.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            <a href="mailto:info@ockabaf.org" className="hover:text-white transition-colors">
              info@ockabaf.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}