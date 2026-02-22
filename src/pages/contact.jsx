import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-gray-800">
          Contact Us
        </h1>

        <p className="mt-4 text-center text-gray-600">
          Have questions or missing papers? Send us a message.
        </p>

        <form className="mt-12 bg-white p-8 rounded-xl shadow-sm space-y-6">

          <div>
            <label className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              rows="4"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >     
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;
