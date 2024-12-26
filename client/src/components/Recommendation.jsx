import React, { useState } from "react";
import { toast } from "react-toastify";
import head from '../assets/medicals.png'

const Recommendation = () => {
  const [symptoms, setSymptoms] = useState("");
  const [results, setResults] = useState(null);

  const handlePredict = async () => {
    if (!symptoms.trim()) {
      toast.error("Please enter symptoms before submitting.");
      return;
    }

    try {
      const response = await fetch("https://med-1-cafg.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction. Please try again.");
      }

      const data = await response.json();
      setResults(data);
      toast.success("Prediction retrieved successfully!");
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-orange-50">
      {/* Hero Section */}

      <div className="text-center my-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Disease Prediction System
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Enter your symptoms below to get a disease prediction and medicine recommendations.
        </p>
      </div>

      {/* Input and Prediction Section */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Enter Symptoms (comma-separated):
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows="4"
          placeholder="e.g., fever, headache, cough"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          onClick={handlePredict}
        >
          Predict Disease
        </button>
      </div>

      {/* Results Section */}
      {results && (
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Prediction Results:
          </h2>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Disease:</span> {results.disease || "N/A"}
          </p>
          {results.medicines && results.medicines.length > 0 ? (
            <>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                Recommended Medicines:
              </h3>
              <ul className="list-disc list-inside text-gray-800 mt-2">
                {results.medicines.map((medicine, index) => (
                  <li key={index}>{medicine}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-700 mt-4">No medicines recommended.</p>
          )}
          <button
            className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-200"
            onClick={() => setResults(null)}
          >
            Clear Results
          </button>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
