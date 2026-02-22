import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center">
          About MyPYQ
        </h1>

        <p className="mt-6 text-center text-gray-600 text-lg max-w-3xl mx-auto">
          MyPYQ is a structured platform designed to help engineering students
          access previous year question papers in a simple and organized way.
        </p>

        {/* Section 1 */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Why This Platform Exists
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Many students struggle to find reliable previous year question papers.
            Files are scattered, links are broken, and information is unstructured.
            MyPYQ solves this by organizing papers based on branch, semester,
            subject, and year — making preparation straightforward.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            What Makes It Different
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>• Clear academic structure (Branch → Semester → Subject → Year)</li>
            <li>• No cluttered interface</li>
            <li>• No unnecessary distractions</li>
            <li>• Built with simplicity and transparency in mind</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Built With Honesty
          </h2>

          <p className="text-gray-600 leading-relaxed">
            MyPYQ is developed under the principle of honesty — providing students
            with what they need without manipulation or noise. The goal is to make
            academic preparation cleaner and more accessible.
          </p>
        </div>

        {/* Footer Line */}
        <div className="mt-20 text-center text-sm text-gray-400">
          MyPYQ by Honest
        </div>

      </div>
    </div>
  );
};

export default About;