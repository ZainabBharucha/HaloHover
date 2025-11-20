import React from 'react';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
      {/* Background Image Positioned to the Right */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
          alt="Aerial view of modern architecture" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay: Solid white on left, fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent sm:to-transparent/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl animate-fade-in-up pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-slate-600 text-sm font-medium tracking-wide">Serving Dubai & Abu Dhabi</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Precision From <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">Every Angle</span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-600 font-light leading-relaxed">
            We transform construction monitoring and real estate marketing with high-fidelity aerial data and cinematic perspectives.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a 
              href="#services"
              className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#showcase"
              className="group px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <Play className="w-4 h-4 fill-slate-900" />
              View Gallery
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-slate-400">
             <div className="flex -space-x-4">
                {[1,2,3].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                   </div>
                ))}
             </div>
             <div className="text-sm font-medium">
                <p className="text-slate-900">Trusted by Developers</p>
                <p className="text-slate-500">Across the UAE</p>
             </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hidden md:block">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;