import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CheckCircle, Phone, MapPin, Star, ArrowRight, HelpCircle } from 'lucide-react';
import { services, getServiceBySlug } from '../data/services';
import { locations, getLocationBySlug } from '../data/locations';
import SchemaMarkup from '../components/SchemaMarkup';

interface LocalServicePageProps {
    service?: string;
    city?: string;
}

const LocalServicePage: React.FC<LocalServicePageProps> = ({ service: propService, city: propCity }) => {
    const params = useParams();

    // Determine service and city from props or params
    const { service, city } = useMemo(() => {
        if (propService && propCity) {
            return { service: propService, city: propCity };
        }

        // Fallback to parsing slug from params if explicit props aren't provided
        if (params.slug) {
            const parts = params.slug.split('-');
            if (parts.length >= 2) {
                const city = parts.pop();
                const service = parts.join('-');
                return { service, city };
            }
        }

        return { service: 'gartenbau', city: 'kuppenheim' };
    }, [propService, propCity, params.slug]);

    // Get service and location data
    const serviceData = getServiceBySlug(service || '');
    const locationData = getLocationBySlug(city || '');

    // Helper to format strings
    const formatText = (text: string | undefined) => {
        if (!text) return '';
        return text.split(/[- ]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const formattedService = serviceData?.name || formatText(service);
    const formattedCity = locationData?.city || formatText(city);

    const title = `${formattedService} ${formattedCity} | Luan Allround Service`;
    const description = serviceData
        ? `${serviceData.description} in ${formattedCity}. ✓ ${serviceData.priceRange} ✓ Über 10 Jahre Erfahrung ✓ Kostenlose Beratung: 0176 47999118`
        : `Ihr Experte für ${formattedService} in ${formattedCity}. ✓ Professionell ✓ Zuverlässig ✓ Top-Bewertungen. Jetzt kostenloses Angebot anfordern: 0176 47999118`;

    const canonical = `https://luan-allround-service.de/${service}-${city}`;

    // Generate FAQ schema
    const faqSchema = serviceData?.faqs ? {
        "mainEntity": serviceData.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : undefined;

    // Generate Service schema
    const serviceSchema = {
        "serviceType": formattedService,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Luan Allround Service",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Friedrichstraße 100",
                "postalCode": "76456",
                "addressLocality": "Kuppenheim",
                "addressCountry": "DE"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": formattedCity
        },
        "description": serviceData?.description || `Ihr Experte für ${formattedService} in ${formattedCity}.`
    };

    return (
        <>
            <SEOHead
                title={title}
                description={description}
                canonical={canonical}
            />
            <SchemaMarkup type="Service" data={serviceSchema} />
            {faqSchema && <SchemaMarkup type="FAQPage" data={faqSchema} />}

            <div className="pt-24 pb-16 min-h-screen bg-stone-50">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Breadcrumbs */}
                    <div className="text-sm text-gray-500 mb-8">
                        <Link to="/" className="hover:text-green-600">Startseite</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">{formattedService} {formattedCity}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Left Content */}
                        <div>
                            <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                                Lokal & Zuverlässig
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif text-earth-900 mb-6 leading-tight">
                                {formattedService} {formattedCity}
                            </h1>

                            <div className="prose prose-lg text-gray-700 mb-8 max-w-none">
                                <p className="mb-4 font-semibold text-xl text-earth-800">
                                    Professionelle Umsetzung für Ihr Projekt: {formattedService} in {formattedCity} und Umgebung.
                                </p>
                                <p className="mb-4">
                                    {serviceData?.longDescription || `Suchen Sie einen erfahrenen und zuverlässigen Fachbetrieb für ${formattedService} in ${formattedCity}? Luan Allround Service ist Ihr regionaler Experte für hochwertige Gartenbau- und Landschaftsschutzprojekte. Mit jahrelanger Erfahrung und einem engagierten Team setzen wir Ihre Wünsche termingerecht und fachmännisch um. Wir verstehen, dass jedes Projekt so individuell ist wie unsere Kunden in ${formattedCity}, weshalb wir stets eine detaillierte und persönliche Beratung vor Ort anbieten.`}
                                </p>
                                <p className="mb-4">
                                    Warum sollten Sie sich für uns entscheiden? Bei der Umsetzung von <strong>{formattedService}</strong> kommt es auf Präzision, die richtigen Materialien und handwerkliches Geschick an. Fehler in der Planung oder Ausführung können schnell teuer werden. Als lokaler Betrieb aus der Region kennen wir die spezifischen Bodenverhältnisse und Witterungsbedingungen in {formattedCity} genau. Darauf stimmen wir unsere Arbeitsweise sowie die Materialauswahl perfekt ab. Egal ob für private Gärten, gewerbliche Außenanlagen oder öffentliche Flächen – Luan Allround Service liefert langlebige Ergebnisse.
                                </p>
                                <p className="mb-4">
                                    Ihre Vorteile bei Luan Allround Service:
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li><strong>Kostenlose Erstberatung:</strong> Wir kommen direkt zu Ihnen nach {formattedCity}, um Ihr Projekt rund um das Thema {formattedService} zu besprechen.</li>
                                        <li><strong>Regionale Nähe:</strong> Kurze Anfahrtswege ermöglichen uns eine schnelle, flexible und kostengünstige Projektabwicklung.</li>
                                        <li><strong>Transparente Festpreise:</strong> Keine versteckten Kosten. Sie erhalten ein detailliertes Angebot, auf das Sie sich verlassen können.</li>
                                        <li><strong>Hochwertige Materialien:</strong> Ob robuste Doppelstabmatten, witterungsbeständiges Natursteinpflaster oder pflegeleichter Rollrasen – wir verwenden nur Qualitätsware.</li>
                                    </ul>
                                </p>
                                <p>
                                    Unsere Kunden in {formattedCity}{locationData?.landmarks ? ` (insbesondere in Nähe ${locationData.landmarks[0]})` : ''} schätzen besonders unsere Zuverlässigkeit und saubere Arbeitsweise. Von der ersten Idee bis zur finalen Fertigstellung und Endabnahme stehen wir Ihnen als fester Ansprechpartner zur Seite. Lassen Sie uns gemeinsam Ihren Außenbereich in eine echte Wohlfühloase verwandeln. Wir freuen uns auf Ihr Projekt für <em>{formattedService} {formattedCity}</em>!
                                </p>
                            </div>

                            {/* Service Features */}
                            <ul className="space-y-4 mb-8">
                                {(serviceData?.features || [
                                    'Kostenlose Vor-Ort-Beratung',
                                    'Transparente Festpreise',
                                    'Termingerechte Ausführung',
                                    'Über 10 Jahre Erfahrung'
                                ]).slice(0, 6).map((item, index) => (
                                    <li key={index} className="flex items-start text-gray-700 font-medium">
                                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Price Range */}
                        

                            {/* 3D Zaunplaner Callout */}
                            {service === 'zaunbau' && (
                                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-3 my-4">
                                    <div>
                                        <h4 className="font-bold text-sm text-emerald-900">✨ Zaun vorab online in 3D planen!</h4>
                                        <p className="text-xs text-emerald-800">Grundriss zeichnen, Matten &amp; Tore konfigurieren und direkt unverbindlich anfragen.</p>
                                    </div>
                                    <Link
                                        to="/zaun-konfigurator"
                                        className="shrink-0 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition"
                                    >
                                        3D-Planer öffnen
                                    </Link>
                                </div>
                            )}

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#kontakt"
                                    className="bg-[#4a7c59] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-[#3d664a] transition-all text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    <Phone className="w-5 h-5" />
                                    Angebot anfordern
                                </a>
                                <a
                                    href="tel:+4917647999118"
                                    className="border-2 border-[#4a7c59] text-[#4a7c59] px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-[#4a7c59] hover:text-white transition-all text-center"
                                >
                                    0176 47999118
                                </a>
                            </div>
                        </div>

                        {/* Right Content - Service Box */}
                        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Einsatzgebiet {formattedCity}</h3>
                                    <p className="text-gray-500">Wir sind schnell bei Ihnen vor Ort</p>
                                </div>
                            </div>

                            <div className="bg-stone-50 p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-gold-500 fill-current" />
                                    Warum Luan Allround Service?
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    {locationData?.testimonial?.text || `„Wir legen größten Wert auf Kundenzufriedenheit. Egal ob kleiner Gartenauftrag oder großes Bauprojekt in ${formattedCity} – wir arbeiten sauber, pünktlich und zuverlässig."`}
                                </p>
                                <div className="mt-4 font-bold text-gray-900">- Memedali Limani, Geschäftsführer</div>
                            </div>

                            {/* Social Proof */}
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-sm text-gray-600 mb-2">
                                    ⭐⭐⭐⭐⭐ <strong>über 25 Bewertungen</strong>
                                </p>
                                <p className="text-xs text-gray-500 mb-4">
                                    Seit über 5 Jahren im Einsatz für {formattedCity} und Umgebung
                                </p>
                                <Link to="/#kontakt" className="inline-flex items-center text-green-700 font-bold hover:underline text-sm">
                                    Jetzt Kontakt aufnehmen <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* FAQ Section */}
                    {serviceData?.faqs && serviceData.faqs.length > 0 && (
                        <div className="mt-20">
                            <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-8 text-center flex items-center justify-center gap-3">
                                <HelpCircle className="w-8 h-8 text-green-700" />
                                Häufig gestellte Fragen
                            </h2>
                            <div className="max-w-3xl mx-auto space-y-6">
                                {serviceData.faqs.map((faq, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default LocalServicePage;
