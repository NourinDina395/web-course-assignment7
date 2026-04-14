import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-16 mt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="text-4xl font-bold mb-3">KeenKeeper</div>
        <p className="text-emerald-100 max-w-md mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <a href="#" className="text-2xl hover:text-emerald-300">📘</a>
          <a href="#" className="text-2xl hover:text-emerald-300">🐦</a>
          <a href="#" className="text-2xl hover:text-emerald-300">📸</a>
        </div>

        <div className="text-emerald-300 text-sm">
          © 2026 KeenKeeper. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;