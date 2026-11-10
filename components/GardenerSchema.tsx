import React from 'react';
import { Helmet } from 'react-helmet';

export const GardenerSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Gardener",
        "@id": "https://luan-allround-service.de/#gardener",
        "name": "Luan Allround Service",
        "description": "Professioneller Garten- und Landschaftsbau mit Spezialisierung auf Zaunmontage, Doppelstabmattenzäune und Gartenpflege in Kuppenheim, Rastatt und Karlsruhe",
        "founder": {
            "@type": "Person",
            "name": "Memedali Limani",
            "jobTitle": "Geschäftsführer & Landschaftsgärtner"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Kuppenheim"
            },
            {
                "@type": "City",
                "name": "Rastatt"
            },
            {
                "@type": "City",
                "name": "Baden-Baden"
            },
            {
                "@type": "City",
                "name": "Karlsruhe"
            },
            {
                "@type": "City",
                "name": "Gaggenau"
            },
            {
                "@type": "City",
                "name": "Bischweier"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Garten- und Zaunbau Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "@id": "#doppelstabmattenzaun",
                        "name": "Doppelstabmattenzaun Montage",
                        "description": "Professionelle Montage von Doppelstabmattenzäunen 6/5/6 und 8/6/8 in anthrazit, grün oder verzinkt. Fachgerechte Installation mit Betonfundamenten.",
                        "provider": {
                            "@id": "https://luan-allround-service.de/#organization"
                        },
                        "areaServed": ["Kuppenheim", "Rastatt", "Karlsruhe", "Baden-Baden"],
                        "category": "Zaunbau"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "@id": "#sichtschutz",
                        "name": "Sichtschutz & Gabionen",
                        "description": "Installation von Sichtschutzzäunen aus Holz, WPC und Kunststoff sowie Gabionenwänden und Gabionenzäunen",
                        "provider": {
                            "@id": "https://luan-allround-service.de/#organization"
                        },
                        "category": "Sichtschutz"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "@id": "#gartenpflege",
                        "name": "Regelmäßige Gartenpflege",
                        "description": "Rasenmähen, Heckenschnitt, Vertikutieren, Beetpflege und Unkrautentfernung - auch als Jahresabo verfügbar",
                        "category": "Gartenpflege"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "@id": "#pflasterarbeiten",
                        "name": "Pflasterarbeiten & Terrassenbau",
                        "description": "Professionelle Pflasterarbeiten für Einfahrten, Gehwege und Terrassen mit Naturstein und Betonstein",
                        "category": "Pflasterarbeiten"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "@id": "#rollrasen",
                        "name": "Rollrasen verlegen",
                        "description": "Professionelle Verlegung von hochwertigem Rollrasen mit Vorbereitung des Untergrunds",
                        "category": "Rasenarbeiten"
                    }
                }
            ]
        },
        "url": "https://luan-allround-service.de/",
        "telephone": "+4917647999118",
        "email": "luanallroundservice@gmail.com",
        "priceRange": "€€",
        "paymentAccepted": "Bar, Überweisung, EC-Karte",
        "currenciesAccepted": "EUR"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default GardenerSchema;
