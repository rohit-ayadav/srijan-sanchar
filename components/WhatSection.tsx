// components/WhatSection.tsx
export default function WhatSection() {
  const categories = [
    {
      tag: "Learn & Grow",
      title: "Stories for Pedagogy",
      description: "Learn through stories. Educational narratives that teach concepts, share wisdom, and inspire growth through real experiences.",
      color: "blue"
    },
    {
      tag: "Your Journey",
      title: "Be the Hero of Your Own Story",
      description: "Your life is a story worth telling. Share your journey, challenges, victories, and lessons learned.",
      color: "orange"
    },
    {
      tag: "Business Insights",
      title: "Entrepreneurial Journeys",
      description: "Real stories from founders and entrepreneurs. The highs, lows, pivots, and breakthroughs of building something from nothing.",
      color: "green"
    },
    {
      tag: "Deep Analysis",
      title: "The Mind of Stories – Case Studies",
      description: "Understand the psychology of storytelling. Analysis, frameworks, and deep dives into what makes stories powerful.",
      color: "indigo"
    },
    {
      tag: "Quick Reads",
      title: "Micro Dramas",
      description: "Bite-sized stories with maximum impact. Dramatic moments, plot twists, and emotional punch in compact form.",
      color: "purple"
    },
    {
      tag: "Brand Stories",
      title: "Advertising",
      description: "Stories that sell, persuade, and connect. Marketing narratives, brand stories, and campaigns that resonated.",
      color: "pink"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50" id="what">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Stories That Speak to You
          </h2>
          <p className="text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Stories that feel like they were written just for you
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-5 py-2 bg-white text-gray-700 rounded-lg font-medium border border-gray-300">
              Browse by Feeling
            </span>
            <span className="px-5 py-2 bg-white text-gray-700 rounded-lg font-medium border border-gray-300">
              Browse by Moment
            </span>
            <span className="px-5 py-2 bg-white text-gray-700 rounded-lg font-medium border border-gray-300">
              Browse by Curiosity
            </span>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-5">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border-l-4 border-gray-900 hover:shadow-lg transition-shadow"
            >
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                {category.tag}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>
              <p className="text-lg text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="/explore"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white text-xl font-bold px-12 py-4 rounded-lg transition-colors"
          >
            Start Discovering Stories
          </a>
        </div>

      </div>
    </section>
  );
}
