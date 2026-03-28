import React, { useState } from "react";

export default function JobForm({ onClose }) {
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [workMode, setWorkMode] = useState("Remote");

  // Add skill
  const addSkill = () => {
    if (inputSkill.trim() && !skills.includes(inputSkill)) {
      setSkills([...skills, inputSkill]);
      setInputSkill("");
    }
  };

  // Remove skill
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-slate-900 p-6 rounded-2xl w-full max-w-2xl shadow-xl">
        
        <h2 className="text-2xl font-semibold mb-6">Post New Job</h2>

        <form className="flex flex-col gap-5">

          {/* Job Title */}
          <div>
            <label className="text-sm mb-1 block">Job Title</label>
            <input
              className="p-3 rounded-lg bg-slate-800 w-full outline-none"
              placeholder="e.g. Senior Frontend Engineer"
            />
          </div>

          {/* Company */}
          <div>
            <label className="text-sm mb-1 block">Company Name</label>
            <input
              className="p-3 rounded-lg bg-slate-800 w-full outline-none"
              placeholder="Company Name"
            />
          </div>

          {/* Experience + Work Mode */}
          <div className="grid grid-cols-2 gap-4">

            {/* Experience */}
            <div>
              <label className="text-sm mb-1 block">Experience</label>
              <select className="p-3 rounded-lg bg-slate-800 w-full">
                <option>Entry Level (0-2 years)</option>
                <option>Mid Level (2-5 years)</option>
                <option>Senior Level (5+ years)</option>
              </select>
            </div>

            {/* Work Mode */}
            <div>
              <label className="text-sm mb-1 block">Work Mode</label>
              <div className="flex gap-2">
                {["Remote", "Hybrid", "On-site"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setWorkMode(mode)}
                    className={`flex-1 py-2 rounded-lg ${
                      workMode === mode
                        ? "bg-blue-600"
                        : "bg-slate-700"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="text-sm mb-1 block">Job Description</label>
            <textarea
              rows={4}
              className="p-3 rounded-lg bg-slate-800 w-full outline-none"
              placeholder="Describe the role, responsibilities, and requirements..."
            />
          </div>

          {/* Skills */}
          <div>
            <label className="text-sm mb-2 block">Required Skills</label>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-slate-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-red-400"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>

            {/* Add Skill */}
            <div className="flex gap-2">
              <input
                value={inputSkill}
                onChange={(e) => setInputSkill(e.target.value)}
                className="flex-1 p-3 rounded-lg bg-slate-800"
                placeholder="Add a skill..."
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 bg-blue-600 rounded-lg"
              >
                Add
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-700 rounded-lg"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-red-400 rounded-lg">
              Publish Job
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}