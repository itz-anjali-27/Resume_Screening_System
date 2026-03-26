import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = f => e => setForm({ ...form, [f]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <div className="bg-linear-to-br from-[#111827] to-[#0d1421] border border-white/6 rounded-2xl p-7 sm:p-10">
      <h2 className="text-white font-bold text-xl mb-7">Send us a message</h2>

      {sent ? (
        <div className="text-center py-12">
          <p className="text-white font-semibold text-lg mb-2">Message Sent!</p>
          <button onClick={() => setSent(false)} className="mt-6 px-6 py-2 bg-[#4f8ef7]/10 text-[#4f8ef7] rounded-xl">
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">

          <input value={form.name} onChange={set('name')} placeholder="Name" className="w-full p-3 rounded-xl bg-[#0d1421]" />
          <input value={form.email} onChange={set('email')} placeholder="Email" className="w-full p-3 rounded-xl bg-[#0d1421]" />
          <input value={form.subject} onChange={set('subject')} placeholder="Subject" className="w-full p-3 rounded-xl bg-[#0d1421]" />
          <textarea value={form.message} onChange={set('message')} rows={4} placeholder="Message" className="w-full p-3 rounded-xl bg-[#0d1421]" />

          <button type="submit" disabled={loading} className="px-6 py-3 bg-[#4f8ef7] text-white rounded-xl">
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      )}
    </div>
  );
}