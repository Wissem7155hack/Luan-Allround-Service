import React from 'react';
import SEOHead from '../components/SEOHead';

const ImpressumPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-stone-50">
            <SEOHead
                title="Impressum | Luan Allround Service"
                description="Impressum von Luan Allround Service - Ihr Fachbetrieb für Garten- und Landschaftsbau in Kuppenheim."
                noindex={true}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-serif text-earth-900 mb-8">Impressum</h1>

                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-bold text-earth-900 mb-4">Angaben gemäß § 5 TMG</h2>
                    <p className="text-gray-700 mb-6">
                        Luan Allround Service<br />
                        Memedali Limani<br />
                        Friedrichstraße 100<br />
                        76456 Kuppenheim
                    </p>

                    <h2 className="text-xl font-bold text-earth-900 mb-4">Kontakt</h2>
                    <p className="text-gray-700 mb-6">
                        Telefon: 0176 47999118<br />
                        E-Mail: luanallroundservice@gmail.com
                    </p>

                    <h2 className="text-xl font-bold text-earth-900 mb-4">Umsatzsteuer-ID</h2>
                    <p className="text-gray-700 mb-6">
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        DE 123456789 (Hier korrekte USt-IdNr eintragen)
                    </p>

                    <h2 className="text-xl font-bold text-earth-900 mb-4">EU-Streitschlichtung</h2>
                    <p className="text-gray-700 mb-6">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>

                    <h2 className="text-xl font-bold text-earth-900 mb-4">Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                    <p className="text-gray-700">
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImpressumPage;
