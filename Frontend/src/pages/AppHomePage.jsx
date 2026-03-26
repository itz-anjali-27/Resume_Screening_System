import { useState } from 'react';

const STATS = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="15" rx="2" stroke="#4f8ef7" strokeWidth="1.7"/><path d="M8 6V4a4 4 0 018 0v2" stroke="#4f8ef7" strokeWidth="1.7" strokeLinecap="round"/><path d="M8 12h8M8 16h5" stroke="#4f8ef7" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    value: '1,200+', label: 'Active Jobs', pct: '+12%',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="4" stroke="#4f8ef7" strokeWidth="1.7"/><circle cx="16" cy="8" r="4" stroke="#4f8ef7" strokeWidth="1.7"/><path d="M2 20c0-3.5 2.7-6 6-6M16 14c3.3 0 6 2.5 6 6" stroke="#4f8ef7" strokeWidth="1.7" strokeLinecap="round"/></svg>,
    value: '350+', label: 'Companies Hiring', pct: '+12%',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#4f8ef7" strokeWidth="1.7"/><path d="M12 7v5l3 3" stroke="#4f8ef7" strokeWidth="1.7" strokeLinecap="round"/></svg>,
    value: '24', label: 'Your Applications', pct: '+12%',
  },
];

export default function AppHomePage({ setPage }) {
  const [jobDesc, setJobDesc] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFile = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] font-[DM_Sans,sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-1" style={{fontFamily:'Inter,sans-serif'}}>
            <span className="text-[#4f8ef7]">Hello, Alex</span>
          </h1>
          <p className="text-slate-400 text-base">Let's find your next dream job together.</p>
        </div>

        {/* Hero Card */}
        <div className="relative overflow-hidden bg-gradient-to from-[#111827] to-[#0f1923] border border-[#4f8ef7]/15 rounded-2xl p-8 sm:p-12 text-center mb-6">
          {/* glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#3b5fc0]/15 rounded-full blur-3xl pointer-events-none"/>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#7c4ddb]/10 rounded-full blur-3xl pointer-events-none"/>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{fontFamily:'Inter,sans-serif'}}>
              Automated Resume Screening System
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Upload your resume and let our AI-powered screening system analyze your qualifications,
              match you with the best opportunities, and provide personalized recommendations to boost your career.
            </p>

            {/* Upload button */}
            <label className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient from-[#3b5fc0] to-[#7c4ddb] text-white rounded-xl font-semibold text-sm cursor-pointer hover:brightness-110 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#4f8ef7]/25 mb-6">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2v9m0 0L6 8m3 3l3-3M3 13v1a2 2 0 002 2h8a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Upload Resume
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFile}/>
            </label>
            {fileName && <p className="text-emerald-400 text-xs mb-4">✓ {fileName} ready</p>}

            {/* Job description textarea */}
            <textarea
              value={jobDesc}
              onChange={e => setJobDesc(e.target.value)}
              placeholder="Paste job description..."
              rows={4}
              className="w-full max-w-2xl mx-auto block bg-[#0d1421]/80 border border-white/10 rounded-xl px-5 py-4 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#4f8ef7]/50 focus:ring-1 focus:ring-[#4f8ef7]/20 resize-none transition-all"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 tabular-nums">
          {STATS.map(({ icon, value, label, pct }) => (
            <div key={label}
              className="group bg-gradient-to from-[#111827] to-[#0f1923] border border-[#4f8ef7]/12 rounded-2xl p-6 hover:border-[#4f8ef7]/35 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 cursor-default">
              <div className="flex items-start justify-between mb-5 ">
                <div className="w-12 h-12 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center group-hover:border-[#4f8ef7]/40 transition-colors tabular-nums">
                  {icon}
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 8l2.5-3.5L7 6.5 9.5 3" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  {pct}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-1 tabular-nums">{label}</p>
              <p className="text-white font-bold text-3xl mb-3 tabular-nums" style={{fontFamily:'Orbitron,sans-serif'}}>{value}</p>
              <button className="text-[#4f8ef7] text-xs hover:text-[#7eb8ff] transition-colors">
                Click to view details →
              </button>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-gradient-to from-[#111827] to-[#0f1923] border border-[#4f8ef7]/12 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l4 4 8-8" stroke="#4f8ef7" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Quick Actions
            </h3>
            <div className="flex flex-col gap-3">
              <button onClick={() => setPage('browse')}
                className="flex items-center justify-between px-4 py-3 bg-[#4f8ef7]/8 border border-[#4f8ef7]/15 rounded-xl text-sm text-slate-300 hover:border-[#4f8ef7]/40 hover:text-white transition-all">
                Browse Jobs <span className="text-[#4f8ef7]">→</span>
              </button>
              <button onClick={() => setPage('tracking')}
                className="flex items-center justify-between px-4 py-3 bg-[#4f8ef7]/8 border border-[#4f8ef7]/15 rounded-xl text-sm text-slate-300 hover:border-[#4f8ef7]/40 hover:text-white transition-all">
                Track Applications <span className="text-[#4f8ef7]">→</span>
              </button>
              <button onClick={() => setPage('profile')}
                className="flex items-center justify-between px-4 py-3 bg-[#4f8ef7]/8 border border-[#4f8ef7]/15 rounded-xl text-sm text-slate-300 hover:border-[#4f8ef7]/40 hover:text-white transition-all">
                Update Profile <span className="text-[#4f8ef7]">→</span>
              </button>
            </div>
          </div>
          <div className="bg-gradient-to from-[#111827] to-[#0f1923] border border-[#4f8ef7]/12 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l2 5h5l-4 3 1.5 5L9 12l-4.5 3L6 10 2 7h5L9 2z" stroke="#f59e0b" strokeWidth="1.4" fill="none"/></svg>
              AI Match Score
            </h3>
            <div className="flex items-center gap-4 mb-3">
              <div className="relative w-20 h-20 shrink-0">
                <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
                  <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(79,142,247,0.12)" strokeWidth="8"/>
                  <circle cx="40" cy="40" r="32" fill="none" stroke="#4f8ef7" strokeWidth="8"
                    strokeDasharray={`${2*Math.PI*32*0.92} ${2*Math.PI*32}`} strokeLinecap="round"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm" style={{fontFamily:'Inter,sans-serif'}}>92%</span>
                </div>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Excellent Profile</p>
                <p className="text-slate-400 text-xs leading-relaxed">Your profile matches 92% of Senior Frontend roles. Add a portfolio link to reach 98%.</p>
              </div>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to from-[#4f8ef7] to-[#7c4ddb] rounded-full" style={{width:'92%'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}