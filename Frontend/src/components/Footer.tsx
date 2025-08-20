import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 px-4">
      <div className="text-lg font-bold text-white">Delhi Invoice Flow</div>
      <div className="space-x-6">
        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
        <a href="/terms" className="hover:text-white">Terms of Service</a>
        <a href="/help" className="hover:text-white">Help Center</a>
      </div>
      <div className="text-sm">
        &copy; {new Date().getFullYear()} Delhi Invoice Flow. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
