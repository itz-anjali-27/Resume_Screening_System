import React from "react";

export default function StatCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 flex flex-col gap-2 shadow-lg">
      <span className="text-slate-400 text-sm">{title}</span>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
}