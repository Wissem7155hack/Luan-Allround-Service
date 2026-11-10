// Service Data for SEO-Optimized Landing Pages
// This file contains comprehensive information for each service offered

export interface ServiceData {
    name: string;
    slug: string;
    description: string;
    longDescription: string;
    features: string[];
    priceRange: string;
    keywords: string[];
    faqs: Array<{
        question: string;
        answer: string;
    }>;
}

export const services: ServiceData[] = [
    {
        name: 'Zaunbau',
        slug: 'zaunbau',
        description: 'Professionelle Montage von Doppelstabmatten, Holzzäunen, Gabionen und Sichtschutzelementen',
        longDescription: 'Als erfahrener Fachbetrieb für Zaunbau montieren wir Doppelstabmattenzäune in höchster Qualität. Ob 6/5/6 Standard oder 8/6/8 Heavy-Duty in Anthrazit RAL 7016 oder Moosgrün RAL 6005 – wir bieten fachgerechte Installation mit frostsicheren Betonfundamenten (80cm Tiefe). Alle Zäune sind feuerverzinkt und pulverbeschichtet für jahrzehntelange Haltbarkeit.',
        features: [
            'Doppelstabmattenzaun 6/5/6 und 8/6/8',
            'Feuerverzinkt und pulverbeschichtet',
            'Frostsichere Betonfundamente',
            'Anthrazit RAL 7016 oder Moosgrün RAL 6005',
            'Sichtschutzstreifen-Integration',
            'Gabionen und Steinzäune',
            'Holzzäune aus Lärche oder WPC'
        ],
        priceRange: '50-120€/m',
        keywords: ['Doppelstabmattenzaun', 'Zaunmontage', 'Gabionenzaun', 'Sichtschutz', 'Zaun aufstellen'],
        faqs: [
            {
                question: 'Was kostet ein Doppelstabmattenzaun pro Meter?',
                answer: 'Die Kosten liegen zwischen 50€ und 120€ pro Meter inklusive professioneller Montage mit Betonfundamenten, abhängig von Höhe und Qualität.'
            },
            {
                question: 'Wie lange dauert eine Zaunmontage?',
                answer: 'Für einen durchschnittlichen Garten benötigen wir etwa 2-3 Tage inklusive Beton-Aushärtung.'
            },
            {
                question: 'Benötige ich eine Genehmigung?',
                answer: 'In Baden-Württemberg sind Zäune bis 1,50m meist genehmigungsfrei. Wir beraten Sie zu lokalen Vorschriften.'
            }
        ]
    },
    {
        name: 'Rasenpflege',
        slug: 'rasenpflege',
        description: 'Professionelles Rasenmähen, Vertikutieren, Düngen und Rasenpflege für sattes Grün',
        longDescription: 'Regelmäßige Rasenpflege ist der Schlüssel zu einem gesunden, dichten Rasen. Wir mähen in optimaler Schnitthöhe (4-5cm), vertikutieren im Frühjahr zur Moosentfernung, düngen mit speziellem Langzeitdünger und sorgen für perfekte Bewässerung. Auch Rollrasenverlegung für schnelle Ergebnisse.',
        features: [
            'Regelmäßiges Rasenmähen (alle 7-10 Tage)',
            'Vertikutieren im Frühjahr',
            'Langzeitdüngung mit Eisen',
            'Moos- und Unkrautbekämpfung',
            'Rollrasenverlegung',
            'Rasenreparatur und Nachsaat',
            'Bewässerungsberatung'
        ],
        priceRange: '25-60€/Einsatz',
        keywords: ['Rasenmähen', 'Vertikutieren', 'Rasenpflege', 'Rollrasen verlegen', 'Rasen düngen'],
        faqs: [
            {
                question: 'Wie oft sollte der Rasen gemäht werden?',
                answer: 'In der Wachstumsphase (April-Oktober) empfehlen wir alle 7-10 Tage mähen für optimale Dichte.'
            },
            {
                question: 'Wann ist die beste Zeit zum Vertikutieren?',
                answer: 'Im Frühjahr (April/Mai), wenn der Boden trocken ist und das Gras wieder aktiv wächst.'
            }
        ]
    },
    {
        name: 'Gartenpflege',
        slug: 'gartenpflege',
        description: 'Ganzheitliche Gartenpflege: Heckenschnitt, Beetpflege, Unkrautbekämpfung und saisonale Arbeiten',
        longDescription: 'Professionelle Gartenpflege das ganze Jahr über. Von Frühjahrsarbeiten (Rückschnitt, Neupflanzung) über sommerliche Pflegeschnitte bis zu Herbstarbeiten (Laub entfernen, Wintervorbereitung). Wir bieten auch Jahresabos für regelmäßige Gartenpflege zu planbaren Kosten.',
        features: [
            'Heckenschnitt und Formschnitt',
            'Beetpflege und Unkrautjäten',
            'Baumpflege und Rückschnitt',
            'Laubentsorgung im Herbst',
            'Frühjahrsarbeiten (Schnitt, Düngung)',
            'Grünschnittentsorgung',
            'Jahresabo verfügbar'
        ],
        priceRange: '35-75€/Stunde',
        keywords: ['Gartenpflege', 'Heckenschnitt', 'Beetpflege', 'Baumpflege', 'Gartenservice'],
        faqs: [
            {
                question: 'Bieten Sie regelmäßige Gartenpflege an?',
                answer: 'Ja, wir bieten Jahresabos für regelmäßige Gartenpflege mit festen monatlichen Kosten an.'
            },
            {
                question: 'Entsorgen Sie den Grünschnitt?',
                answer: 'Selbstverständlich. Wir nehmen alle Gartenabfälle mit und entsorgen sie fachgerecht.'
            }
        ]
    },
    {
        name: 'Rollrasen',
        slug: 'rollrasen',
        description: 'Professionelle Rollrasenverlegung mit Bodenvorbereitung für sofortig nutzbaren Rasen',
        longDescription: 'Rollrasen ist die schnellste Lösung für einen perfekten Rasen. Wir bereiten den Untergrund fachgerecht vor, verlegen hochwertigen Rollrasen und sorgen für optimale Anwachsbedingungen. Nach 2-3 Wochen ist Ihr Rasen voll belastbar.',
        features: [
            'Hochwertige Rollrasen-Qualität',
            'Professionelle Bodenvorbereitung',
            'Präzise Verlegung',
            'Anwachsgarantie',
            'Pflegeberatung inklusive',
            'Sofort grün und nutzbar',
            'Ideal für Neuanlagen'
        ],
        priceRange: '15-25€/m²',
        keywords: ['Rollrasen verlegen', 'Fertigrasen', 'Rollrasen kaufen', 'Rasen Neuanlage'],
        faqs: [
            {
                question: 'Wie lange dauert die Rollrasenverlegung?',
                answer: 'Ein durchschnittlicher Garten (100-150m²) ist in 1-2 Tagen fertig verlegt.'
            },
            {
                question: 'Wann kann ich den Rollrasen betreten?',
                answer: 'Leichtes Begehen ist sofort möglich, volle Belastung nach 2-3 Wochen Anwachszeit.'
            }
        ]
    },
    {
        name: 'Heckenschnitt',
        slug: 'heckenschnitt',
        description: 'Fachgerechter Heckenschnitt für Thuja, Kirschlorbeer, Liguster und alle heimischen Hecken',
        longDescription: 'Professioneller Heckenschnitt für dichte, gesunde Hecken. Wir schneiden im richtigen Zeitpunkt (vor der Brutzeit), verwenden scharfe Werkzeuge für saubere Schnitte und formen Ihre Hecke nach Wunsch. Auch Radikalrückschnitte für überalterte Hecken möglich.',
        features: [
            'Formschnitt für alle Heckenarten',
            'Thuja, Kirschlorbeer, Liguster',
            'Brutzeit-konforme Termine',
            'Radikalrückschnitt möglich',
            'Professionelle Motorheckenscheren',
            'Grünschnittentsorgung inklusive',
            'Jahresvertrag verfügbar'
        ],
        priceRange: '15-30€/lfd. Meter',
        keywords: ['Heckenschnitt', 'Hecke schneiden', 'Thujahecke', 'Formschnitt', 'Hecke kürzen'],
        faqs: [
            {
                question: 'Wann dürfen Hecken geschnitten werden?',
                answer: 'Radikale Rückschnitte nur von Oktober bis Februar. Pflegeschnitte sind ganzjährig außerhalb der Brutzeit möglich.'
            },
            {
                question: 'Was kostet Heckenschnitt?',
                answer: 'Ab 15€ pro laufendem Meter, abhängig von Höhe und Dichte der Hecke.'
            }
        ]
    },
    {
        name: 'Pflasterarbeiten',
        slug: 'pflasterarbeiten',
        description: 'Professionelle Pflasterarbeiten für Einfahrten, Wege und Terrassen mit Naturstein oder Beton',
        longDescription: 'Hochwertige Pflasterarbeiten mit jahrzehntelanger Haltbarkeit. Wir bauen den Untergrund fachgerecht auf (30cm Schotter bei befahrbaren Flächen), achten auf korrektes Gefälle (mind. 2%) und verwenden qualitativ hochwertige Materialien. Von Betonpflaster bis zu exklusivem Naturstein.',
        features: [
            'Einfahrten und Parkplätze',
            'Gehwege und Terrassen',
            'Naturstein oder Betonpflaster',
            'Fachgerechter Unterbau',
            'Korrekte Entwässerung',
            'Randstein-Einfassungen',
            'Fugenverguss oder Fugensand'
        ],
        priceRange: '40-120€/m²',
        keywords: ['Pflasterarbeiten', 'Terrasse pflastern', 'Einfahrt pflastern', 'Naturstein verlegen'],
        faqs: [
            {
                question: 'Was kostet eine gepflasterte Einfahrt?',
                answer: 'Je nach Material zwischen 40€ (Betonpflaster) und 120€ (Naturstein) pro m² inklusive Unterbau.'
            },
            {
                question: 'Wie lange hält Pflaster?',
                answer: 'Bei fachgerechtem Unterbau und Verlegung hält Pflaster problemlos 30-50 Jahre.'
            }
        ]
    },
    {
        name: 'Terrassenbau',
        slug: 'terrassenbau',
        description: 'Exklusive Terrassen aus Naturstein, Keramik, Holz oder WPC – Ihr Outdoor-Wohnzimmer',
        longDescription: 'Die Terrasse ist im Sommer das zweite Wohnzimmer. Wir bauen Terrassen aus Naturstein (Granit, Basalt, Travertin), modernen Keramikplatten, Holz oder WPC. Mit perfektem Gefälle, professionellem Unterbau und dauerhafter Haltbarkeit.',
        features: [
            'Naturstein (Granit, Basalt, Sandstein)',
            'Keramikplatten großformatig',
            'Holzterrassen (Lärche, Bangkirai)',
            'WPC-Terrassen wartungsfrei',
            'Perfektes Gefälle und Drainage',
            'Unterkonstruktion inklusive',
            'Terrassenüberdachungen möglich'
        ],
        priceRange: '60-180€/m²',
        keywords: ['Terrassenbau', 'Holzterrasse', 'Naturstein Terrasse', 'WPC Terrasse', 'Terrasse bauen'],
        faqs: [
            {
                question: 'Welches Material ist am besten?',
                answer: 'Naturstein ist langlebig und edel, WPC ist pflegeleicht, Holz bietet natürliche Wärme. Wir beraten Sie individuell.'
            },
            {
                question: 'Wie lange dauert der Terrassenbau?',
                answer: 'Eine Standardterrasse (20-30m²) ist in 3-5 Arbeitstagen fertiggestellt.'
            }
        ]
    },
    {
        name: 'Sichtschutz',
        slug: 'sichtschutz',
        description: 'Moderner Sichtschutz aus Holz, WPC oder Aluminium für Privatsphäre in Ihrem Garten',
        longDescription: 'Privatsphäre ist im eigenen Garten wichtig. Wir installieren hochwertige Sichtschutzzäune aus Thermoholz, WPC oder Aluminium-Lamellen. In Baden-Württemberg sind Sichtschutzzäune bis 1,80m an der Grenze meist genehmigungsfrei. Auch Lärmschutz-Funktion möglich.',
        features: [
            'Holzsichtschutz (Thermokiefer, Lärche)',
            'WPC-Sichtschutz wartungsfrei',
            'Aluminium-Lamellen modern',
            'Höhe bis 1,80m genehmigungsfrei',
            'Lärmschutz-Wirkung',
            'LED-Beleuchtung integrierbar',
            'Feste Pfosten einbetoniert'
        ],
        priceRange: '120-250€/lfd. Meter',
        keywords: ['Sichtschutz', 'Sichtschutzzaun', 'WPC Zaun', 'Holzzaun', 'Privatsphäre Garten'],
        faqs: [
            {
                question: 'Wie hoch darf Sichtschutz sein?',
                answer: 'In Baden-Württemberg sind an der Grundstücksgrenze 1,80m Höhe meist genehmigungsfrei.'
            },
            {
                question: 'Welches Material ist am langlebigsten?',
                answer: 'Aluminium ist wartungsfrei und hält am längsten, WPC ist ebenfalls sehr langlebig und pflegeleicht.'
            }
        ]
    },
    {
        name: 'Gabionen',
        slug: 'gabionen',
        description: 'Gabionenzäune und Gabionenwände als robuster Sicht- und Lärmschutz',
        longDescription: 'Gabionen sind mit Steinen gefüllte Drahtkörbe – ideal als Sicht-, Lärm- und Windschutz. Wir montieren Gabionenzäune in verschiedenen Höhen, füllen sie mit Natursteinen Ihrer Wahl und sorgen für stabile Fundamente. Gabionen reduzieren Straßenlärm um bis zu 10 Dezibel.',
        features: [
            'Gabionenzäune verschiedene Höhen',
            'Naturstein-Füllung nach Wahl',
            'Lärmschutz bis -10dB',
            'Wartungsfrei und langlebig',
            'Moderne Optik',
            'Windschutz für Terrassen',
            'Kombinierbar mit Holzelementen'
        ],
        priceRange: '80-150€/lfd. Meter',
        keywords: ['Gabionen', 'Gabionenzaun', 'Steinzaun', 'Lärmschutz', 'Gabionenwand'],
        faqs: [
            {
                question: 'Was kosten Gabionen?',
                answer: 'Ab 80€ pro laufendem Meter für niedrige Gabionen, höhere Gabionen bis 150€/m inklusive Steinbefüllung.'
            },
            {
                question: 'Schützen Gabionen vor Lärm?',
                answer: 'Ja, gefüllte Gabionen können Straßenlärm um bis zu 10 Dezibel reduzieren.'
            }
        ]
    },
    {
        name: 'Baumpflege',
        slug: 'baumpflege',
        description: 'Professionelle Baumpflege, Baumschnitt und Baumfällung durch erfahrene Experten',
        longDescription: 'Fachgerechte Baumpflege erhält die Gesundheit und Sicherheit Ihrer Bäume. Wir führen Pflegeschnitte durch, entfernen Totholz, kappen überhängende Äste und fällen bei Bedarf ganze Bäume. Immer unter Beachtung der Baumschutzverordnung.',
        features: [
            'Pflegeschnitt für Obstbäume',
            'Kronenauslichtung',
            'Totholz-Entfernung',
            'Baumfällung bei Bedarf',
            'Sturmschadenbeseitigung',
            'Baumschutzverordnung beachtet',
            'Häckselservice verfügbar'
        ],
        priceRange: 'ab 150€/Baum',
        keywords: ['Baumpflege', 'Baumschnitt', 'Baumfällung', 'Obstbaumschnitt', 'Kronenauslichtung'],
        faqs: [
            {
                question: 'Wann dürfen Bäume geschnitten werden?',
                answer: 'Pflegeschnitte sind ganzjährig möglich, radikale Rückschnitte nur von Oktober bis Februar.'
            },
            {
                question: 'Benötige ich eine Genehmigung für Baumfällung?',
                answer: 'In vielen Gemeinden sind Bäume ab einem bestimmten Umfang geschützt. Wir beraten Sie dazu.'
            }
        ]
    }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceData | undefined => {
    return services.find((service) => service.slug === slug);
};

// Helper function to get all service slugs (for routing)
export const getServiceSlugs = (): string[] => {
    return services.map((service) => service.slug);
};
