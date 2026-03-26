import Header from "../Components/Contact/Header";
import ContactCards from "../Components/Contact/ContactCards";
import ContactForm from "../Components/Contact/ContactForm";
import Navbar from "../Components/home/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">

      <Navbar /> {/* ✅ Navbar add kiya */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <Header />
        <ContactCards />
        <ContactForm />
      </div>

    </div>
  );
}