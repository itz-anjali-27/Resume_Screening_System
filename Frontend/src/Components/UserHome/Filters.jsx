export default function Filters({ exp, setExp, loc, setLoc, salary, setSalary }) {
  return (
    <div className="mb-6 bg-[#111827] p-4 rounded text-white">
      
      <select value={exp} onChange={(e) => setExp(e.target.value)}>
        <option>All Levels</option>
        <option>0–2 years</option>
        <option>3–5 years</option>
      </select>

      <select value={loc} onChange={(e) => setLoc(e.target.value)}>
        <option>All Locations</option>
        <option>Remote</option>
      </select>

      <select value={salary} onChange={(e) => setSalary(e.target.value)}>
        <option>All Salaries</option>
        <option>$60k–$90k</option>
      </select>

    </div>
  );
}