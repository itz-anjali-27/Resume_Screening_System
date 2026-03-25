import { useState } from 'react';

export default function Register() {
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? 'Login' : 'Register'} Successful ✅`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
    bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a]">

      {/* Card */}
      <div className="w-full max-w-md bg-[#0d1728] border border-[#1e2d42] 
      rounded-2xl p-8 shadow-2xl hover:shadow-[0_0_25px_rgba(67,97,238,0.3)] transition">

        {/* Role Toggle */}
        <div className="flex mb-6 bg-[#131d2e] rounded-xl p-1">
          {['user', 'hr'].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2 text-sm rounded-lg transition-all duration-300 ${
                role === r
                  ? 'bg-gradient-to-r from-[#4361ee] to-[#7c4ddb] text-white shadow-md'
                  : 'text-slate-400 hover:bg-[#1e293b]'
              }`}
            >
              {r === 'user' ? 'Applicant' : 'Recruiter'}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h2 className="text-white text-2xl font-semibold text-center mb-2">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        <p className="text-center text-slate-400 text-sm mb-6">
          {isLogin
            ? 'Ready to find your next career move?'
            : 'Start your career journey with us'}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name (Only Register) */}
          {!isLogin && (
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#131d2e] border border-[#2a3a55] rounded-xl px-4 py-3 text-sm text-slate-200 outline-none 
              focus:ring-2 focus:ring-[#4361ee] hover:border-[#4361ee] transition"
            />
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-[#131d2e] border border-[#2a3a55] rounded-xl px-4 py-3 text-sm text-slate-200 outline-none 
            focus:ring-2 focus:ring-[#4361ee] hover:border-[#4361ee] transition"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#131d2e] border border-[#2a3a55] rounded-xl px-4 py-3 pr-10 text-sm text-slate-200 outline-none 
              focus:ring-2 focus:ring-[#4361ee] hover:border-[#4361ee] transition"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
            >
              {show ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Phone (Only Register) */}
          {!isLogin && (
            <input
              type="text"
              placeholder="+91 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#131d2e] border border-[#2a3a55] rounded-xl px-4 py-3 text-sm text-slate-200 outline-none 
              focus:ring-2 focus:ring-[#4361ee] hover:border-[#4361ee] transition"
            />
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#4361ee] to-[#7c4ddb] text-white rounded-xl font-semibold text-sm 
            hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
          >
            {isLogin ? 'Sign In' : 'Register'}
          </button>

          {/* Divider (Only Login) */}
          {isLogin && (
            <div className="flex items-center">
              <hr className="flex-grow border-[#2a3a55]" />
              <span className="mx-2 text-slate-400 text-sm">OR</span>
              <hr className="flex-grow border-[#2a3a55]" />
            </div>
          )}

        </form>

        {/* Switch Login/Register */}
        <p className="text-center text-sm text-slate-400 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            {isLogin ? 'Sign up for free' : 'Sign In'}
          </span>
        </p>
      </div>
    </div>
  );
}