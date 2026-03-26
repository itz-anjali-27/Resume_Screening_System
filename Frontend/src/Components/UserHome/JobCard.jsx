export default function JobCard({ job, applied, handleApply }) {
  return (
    <div className="bg-[#111827] p-4 mb-3 rounded text-white flex justify-between">
      
      <div>
        <h3 className="font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-400">{job.company}</p>
      </div>

      <button
        onClick={() => handleApply(job.id)}
        className="bg-blue-500 px-3 py-1 rounded"
      >
        {applied.includes(job.id) ? "Applied" : "Apply"}
      </button>

    </div>
  );
}