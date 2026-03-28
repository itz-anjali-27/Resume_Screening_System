import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RoleToggle from "../Components/Register/RoleToggle";
import Form from "../Components/Register/Form";
import SwitchAuth from "../Components/Register/SwitchAuth";
import Navbar from "../Components/home/Navbar"; // ✅ add

export default function Registration({ defaultTab }) {
  const location = useLocation();

const [role, setRole] = useState(
  location.state?.role || "applicant"
);
  const [isLogin, setIsLogin] = useState(defaultTab === "login");

  const navigate = useNavigate();

  const handleAuthSuccess = (role) => {
  localStorage.setItem("token", "loggedIn");
  localStorage.setItem("role", role);

   if (role === "applicant") {
    navigate("/Userhome");
  } else if (role === "recruiter") {
    navigate("/HRhome");
  }
};

  return (
    <div className="min-h-screen bg-[#0f172a]">

      <Navbar /> {/* ✅ Navbar yaha call */}

      <div className="flex items-center justify-center px-4 
      bg-linear-to-br from-[#0f172a] via-[#020617] to-[#0f172a] min-h-[calc(100vh-64px)]">

        <div className="w-full max-w-md bg-[#0d1728] border border-[#1e2d42] 
        rounded-2xl p-8 shadow-2xl">

          <RoleToggle role={role} setRole={setRole} />

          <h2 className="text-white text-2xl text-center mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          <p className="text-center text-slate-400 text-sm mb-6">
            {isLogin ? "Login to continue" : "Register to get started"}
          </p>

          <Form 
            isLogin={isLogin} 
            role={role} 
            setIsLogin={setIsLogin} 
            onLoginSuccess={handleAuthSuccess}
          />

          <SwitchAuth isLogin={isLogin} setIsLogin={setIsLogin} />

        </div>
      </div>
    </div>
  );
}