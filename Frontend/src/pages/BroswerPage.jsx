import { useState } from 'react';

const JOBS = [
  { id:1, title:'Fullstack Engineer (React)', company:'DesignCo', posted:'5 days ago', status:'Active', match:96, type:'Full-time', location:'Remote', salary:'$120k–$160k' },
  { id:2, title:'Senior Product Designer', company:'TechFlow', posted:'2 days ago', status:'Active', match:94, type:'Full-time', location:'San Francisco, CA', salary:'$100k–$140k' },
  { id:3, title:'UX Engineer', company:'DesignCo', posted:'1 day ago', status:'Active', match:89, type:'Contract', location:'New York, NY', salary:'$90k–$120k' },
  { id:4, title:'Lead Developer', company:'CloudBase', posted:'3 days ago', status:'Active', match:85, type:'Full-time', location:'Austin, TX', salary:'$130k–$170k' },
  { id:5, title:'React Native Developer', company:'MobileSoft', posted:'7 days ago', status:'Active', match:80, type:'Remote', location:'Remote', salary:'$95k–$125k' },
  { id:6, title:'Frontend Architect', company:'Nexus Labs', posted:'4 days ago', status:'Active', match:77, type:'Full-time', location:'Seattle, WA', salary:'$140k–$180k' },
];

const MATCH_COLOR = (m) => m >= 90 ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
  : m >= 80 ? 'text-[#4f8ef7] bg-[#4f8ef7]/10 border-[#4f8ef7]/20'
  : 'text-amber-400 bg-amber-400/10 border-amber-400/20';

export default function BrowsePage() {
  const [search, setSearch] = useState('');
  const [exp, setExp] = useState('');
  const [loc, setLoc] = useState('');
  const [salary, setSalary] = useState('');
  const [applied, setApplied] = useState([]);

  const filtered = JOBS.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    j.company.toLowerCase().includes(search.toLowerCase())
  );

  const handleApply = (id) => setApplied(prev => prev.includes(id) ? prev : [...prev, id]);

  return (
    <div className="min-h-screen bg-[#0a0f1a] font-[DM_Sans,sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header + Search */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1" style={{fontFamily:'Inter,sans-serif'}}>
              Find Your Next Role
            </h1>
            <p className="text-slate-400 text-sm">Discover opportunities that match your expertise.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <input
                value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search jobs, companies, roles..."
                className="w-full bg-[#111827] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#4f8ef7]/50 focus:ring-1 focus:ring-[#4f8ef7]/20 transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-[#3b5fc0] to-[#7c4ddb] text-white rounded-xl text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-[#4f8ef7]/20 flex-shrink:0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4"/><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              Search
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#111827] border border-white/8 rounded-2xl p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold text-sm flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M4 8h8M6 12h4" stroke="#4f8ef7" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Filter Jobs
            </h2>
            <button onClick={() => { setExp(''); setLoc(''); setSalary(''); }}
              className="text-[#4f8ef7] text-xs hover:text-[#7eb8ff] transition-colors">
              Clear All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label:'Years of Experience', val:exp, set:setExp, opts:['All Levels','0–2 years','3–5 years','6–10 years','10+ years'] },
              { label:'Location', val:loc, set:setLoc, opts:['All Locations','Remote','San Francisco, CA','New York, NY','Austin, TX','Seattle, WA'] },
              { label:'Salary Range', val:salary, set:setSalary, opts:['All Salaries','$60k–$90k','$90k–$120k','$120k–$160k','$160k+'] },
            ].map(({ label, val, set, opts }) => (
              <div key={label}>
                <label className="block text-xs text-slate-500 mb-1.5 font-medium">{label}</label>
                <div className="relative">
                  <select value={val} onChange={e => set(e.target.value)}
                    className="w-full appearance-none bg-[#0d1421] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-[#4f8ef7]/50 cursor-pointer pr-9 transition-all">
                    {opts.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job listings */}
        <div className="bg-[#111827] border border-white/8 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
            <div>
              <h2 className="text-white font-semibold text-base">Recent Job Postings</h2>
              <p className="text-slate-500 text-xs mt-0.5">Sorted by skill match score • {filtered.length} results</p>
            </div>
            <button className="text-[#4f8ef7] text-sm hover:text-[#7eb8ff] transition-colors font-medium">View All</button>
          </div>

          <div className="divide-y divide-white/5">
            {filtered.map((job) => (
              <div key={job.id} className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-white/3 transition-colors group">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center flex-shrink:0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="6" width="14" height="11" rx="2" stroke="#4f8ef7" strokeWidth="1.5"/>
                    <path d="M7 6V5a3 3 0 016 0v1" stroke="#4f8ef7" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">{job.title}</span>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${MATCH_COLOR(job.match)}`}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2 2 5-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                      {job.match}% Match
                    </span>
                  </div>
                  <p className="text-[#4f8ef7] text-xs font-medium mb-1.5">{job.company}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <span>• {job.posted}</span>
                    <span>• {job.type}</span>
                    <span>• {job.location}</span>
                    <span className="text-emerald-400/80">• {job.salary}</span>
                    <span className="text-emerald-400">• {job.status}</span>
                  </div>
                </div>

                {/* Apply button */}
                <button
                  onClick={() => handleApply(job.id)}
                  className={`flex-shrink:0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5
                    ${applied.includes(job.id)
                      ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 cursor-default'
                      : 'bg-linear-to-r from-[#3b5fc0] to-[#7c4ddb] text-white hover:brightness-110 shadow-md shadow-[#4f8ef7]/20'
                    }`}
                >
                  {applied.includes(job.id) ? '✓ Applied' : 'Apply Now'}
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <svg className="w-12 h-12 mx-auto mb-3 opacity-30" viewBox="0 0 48 48" fill="none">
                <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="2"/>
                <path d="M34 34l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p className="font-medium">No jobs found</p>
              <p className="text-xs mt-1">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}