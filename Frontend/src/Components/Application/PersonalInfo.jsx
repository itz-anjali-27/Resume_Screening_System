export default function PersonalInfo() {
  return (
    <div className="bg-[#020617] p-6 rounded-lg mb-6 text-white">
      
      <h2 className="text-lg font-semibold mb-6">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Full Name */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md bg-[#1f2937] border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md bg-[#1f2937] border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full px-4 py-2 rounded-md bg-[#1f2937] border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            LinkedIn Profile
          </label>
          <input
            type="text"
            placeholder="LinkedIn URL"
            className="w-full px-4 py-2 rounded-md bg-[#1f2937] border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

      </div>

      {/* Full width field */}
      <div className="mt-5">
        <label className="text-sm text-gray-400 mb-1 block">
          GitHub / Portfolio
        </label>
        <input
          type="text"
          placeholder="Portfolio URL"
          className="w-full px-4 py-2 rounded-md bg-[#1f2937] border border-gray-600 focus:outline-none focus:border-blue-500"
        />
      </div>

    </div>
  );
}