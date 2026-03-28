export default function Filters({
  exp,
  setExp,
  loc,
  setLoc,
  salary,
  setSalary,
}) {
  return (
    <div className="mb-6 bg-[#020617] p-5 rounded-2xl text-white w-full shadow-lg">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter Jobs</h2>
        <button
          onClick={() => {
            setExp("All Levels");
            setLoc("All Locations");
            setSalary("All Salaries");
          }}
          className="text-sm text-blue-400 hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Experience */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Years of Experience
          </label>
          <select
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            className="w-full bg-[#1e293b] p-2 rounded-lg text-gray-300 outline-none"
          >
            <option>All Levels</option>
            <option>0–2 years</option>
            <option>3–5 years</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Location
          </label>
          <select
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
            className="w-full bg-[#1e293b] p-2 rounded-lg text-gray-300 outline-none"
          >
            <option>All Locations</option>
            <option>Remote</option>
          </select>
        </div>

        {/* Salary */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Salary Range
          </label>
          <select
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full bg-[#1e293b] p-2 rounded-lg text-gray-300 outline-none"
          >
            <option>All Salaries</option>
            <option>$60k–$90k</option>
          </select>
        </div>

      </div>
    </div>
  );
}