import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const academicData = {
  cs: {
    1: {
      math: ["2021", "2022"],
      physics: ["2022"],
    },
    2: {
      dsa: ["2021", "2023"],
    },
  },
  it: {
    1: {
      cprog: ["2020", "2021"],
    },
  },
};

const Home = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    branch: "",
    sem: "",
    subject: "",
    year: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "branch") {
      setForm({ branch: value, sem: "", subject: "", year: "" });
    } else if (name === "sem") {
      setForm({ ...form, sem: value, subject: "", year: "" });
    } else if (name === "subject") {
      setForm({ ...form, subject: value, year: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = () => {
    const { branch, sem, subject, year } = form;

    if (!branch || !sem || !subject || !year) {
      alert("Select all fields");
      return;
    }

    navigate(
      `/papers?branch=${branch}&sem=${sem}&subject=${subject}&year=${year}`
    );
  };

  // Dynamic Options
  const branches = Object.keys(academicData);

  const semesters = form.branch
    ? Object.keys(academicData[form.branch])
    : [];

  const subjects =
    form.branch && form.sem
      ? Object.keys(academicData[form.branch][form.sem])
      : [];

  const years =
    form.branch && form.sem && form.subject
      ? academicData[form.branch][form.sem][form.subject]
      : [];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center 
                    px-4 py-16 sm:py-20 md:py-24 
                    bg-white shadow">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
          Previous Year Question Papers
        </h1>

        <p className="max-w-xl text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
          Select your branch, semester, subject, and year to instantly
          access previous year exam papers.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="w-full sm:w-auto bg-blue-600 text-white 
                   px-6 py-3 rounded-lg text-base sm:text-lg 
                   hover:bg-blue-700 transition"
        >
          Get Paper
        </button>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16 md:py-20 
                    px-4 sm:px-6 
                    max-w-6xl mx-auto 
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

        <div className="bg-white p-5 sm:p-6 rounded shadow text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Easy Navigation
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Clean dropdown flow to quickly filter your required paper.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded shadow text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Organized Structure
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Papers sorted by branch, semester, subject, and year.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded shadow text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Instant Access
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            No clutter. Select and view your required paper immediately.
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white 
                        w-full max-w-md 
                        p-5 sm:p-6 
                        rounded-lg 
                        space-y-4 shadow-lg">

            <select
              name="branch"
              value={form.branch}
              onChange={handleChange}
              className="w-full border p-2.5 rounded text-sm sm:text-base"
            >
              <option value="">Select Branch</option>
              {branches.map((b) => (
                <option key={b} value={b}>
                  {b.toUpperCase()}
                </option>
              ))}
            </select>

            <select
              name="sem"
              value={form.sem}
              onChange={handleChange}
              disabled={!form.branch}
              className="w-full border p-2.5 rounded disabled:bg-gray-100 text-sm sm:text-base"
            >
              <option value="">Select Semester</option>
              {semesters.map((s) => (
                <option key={s} value={s}>
                  Sem {s}
                </option>
              ))}
            </select>

            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              disabled={!form.sem}
              className="w-full border p-2.5 rounded disabled:bg-gray-100 text-sm sm:text-base"
            >
              <option value="">Select Subject</option>
              {subjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub.toUpperCase()}
                </option>
              ))}
            </select>

            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              disabled={!form.subject}
              className="w-full border p-2.5 rounded disabled:bg-gray-100 text-sm sm:text-base"
            >
              <option value="">Select Year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-2.5 rounded hover:bg-green-700 transition"
            >
              View Paper
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="w-full text-sm text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
 );
};

export default Home;