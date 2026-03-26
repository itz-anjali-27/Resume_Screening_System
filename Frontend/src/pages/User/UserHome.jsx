import { useState } from "react";
import Header from "../../components/UserHome/Header.jsx";
import Filters from "../../components/UserHome/Filters.jsx";
import JobList from "../../components/UserHome/JobList.jsx";

const JOBS = [
  { id:1, title:'Fullstack Engineer (React)', company:'DesignCo', posted:'5 days ago', status:'Active', match:96, type:'Full-time', location:'Remote', salary:'$120k–$160k' },
  { id:2, title:'Senior Product Designer', company:'TechFlow', posted:'2 days ago', status:'Active', match:94, type:'Full-time', location:'San Francisco, CA', salary:'$100k–$140k' },
];

export default function UserHome() {
  const [search, setSearch] = useState('');
  const [exp, setExp] = useState('');
  const [loc, setLoc] = useState('');
  const [salary, setSalary] = useState('');
  const [applied, setApplied] = useState([]);

  const filtered = JOBS.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    j.company.toLowerCase().includes(search.toLowerCase())
  );

  const handleApply = (id) => {
    setApplied(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] p-6">
      
      <Header search={search} setSearch={setSearch} />

      <Filters
        exp={exp}
        setExp={setExp}
        loc={loc}
        setLoc={setLoc}
        salary={salary}
        setSalary={setSalary}
      />

      <JobList
        jobs={filtered}
        applied={applied}
        handleApply={handleApply}
      />
    </div>
  );
}