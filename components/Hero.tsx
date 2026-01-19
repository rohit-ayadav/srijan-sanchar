// components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-5xl w-full text-center space-y-12">
        
        {/* Clean, minimal heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          A place to find, discover,
          <span className="block text-emerald-300 mt-2">share and explore stories</span>
        </h1>
        
        {/* Simple subheading */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Write your stories. Read others. Simple as that.
        </p>

        {/* Dual CTA - Clean and prominent */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link 
            href="/write"
            className="w-full sm:w-auto bg-emerald-300 hover:bg-emerald-700 text-white text-lg font-semibold px-12 py-4 rounded-lg shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300"
          >
            Start Writing
          </Link>

          <Link 
            href="/explore"
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 text-lg font-semibold px-12 py-4 rounded-lg border-2 border-gray-900 shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Explore Stories
          </Link>
        </div>

      </div>
    </section>
  );
}
