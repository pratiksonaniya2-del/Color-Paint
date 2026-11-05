'use client';

import React from 'react';
import { Palette, Phone, Mail, MapPin } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function Footer() {
  const { openConsultationModal, openCalculatorModal } = useStore();

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-500/40 bg-white shrink-0 shadow-sm">
                <img
                  src="/aashirwad-logo.jpg"
                  alt="आशीर्वाद हार्डवेयर एंड पेंट हाउस"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white block leading-tight">
                  आशीर्वाद <span className="text-amber-500">पेंट हाउस</span>
                </span>
                <span className="text-[11px] text-amber-400 font-semibold block tracking-wide">
                  हार्डवेयर एंड पेंट हाउस
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              आपके घर की सजावट का विश्वसनीय साथी। Authorized distributor for Asian Paints and Birla Opus with premium computerized tinting and architectural finish warranties.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href="tel:+919669348842" className="hover:text-amber-400 transition-colors font-medium">
                  +91 96693 48842
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:raisatyam78@gmail.com" className="hover:text-amber-400 transition-colors font-medium">
                  raisatyam78@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <a
                    href="https://maps.app.goo.gl/uWSUt5iGd2QwmSJG7?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors leading-relaxed block"
                  >
                    <span>Main Road / मुख्य बाज़ार मार्ग</span>
                    <span className="block text-[11px] text-amber-400 font-semibold mt-0.5">
                      Open on Google Maps ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Top Brands
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#brands-section" className="hover:text-amber-400 transition-colors">Asian Paints Royale</a></li>
              <li><a href="#brands-section" className="hover:text-amber-400 transition-colors">Asian Paints Apcolite</a></li>
              <li><a href="#brands-section" className="hover:text-amber-400 transition-colors">Asian Paints Apex</a></li>
              <li><a href="#brands-section" className="hover:text-amber-400 transition-colors">Birla Opus Calista</a></li>
              <li><a href="#brands-section" className="hover:text-amber-400 transition-colors">Birla Opus Style</a></li>
              <li><a href="#brands-section" className="hover:text-amber-400 transition-colors">Birla Opus Prime</a></li>
            </ul>
          </div>

          {/* Quick Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#room-visualizer" className="hover:text-amber-400 transition-colors">Room Colour Visualizer</a></li>
              <li><button onClick={openCalculatorModal} className="hover:text-amber-400 transition-colors">Paint Quantity Calculator</button></li>
              <li><button onClick={openConsultationModal} className="hover:text-amber-400 transition-colors">Free Home Consultation</button></li>
              <li><a href="#inspiration-section" className="hover:text-amber-400 transition-colors">Room Palette Ideas</a></li>
              <li><a href="#store-location" className="hover:text-amber-400 transition-colors font-semibold text-amber-400">Store Location &amp; Directions</a></li>
            </ul>
          </div>

          {/* Finishes & Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Paint Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#colours-section" className="hover:text-amber-400 transition-colors">Interior Luxury Emulsion</a></li>
              <li><a href="#colours-section" className="hover:text-amber-400 transition-colors">Exterior Weatherproof</a></li>
              <li><a href="#colours-section" className="hover:text-amber-400 transition-colors">Wood &amp; Metal Enamels</a></li>
              <li><a href="#colours-section" className="hover:text-amber-400 transition-colors">Designer Wall Textures</a></li>
              <li><a href="#colours-section" className="hover:text-amber-400 transition-colors">Waterproofing Primers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 आशीर्वाद हार्डवेयर एंड पेंट हाउस (Aashirwad Hardware &amp; Paint House). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Warranty Details</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
