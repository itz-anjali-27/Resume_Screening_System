import React from 'react';

const features = [
  { emoji: '🧠', title: 'AI Screening', desc: 'Smart resume parsing.' },
  { emoji: '⚡', title: 'Fast Matching', desc: 'Quick job matching.' },
  { emoji: '📊', title: 'Insights', desc: 'Skill gap analysis.' },
  { emoji: '🔒', title: 'Privacy First', desc: 'Secure data.' },
];

export default function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {features.map((f) => (
        <div key={f.title} className="bg-[#111827]/60 rounded-2xl p-6">
          <div className="text-3xl mb-4">{f.emoji}</div>
          <h3 className="text-white font-semibold mb-2">{f.title}</h3>
          <p className="text-slate-500 text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}