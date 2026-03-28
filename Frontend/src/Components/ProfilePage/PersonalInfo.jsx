import { useState } from "react";

export default function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false);

  const [data, setData] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    location: "San Francisco, CA",
    dob: "1994-06-12",
    status: "Actively Looking",
    bio: "Passionate Frontend Developer with 8+ years..."
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-[#020617] p-6 rounded-xl text-white">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <h2 className="text-lg font-semibold">Personal Information</h2>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-400"
          >
            Edit
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 text-sm">

        {/* FULL NAME */}
        <div>
          <p className="text-gray-400 text-xs mb-1">FULL NAME</p>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full bg-[#1F2937] p-2 rounded ${
              !isEditing && "opacity-70 cursor-not-allowed"
            }`}
          />
        </div>

        {/* EMAIL */}
        <div>
          <p className="text-gray-400 text-xs mb-1">EMAIL ADDRESS</p>
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full bg-[#1F2937] p-2 rounded ${
              !isEditing && "opacity-70 cursor-not-allowed"
            }`}
          />
        </div>

        {/* DOB */}
        <div>
          <p className="text-gray-400 text-xs mb-1">DATE OF BIRTH</p>
          <input
            name="dob"
            value={data.dob}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full bg-[#1F2937] p-2 rounded ${
              !isEditing && "opacity-70 cursor-not-allowed"
            }`}
          />
        </div>

        {/* LOCATION */}
        <div>
          <p className="text-gray-400 text-xs mb-1">LOCATION</p>
          <input
            name="location"
            value={data.location}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full bg-[#1F2937] p-2 rounded ${
              !isEditing && "opacity-70 cursor-not-allowed"
            }`}
          />
        </div>

        {/* STATUS */}
        <div>
          <p className="text-gray-400 text-xs mb-1">EMPLOYMENT STATUS</p>
          <input
            name="status"
            value={data.status}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full bg-[#1F2937] p-2 rounded ${
              !isEditing && "opacity-70 cursor-not-allowed"
            }`}
          />
        </div>

      </div>

      {/* BIO */}
      <div className="mt-6 w-full">
        <p className="text-gray-400 text-xs mb-1">BIO</p>
        <textarea
          name="bio"
          value={data.bio}
          onChange={handleChange}
          disabled={!isEditing}
          className={`w-full min-h-[120px] bg-[#1F2937] p-2 rounded ${
            !isEditing && "opacity-70 cursor-not-allowed"
          }`}
        />
      </div>

      {/* SAVE BUTTON */}
      {isEditing && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}