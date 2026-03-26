import Header from "../Components/About/Header";
import Mission from "../Components/About/Mission";
import Features from "../Components/About/Features";
import Stats from "../Components/About/Stats";
import Navbar from '../Components/home/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] overflow-x-hidden">
      
      <Navbar /> {/* ✅ yaha add karo */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <Header />
        <Mission />
        <Features />
        <Stats />
      </div>

    </div>
  );
}