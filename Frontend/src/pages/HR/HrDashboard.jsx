import React, { useState } from "react";
import StatCard from "../../Components/HrDashboard/StateCard.jsx";
import JobRow from "../../Components/HrDashboard/JobRow";
import JobForm from "../../Components/HrDashboard/JobForm";
import HRNavbar from "../../Components/HrDashboard/HRNavbar";


export default function Dashboard() {
  const [open, setOpen] = useState(false);


  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 pt-20">
     <HRNavbar/>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Hello, Sarah</h1>
          <p className="text-slate-400">
            Here's what's happening with your recruitment today.
          </p>
        </div>


        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-red-400 px-5 py-2 rounded-xl"
        >
          + Post New Job
        </button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Active Jobs" value="1" />
        <StatCard title="Total Applicants" value="0" />
        <StatCard title="Pending Reviews" value="84" />
      </div>


      <div className="bg-slate-900 p-6 rounded-2xl">
        <h2 className="text-lg font-semibold mb-4">Recent Job Postings</h2>


        <div className="flex flex-col gap-3">
          <JobRow
            title="Senior Frontend Engineer"
            company="Your Company"
            applicants={0}
          />
          <JobRow
            title="Senior Product Designer"
            company="TechFlow"
            applicants={48}
          />
        </div>
      </div>


      {open && <JobForm onClose={() => setOpen(false)} />}
    </div>
  );
}
