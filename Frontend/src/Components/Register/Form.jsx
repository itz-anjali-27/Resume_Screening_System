import { useState } from "react";

export default function Form({ isLogin, onLoginSuccess, role, setIsLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (isLogin) {
    onLoginSuccess(); // ✅ login success
  } else {
    alert("Registration Successful ✅");

    onLoginSuccess(); // ✅ register success → redirect
  }
};
  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {!isLogin && (
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 rounded bg-gray-800 text-white"
      />

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3 text-white"
        >
          {show ? "🙈" : "👁️"}
        </button>
      </div>

      {!isLogin && (
        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
      )}

      <button className="w-full bg-blue-600 py-3 rounded text-white font-semibold">
        {isLogin ? "Login" : "Register"}
      </button>

    </form>
  );
}