import React from 'react';
import { Facebook, Mail, Phone, MapPin, Leaf, Clock, Star, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-white border-t border-white/10" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Marke & Unternehmensprofil */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="text-gold-500 h-8 w-8" />
              <div>
                <span className="block text-xl font-bold text-white font-serif" itemProp="name">Luan Allround Service</span>
                <span className="block text-xs text-gray-400">Inhaber &amp; Geschäftsführer: <span itemProp="founder">Memedali Limani</span></span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-light" itemProp="description">
              Ihr zertifizierter Meisterbetrieb für <strong>Garten- und Landschaftsbau</strong>, professionelle <strong>Pflasterarbeiten in Rastatt</strong>, <strong>Zaunbau in Kuppenheim</strong> und langlebigen <strong>Terrassenbau</strong> in der Region Karlsruhe &amp; Baden-Baden.
            </p>
            {/* Rating Badges */}
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href="https://maps.google.com/?cid=628035682730834283"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-gray-300 hover:text-gold-500 transition-colors"
              >
                <span className="text-gold-500 mr-1">⭐⭐⭐⭐⭐</span>
                <span><strong>4,9 / 5,0</strong> auf Google (32 Rezensionen)</span>
                <ExternalLink size={12} className="ml-1" />
              </a>
              <a
                href="https://www.my-hammer.de/auftragnehmer/luan-allround-service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-gray-300 hover:text-gold-500 transition-colors"
              >
                <span className="text-gold-500 mr-1">⭐⭐⭐⭐⭐</span>
                <span><strong>4,8 / 5,0</strong> auf MyHammer (6 Empfehlungen)</span>
                <ExternalLink size={12} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Navigation & Fokus-Leistungen */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-gold-500">Leistungen &amp; Region</h3>
            <ul className="space-y-2.5 text-gray-300 text-sm tracking-wide">
              <li>
                <Link to="/zaun-konfigurator" className="hover:text-gold-500 transition-colors flex items-center text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>3D-Zaunkonfigurator (Online)
                </Link>
              </li>
              <li>
                <Link to="/pflasterarbeiten-rastatt" className="hover:text-gold-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>Pflasterarbeiten Rastatt
                </Link>
              </li>
              <li>
                <Link to="/zaunbau-kuppenheim" className="hover:text-gold-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>Zaunbau Kuppenheim
                </Link>
              </li>
              <li>
                <Link to="/terrassenbau-kuppenheim" className="hover:text-gold-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>Terrassenbau
                </Link>
              </li>
              <li>
                <Link to="/gartenpflege-kuppenheim" className="hover:text-gold-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>Garten- &amp; Rasenpflege
                </Link>
              </li>
              <li>
                <Link to="/projekte" className="hover:text-gold-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>Referenzprojekte
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold-500 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>Gartenbau Ratgeber
                </Link>
              </li>
            </ul>
          </div>

          {/* NAP Kontaktinformationen (Exakt matching Impressum) */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-gold-500">Kontakt &amp; Standort (NAP)</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start group" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin size={18} className="mr-3 mt-0.5 shrink-0 text-gold-500" />
                <span className="leading-relaxed">
                  <span itemProp="streetAddress">Friedrichstraße 100</span><br />
                  <span itemProp="postalCode">76456</span> <span itemProp="addressLocality">Kuppenheim</span><br />
                  <span itemProp="addressRegion">Baden-Württemberg</span>, <span itemProp="addressCountry">Deutschland</span>
                </span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 shrink-0 text-gold-500" />
                <a href="tel:+4917647999118" className="hover:text-gold-500 transition-colors" itemProp="telephone">
                  +49 176 47999118
                </a>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 shrink-0 text-gold-500" />
                <a href="mailto:luanallroundservice@gmail.com" className="hover:text-gold-500 transition-colors" itemProp="email">
                  luanallroundservice@gmail.com
                </a>
              </li>
              <li className="flex items-start group text-xs text-gray-400">
                <Clock size={16} className="mr-3 mt-0.5 shrink-0 text-gold-500" />
                <span>
                  Mo–Do: 07:30 – 18:00 Uhr<br />
                  Fr: 07:30 – 13:00 Uhr<br />
                  Sa: 08:00 – 12:00 Uhr<br />
                  So: Geschlossen
                </span>
              </li>
            </ul>
          </div>

          {/* Vernetzen & Profile */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-gold-500">Vernetzen &amp; Anfragen</h3>
            <p className="text-xs text-gray-400 mb-4">
              Kostenlose Vor-Ort-Beratung im Umkreis von bis zu 150 km um Kuppenheim und Rastatt.
            </p>
            <div className="flex space-x-3 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61573146296399"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-earth-900 transition-all"
                aria-label="Facebook Profil"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@luanallrou"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-earth-900 transition-all font-bold text-xs"
                aria-label="TikTok Profil"
              >
                TT
              </a>
              <a
                href="https://maps.google.com/?cid=628035682730834283"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-earth-900 transition-all font-bold text-xs"
                aria-label="Google Maps Profil"
              >
                G
              </a>
            </div>

            <Link
              to="/kontakt"
              className="inline-block px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold text-xs uppercase tracking-wider rounded transition-all"
            >
              Kostenloses Angebot
            </Link>
          </div>
        </div>

        {/* Footer Bottom mit rechtlich verbindlichen Links */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Luan Allround Service • Inh. Memedali Limani. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/impressum" className="hover:text-gold-500 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-gold-500 transition-colors">Datenschutz</Link>
            <Link to="/standorte/kuppenheim" className="hover:text-gold-500 transition-colors">Standort Kuppenheim</Link>
            <Link to="/standorte/rastatt" className="hover:text-gold-500 transition-colors">Standort Rastatt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;