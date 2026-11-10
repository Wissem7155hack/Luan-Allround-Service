// Location Data for SEO Landing Pages
// This file contains information for each city/location we serve

export interface LocationData {
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
}

export const locations: LocationData[] = [
    {
        city: 'Kuppenheim',
        slug: 'kuppenheim',
        postalCode: '76456',
        region: 'Baden-Württemberg',
        description:
            'Professioneller Garten- und Landschaftsbau direkt vor Ihrer Haustür. Zaunbau, Rasenpflege, Pflasterarbeiten und mehr – zuverlässig und termingerecht in Kuppenheim.',
        landmarks: [
            'Innenstadt Kuppenheim',
            'Neubaugebiet Kuppenheim-Süd',
            'Industriegebiet Kuppenheim',
            'Kuppenheimer Wald',
            'Murg-Uferbereich',
        ],
        services: [
            'Zaunbau & Zaunmontage',
            'Gartenpflege & Rasenmähen',
            'Heckenschnitt',
            'Pflasterarbeiten',
            'Terrassenbau',
            'Hochdruckreinigung',
            'Grünschnittentsorgung',
            'Saisonale Gartenpflege',
        ],
        testimonial: {
            text: 'Schnell, sauber und professionell. Unser neuer Zaun steht perfekt und sieht großartig aus!',
            author: 'Familie Müller',
            service: 'Zaunbau',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.765!2d8.2535412!3d48.8264987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796f7e7e7e7e7e7%3A0x0!2sKuppenheim!5e0!3m2!1sde!2sde!4v1234567890',
    },
    {
        city: 'Rastatt',
        slug: 'rastatt',
        postalCode: '76437',
        region: 'Baden-Württemberg',
        description:
            'Ihr lokaler Partner für Gartenbau in Rastatt. Ob Zaunmontage, Rasenpflege oder Terrassenbau – wir setzen Ihre Gartenwünsche mit handwerklicher Präzision um.',
        landmarks: [
            'Schloss Rastatt',
            'Rastatter Innenstadt',
            'Rheinauenpark',
            'Neubaugebiete im Westen',
            'Industriegebiet Rastatt-Süd',
        ],
        services: [
            'Zaunbau & Sichtschutz',
            'Professionelle Gartenpflege',
            'Pflasterarbeiten & Wegebau',
            'Terrassenbau',
            'Rasenmähen & Vertikutieren',
            'Heckenschnitt & Formschnitt',
            'Objektreinigung',
            'Gartenumgestaltung',
        ],
        testimonial: {
            text: 'Hervorragende Arbeit bei Pflasterarbeiten. Das Team war pünktlich, freundlich und sehr professionell.',
            author: 'Herr Schmidt',
            service: 'Pflasterarbeiten',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.765!2d8.2035!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796f5f5f5f5f5f5%3A0x0!2sRastatt!5e0!3m2!1sde!2sde!4v1234567890',
    },
    {
        city: 'Baden-Baden',
        slug: 'baden-baden',
        postalCode: '76530',
        region: 'Baden-Württemberg',
        description:
            'Exklusiver Gartenbau-Service in Baden-Baden. Wir gestalten und pflegen Ihren Garten mit höchsten Ansprüchen an Qualität und Ästhetik.',
        landmarks: [
            'Kurpark Baden-Baden',
            'Lichtentaler Allee',
            'Innenstadt Baden-Baden',
            'Villen-Viertel Weststadt',
            'Rebland Baden-Baden',
        ],
        services: [
            'Exklusive Gartengestaltung',
            'Premium-Zaunbau',
            'Gartenpflege & Dauerpflege',
            'Terrassenbau mit Naturstein',
            'Objektpflege für gehobene Ansprüche',
            'Heckenschnitt & Formgehölze',
            'Hochdruckreinigung',
            'Winterdienst',
        ],
        testimonial: {
            text: 'Sehr zuvorkommend und mit Auge fürs Detail. Unsere Terrasse ist ein Traum geworden!',
            author: 'Familie Weber',
            service: 'Terrassenbau',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.765!2d8.2405!3d48.7606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796e6e6e6e6e6e6%3A0x0!2sBaden-Baden!5e0!3m2!1sde!2sde!4v1234567890',
    },
    {
        city: 'Karlsruhe',
        slug: 'karlsruhe',
        postalCode: '76131',
        region: 'Baden-Württemberg',
        description:
            'Gartenbau-Dienstleistungen für Karlsruhe und Umgebung. Schnell, zuverlässig und mit fairen Preisen – das ist Luan Allround Service.',
        landmarks: [
            'Karlsruher Stadtgebiet',
            'Durlach',
            'Neureut',
            'Mühlburg',
            'Südstadt Karlsruhe',
        ],
        services: [
            'Zaunbau & Tormontage',
            'Gartenpflege für Privat & Gewerbe',
            'Pflasterarbeiten',
            'Einfahrten & Parkplätze',
            'Rasenpflege',
            'Heckenschnitt',
            'Objektreinigung',
            'Grünflächenpflege',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.765!2d8.4037!3d49.0069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797e1e1e1e1e1e1%3A0x0!2sKarlsruhe!5e0!3m2!1sde!2sde!4v1234567890',
    },
    {
        city: 'Gaggenau',
        slug: 'gaggenau',
        postalCode: '76571',
        region: 'Baden-Württemberg',
        description:
            'Zuverlässiger Gartenbau-Partner in Gaggenau. Von Zaunbau bis Gartenpflege – wir sind Ihr Ansprechpartner für alle Außenarbeiten.',
        landmarks: [
            'Gaggenau Innenstadt',
            'Bad Rotenfels',
            'Freiolsheim',
            'Murgtal',
            'Industriegebiet Gaggenau',
        ],
        services: [
            'Zaunmontage',
            'Gartenpflege',
            'Rasenmähen',
            'Heckenschnitt',
            'Pflasterarbeiten',
            'Terrassenbau',
            'Hochdruckreinigung',
            'Kleinere Gartenarbeiten',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.765!2d8.3262!3d48.8044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796f9f9f9f9f9f9%3A0x0!2sGaggenau!5e0!3m2!1sde!2sde!4v1234567890',
    },
    {
        city: 'Bischweier',
        slug: 'bischweier',
        postalCode: '76476',
        region: 'Baden-Württemberg',
        description:
            'Garten- und Landschaftsbau in Bischweier. Persönlicher Service aus der Region für die Region – kompetent und fair.',
        landmarks: [
            'Bischweier Ortskern',
            'Neubaugebiete',
            'Umgebung Bischweier',
            'Murgtal-Region',
        ],
        services: [
            'Zaunbau',
            'Gartenpflege',
            'Rasenmähen & Pflege',
            'Heckenschnitt',
            'Pflasterarbeiten',
            'Kleinere Bauarbeiten',
            'Hochdruckreinigung',
            'Grünschnitt',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.765!2d8.3167!3d48.8569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796f0f0f0f0f0f0%3A0x0!2sBischweier!5e0!3m2!1sde!2sde!4v1234567890',
    },
    {
        city: 'Waldbronn',
        slug: 'waldbronn',
        postalCode: '76337',
        region: 'Baden-Württemberg',
        description:
            'Professioneller Zaunbau und Garten- & Landschaftsbau in Waldbronn (76337). Doppelstabmattenzäune, Sichtschutz, Terrassen- und Pflasterarbeiten mit kostenlosem Vor-Ort-Aufmaß.',
        landmarks: [
            'Waldbronn-Reichenbach',
            'Waldbronn-Busenbach',
            'Waldbronn-Etzenrot',
            'Kurpark Waldbronn',
            'Albtal-Region',
        ],
        services: [
            'Zaunbau & Zaunmontage',
            'Doppelstabmattenzaun 6/5/6 & 8/6/8',
            'Sichtschutzzäune',
            'Pflasterarbeiten',
            'Terrassenbau',
            'Gartenpflege',
            'Rollrasen verlegen',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.765!2d8.4735!3d48.9264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479709f9f9f9f9f9%3A0x0!2sWaldbronn!5e0!3m2!1sde!2sde!4v1234567890',
    },
    {
        city: 'Landau',
        slug: 'landau',
        postalCode: '76829',
        region: 'Rheinland-Pfalz',
        description:
            'Zaunbau und Garten- & Landschaftsbau in Landau in der Pfalz und der gesamten Südpfalz. Hochwertige Doppelstabmattenzäune, Gabionen und Pflasterarbeiten zu fairen Festpreisen.',
        landmarks: [
            'Landau Innenstadt',
            'Wollmesheimer Höhe',
            'Horst-Siedlung',
            'Queichheim',
            'Südpfalz-Region',
        ],
        services: [
            'Zaunbau Landau',
            'Doppelstabmattenzäune',
            'Industrie- & Gartenzäune',
            'Pflasterarbeiten & Hofeinfahrten',
            'Gartenumgestaltung',
            'Sichtschutz & Tore',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.765!2d8.1167!3d49.1986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479659f9f9f9f9f9%3A0x0!2sLandau!5e0!3m2!1sde!2sde!4v1234567890',
    },
];

// Helper function to get location by slug
export const getLocationBySlug = (slug: string): LocationData | undefined => {
    return locations.find((loc) => loc.slug === slug);
};

// Helper function to get all location slugs (for routing)
export const getLocationSlugs = (): string[] => {
    return locations.map((loc) => loc.slug);
};
