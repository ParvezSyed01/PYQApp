import { useSearchParams, useNavigate } from "react-router-dom";
import { papersData } from "../papersdata";

const Papers = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const branch = params.get("branch");
  const sem = params.get("sem");
  const subject = params.get("subject");
  const year = params.get("year");

  // validation check
  const papers =
    branch &&
    sem &&
    subject &&
    year &&
    papersData[branch] &&
    papersData[branch][sem] &&
    papersData[branch][sem][subject] &&
    papersData[branch][sem][subject][year];

  if (!papers) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">
          Invalid Selection
        </h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        Papers for {branch.toUpperCase()} | Sem {sem} | {subject.toUpperCase()} | {year}
      </h1>

      <div className="grid gap-4">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{paper}</span>
            <button className="bg-green-600 text-white px-3 py-1 rounded">
              Download
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Papers;