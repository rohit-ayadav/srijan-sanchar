// components/CTASection.tsx
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-linear-to-r from-emerald-400 to-emerald-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Share Your Story?
        </h2>
        <p className="text-xl md:text-2xl text-orange-100 mb-12 leading-relaxed">
          Join thousands of people who are preserving their memories and sharing their experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/write-story"
            className="bg-white text-emerald-400 hover:bg-gray-100 text-2xl md:text-3xl font-bold px-16 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
          >
            Start Writing Now
          </Link>

          <Link
            href="/explore"
            className="bg-transparent border-4 border-white text-white hover:bg-white hover:text-emerald-400 text-2xl md:text-3xl font-bold px-16 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
          >
            Explore Stories
          </Link>
        </div>

        <p className="mt-8 text-lg text-orange-100">
          No registration required to start reading stories
        </p>
      </div>
    </section>
  );
}
