import { useState } from 'react';

const STEPS = ['APPLIED', 'SCREENING', 'INTERVIEW', 'OFFER'];

const APPLICATIONS = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'TechFlow',
    appliedDate: 'Jan 24, 2026',
    status: 'INTERVIEW SCHEDULED',
    statusColor: 'text-[#7c4ddb] bg-[#7c4ddb]/10 border-[#7c4ddb]/25',
    progress: 3,
  },
  {
    id: 2,
    title: 'UX Engineer',
    company: 'DesignCo',
    appliedDate: 'Feb 1, 2026',
    status: 'SHORTLISTED',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
    progress: 2,
  },
  {
    id: 3,
    title: 'Lead Developer',
    company: 'CloudBase',
    appliedDate: 'Feb 8, 2026',
    status: 'PENDING',
    statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/25',
    progress: 1,
  },
  {
    id: 4,
    title: 'Frontend Architect',
    company: 'Nexus Labs',
    appliedDate: 'Feb 12, 2026',
    status: 'OFFER RECEIVED',
    statusColor: 'text-emerald-300 bg-emerald-300/10 border-emerald-300/25',
    progress: 4,
  },
];

function ProgressTracker({ progress }) {
  return (
    <div className="flex items-center gap-0 mt-4 pt-4 border-t border-white/5">
      {STEPS.map((step, idx) => {
        const done = idx < progress;
        const active = idx === progress - 1;
        return (
          <div key={step} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all
                ${done
                  ? 'bg-[#4f8ef7] border-[#4f8ef7]'
                  : 'bg-[#0d1421] border-white/15'}`}>
                {done
                  ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : <div className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-[#4f8ef7]/40' : 'bg-white/15'}`}/>}
              </div>
              <span className={`text-[9px] font-bold tracking-wider mt-1.5 ${done ? 'text-[#4f8ef7]' : 'text-slate-600'}`}>
                {step}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-1 mb-4 rounded-full transition-all ${done && idx < progress - 1 ? 'bg-[#4f8ef7]' : 'bg-white/8'}`}/>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function TrackingPage() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Interview', 'Shortlisted', 'Pending', 'Offer'];

  const filtered = filter === 'All'
    ? APPLICATIONS
    : APPLICATIONS.filter(a => a.status.toUpperCase().includes(filter.toUpperCase()));

  return (
    <div className="min-h-screen bg-[#0a0f1a] font-[DM_Sans,sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1" style={{fontFamily:'Orbitron,sans-serif'}}>
            Track Applications
          </h1>
          <p className="text-slate-400 text-sm">Keep an eye on your progress with current opportunities.</p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label:'Total Applied', value:'24', color:'text-[#4f8ef7]' },
            { label:'In Progress', value:'8', color:'text-amber-400' },
            { label:'Interviews', value:'5', color:'text-[#7c4ddb]' },
            { label:'Offers', value:'2', color:'text-emerald-400' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-[#111827] border border-white/8 rounded-2xl p-4 text-center hover:border-[#4f8ef7]/20 transition-colors">
              <p className={`font-bold text-2xl mb-1 ${color}`} style={{fontFamily:'Orbitron,sans-serif'}}>{value}</p>
              <p className="text-slate-500 text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-6">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all
                ${filter === f
                  ? 'bg-[#4f8ef7]/15 border border-[#4f8ef7]/40 text-[#4f8ef7]'
                  : 'bg-white/5 border border-white/8 text-slate-400 hover:text-white hover:border-white/20'}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Application cards */}
        <div className="flex flex-col gap-5">
          {filtered.map((app) => (
            <div key={app.id}
              className="bg-linear-to-br from-[#111827] to-[#0f1923] border border-white/8 rounded-2xl p-5 sm:p-6 hover:border-[#4f8ef7]/20 transition-all">
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center flex-shrin:-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 9l4 4 8-8" stroke="#4f8ef7" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-white font-bold text-base">{app.title}</h3>
                    <span className={`self-start sm:self-auto inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border ${app.statusColor}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.3"/><path d="M6 4v2l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      {app.status}
                    </span>
                  </div>
                  <p className="text-[#4f8ef7] text-sm font-medium mt-0.5">{app.company}</p>
                  <div className="flex items-center gap-1.5 mt-1 text-slate-500 text-xs">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M4 1v2M8 1v2M1 5h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    Applied {app.appliedDate}
                    <button className="ml-auto text-[#4f8ef7] text-xs hover:text-[#7eb8ff] flex items-center gap-1 transition-colors">
                      View Details
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 8l4-4M4 4h4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress tracker */}
              <ProgressTracker progress={app.progress} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-4xl mb-3">📭</p>
            <p className="font-medium">No applications match this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}