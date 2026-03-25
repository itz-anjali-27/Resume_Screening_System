export default function AboutPage({ setPage }) {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: 'bg-amber-500/15 border-amber-500/25',
      title: 'AI-Powered Screening',
      desc: 'Advanced algorithms analyze resumes and match candidates with perfect job opportunities in seconds.',
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
      desc: 'Our intelligent system ensures the right talent meets the right opportunity every time.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" stroke="#10b981" strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: 'bg-emerald-500/15 border-emerald-500/25',
      title: 'Smart Recommendations',
      desc: 'Personalized career path suggestions powered by real-time market data and your profile.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#a855f7" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: 'bg-purple-500/15 border-purple-500/25',
      title: 'Bias-Free Hiring',
      desc: 'Our platform removes unconscious bias, ensuring fair evaluation for every candidate.',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Candidates Screened' },
    { value: '2K+', label: 'Partner Companies' },
    { value: '98%', label: 'Match Accuracy' },
    { value: '15+', label: 'Countries' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{fontFamily:'Inter,sans-serif'}}>
            <span className="text-[#4f8ef7]">About ScreenAI</span>
          </h1>
          <p className="text-slate-400 text-base">
            Revolutionizing the recruitment process with artificial intelligence
          </p>
        </div>

        {/* Mission */}
        <div className="bg-linear-to-br from-[#111827] to-[#0d1421] border border-[#4f8ef7]/12 rounded-2xl p-8 sm:p-10 mb-6">
          <h2 className="text-white font-bold text-2xl mb-5">Our Mission</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
            At ScreenAI, we believe that finding the perfect job or the ideal candidate shouldn't be a time-consuming,
            frustrating process. Our mission is to leverage cutting-edge AI technology to create meaningful connections
            between talented professionals and forward-thinking companies.
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We're transforming traditional recruitment by automating resume screening, providing intelligent insights, and
            ensuring that every candidate gets a fair chance to showcase their skills while helping recruiters focus on what
            matters most - building great teams.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {features.map(({ icon, iconBg, title, desc }) => (
            <div
              key={title}
              className="bg-linear-to-br from-[#111827] to-[#0d1421] border border-white/6 rounded-2xl p-7 hover:border-[#4f8ef7]/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${iconBg}`}>
                {icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 ">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#111827]/60 border border-white/5 rounded-2xl p-5 text-center hover:border-[#4f8ef7]/20 transition-colors"
            >
              <p
                className="font-bold text-2xl sm:text-3xl text-[#4f8ef7] mb-1 tabular-nums"
                style={{ fontFamily: 'Inter,sans-serif' }}
              >
                {value}
              </p>
              <p className="text-slate-500 text-xs sm:text-sm tabular-nums">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}