import { useState } from 'react';

const SKILLS = ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'Next.js', 'Docker', 'AWS'];

const EXPERIENCE = [
  { role:'Senior Frontend Developer', company:'TechCorp Inc.', period:'Jan 2022 – Present', desc:'Led frontend architecture for a SaaS platform serving 50K+ users. Migrated legacy codebase to React + TypeScript.' },
  { role:'Frontend Developer', company:'StartupXYZ', period:'Jun 2019 – Dec 2021', desc:'Built responsive UI components and integrated REST APIs. Improved page load speed by 40%.' },
];

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState(SKILLS);

  const [info, setInfo] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    dob: 'June 12, 1994',
    location: 'San Francisco, CA',
    phone: '+1 (415) 555-0192',
    status: 'Actively Looking',
    bio: 'Passionate Frontend Developer with 8+ years of experience in building high-performance web applications using React, TypeScript, and modern CSS frameworks. Looking for a leadership role in a fast-paced product company.',
  });

  const set = f => e => setInfo({ ...info, [f]: e.target.value });

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const TABS = [
    { key:'personal', label:'Personal Info' },
    { key:'experience', label:'Experience' },
    { key:'skills', label:'Skills' },
    { key:'resume', label:'Resume' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] font-[DM_Sans,sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1" style={{fontFamily:'Orbitron,sans-serif'}}>
            My Profile
          </h1>
          <p className="text-slate-400 text-sm">Manage your personal information and career settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Left sidebar ── */}
          <div className="flex flex-col gap-5">

            {/* Avatar card */}
            <div className="bg-linear-to-br from-[#111827] to-[#0f1923] border border-white/8 rounded-2xl p-6 text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-[#3b5fc0] to-[#7c4ddb] flex items-center justify-center text-4xl font-bold text-white border-2 border-[#4f8ef7]/30 mx-auto">
                  AJ
                </div>
                <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#4f8ef7] rounded-xl border-2 border-[#0a0f1a] flex items-center justify-center hover:bg-[#7eb8ff] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2a2 2 0 00-2 2H3a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H9a2 2 0 00-2-2z" stroke="#fff" strokeWidth="1.2"/>
                    <circle cx="7" cy="7.5" r="1.5" stroke="#fff" strokeWidth="1.2"/>
                  </svg>
                </button>
              </div>
              <h2 className="text-white font-bold text-lg">{info.name}</h2>
              <p className="text-[#4f8ef7] text-sm font-medium mb-5">Senior Frontend Developer</p>
              <div className="flex justify-center gap-8 text-center border-t border-white/6 pt-5">
                <div>
                  <p className="text-white font-bold text-xl" style={{fontFamily:'Orbitron,sans-serif'}}>24</p>
                  <p className="text-slate-500 text-xs mt-0.5">Applications</p>
                </div>
                <div className="w-px bg-white/8"/>
                <div>
                  <p className="text-white font-bold text-xl" style={{fontFamily:'Orbitron,sans-serif'}}>156</p>
                  <p className="text-slate-500 text-xs mt-0.5">Profile Views</p>
                </div>
              </div>
            </div>

            {/* Verification */}
            <div className="bg-linear-to-br from-[#111827] to-[#0f1923] border border-white/8 rounded-2xl p-5">
              <h3 className="text-white font-semibold text-sm mb-4">Verification Status</h3>
              <div className="flex items-center gap-3 p-3.5 bg-emerald-500/8 border border-emerald-500/20 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink:0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5 6.5-7" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold text-sm">Identity Verified</p>
                  <p className="text-slate-500 text-xs">Your account is trusted</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 p-3.5 bg-amber-400/8 border border-amber-400/15 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-amber-400/15 flex items-center justify-center flex-shrink:0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 6v4M8 11.5v.5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/><path d="M7.1 2.5L2 13h12L9 2.5a1.1 1.1 0 00-1.9 0z" stroke="#f59e0b" strokeWidth="1.4" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold text-sm">Skills Pending</p>
                  <p className="text-slate-500 text-xs">Add a test result</p>
                </div>
              </div>
            </div>

            {/* Profile completion */}
            <div className="bg-linear-to-br from-[#111827] to-[#0f1923] border border-white/8 rounded-2xl p-5">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-white font-semibold">Profile Strength</span>
                <span className="text-[#4f8ef7] font-bold">78%</span>
              </div>
              <div className="h-2 bg-white/8 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-linear-to-r from-[#4f8ef7] to-[#7c4ddb] rounded-full" style={{width:'78%'}}/>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label:'Add portfolio link', done:false },
                  { label:'Upload profile photo', done:false },
                  { label:'Complete bio', done:true },
                  { label:'Add skills', done:true },
                ].map(({ label, done }) => (
                  <div key={label} className="flex items-center gap-2 text-xs">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink:0 ${done ? 'bg-emerald-500/20' : 'border border-white/15'}`}>
                      {done && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/></svg>}
                    </div>
                    <span className={done ? 'text-slate-500 line-through' : 'text-slate-300'}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right content ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Tabs */}
            <div className="flex gap-1 bg-[#111827] border border-white/8 rounded-2xl p-1.5">
              {TABS.map(({ key, label }) => (
                <button key={key} onClick={() => setActiveTab(key)}
                  className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all
                    ${activeTab === key
                      ? 'bg-linear-to-r from-[#3b5fc0] to-[#7c4ddb] text-white shadow-lg shadow-[#4f8ef7]/20'
                      : 'text-slate-400 hover:text-white'}`}>
                  {label}
                </button>
              ))}
            </div>

            {/* ── Personal Info Tab ── */}
            {activeTab === 'personal' && (
              <div className="bg-linear-to-br from-[#111827] to-[#0f1923] border border-white/8 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-base">Personal Information</h3>
                  <button onClick={() => setEditing(!editing)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border transition-all
                      ${editing
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                        : 'bg-[#4f8ef7]/10 border-[#4f8ef7]/25 text-[#4f8ef7] hover:bg-[#4f8ef7]/15'}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      {editing
                        ? <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        : <path d="M9.5 2.5l2 2-6 6H3.5v-2l6-6z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>}
                    </svg>
                    {editing ? 'Save Changes' : 'Edit'}
                  </button>
                </div>

                <div className="border-t border-white/6 pt-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {[
                      { label:'FULL NAME', field:'name', icon:<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="4" r="2.5" stroke="#4f8ef7" strokeWidth="1.2"/><path d="M1 12c0-3 2.5-4.5 5.5-4.5S12 9 12 12" stroke="#4f8ef7" strokeWidth="1.2" strokeLinecap="round"/></svg> },
                      { label:'EMAIL ADDRESS', field:'email', icon:<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="3" width="11" height="8" rx="1.5" stroke="#4f8ef7" strokeWidth="1.2"/><path d="M1 5l5.5 3.5L12 5" stroke="#4f8ef7" strokeWidth="1.2"/></svg> },
                      { label:'DATE OF BIRTH', field:'dob', icon:<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="2" width="11" height="10" rx="1.5" stroke="#4f8ef7" strokeWidth="1.2"/><path d="M4 1v2M9 1v2M1 5h11" stroke="#4f8ef7" strokeWidth="1.2" strokeLinecap="round"/></svg> },
                      { label:'LOCATION', field:'location', icon:<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5C4.57 1.5 3 3.07 3 5c0 3.25 3.5 6.5 3.5 6.5S10 8.25 10 5c0-1.93-1.57-3.5-3.5-3.5z" stroke="#4f8ef7" strokeWidth="1.2"/><circle cx="6.5" cy="5" r="1.2" stroke="#4f8ef7" strokeWidth="1.1"/></svg> },
                    ].map(({ label, field, icon }) => (
                      <div key={field}>
                        <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                          {icon}{label}
                        </p>
                        {editing
                          ? <input value={info[field]} onChange={set(field)}
                              className="w-full bg-[#0d1421] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#4f8ef7]/50 transition-all"/>
                          : <p className="text-slate-200 text-sm font-medium">{info[field]}</p>}
                      </div>
                    ))}
                  </div>

                  {/* Employment status */}
                  <div className="mb-5">
                    <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="2" y="4" width="9" height="7" rx="1.5" stroke="#4f8ef7" strokeWidth="1.2"/><path d="M4.5 4V3a2 2 0 014 0v1" stroke="#4f8ef7" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      EMPLOYMENT STATUS
                    </p>
                    {editing
                      ? <select value={info.status} onChange={set('status')}
                          className="bg-[#0d1421] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#4f8ef7]/50 transition-all">
                          {['Actively Looking', 'Open to Offers', 'Not Looking'].map(o => <option key={o}>{o}</option>)}
                        </select>
                      : <span className="inline-block text-emerald-400 bg-emerald-400/12 border border-emerald-400/25 text-xs font-semibold px-3 py-1.5 rounded-full">
                          {info.status}
                        </span>}
                  </div>

                  {/* Bio */}
                  <div className="border-t border-white/6 pt-5">
                    <p className="text-white font-semibold text-sm mb-3">BIO</p>
                    {editing
                      ? <textarea value={info.bio} onChange={set('bio')} rows={4}
                          className="w-full bg-[#0d1421] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4f8ef7]/50 resize-none transition-all"/>
                      : <p className="text-slate-400 text-sm leading-relaxed">{info.bio}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* ── Experience Tab ── */}
            {activeTab === 'experience' && (
              <div className="bg-linear-to-br from-[#111827] to-[#0f1923] border border-white/8 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-base">Work Experience</h3>
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium bg-[#4f8ef7]/10 border border-[#4f8ef7]/25 text-[#4f8ef7] hover:bg-[#4f8ef7]/20 transition-all">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    Add Experience
                  </button>
                </div>
                <div className="flex flex-col gap-5">
                  {EXPERIENCE.map(({ role, company, period, desc }, i) => (
                    <div key={i} className="flex gap-4 pb-5 border-b border-white/6 last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center flex-shrink:0 mt-0.5">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="2" y="5" width="14" height="11" rx="2" stroke="#4f8ef7" strokeWidth="1.5"/>
                          <path d="M6 5V4a3 3 0 016 0v1" stroke="#4f8ef7" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm">{role}</h4>
                        <p className="text-[#4f8ef7] text-xs font-medium mt-0.5">{company}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{period}</p>
                        <p className="text-slate-400 text-sm mt-2 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Skills Tab ── */}
            {activeTab === 'skills' && (
              <div className="bg-linear-to-br from-[#111827] to-[#0f1923] border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-base mb-5">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {skills.map(skill => (
                    <span key={skill}
                      className="flex items-center gap-2 text-sm text-[#4f8ef7] bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 px-3.5 py-1.5 rounded-full font-medium hover:border-[#4f8ef7]/40 transition-colors group">
                      {skill}
                      <button onClick={() => setSkills(skills.filter(s => s !== skill))}
                        className="text-slate-500 hover:text-red-400 transition-colors text-xs leading-none">×</button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <input value={newSkill} onChange={e => setNewSkill(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && addSkill()}
                    placeholder="Add a skill..."
                    className="flex-1 bg-[#0d1421] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#4f8ef7]/50 transition-all"/>
                  <button onClick={addSkill}
                    className="px-5 py-2.5 bg-linear-to-r from-[#3b5fc0] to-[#7c4ddb] text-white rounded-xl text-sm font-semibold hover:brightness-110 transition-all">
                    Add
                  </button>
                </div>
              </div>
            )}

            {/* ── Resume Tab ── */}
            {activeTab === 'resume' && (
              <div className="bg-linear-to-br from-[#111827] to-[#0f1923] border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-base mb-5">Resume & Documents</h3>
                {/* Current resume */}
                <div className="flex items-center gap-4 p-4 bg-[#0d1421] border border-[#4f8ef7]/15 rounded-xl mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center flex-shrink:0">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M6 2h7l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="#4f8ef7" strokeWidth="1.5"/>
                      <path d="M13 2v5h5M8 12h6M8 16h4" stroke="#4f8ef7" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">Alex_Johnson_Resume.pdf</p>
                    <p className="text-slate-500 text-xs mt-0.5">Uploaded Feb 10, 2026 • 342 KB</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 text-[#4f8ef7] hover:bg-[#4f8ef7]/20 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 10v1a1 1 0 001 1h8a1 1 0 001-1v-1M7 2v6M4.5 6L7 8.5 9.5 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 4h10M5 4V3a1 1 0 011-1h2a1 1 0 011 1v1M11 4l-1 7H4L3 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>

                {/* Upload new */}
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-2xl p-10 text-center cursor-pointer hover:border-[#4f8ef7]/35 hover:bg-[#4f8ef7]/3 transition-all group">
                  <svg className="w-10 h-10 text-slate-500 group-hover:text-[#4f8ef7] transition-colors mb-3" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5v20M12 13l8-8 8 8M8 30v2a3 3 0 003 3h18a3 3 0 003-3v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-white font-medium text-sm mb-1">Upload new resume</p>
                  <p className="text-slate-500 text-xs">PDF, DOC, DOCX up to 10MB</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx"/>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}