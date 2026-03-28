import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  {
    key: "userhome",
    label: "Home",
    path: "/userHome",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 6.5L8 2l6 4.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1V6.5z" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 15V9h4v6" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    key: "application",
    label: "Application",
    path: "/apply",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    key: "profile",
    label: "Profile",
    path: "/profile",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

export default function AppNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed left-0 w-full top-0 z-50 bg-[#0d1421]/95 backdrop-blur-md border-b border-[#4f8ef7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">

          {/* Logo */}
          <div className="flex items-center gap-3 mr-auto">
            <div className="w-9 h-9 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/30 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#4f8ef7" strokeWidth="1.5"/>
                <path d="M6 10L10 6L14 10L10 14Z" fill="#4f8ef7"/>
                <circle cx="10" cy="10" r="2" fill="#fff"/>
              </svg>
            </div>
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase hidden sm:block">
              AutomatedAI
            </span>
            <span className="text-[10px] font-bold text-slate-300 bg-slate-700 px-2 py-0.5 rounded-full uppercase">
              Applicant
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ key, label, icon, path }) => {
              const isActive = location.pathname === path;

              return (
                <li key={key}>
                  <button
                    onClick={() => navigate(path)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                      ${isActive
                        ? "text-white border-b-2 border-[#4f8ef7] rounded-b-none"
                        : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                  >
                    <span className={isActive ? "text-[#4f8ef7]" : ""}>
                      {icon}
                    </span>
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Sign out */}
      {/* Sign out */}
      <button
        onClick={() => navigate("/signout")}
        className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white border border-red-500/20 hover:border-red-500/50 rounded-lg"
       >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
             <path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3M10 11l4-4-4-4M14 8H6" stroke="currentColor" strokeWidth="1.4"/>
          </svg>
          Sign out
      </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`h-0.5 w-5 bg-slate-400 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-5 bg-slate-400 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-slate-400 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1421] px-4 py-3 flex flex-col gap-2">
          {NAV_LINKS.map(({ key, label, icon, path }) => {
            const isActive = location.pathname === path;

            return (
              <button
                key={key}
                onClick={() => {
                  navigate(path);
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm
                  ${isActive
                    ? "bg-[#4f8ef7]/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
              >
                {icon}
                {label}
              </button>
            );
          })}

          <button
            onClick={() => navigate("/")}
            className="text-red-400 px-4 py-3 text-left"
          >
            Sign out
          </button>
        </div>
      )}
    </nav>
  );
}