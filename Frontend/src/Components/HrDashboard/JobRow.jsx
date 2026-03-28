import React from "react";

export default function JobRow({ title, company, applicants }) {
  return (
    <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-slate-400">{company}</p>
      </div>
      <span className="text-sm">{applicants} Applicants</span>
    </div>
  );
}