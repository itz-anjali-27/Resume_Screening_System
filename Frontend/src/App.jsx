import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Registation from './pages/registation';

export default function App() {
  const [page, setPage] = useState('home');

  // On login/register success, redirect to applicant or recruiter dashboard
  const handleLogin = (role) => {
    // In a real app you'd import those dashboard components.
    // For now redirect back to home with a success message.
    setPage(role === 'recruiter' ? 'recruiter-home' : 'applicant-home');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':    return <HomePage    setPage={setPage} />;
      case 'about':   return <AboutPage   setPage={setPage} />;
      case 'contact': return <ContactPage />;
      case 'login':   return <Registation defaultTab="login"    onLogin={handleLogin} />;
      case 'register':return <Registation defaultTab="register" onLogin={handleLogin} />;
      // Redirect destinations — show a placeholder until dashboards are wired up
      case 'applicant-home':
      case 'recruiter-home':
        return (
          <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 16l6 6 14-14" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-white font-bold text-xl mb-2" style={{fontFamily:'Orbitron,sans-serif'}}>
                {page === 'recruiter-home' ? 'Recruiter Dashboard' : 'Applicant Dashboard'}
              </h2>
              <p className="text-slate-400 text-sm mb-6">Successfully signed in!</p>
              <button onClick={() => setPage('home')}
                className="px-6 py-2.5 bg-[#4f8ef7]/10 border border-[#4f8ef7]/25 text-[#4f8ef7] rounded-xl text-sm font-medium hover:bg-[#4f8ef7]/20 transition-colors">
                ← Back to Home
              </button>
            </div>
          </div>
        );
      default: return <HomePage setPage={setPage} />;
    }
  };

  // Hide navbar on auth pages (login/register)
  const hideNav = ['login','register'].includes(page);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {!hideNav && <Navbar page={page} setPage={setPage} />}
      {hideNav && (
        /* minimal navbar on auth pages */
        <nav className="sticky top-0 z-50 bg-[#0d1421]/95 backdrop-blur-md border-b border-[#4f8ef7]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <button onClick={() => setPage('home')} className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-[#4f8ef7]/10 border border-[#4f8ef7]/25 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#4f8ef7" strokeWidth="1.5"/><path d="M6 10L10 6L14 10L10 14Z" fill="#4f8ef7"/><circle cx="10" cy="10" r="2" fill="#fff"/></svg>
                </div>
                <span className="hidden sm:block text-xs font-bold tracking-widest text-slate-400" style={{fontFamily:'Orbitron,sans-serif'}}>AutomatedAI</span>
              </button>
              <div className="ml-auto flex gap-1">
                {[{key:'home',l:'Home'},{key:'about',l:'About'},{key:'contact',l:'Contact'}].map(({key,l}) => (
                  <button key={key} onClick={() => setPage(key)}
                    className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">{l}</button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
      <main>{renderPage()}</main>
    </div>
  );
}