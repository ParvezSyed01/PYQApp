import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-4xl font-bold text-gray-800">
          About PYQ
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          PYQ is built to simplify access to previous year question papers.
          No clutter. No distractions. Just direct access to what students
          actually need.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600">
              Simple
            </h3>
            <p className="mt-3 text-gray-600">
              Clean interface focused only on finding papers fast.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600">
              Fast
            </h3>
            <p className="mt-3 text-gray-600">
              Quick access and download without unnecessary steps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600">
              Reliable
            </h3>
            <p className="mt-3 text-gray-600">
              Organized subject-wise and year-wise for easy navigation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
