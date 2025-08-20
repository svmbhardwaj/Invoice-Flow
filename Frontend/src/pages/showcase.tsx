import React, { useState } from "react";
import { Upload, CheckCircle2, XCircle } from "lucide-react";

export default function Showcase() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<
    { type: "real" | "fake"; reasons: string[] } | null
  >(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploadedFile(file);

      // 👉 Fake demo analysis logic (you can later plug real checks here)
      if (file.name.toLowerCase().includes("fake")) {
        setAnalysisResult({
          type: "fake",
          reasons: [
            "Invoice number pattern mismatch",
            "Buyer GSTIN missing",
            "Altered metadata detected",
          ],
        });
      } else {
        setAnalysisResult({
          type: "real",
          reasons: ["Valid invoice structure", "GSTIN verified", "Metadata consistent"],
        });
      }
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Invoice Showcase</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Upload an invoice to see how our system distinguishes between{" "}
        <span className="font-semibold">Real</span> and{" "}
        <span className="font-semibold">Fake</span> documents.
      </p>

      {/* Upload Box */}
      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition">
        <Upload className="w-10 h-10 text-gray-500 mb-2" />
        <span className="text-gray-500">
          {uploadedFile ? uploadedFile.name : "Click to upload an invoice"}
        </span>
        <input type="file" className="hidden" onChange={handleFileUpload} />
      </label>

      {/* Analysis Result */}
      {analysisResult && (
        <div
          className={`mt-8 p-6 rounded-xl ${
            analysisResult.type === "real"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {analysisResult.type === "real" ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <XCircle className="w-6 h-6" />
            )}
            <h2 className="text-xl font-semibold capitalize">
              {analysisResult.type} Invoice Detected
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            {analysisResult.reasons.map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
