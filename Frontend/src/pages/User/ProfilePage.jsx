import { useState } from "react";
import ProfileCard from "../../Components/ProfilePage/ProfileCard";
import PersonalInfo from "../../Components/ProfilePage/PersonalInfo";
import AppNavbar from "../../components/UserHome/AppNavbar.jsx";


export default function ProfilePage() {
  return (
    <div className="bg-[#0B1120] min-h-screen text-white p-6 pt-20">
      <AppNavbar currentPage="ProfilePage" />
      <h1 className="text-3xl font-bold">My Profile</h1>
      <p className="text-gray-400 mb-6">
        Manage your personal information and career settings.
      </p>

      <div className="grid md:grid-cols-3 gap-6 pt-5">
        
        {/* Left Side */}
        <div className="space-y-6">
          <ProfileCard />
          
          <div className="bg-[#020617] p-4 rounded-xl">
            <h3 className="text-sm text-gray-400 mb-2">
              Verification Status
            </h3>
            <div className="bg-green-600 text-white text-sm px-3 py-2 rounded">
              Identity Verified
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-2">
          <PersonalInfo />
        </div>

      </div>
    </div>
  );
}