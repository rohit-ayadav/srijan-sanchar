// components/HowSection.tsx
export default function HowSection() {
  const steps = [
    {
      number: "1",
      title: "Click ‘Start Writing’",
      description:
        "On the home page, press the big orange button that says ‘Start Writing’. You cannot miss it."
    },
    {
      number: "2",
      title: "Tell Your Story",
      description:
        "Write in the box, or speak if the mic button is available. Just say what happened, in your own simple words."
    },
    {
      number: "3",
      title: "Save or Share",
      description:
        "You can save your story to keep it private, or press ‘Publish’ if you want your family or others to read it."
    },
    {
      number: "4",
      title: "Read Other Stories",
      description:
        "Go to ‘Read Stories’ and choose any story that interests you. Just click the title to open it."
    }
  ];

  const explorePoints = [
    "Learn the art and craft of story‑telling, one small step at a time.",
    "Improve your story with gentle help from master storytellers.",
    "Change your story, change how you see your life.",
    "Reflect on your memories and what they mean to you.",
    "Find patterns, uncover insights, and see new possibilities.",
    "Experiment with different voices, sounds, or music to bring stories alive."
  ];

  return (
    <section className="py-24 px-6 bg-orange-50" id="how">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            How Does It Work?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Made for parents, grandparents, and anyone who is not comfortable with phones. 
            Just follow these simple steps.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow border border-orange-200"
            >
              {/* Step number */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-emerald-300 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                {step.number}
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Explore / Alchemist of stories */}
        <div className="mt-10 p-10 bg-white rounded-3xl shadow-md border border-gray-200 space-y-6">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Become an Alchemist of Stories
            </h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Once you are comfortable writing or speaking your stories, you can go deeper: explore, 
              polish, and transform your stories into something even more meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {explorePoints.map((point, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-200 text-left"
              >
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
