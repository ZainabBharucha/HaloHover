import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import type { PriceTier } from '../types';

const tiers: PriceTier[] = [
  {
    title: "Site Progress",
    price: "6,000 - 8,000",
    description: "Essential documentation for ongoing construction sites.",
    features: [
      "1 Day Drone Photo/Video",
      "Progress Report Images",
      "Basic Color Correction",
      "Cloud Delivery"
    ]
  },
  {
    title: "Monthly Package",
    price: "7,500",
    description: "Recurring comprehensive coverage for active developments.",
    features: [
      "Up to 3 Site Visits per Month",
      "Consistent GPS Angles",
      "Edited Progress Video",
      "Shareable Client Link",
      "Priority Scheduling"
    ],
    isPopular: true
  },
  {
    title: "Arch. Shoot",
    price: "7,000 - 10,000",
    description: "Premium marketing visuals for completed projects.",
    features: [
      "Aerial & Ground Photography",
      "Interior & Exterior Shots",
      "High-End Retouching",
      "Cinematic 4K Reel",
      "Full Commercial Rights"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sky-600 font-bold tracking-widest uppercase text-xs mb-3">Investment</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Transparent Pricing</h3>
          <p className="mt-4 text-slate-600">Competitive rates tailored for the UAE market. Prices in AED.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.isPopular 
                  ? 'bg-white border-2 border-sky-500 shadow-2xl shadow-sky-100 transform md:-translate-y-4' 
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                  Best Value
                </div>
              )}
              
              <h4 className="text-xl font-bold text-slate-900 mb-2">{tier.title}</h4>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm text-slate-500">AED</span>
                <span className="text-4xl font-display font-bold text-slate-900">{tier.price}</span>
              </div>
              <p className="text-slate-500 text-sm mb-8 h-10 leading-relaxed">{tier.description}</p>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600">
                    <div className={`p-0.5 rounded-full mr-3 ${tier.isPopular ? 'bg-sky-100' : 'bg-slate-100'}`}>
                      <Check className={`w-3 h-3 ${tier.isPopular ? 'text-sky-600' : 'text-slate-500'}`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full py-3 text-center rounded-lg text-sm font-bold transition-all ${
                  tier.isPopular
                    ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-200'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-sky-50 rounded-full">
              <ShieldCheck className="w-6 h-6 text-sky-600" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900">Permit Handling Included</h5>
              <p className="text-sm text-slate-500">We handle all GCAA & DCAA permissions. AED 2,500/project (excluding gov fees) if purchased separately.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;