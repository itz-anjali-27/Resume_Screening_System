import { useNavigate } from "react-router-dom";

export default function JobCard({ job, applied, handleApply }) {
  const navigate = useNavigate();
  const isApplied = applied.includes(job.id);

  const handleClick = () => {
    handleApply(job.id);
    navigate(`/application/${job.id}`); // 👉 redirect
  };

  return (
    <div className="bg-[#111827] p-5 mb-4 rounded-2xl text-white shadow-md">
      
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-400">{job.company}</p>
        </div>

        <button
          onClick={handleClick}
          className={`px-4 py-1 rounded ${
            isApplied ? "bg-gray-600" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isApplied ? "Applied" : "Apply Now"}
        </button>
      </div>

    </div>
  );
}