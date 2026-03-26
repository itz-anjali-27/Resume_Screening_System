import React from 'react';

export default function StatCard({ value, label }) {
  return (
    <div className="bg-linear-to-br from-[#111827] to-[#0f1923] border border-[#4f8ef7]/10 rounded-2xl p-6">
      <p className="text-slate-400 text-sm mb-2">{label}</p>
      <p className="text-white text-3xl font-bold">{value}</p>
    </div>
  );
}