import { useRef, useState } from "react";

export default function ResumeUpload() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF, DOC, DOCX files are allowed");
        return;
      }

      setFileName(file.name);
      console.log("Uploaded file:", file);
    }
  };

  return (
    <div className="bg-[#020617] p-6 rounded-lg mb-6 text-white">
      <h2 className="text-lg font-semibold mb-4">
        Resume & Documents
      </h2>

      {/* Hidden Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.doc,.docx"
      />

      {/* Upload Box */}
      <div
        onClick={handleClick}
        className="border border-dashed border-gray-500 p-6 rounded-lg text-center cursor-pointer hover:border-blue-500 transition"
      >
        {fileName ? (
          <p className="text-green-400">{fileName}</p>
        ) : (
          <p className="text-gray-400">
            Click to upload resume (PDF, DOC, DOCX)
          </p>
        )}
      </div>
    </div>
  );
}