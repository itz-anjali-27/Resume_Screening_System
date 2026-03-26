import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Registration from "./pages/Registration";
import UserHome from "./pages/User/UserHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/contact" element={<ContactPage /> } />
        <Route path="/about" element={<AboutPage /> } />
        <Route path="/register" element={<Registration /> } />
        <Route path="/UserHome" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;