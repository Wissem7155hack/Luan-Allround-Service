import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Check, Eye, ShieldCheck, Ruler, Phone } from 'lucide-react';

const ZaunKonfiguratorSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 text-white overflow-hidden border-y border-white/10">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles size={14} className="text-emerald-400 animate-pulse" />
              <span>Neu: Interaktiver 3D-Zaunplaner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Gestalten Sie Ihren Zaun online in <span className="text-emerald-400 underline decoration-emerald-500/50">3D</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              Kein Rätselraten mehr bei der Planung! Mit unserem neuen 3D-Grundstücks-Planer ziehen Sie Ihren Zaunverlauf frei per Drag &amp; Drop, fügen Gartentore ein, wählen Höhen (100–180 cm), Farben (Anthrazit, Moosgrün, Verzinkt) sowie Sichtschutz – und erhalten direkt eine genaue Material- und Mattenberechnung.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Ruler size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Freier Drag &amp; Drop Planer</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Ecken, Längen und Torpositionen millimetergenau festlegen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Eye size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Photorealistische 3D-Ansicht</h4>
                  <p className="text-xs text-gray-400 mt-0.5">360°-Rundumblick mit echten RAL-Farben &amp; Gartenumgebung.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Doppelstabmatten 6/5/6 &amp; 8/6/8</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Leichte oder schwere Industrieausführung inkl. Pfosten.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Kostenloses Vor-Ort-Aufmaß</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Planung mit 1 Klick übermitteln für ein Festpreisangebot.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/zaun-konfigurator"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-950/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>3D-Zaunplaner jetzt starten</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+4917647999118"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition"
              >
                <Phone size={16} className="text-emerald-400" />
                <span>Oder anrufen: 0176 47999118</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative rounded-2xl bg-stone-900 border border-white/20 p-5 shadow-2xl overflow-hidden">
                {/* Simulated 3D Viewport Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="font-mono text-gray-400 ml-2">zaunplaner.3d</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    LIVE-VORSCHAU
                  </span>
                </div>

                {/* Screenshot / Mockup Illustration */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-b from-sky-900/40 to-emerald-950/40 border border-white/10 flex items-center justify-center">
                  <img
                    src="/zaun-konfigurator/ui-mockup.jpg"
                    alt="Luan Allround Service 3D Zaunkonfigurator"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Floating Action Overlay */}
                  <Link
                    to="/zaun-konfigurator"
                    className="absolute inset-0 bg-stone-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 text-white font-bold"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Sparkles size={24} />
                    </div>
                    <span className="text-sm uppercase tracking-wider">Klicken zum Öffnen</span>
                  </Link>
                </div>

                {/* Quick Info Footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>✓ 100% Kostenlos</span>
                  <span>✓ Ohne Anmeldung</span>
                  <span>✓ Sofortiges Aufmaß</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZaunKonfiguratorSection;
