export default function Features() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#f59e0b" strokeWidth="1.8"/>
        </svg>
      ),
      iconBg: 'bg-amber-500/15 border-amber-500/25',
      title: 'AI-Powered Screening',
      desc: 'Advanced algorithms analyze resumes and match candidates instantly.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#4f8ef7" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="4" stroke="#4f8ef7" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="1.5" fill="#4f8ef7"/>
        </svg>
      ),
      iconBg: 'bg-[#4f8ef7]/15 border-[#4f8ef7]/25',
      title: 'Precise Matching',
      desc: 'Ensures the right talent meets the right opportunity every time.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" stroke="#10b981" strokeWidth="1.8"/>
        </svg>
      ),
      iconBg: 'bg-emerald-500/15 border-emerald-500/25',
      title: 'Smart Recommendations',
      desc: 'Personalized career suggestions powered by real-time data.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#a855f7" strokeWidth="1.8"/>
          <path d="M9 12l2 2 4-4" stroke="#a855f7" strokeWidth="1.8"/>
        </svg>
      ),
      iconBg: 'bg-purple-500/15 border-purple-500/25',
      title: 'Bias-Free Hiring',
      desc: 'Fair evaluation system removing unconscious bias.',
    },

    // 🔥 NEW FEATURES START

    {
      icon: (
        <svg width="24" height="24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h10" stroke="#f43f5e" strokeWidth="1.8"/>
        </svg>
      ),
      iconBg: 'bg-rose-500/15 border-rose-500/25',
      title: 'Real-Time Analytics',
      desc: 'Track hiring performance with live dashboards and insights.',
    },
    {
      icon: (
        <svg width="24" height="24" fill="none">
          <path d="M12 8v8M8 12h8" stroke="#22c55e" strokeWidth="1.8"/>
        </svg>
      ),
      iconBg: 'bg-green-500/15 border-green-500/25',
      title: 'Easy Integration',
      desc: 'Seamlessly connect with your existing HR tools and workflows.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
      {features.map(({ icon, iconBg, title, desc }) => (
        <div key={title} className="bg-linear-to-br from-[#111827] to-[#0d1421] border border-white/6 rounded-2xl p-7 hover:border-[#4f8ef7]/25 hover:-translate-y-0.5 transition-all duration-300">
          
          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${iconBg}`}>
            {icon}
          </div>

          <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
          <p className="text-slate-400 text-sm">{desc}</p>
        </div>
      ))}
    </div>
  );
}