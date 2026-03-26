export default function RoleToggle({ role, setRole }) {
  return (
    <div className="flex mb-6 bg-[#131d2e] rounded-xl p-1">
      {["user", "recruiter"].map((r) => (
        <button
          key={r}
          onClick={() => setRole(r)}
          className={`flex-1 py-2 text-sm rounded-lg ${
            role === r ? "bg-blue-600 text-white" : "text-slate-400"
          }`}
        >
          {r === "user" ? "Applicant" : "Recruiter"}
        </button>
      ))}
    </div>
  );
}