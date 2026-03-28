import { useNavigate } from "react-router-dom";

export default function SignOutPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🧹 Clear user data (important)
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // 👉 Redirect to home/login
    navigate("/");
  };

  const handleCancel = () => {
    navigate(-1); // previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
      
      <div className="bg-[#111827] p-8 rounded-xl shadow-lg w-[350px] text-center">
        
        <h2 className="text-xl font-semibold mb-4">
          Confirm Log Out
        </h2>

        <p className="text-gray-400 mb-6">
          Are you sure you want to log out of your account?
        </p>

        <div className="flex justify-center gap-4">
          
          <button
            onClick={handleCancel}
            className="px-5 py-2 rounded-lg bg-gray-600 hover:bg-gray-500"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500"
          >
            Log Out
          </button>

        </div>

      </div>

    </div>
  );
}