import React from 'react';

import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white pt-16 mt-20">
      <div className="container mx-auto px-6 text-center">
        
        {/* Logo */}
        <h1 className="text-5xl font-bold mb-3">KeenKeeper</h1>

        {/* Description */}
        <p className="text-emerald-200 max-w-md mx-auto mb-10">
          Your personal shelf of meaningful connections. Browse, tend, and nurture 
          the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-12">
          <h4 className="text-white font-semibold mb-4">Social Links</h4>
          
          <div className="flex justify-center items-center gap-6">
            <a
              href="#"
              className="w-11 h-11 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-11 h-11 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <FaFacebookF className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-11 h-11 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <FaTwitter className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div  className="border-t border-emerald-700 py-6">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-emerald-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;