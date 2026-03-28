import PersonalInfo from "../../components/Application/PersonalInfo";
import ProfessionalDetails from "../../Components/Application/ProfessionalDetails";
import ResumeUpload from "../../Components/Application/ResumeUpload";
import SubmitSection from "../../Components/Application/SubmitSection";
import AppNavbar from "../../components/UserHome/AppNavbar.jsx";

export default function Application() {
  return (
    <div className="bg-[#111827] min-h-screen text-white p-6 pt-20">
         <AppNavbar currentPage="Application" />
      <h1 className="text-3xl font-bold mb-2">Job Application</h1>
      <p className="text-gray-400 mb-6">
        Complete the form below to submit your application
      </p>

      <PersonalInfo />
      <ProfessionalDetails />
      <ResumeUpload />
      <SubmitSection />
    </div>
  );
}