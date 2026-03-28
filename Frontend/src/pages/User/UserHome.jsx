import { useState } from "react";
import Header from "../../components/UserHome/Header.jsx";
import Filters from "../../Components/UserHome/Filters.jsx";
import JobList from "../../components/UserHome/JobList.jsx";
import AppNavbar from "../../components/UserHome/AppNavbar.jsx";

const JOBS = [
  { id:1, title:'Fullstack Engineer (React)', company:'DesignCo', posted:'5 days ago', status:'Active', match:96, type:'Full-time', location:'Remote', salary:'$120k–$160k' },
  { id:2, title:'Senior Product Designer', company:'TechFlow', posted:'2 days ago', status:'Active', match:94, type:'Full-time', location:'San Francisco, CA', salary:'$100k–$140k' },
  { id:3, title:'UX Engineer', company:'DesignCo', posted:'1 day ago', status:'Active', match:89, type:'Contract', location:'New York, NY', salary:'$90k–$120k' },
  { id:4, title:'Lead Developer', company:'CloudBase', posted:'3 days ago', status:'Active', match:85, type:'Full-time', location:'Austin, TX', salary:'$130k–$170k' },
  { id:5, title:'React Native Developer', company:'MobileSoft', posted:'7 days ago', status:'Active', match:80, type:'Remote', location:'Remote', salary:'$95k–$125k' },
  { id:6, title:'Frontend Architect', company:'Nexus Labs', posted:'4 days ago', status:'Active', match:77, type:'Full-time', location:'Seattle, WA', salary:'$140k–$180k' },
];

export default function UserHome() {
  const [search, setSearch] = useState("");
  const [exp, setExp] = useState("All Levels");
  const [loc, setLoc] = useState("All Locations");
  const [salary, setSalary] = useState("All Salaries");
  const [applied, setApplied] = useState([]);

  // ✅ Proper Filtering Logic
  const filtered = JOBS.filter((j) => {
    const matchesSearch =
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase());

    const matchesExp =
      exp === "All Levels" ||
      (exp === "0–2 years" && j.match <= 90) ||
      (exp === "3–5 years" && j.match > 90);

    const matchesLoc =
      loc === "All Locations" ||
      j.location.toLowerCase().includes(loc.toLowerCase());

    const matchesSalary =
      salary === "All Salaries" ||
      j.salary === salary;

    return matchesSearch && matchesExp && matchesLoc && matchesSalary;
  });

  // ✅ Apply Button Logic
  const handleApply = (id) => {
    setApplied((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] p-4 md:p-6">
      
      {/* Navbar */}
      <AppNavbar currentPage="Home" />

      {/* Header */}
      <Header search={search} setSearch={setSearch} />

      {/* Filters */}
      <Filters
        exp={exp}
        setExp={setExp}
        loc={loc}
        setLoc={setLoc}
        salary={salary}
        setSalary={setSalary}
      />

      {/* Job List */}
      <JobList
        jobs={filtered}
        applied={applied}
        handleApply={handleApply}
      />
    </div>
  );
}