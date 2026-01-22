// components/WhySection.tsx
export default function WhySection() {
  return (
    <section className="py-24 px-6 bg-white" id="why">
      <div className="max-w-6xl mx-auto">

        {/* Hero Message */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
            Every Story Matters
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl text-gray-800 font-medium">
              Tell it as it happened.
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Stories here are not content.<br />
              They are <span className="text-emerald-300 font-bold">lived moments</span>.
            </p>
          </div>
        </div>

        {/* Core Truth */}
        <div className="bg-linear-to-br from-orange-50 to-white p-16 rounded-3xl mb-16 text-center border-2 border-orange-200">
          <p className="text-3xl md:text-4xl text-gray-900 leading-relaxed mb-8">
            <strong>You don't need to be a writer</strong><br />
            to tell a story.
          </p>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            You only need a moment<br />
            worth remembering.
          </p>
        </div>

        {/* How to Share */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Write or speak your story in your own words
          </h3>
          <p className="text-xl text-gray-600 mb-10">
            No rules. No judgment. Just you.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray-50 p-10 rounded-2xl">
              <div className="text-6xl mb-4">✍️</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Write</h4>
              <p className="text-lg text-gray-600">
                Type it out. Take your time. Edit as you go.
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl">
              <div className="text-6xl mb-4">🎙️</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Speak</h4>
              <p className="text-lg text-gray-600">
                Just talk. We'll transcribe it for you.
              </p>
            </div>
          </div>
        </div>
        {/* Final CTA */}
        <div className="mt-20 text-center">
          <a
            href="/write"
            className="inline-block bg-emerald-300 hover:bg-emerald-400 text-white text-2xl font-bold px-16 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            Tell Your Story
          </a>
        </div>

      </div>
    </section>
  );
}
