'use client';

import React from 'react';
import {
  MapPin,
  Navigation,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Compass,
} from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/shopConfig';

export default function StoreLocationSection() {
  return (
    <section
      id="store-location"
      className="py-16 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/90 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>Store Location &amp; Visit Us • दुकान का पता</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Visit Our Store / हमारे स्टोर पर पधारें
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Experience authentic shade fandecks, computerized colour mixing, and consult directly with our paint specialists for your home.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={SHOP_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all hover:scale-[1.02]"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Open Google Maps</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 2-Column Responsive Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Store Information & Working Hours (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
            <div>
              {/* Shop Badge Header */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-2 ring-amber-500/30 shadow-xs bg-white">
                  <img
                    src="/aashirwad-logo.jpg"
                    alt="आशीर्वाद हार्डवेयर एंड पेंट हाउस Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 leading-tight">
                    आशीर्वाद <span className="text-amber-700">हार्डवेयर एंड पेंट हाउस</span>
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 tracking-wide mt-0.5">
                    Aashirwad Hardware &amp; Paint House
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {SHOP_CONFIG.tagline}
                  </p>
                </div>
              </div>

              {/* Exact Address Highlight Block */}
              <div className="mt-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block">
                      Official Store Address
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                      आशीर्वाद हार्डवेयर एंड पेंट हाउस
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      Main Road / मुख्य बाज़ार मार्ग
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Landmark: Authorized Dealer for <strong className="text-slate-700">Asian Paints</strong> &amp; <strong className="text-slate-700">Birla Opus</strong> Paints Studio
                    </p>
                  </div>
                </div>
              </div>

              {/* Store Timings & Key Info */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/40 border border-amber-200/60">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                      Store Hours
                    </span>
                    <span className="text-xs font-bold text-slate-900 block mt-0.5">
                      8:30 AM – 9:00 PM
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Open All 7 Days (Mon – Sun)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Authorized Store
                    </span>
                    <span className="text-xs font-bold text-slate-900 block mt-0.5">
                      100% Genuine Finishes
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Computerized Tinting &amp; Mixing
                    </span>
                  </div>
                </div>
              </div>

              {/* What's available at the store */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h5 className="text-xs font-bold text-slate-900 mb-2.5">
                  Available In-Store Services:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Real-time computerized colour matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>500+ Official Shade Cards &amp; Fandecks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Asian Paints Royale, Apex &amp; Apcolite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Birla Opus Calista, Style &amp; Prime</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Contact Action Buttons */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href={`tel:+91${SHOP_CONFIG.phone}`}
                className="flex-1 min-w-[140px] py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>Call: {SHOP_CONFIG.phone}</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  'Hello! I would like to get directions to Aashirwad Hardware & Paint House.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp Shop</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Navigation Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            {/* Visual Interactive Map Header */}
            <div className="relative bg-slate-900 text-white p-6 sm:p-7 overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-amber-500/10 pointer-events-none blur-2xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-3">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Google Maps Pin</span>
                </div>
                <h4 className="text-xl font-extrabold text-white">
                  Navigate Directly to Our Shop
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Click below to open GPS turn-by-turn navigation on your smartphone or desktop.
                </p>
              </div>
            </div>

            {/* Map Preview Frame */}
            <div className="relative flex-1 min-h-[260px] bg-slate-100 flex flex-col items-center justify-center p-6 text-center group">
              {/* Stylized Map Backdrop Graphic */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 flex flex-col items-center max-w-xs">
                {/* Pulsating Map Pin Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <span className="absolute -inset-1 rounded-full bg-amber-400/30 animate-ping -z-10" />
                </div>

                <span className="text-sm font-extrabold text-slate-900 block">
                  आशीर्वाद हार्डवेयर एंड पेंट हाउस
                </span>
                <span className="text-xs text-slate-500 mt-1 block">
                  Click the button below to get exact directions via Google Maps application.
                </span>

                <div className="mt-4 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-2xs">
                  maps.app.goo.gl/uWSUt5iGd2QwmSJG7
                </div>
              </div>
            </div>

            {/* Direction Action Buttons */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 space-y-2.5">
              <a
                href={SHOP_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-amber-600/20 transition-all hover:scale-[1.01]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <p className="text-[11px] text-center text-slate-400">
                Opens in Google Maps App or Web Browser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
