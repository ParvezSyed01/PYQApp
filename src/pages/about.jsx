import React from "react";
import {
  Search,
  Layers,
  Clock,
  Target,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            About MyPYQ
          </h1>

          <p className="mt-8 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A structured academic system engineered to eliminate
            inefficiency in accessing previous year examination papers.
          </p>
        </div>

        {/* Problem + Solution */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">

          {/* Problem */}
          <div>
            <div className="flex items-center gap-3">
              <Search className="text-blue-600" size={28} />
              <h2 className="text-2xl font-bold text-[#0f172a]">
                The Problem
              </h2>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Question papers are scattered across random drives,
              WhatsApp groups, and unstructured folders. Finding
              the right paper wastes time and focus.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              During exam season, inefficiency compounds.
              Disorganization becomes a real disadvantage.
            </p>
          </div>

          {/* Solution Card */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-3">
              <Layers className="text-blue-600" size={26} />
              <h3 className="text-xl font-semibold text-[#0f172a]">
                Structured Retrieval System
              </h3>
            </div>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>• Branch → Semester → Subject → Year</li>
              <li>• Clean categorization</li>
              <li>• Direct access within seconds</li>
              <li>• No unnecessary friction</li>
            </ul>
          </div>
        </div>

        {/* Why Use MyPYQ */}
        <div className="mt-28">
          <h2 className="text-2xl font-bold text-center text-[#0f172a]">
            Why You Should Use MyPYQ
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <Clock className="text-blue-600" size={26} />
              <h3 className="mt-4 font-semibold text-lg text-[#0f172a]">
                Save Time
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Stop searching endlessly. Retrieve papers instantly
                and focus on preparation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <Target className="text-blue-600" size={26} />
              <h3 className="mt-4 font-semibold text-lg text-[#0f172a]">
                Study Smart
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Identify recurring patterns and optimize your
                revision strategy.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <ShieldCheck className="text-blue-600" size={26} />
              <h3 className="mt-4 font-semibold text-lg text-[#0f172a]">
                Reliable Structure
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Built with clarity and integrity. Organized
                for long-term academic utility.
              </p>
            </div>

          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-28 text-center max-w-3xl mx-auto">
          <div className="flex justify-center">
            <BookOpen className="text-blue-600" size={30} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-[#0f172a]">
            Built by Engineers, for Engineers
          </h2>

          <p className="mt-8 text-gray-600 leading-relaxed">
            Designed with a practical engineering mindset —
            eliminate noise, optimize systems, and create tools
            that genuinely improve workflow.
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            A product of Honesty Software — focused on clarity,
            integrity, and measurable utility.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-24 text-center text-sm text-gray-400 tracking-wide">
          A Product of Honesty Software
        </div>

      </div>
    </div>
  );
};

export default About;