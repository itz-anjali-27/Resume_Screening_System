export default function Stats() {
  const stats = [
    { value: '50K+', label: 'Candidates Screened' },
    { value: '2K+', label: 'Partner Companies' },
    { value: '98%', label: 'Match Accuracy' },
    { value: '15+', label: 'Countries' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {stats.map(({ value, label }) => (
        <div key={label} className="bg-[#111827]/60 border border-white/5 rounded-2xl p-5 text-center">
          
          <p className="font-bold text-2xl sm:text-3xl text-[#4f8ef7] mb-1">
            {value}
          </p>

          <p className="text-slate-500 text-xs sm:text-sm">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}