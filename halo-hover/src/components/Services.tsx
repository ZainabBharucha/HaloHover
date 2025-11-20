import React from 'react';
import { Activity, Camera, Map, Film, FileCheck, Hexagon } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    title: "Construction Monitoring",
    description: "Regular aerial updates of construction sites for reports and internal reviews.",
    icon: Activity,
    features: ["Monthly Timeline Tracking", "High-Res Orthomosaics", "Stakeholder Reporting"]
  },
  {
    title: "Architectural Photography",
    description: "Cinematic aerial and ground imagery for completed or in-progress developments.",
    icon: Camera,
    features: ["Marketing Ready Visuals", "4K Video Tours", "Interior & Exterior"]
  },
  {
    title: "360° Aerial Panoramas",
    description: "Immersive interactive views for site engineers and virtual tours.",
    icon: Hexagon,
    features: ["VR Ready", "Site Logistics Planning", "Interactive Web Hosting"]
  },
  {
    title: "Permit Handling",
    description: "Complete management of GCAA & DCAA permissions for compliant operations.",
    icon: FileCheck,
    features: ["NOC Acquisition", "Legal Compliance", "Ministry Approvals"]
  },
  {
    title: "Marketing Videography",
    description: "Dynamic FPV and cinematic drone reels for real estate promotion.",
    icon: Film,
    features: ["Social Media Edits", "Color Grading", "Storyboarding"]
  },
  {
    title: "Site Mapping",
    description: "Detailed topographic and 2D/3D mapping for surveyors and architects.",
    icon: Map,
    features: ["Point Clouds", "Elevation Models", "Accurate Measurements"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sky-600 font-bold tracking-widest uppercase text-xs mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Comprehensive Aerial Solutions</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Streamlining construction workflows and elevating marketing collateral with state-of-the-art drone technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2.5"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;