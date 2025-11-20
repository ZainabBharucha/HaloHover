import React from 'react';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-100 to-blue-50 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div className="relative aspect-square overflow-hidden rounded-tl-xl">
                     <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop" alt="Month 1 Empty Land" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                     <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">Month 01</div>
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-tr-xl">
                     <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" alt="Month 3 Construction" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                     <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">Month 03</div>
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-bl-xl">
                     <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" alt="Month 6 Construction" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                     <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">Month 06</div>
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-br-xl">
                     <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop" alt="Month 9 Construction" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                     <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">Month 09</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-xs mb-3">Timeline Tracking</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              See The Future <br/> Before It's Built
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              One of our core services is monthly construction progress tracking. By utilizing consistent GPS waypoints, we provide an identical perspective of your project's evolution over time.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sky-600 font-bold group-hover:bg-sky-500 group-hover:text-white transition-colors">1</div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Remote Monitoring</h4>
                  <p className="text-slate-500 text-sm mt-1">Monitor project milestones without needing to be on-site.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sky-600 font-bold group-hover:bg-sky-500 group-hover:text-white transition-colors">2</div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Visual Archives</h4>
                  <p className="text-slate-500 text-sm mt-1">Maintain a secure visual history for reports, presentations, and dispute resolution.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sky-600 font-bold group-hover:bg-sky-500 group-hover:text-white transition-colors">3</div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Geospatial Consistency</h4>
                  <p className="text-slate-500 text-sm mt-1">Fixed drone waypoints ensure every capture aligns precisely with the previous one.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;