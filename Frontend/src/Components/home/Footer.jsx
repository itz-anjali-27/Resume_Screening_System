export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 border-t border-gray-800 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">
            SmartHire
          </h2>
          <p className="text-sm">
            Find your dream job faster with AI-powered resume screening 
            and smart job recommendations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Browse Jobs</li>
            <li className="hover:text-white cursor-pointer">Track Applications</li>
            <li className="hover:text-white cursor-pointer">Profile</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-medium mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-medium mb-3">Contact</h3>
          <p className="text-sm">support@smarthire.com</p>
          <p className="text-sm mt-1">+91 98765 43210</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <div className="w-8 h-8 flex items-center justify-center rounded bg-[#1f2937] hover:bg-blue-600 cursor-pointer">
              <span>F</span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded bg-[#1f2937] hover:bg-blue-400 cursor-pointer">
              <span>T</span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded bg-[#1f2937] hover:bg-pink-500 cursor-pointer">
              <span>I</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} SmartHire. All rights reserved.
      </div>

    </footer>
  );
}