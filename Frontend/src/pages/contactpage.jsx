import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = f => e => setForm({ ...form, [f]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const contacts = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="#4f8ef7" strokeWidth="1.8"/>
          <path d="M2 8l10 7 10-7" stroke="#4f8ef7" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: 'bg-[#4f8ef7]/15 border-[#4f8ef7]/25',
      label: 'Email',
      value: 'support@screenai.com',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2C9.163 21 3 14.837 3 7a2 2 0 012-3z" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: 'bg-red-500/15 border-red-500/25',
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z" stroke="#10b981" strokeWidth="1.8"/>
          <circle cx="12" cy="8" r="2" stroke="#10b981" strokeWidth="1.8"/>
        </svg>
      ),
      iconBg: 'bg-emerald-500/15 border-emerald-500/25',
      label: 'Office',
      value: 'San Francisco, CA',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-[#4f8ef7]">Contact Us</span>
          </h1>
          <p className="text-slate-400 text-base">
            Get in touch with our team. We're here to help!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
          {contacts.map(({ icon, iconBg, label, value }) => (
            <div
              key={label}
              className="bg-linear-to-br from-[#111827] to-[#0d1421] border border-white/6 rounded-2xl p-7 hover:border-[#4f8ef7]/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${iconBg}`}>
                {icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1.5">{label}</h3>
              <p className="text-slate-400 text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-linear-to-br from-[#111827] to-[#0d1421] border border-white/6 rounded-2xl p-7 sm:p-10">
          <h2 className="text-white font-bold text-xl mb-7">Send us a message</h2>

          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 16l6 6 14-14" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-white font-semibold text-lg mb-2">Message Sent!</p>
              <p className="text-slate-400 text-sm">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name:'',email:'',subject:'',message:'' });
                }}
                className="mt-6 px-6 py-2.5 bg-[#4f8ef7]/10 border border-[#4f8ef7]/25 text-[#4f8ef7] rounded-xl text-sm font-medium hover:bg-[#4f8ef7]/20 transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Name</label>
                  <input
                    value={form.name}
                    onChange={set('name')}
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#0d1421] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#4f8ef7]/50 focus:ring-1 focus:ring-[#4f8ef7]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="name@company.com"
                    required
                    className="w-full bg-[#0d1421] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#4f8ef7]/50 focus:ring-1 focus:ring-[#4f8ef7]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Subject</label>
                <input
                  value={form.subject}
                  onChange={set('subject')}
                  placeholder="How can we help?"
                  required
                  className="w-full bg-[#0d1421] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#4f8ef7]/50 focus:ring-1 focus:ring-[#4f8ef7]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-[#0d1421] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#4f8ef7]/50 focus:ring-1 focus:ring-[#4f8ef7]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-linear-to-r from-[#3b5fc0] to-[#7c4ddb] text-white rounded-xl font-semibold text-sm hover:brightness-110 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#4f8ef7]/20 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="24" strokeDashoffset="8"/>
                    </svg>
                    Sending…
                  </>
                ) : 'Send Message →'}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}