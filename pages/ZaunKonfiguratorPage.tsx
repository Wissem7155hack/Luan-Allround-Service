import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Maximize2, Minimize2, ExternalLink, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ZaunKonfiguratorPage: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col text-white">
      <SEOHead
        title="3D Zaunkonfigurator Kuppenheim & Rastatt | Luan Allround Service"
        description="Planen Sie Ihren Doppelstabmattenzaun online in 3D: Maße, Farben (Anthrazit, Moosgrün, Verzinkt), Gartentore & Sichtschutzstreifen konfigurieren. Kostenloses Aufmaß vor Ort in Kuppenheim & Rastatt!"
        keywords="3D Zaunkonfigurator, Zaunplaner online, Doppelstabmattenzaun konfigurieren, Zaunbau Kuppenheim, Zaun Rastatt, Zaunbauer in der Nähe, Zaunbau Kosten"
        canonical="https://luan-allround-service.de/zaun-konfigurator"
      />

      {/* Top Header Bar */}
      <header className="h-14 bg-stone-900 border-b border-stone-800 px-4 sm:px-6 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white transition px-2.5 py-1.5 rounded-lg hover:bg-stone-800"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Zurück zur Startseite</span>
            <span className="sm:hidden">Zurück</span>
          </Link>

          <div className="h-4 w-px bg-stone-700 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              Luan Allround Service • 3D-Zaunplaner
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+4917647999118"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-bold transition"
          >
            <Phone size={13} />
            <span>0176 47999118</span>
          </a>

          <a
            href="/zaun-konfigurator/index.html"
            target="_blank"
            rel="noopener noreferrer"
            title="In neuem Tab im Vollbild öffnen"
            className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-gray-300 hover:text-white text-xs transition flex items-center gap-1"
          >
            <ExternalLink size={15} />
            <span className="hidden lg:inline text-[11px] font-semibold">Vollbild Tab</span>
          </a>

          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Vollbild beenden' : 'Vollbildmodus'}
            className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-gray-300 hover:text-white text-xs transition"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </header>

      {/* Main 3D Viewport iframe */}
      <main className="flex-1 relative w-full h-[calc(100vh-3.5rem)] bg-slate-900 overflow-hidden">
        <iframe
          src="/zaun-konfigurator/index.html"
          title="Luan Allround Service 3D Zaunkonfigurator"
          className="w-full h-full border-0 select-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </main>
    </div>
  );
};

export default ZaunKonfiguratorPage;
