import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Layers,
  FileText,
  CheckCircle,
} from "lucide-react";

const academicData = {
  cs: {
    1: { math: ["2021", "2022"], physics: ["2022"] },
    2: { dsa: ["2021", "2023"] },
  },
  it: {
    1: { cprog: ["2020", "2021"] },
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

  const steps = [
    {
      number: "01",
      title: "Choose Branch",
      desc: "Select your engineering department.",
      icon: <GraduationCap size={28} />,
    },
    {
      number: "02",
      title: "Pick Semester",
      desc: "Select your academic semester.",
      icon: <Layers size={28} />,
    },
    {
      number: "03",
      title: "Select Subject",
      desc: "Choose the subject you need papers for.",
      icon: <FileText size={28} />,
    },
    {
      number: "04",
      title: "Access Papers",
      desc: "Instantly view and download PYQs.",
      icon: <CheckCircle size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-gray-900"
        >
          MyPYQ
        </motion.h1>

        <p className="mt-6 text-xl text-gray-600 font-medium">
          From Engineers, For Engineers
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
          A structured platform to access previous year question papers
          without clutter, confusion, or distractions.
        </p>

        <div className="mt-14 flex justify-center gap-6 flex-col sm:flex-row">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg transition"
          >
            <BookOpen size={20} />
            Access Papers
          </motion.button>

          <a
            href="https://www.honestysoftwares.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-2xl font-semibold transition"
          >
            About Honesty <ArrowRight size={18} />
          </a>

        </div>

        <p className="mt-16 text-sm text-gray-400 tracking-widest">
          MyPYQ by Honest
        </p>

      </div>

      {/* STEP SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-gray-50 rounded-2xl p-10 shadow-sm hover:shadow-xl transition"
              >
                <span className="absolute top-6 right-8 text-7xl font-extrabold text-gray-200 select-none">
                  {step.number}
                </span>

                <div className="mb-6 text-blue-600">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     {/* WHY USE MYPYQ */}
<section className="py-28 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl font-bold mb-4">
        Why You Should Use MyPYQ
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Built specifically for engineering students who want clarity,
        speed, and structure — without wasting time searching.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Card 1 */}
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
      >
        <div className="text-blue-600 mb-5">
          <BookOpen size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          No Clutter
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          No ads. No random uploads. Just properly organized question papers.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
      >
        <div className="text-blue-600 mb-5">
          <Layers size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Structured Filtering
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Filter by branch, semester, subject, and year — instantly.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
      >
        <div className="text-blue-600 mb-5">
          <CheckCircle size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Saves Time
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          No digging through folders or WhatsApp groups.
          Get exactly what you need in seconds.
        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
      >
        <div className="text-blue-600 mb-5">
          <GraduationCap size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Built For Engineers
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Designed around real academic structure — not generic file storage.
        </p>
      </motion.div>

      {/* Card 5 */}
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
      >
        <div className="text-blue-600 mb-5">
          <FileText size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Growing Archive
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Papers are continuously added to expand coverage.
        </p>
      </motion.div>

      {/* Card 6 */}
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
      >
        <div className="text-blue-600 mb-5">
          <ArrowRight size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Simple Interface
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Minimal design focused purely on usability and speed.
        </p>
      </motion.div>

    </div>

  </div>
</section>
      {/* MODAL (UNCHANGED LOGIC) */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-5 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-semibold text-center text-gray-800">
                Select Details
              </h2>

              <select name="branch" value={form.branch} onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="">Select Branch</option>
                {branches.map((b) => (
                  <option key={b} value={b}>{b.toUpperCase()}</option>
                ))}
              </select>

              <select name="sem" value={form.sem} onChange={handleChange}
                disabled={!form.branch}
                className="w-full border p-3 rounded-lg disabled:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                <option value="">Select Semester</option>
                {semesters.map((s) => (
                  <option key={s} value={s}>Sem {s}</option>
                ))}
              </select>

              <select name="subject" value={form.subject} onChange={handleChange}
                disabled={!form.sem}
                className="w-full border p-3 rounded-lg disabled:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                <option value="">Select Subject</option>
                {subjects.map((sub) => (
                  <option key={sub} value={sub}>{sub.toUpperCase()}</option>
                ))}
              </select>

              <select name="year" value={form.year} onChange={handleChange}
                disabled={!form.subject}
                className="w-full border p-3 rounded-lg disabled:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                <option value="">Select Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                View Paper
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Home;