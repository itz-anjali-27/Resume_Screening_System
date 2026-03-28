import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const NAV = [
  { key: 'home', label: 'Home', icon: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M1.5 6L7.5 1.5L13.5 6V13a1 1 0 01-1 1H2.5a1 1 0 01-1-1V6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M5.5 14V9h4v5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  )},
  { key: 'about', label: 'About', icon: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M7.5 7v4M7.5 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { key: 'contact', label: 'Contact', icon: (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M1.5 3.5h12v8a1 1 0 01-1 1h-10a1 1 0 01-1-1v-8z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1.5 3.5l6 4.5 6-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )},
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // active page detect from URL
  const currentPage = location.pathname === "/" 
    ? "home" 
    : location.pathname.replace("/", "");

  return (
    <nav className="sticky inset-x-0 top-0 left-0 w-full z-50  bg-[#0d1421]/95 backdrop-blur-md border-b border-[#4f8ef7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">

          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-2.5 group mr-auto">
            <div className="w-9 h-9 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/25 flex items-center justify-center group-hover:border-[#4f8ef7]/60 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#4f8ef7" strokeWidth="1.5"/>
                <path d="M6 10L10 6L14 10L10 14Z" fill="#4f8ef7"/>
                <circle cx="10" cy="10" r="2" fill="#fff"/>
              </svg>
            </div>
            <span className="hidden sm:block text-xs font-bold tracking-widest text-slate-400 group-hover:text-white transition-colors">
              AutomatedAI
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV.map(({ key, label, icon }) => (
              <li key={key}>
                <button
                  onClick={() => navigate(key === "home" ? "/" : `/${key}`)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-t-lg
                    ${currentPage === key
                      ? 'text-white border-b-2 border-[#4f8ef7] pb-1.5 rounded-b-none'
                      : 'text-slate-400 hover:text-white rounded-lg hover:bg-white/5'}`}
                >
                  <span className={currentPage === key ? 'text-[#4f8ef7]' : ''}>
                    {icon}
                  </span>
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Login/Register */}
          <div className="relative hidden md:block ml-4">
            <div className="h-6 w-px bg-white/10 mr-4 inline-block align-middle"/>
            <button onClick={() => setLoginOpen(!loginOpen)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-slate-400 hover:text-white border border-[#4f8ef7]/25 rounded-lg hover:border-[#4f8ef7]/60 transition-all">
              Register
            </button>

            {loginOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 bg-[#111827] border border-[#4f8ef7]/15 rounded-xl shadow-2xl overflow-hidden">
                <button 
  onClick={() => { 
    navigate('/register', { state: { role: 'applicant' } }); 
    setLoginOpen(false); 
  }}
  className="block w-full text-left px-5 py-3 text-sm text-slate-300 hover:bg-[#4f8ef7]/10 hover:text-white"
>
  Applicant
</button>

<button 
  onClick={() => { 
    navigate('/register', { state: { role: 'recruiter' } }); 
    setLoginOpen(false); 
  }}
  className="block w-full text-left px-5 py-3 text-sm text-slate-300 hover:bg-[#4f8ef7]/10 hover:text-white"
>
  Recruiter
</button>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-white/5 ml-auto">
            <span className={`h-0.5 w-5 bg-slate-400 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`h-0.5 w-5 bg-slate-400 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`h-0.5 w-5 bg-slate-400 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0d1421] px-4 py-3 flex flex-col gap-1">
          {NAV.map(({ key, label, icon }) => (
            <button key={key}
              onClick={() => {
                navigate(key === "home" ? "/" : `/${key}`);
                setMenuOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm
                ${currentPage === key ? 'bg-[#4f8ef7]/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
              <span className={currentPage === key ? 'text-[#4f8ef7]' : ''}>{icon}</span>
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}