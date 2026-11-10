import React from 'react';
import SEOHead from '../components/SEOHead';

const DatenschutzPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-stone-50">
            <SEOHead
                title="Datenschutzerklärung | Luan Allround Service"
                description="Datenschutzerklärung von Luan Allround Service."
                noindex={true}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-serif text-earth-900 mb-8">Datenschutzerklärung</h1>

                <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-earth-900 mb-2">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Allgemeine Hinweise</h3>
                        <p className="text-gray-700">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Datenerfassung auf dieser Website</h3>
                        <p className="text-gray-700"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                        <p className="text-gray-700">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
                        <p className="text-gray-700 mt-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
                        <p className="text-gray-700">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-earth-900 mb-2">2. Hosting und Content Delivery Networks (CDN)</h2>
                        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Externes Hosting</h3>
                        <p className="text-gray-700">Diese Website wird ganz oder teilweise bei einem externen Dienstleister gehostet. Personbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-earth-900 mb-2">3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
                        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Datenschutz</h3>
                        <p className="text-gray-700">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                        <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="text-gray-700">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                        <p className="text-gray-700 mt-2">
                            Luan Allround Service<br />
                            Memedali Limani<br />
                            Friedrichstraße 100<br />
                            76456 Kuppenheim<br />
                            <br />
                            Telefon: 0176 47999118<br />
                            E-Mail: luanallroundservice@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatenschutzPage;
