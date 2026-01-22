// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-emerald-300 mb-2">Story Portal</h3>
            <p className="text-gray-400">
              A place to share and explore stories
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-gray-300">
            <Link href="/#what" className="hover:text-emerald-300 transition-colors">
              What
            </Link>
            <Link href="/#why" className="hover:text-emerald-300 transition-colors">
              Why
            </Link>
            <Link href="/#how" className="hover:text-emerald-300 transition-colors">
              How
            </Link>
            <Link href="/help" className="hover:text-emerald-300 transition-colors">
              Help
            </Link>
          </nav>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Story Portal. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
