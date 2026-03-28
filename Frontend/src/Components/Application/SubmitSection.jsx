import { useNavigate } from "react-router-dom";

export default function SubmitSection() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/userHome"); // apna route dalna
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleSubmit}
        className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 text-white"
      >
        Submit Application
      </button>
    </div>
  );
}