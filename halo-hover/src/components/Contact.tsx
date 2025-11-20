import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
          
          {/* Visual Side (Left) */}
          <div className="relative h-full min-h-[400px] lg:min-h-0">
            <img 
              src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1000&auto=format&fit=crop" 
              alt="Drone Operator" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-between p-12">
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">Get In Touch</h3>
                <p className="text-slate-200">We typically respond within 24 hours.</p>
              </div>

              <div className="space-y-6 text-white">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-sky-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-slate-300 text-sm">+971 50 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-sky-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-slate-300 text-sm">hello@halohover.ae</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-sky-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-slate-300 text-sm">Dubai Silicon Oasis, Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="bg-white p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to Elevate Your Project?</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    placeholder="Construction LLC"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service Interest</label>
                <div className="relative">
                  <select 
                    id="service"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors appearance-none"
                  >
                    <option>Construction Progress Monitoring</option>
                    <option>Architectural Photography</option>
                    <option>360 Panoramas</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  placeholder="Tell us about your project location and timeline..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={submitted}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20"
              >
                {submitted ? (
                  <span className="flex items-center gap-2">Message Sent <Check size={20}/></span>
                ) : (
                  <span className="flex items-center gap-2">Send Message <Send size={20}/></span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

function Check({size}: {size: number}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    )
}

export default Contact;