export default function HomePage({ setPage }) {
  const stats = [
    {
      icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="4" y="7" width="18" height="15" rx="2.5" stroke="#4f8ef7" strokeWidth="1.8"/><path d="M9 7V5a4 4 0 018 0v2" stroke="#4f8ef7" strokeWidth="1.8" strokeLinecap="round"/><path d="M9 14h8M9 18h5" stroke="#4f8ef7" strokeWidth="1.5" strokeLinecap="round"/></svg>,
      value: '1,200+', label: 'Active Jobs',
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="9" cy="9" r="4" stroke="#4f8ef7" strokeWidth="1.8"/><circle cx="17" cy="9" r="4" stroke="#4f8ef7" strokeWidth="1.8"/><path d="M2 22c0-4 3-6 7-6M17 16c4 0 7 2 7 6" stroke="#4f8ef7" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      value: '350+', label: 'Companies Hiring',
    },
    {
      icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 20L9 13l4 5 4-7 5 8" stroke="#4f8ef7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      value: '5,000+', label: 'Success Stories',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">

        {/* Page heading */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{fontFamily:'Orbitron,sans-serif'}}>
            <span className="text-[#4f8ef7]">Welcome to ScreenAI</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">Your intelligent recruitment and career platform</p>
        </div>

        {/* Hero card */}
        <div className="relative overflow-hidden bg-linear-to-br from-[#111827] to-[#0d1421] border border-[#4f8ef7]/15 rounded-2xl p-10 sm:p-14 lg:p-20 text-center mb-8">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3b5fc0]/10 rounded-full blur-3xl pointer-events-none"/>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#7c4ddb]/8 rounded-full blur-3xl pointer-events-none"/>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5" style={{fontFamily:'Inter,sans-serif'}}>
              Automated Resume Screening System
            </h2>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Upload your resume and let our AI-powered screening system analyze your qualifications,
              match you with the best opportunities, and provide personalized recommendations to boost your career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => setPage('login')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-transparent border-2 border-[#4f8ef7]/50 text-white rounded-xl font-semibold text-sm hover:border-[#4f8ef7] hover:bg-[#4f8ef7]/10 transition-all hover:-translate-y-0.5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2v9m0 0L6 8m3 3l3-3M3 13v1a2 2 0 002 2h8a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Upload Resume
              </button>
              <button onClick={() => setPage('register')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-linear-to-r from-[#3b5fc0] to-[#7c4ddb] text-white rounded-xl font-semibold text-sm hover:brightness-110 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#4f8ef7]/25">
                Get Started
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {stats.map(({ icon, value, label }) => (
            <div key={label}
              className="group bg-linear-to-br from-[#111827] to-[#0f1923] border border-[#4f8ef7]/10 rounded-2xl p-6 hover:border-[#4f8ef7]/35 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 cursor-default">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center">{icon}</div>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 8l2.5-3.5L7 6.5 9.5 3" stroke="#34d399" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  Growing
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-1.5 tabular-nums">{label}</p>
              <p className="text-white font-bold text-3xl mb-3 tabular-nums" style={{fontFamily:'Inter,sans-serif'}}>{value}</p>
              <button className="text-[#4f8ef7] text-xs hover:text-[#7eb8ff] transition-colors">Click to view details →</button>
            </div>
          ))}
        </div>

        {/* Features strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { emoji:'🧠', title:'AI Screening', desc:'Smart resume parsing and skill extraction in seconds.' },
            { emoji:'⚡', title:'Fast Matching', desc:'Get matched to top roles based on your real skills.' },
            { emoji:'📊', title:'Insights', desc:'Understand your market position and skill gaps.' },
            { emoji:'🔒', title:'Privacy First', desc:'Your data is encrypted. Share only what you choose.' },
          ].map(({ emoji, title, desc }) => (
            <div key={title} className="bg-[#111827]/60 border border-white/5 rounded-2xl p-6 hover:border-[#4f8ef7]/20 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">{emoji}</div>
              <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}