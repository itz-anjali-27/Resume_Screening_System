export default function ContactCards() {
  const contacts = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="#4f8ef7" strokeWidth="1.8"/>
          <path d="M2 8l10 7 10-7" stroke="#4f8ef7" strokeWidth="1.8"/>
        </svg>
      ),
      iconBg: 'bg-[#4f8ef7]/15 border-[#4f8ef7]/25',
      label: 'Email',
      value: 'support@screenai.com',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4" stroke="#ef4444" strokeWidth="1.8"/>
        </svg>
      ),
      iconBg: 'bg-red-500/15 border-red-500/25',
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14" stroke="#10b981" strokeWidth="1.8"/>
        </svg>
      ),
      iconBg: 'bg-emerald-500/15 border-emerald-500/25',
      label: 'Office',
      value: 'San Francisco, CA',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
      {contacts.map(({ icon, iconBg, label, value }) => (
        <div key={label} className="bg-linear-to-br from-[#111827] to-[#0d1421] border border-white/6 rounded-2xl p-7">
          
          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${iconBg}`}>
            {icon}
          </div>

          <h3 className="text-white font-bold text-lg mb-1.5">{label}</h3>
          <p className="text-slate-400 text-sm">{value}</p>
        </div>
      ))}
    </div>
  );
}