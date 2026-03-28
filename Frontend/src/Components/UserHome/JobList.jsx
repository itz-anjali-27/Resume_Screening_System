import JobCard from "./JobCard";

export default function JobList({ jobs, applied, handleApply }) {
  return (
    <div className="mt-6">
      
      {/* Heading */}
      <h2 className="text-white text-xl font-semibold mb-4">
        Available Jobs
      </h2>

      {/* Empty State */}
      {jobs.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">
          No jobs found 😔
        </div>
      ) : (
        /* Grid Layout */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              applied={applied}
              handleApply={handleApply}
            />
          ))}
        </div>
      )}
      
    </div>
  );
}