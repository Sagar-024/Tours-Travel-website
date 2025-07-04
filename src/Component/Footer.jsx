import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white px-6 py-12">
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-2">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 rounded bg-slate-800 text-white mt-2"
          />
        </div>

        {/* Email Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Reach Us</h3>
          <p className="text-gray-300">📧</p>
          <a
            href="mailto:vaishnavidhadge@xpertstim.com"
            className="text-blue-400 hover:underline text-sm"
          >
            vaishnavidhadge@xpertstim.com
          </a>
        </div>

        {/* Social & Developer */}
        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="text-gray-300 space-y-1">
            <p>Instagram • Twitter • Facebook</p>
            <p className="mt-4 text-sm text-lime-400">
              Developed by <span className="font-semibold">Sagar Kharal</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-gray-500 text-sm mt-10">
        &copy; 2025 OM Tours. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
