export default function ProfessionalDetails() {
  return (
    <div className="bg-[#020617] p-6 rounded-lg mb-6 text-white">
      
      <h2 className="text-lg font-semibold mb-6">
        Professional Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Experience */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Experience
          </label>
          <select
            className="w-full px-4 py-2 rounded-md bg-[#1f2937] border border-gray-600 focus:outline-none focus:border-blue-500"
          >
            <option>Select experience</option>
            <option>0-1 years</option>
            <option>1-3 years</option>
            <option>3-5 years</option>
            <option>5+ years</option>
          </select>
        </div>

        {/* Notice Period */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Notice Period
          </label>
          <select
            className="w-full px-4 py-2 rounded-md bg-[#1f2937] border border-gray-600 focus:outline-none focus:border-blue-500"
          >
            <option>Select notice period</option>
            <option>Immediate</option>
            <option>15 Days</option>
            <option>30 Days</option>
            <option>60 Days</option>
          </select>
        </div>

        {/* Current Salary */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Current Salary
          </label>
          <input
            type="text"
            placeholder="Enter current salary"
            className="w-full px-4 py-2 rounded-md bg-[#1f2937] border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Expected Salary */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Expected Salary
          </label>
          <input
            type="text"
            placeholder="Enter expected salary"
            className="w-full px-4 py-2 rounded-md bg-[#1f2937] border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

      </div>

    </div>
  );
}