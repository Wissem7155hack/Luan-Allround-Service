import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from './SEOHead';
import BreadcrumbSchema from './BreadcrumbSchema';

interface LocationData {
    city: string;
    slug: string;
    postalCode: string;
    region: string;
    description: string;
    landmarks: string[];
    services: string[];
    testimonial?: {
        text: string;
        author: string;
        service: string;
    };
    mapUrl: string;
    latitude?: number;
    longitude?: number;
}

interface LocationPageProps {
    location: LocationData;
}

const LocationPage: React.FC<LocationPageProps> = ({ location }) => {
    // Inject location-specific LocalBusiness schema
    useEffect(() => {
        const locationSchema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `https://luan-allround-service.de/standorte/${location.slug || location.city.toLowerCase()}#localbusiness`,
            "name": `Luan Allround Service - Gartenbau ${location.city}`,
            "description": `Professioneller Garten- und Landschaftsbau in ${location.city}. Zaunbau, Gartenpflege, Pflasterarbeiten und mehr. Ihr lokaler Partner für Außenanlagen.`,
            "image": "https://luan-allround-service.de/images/logo.png",
            "telephone": "+4917647999118",
            "email": "luanallroundservice@gmail.com",
            "url": `https://luan-allround-service.de/standorte/${location.slug || location.city.toLowerCase()}`,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Friedrichstraße 100",
                "addressLocality": location.city,
                "postalCode": location.postalCode,
                "addressRegion": location.region,
                "addressCountry": "DE"
            },
            "geo": location.latitude && location.longitude ? {
                "@type": "GeoCoordinates",
                "latitude": location.latitude,
                "longitude": location.longitude
            } : undefined,
            "areaServed": {
                "@type": "City",
                "name": location.city
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "14:00"
                }
            ],
            "priceRange": "€€",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `Gartenbau-Dienstleistungen in ${location.city}`,
                "itemListElement": location.services.slice(0, 4).map((service, index) => ({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": service,
                        "areaServed": location.city
                    }
                }))
            },
            "parentOrganization": {
                "@type": "Organization",
                "@id": "https://luan-allround-service.de/#organization",
                "name": "Luan Allround Service"
            }
        };

        // Remove undefined values
        const cleanSchema = JSON.parse(JSON.stringify(locationSchema));

        let schemaScript = document.querySelector('script[data-schema="location"]');
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.setAttribute('type', 'application/ld+json');
            schemaScript.setAttribute('data-schema', 'location');
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(cleanSchema);

        return () => {
            const script = document.querySelector('script[data-schema="location"]');
            if (script) {
                script.remove();
            }
        };
    }, [location]);

    const citySlug = location.slug || location.city.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="min-h-screen bg-stone-50">
            {/* SEO Head */}
            <SEOHead
                title={`Zaunbau & Gartenbau ${location.city} | Luan Allround Service ⭐ Ihr Meisterbetrieb`}
                description={`Professioneller Zaunbau & Gartenbau in ${location.city} ✓ Doppelstabmattenzäune ✓ Sichtschutz ✓ Gartenpflege ✓ Pflasterarbeiten. Kostenlose Beratung: 0176 47999118. ${location.description}`}
                keywords={`Zaunbau ${location.city}, Gartenbau ${location.city}, Doppelstabmattenzaun ${location.city}, Gartenpflege ${location.city}, Landschaftsbau ${location.region}, Sichtschutz ${location.city}, Pflasterarbeiten ${location.city}`}
                canonical={`https://luan-allround-service.de/standorte/${citySlug}`}
            />

            {/* Breadcrumb Schema */}
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Standorte', url: '/standorte' },
                    { name: location.city, url: `/standorte/${citySlug}` }
                ]}
            />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-earth-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <MapPin className="w-6 h-6 text-gold-500" />
                            <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm">
                                Ihr Gartenbau-Partner vor Ort
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
                            Zaunbau & Gartenbau in{' '}
                            <span className="text-gold-400 italic">{location.city}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {location.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <a
                                href="tel:+4917647999118"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold uppercase tracking-wider transition-all shadow-xl hover:-translate-y-1"
                            >
                                <Phone className="mr-2 h-5 w-5" />
                                Jetzt anrufen
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-earth-900 text-white font-bold uppercase tracking-wider transition-all"
                            >
                                Kostenlose Beratung
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                            Unsere Leistungen
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-earth-900">
                            Zaunbau & Gartenbau-Service in {location.city}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {location.services.map((service, index) => (
                            <div
                                key={index}
                                className="p-6 bg-stone-50 hover:bg-earth-900 group transition-all duration-300 border-b-4 border-transparent hover:border-gold-500"
                            >
                                <CheckCircle className="w-8 h-8 text-gold-500 mb-4" />
                                <h3 className="text-lg font-serif text-earth-900 group-hover:text-white transition-colors">
                                    {service}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center text-gold-500 hover:text-earth-900 font-bold uppercase tracking-wider transition-colors border-b-2 border-gold-500 pb-1"
                        >
                            Alle Leistungen ansehen
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Local Information */}
            <section className="py-16 md:py-24 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                                Lokales Know-How
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-6">
                                Ihr Zaunbau-Experte in {location.city}
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Als Ihr lokaler Gartenbau-Partner in {location.city} und {location.region}{' '}
                                kennen wir die Besonderheiten der Region. Von den Bodenverhältnissen bis zu
                                den klimatischen Bedingungen – wir wissen, was Ihr Garten braucht. Ob <strong>Doppelstabmattenzaun</strong>,
                                <strong> Sichtschutz</strong> oder <strong>Gartenpflege</strong> – wir liefern Qualität.
                            </p>

                            {location.landmarks.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-serif text-earth-900 mb-4">
                                        Wir sind in Ihrer Nähe aktiv:
                                    </h3>
                                    <ul className="space-y-2">
                                        {location.landmarks.map((landmark, index) => (
                                            <li key={index} className="flex items-start">
                                                <MapPin className="w-5 h-5 text-gold-500 mr-2 mt-1 shrink-0" />
                                                <span className="text-gray-700">{landmark}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="flex items-start gap-4 p-6 bg-earth-900 text-white">
                                <Clock className="w-8 h-8 text-gold-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Öffnungszeiten</h4>
                                    <p className="text-gray-300">
                                        Mo-Fr: 08:00 - 18:00 Uhr
                                        <br />
                                        Sa: 08:00 - 14:00 Uhr
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                                <iframe
                                    src={location.mapUrl}
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                    title={`Karte von ${location.city} - Luan Allround Service Einsatzgebiet`}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {location.testimonial && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="relative">
                            <div className="text-gold-500 text-6xl font-serif mb-4">"</div>
                            <blockquote className="text-2xl md:text-3xl font-serif text-earth-900 italic mb-8">
                                {location.testimonial.text}
                            </blockquote>
                            <div className="border-t-2 border-gold-500 w-24 mx-auto mb-6"></div>
                            <cite className="not-italic">
                                <p className="font-bold text-earth-900">{location.testimonial.author}</p>
                                <p className="text-gray-600">{location.city} • {location.testimonial.service}</p>
                            </cite>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-earth-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">
                        Bereit für Ihren Traumgarten in {location.city}?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot. Wir freuen uns auf Ihr Projekt!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+4917647999118"
                            className="inline-flex items-center justify-center px-10 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold uppercase tracking-wider transition-all shadow-xl hover:-translate-y-1"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            +49 176 47999118
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-earth-900 text-white font-bold uppercase tracking-wider transition-all"
                        >
                            Kontaktformular
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationPage;
