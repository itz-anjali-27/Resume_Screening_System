import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Registration from "./pages/Registration";
import UserHome from "./pages/User/UserHome";
import Application from "./pages/User/Application"
import ProfilePage from "./pages/User/ProfilePage";
import SignOut from "./pages/User/SignOut";
import HrDashboard from "./pages/HR/HrDashboard";
import LogOut from "./pages/HR/LogOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/contact" element={<ContactPage /> } />
        <Route path="/about" element={<AboutPage /> } />
        <Route path="/register" element={<Registration /> } />
        <Route path="/home" element={<UserHome />} />
        <Route path="/userHome" element={<UserHome />} />
        <Route path="/apply" element={<Application />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/signout" element={<SignOut />} />
        <Route path="/HRhome" element={<HrDashboard />} />
        <Route path="/dashboard" element={<HrDashboard />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;