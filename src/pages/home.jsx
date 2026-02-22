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
  const [error, setError] = useState("");

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

    setError("");
  };

  const handleSubmit = () => {
    const { branch, sem, subject, year } = form;

    if (!branch || !sem || !subject || !year) {
      setError("Please select all fields.");
      return;
    }

    navigate(
      `/papers?branch=${branch}&sem=${sem}&subject=${subject}&year=${year}`
    );
  };

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
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          MyPYQ
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-600 font-medium">
          From Engineers, For Engineers
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-gray-500 text-base sm:text-lg">
          A structured platform to access previous year question papers
          without clutter, confusion, or distractions.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Access Papers
          </button>

          <a
            href="https://www.honestysoftwares.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            About Honesty →
          </a>

        </div>

        <p className="mt-10 text-sm text-gray-400">
          MyPYQ by Honest
        </p>

      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white w-full max-w-md p-6 rounded-xl space-y-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Select Details
            </h2>

            <select
              name="branch"
              value={form.branch}
              onChange={handleChange}
              className="w-full border p-2.5 rounded"
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
              className="w-full border p-2.5 rounded disabled:bg-gray-100"
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
              className="w-full border p-2.5 rounded disabled:bg-gray-100"
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
              className="w-full border p-2.5 rounded disabled:bg-gray-100"
            >
              <option value="">Select Year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg transition font-medium"
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