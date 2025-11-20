import React from 'react';
import { Aperture, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
             <div className="bg-slate-900 p-1 rounded-lg text-white">
                <Aperture className="h-5 w-5" />
            </div>
            <span className="font-display text-xl font-bold text-slate-800">
              HALO<span className="text-sky-600">HOVER</span>
            </span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-sky-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Sitemap</a>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-left text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Halo Hover Drone Services UAE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;