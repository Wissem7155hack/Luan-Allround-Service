import React from 'react';
import { Helmet } from 'react-helmet';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs?: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
    const defaultFAQs: FAQItem[] = [
        {
            question: "Was kosten Pflasterarbeiten pro m² in Rastatt und Kuppenheim?",
            answer: "Pflasterarbeiten in Rastatt und Kuppenheim kosten in der Regel zwischen 60€ und 140€ pro m² inkl. Verlegung und Tragschicht, abhängig von Unterbau, Pflasterart (Betonstein, Naturstein, Ökopflaster) und Entwässerung. Wir bieten kostenlose Vor-Ort-Beratung mit Festpreisgarantie."
        },
        {
            question: "Was kostet ein Doppelstabmattenzaun inklusive Montage in Kuppenheim?",
            answer: "Ein Doppelstabmattenzaun kostet in Kuppenheim durchschnittlich 50-110€ pro laufenden Meter inkl. Montage mit frostsicheren Betonfundamenten. Der Preis richtet sich nach Zaunhöhe, Drahtstärke (6/5/6 oder 8/6/8) und Sichtschutzstreifen."
        },
        {
            question: "Welche Materialien eignen sich am besten für Terrassenbau in Rastatt?",
            answer: "Für Terrassen im Rheintal empfehlen wir großformatige Keramik- bzw. Feinsteinzeugplatten, Natursteine wie Granit und Travertin oder formstabile WPC-Dielen. Wir gewährleisten fachgerechten Unterbau mit mindestens 2% Gefälle für optimale Drainage."
        },
        {
            question: "Welche Zaunhöhen sind in Baden-Württemberg genehmigungsfrei?",
            answer: "In Baden-Württemberg sind Zäune an der Grundstücksgrenze bis 1,50m bzw. 1,80m meist verfahrensfrei. Für Sichtschutzzäune über 1,80m oder an öffentlichen Straßen beraten wir Sie gerne zu den Vorschriften der Gemeinde Kuppenheim."
        },
        {
            question: "Wie lange dauert die Montage eines Doppelstabmattenzauns?",
            answer: "Die Montage eines Doppelstabmattenzauns dauert je nach Länge 1-3 Tage. Für einen 20 bis 30 Meter langen Zaun benötigen wir in der Regel 1-2 Arbeitstage."
        },
        {
            question: "Bieten Sie auch regelmäßige Gartenpflege als Jahresabo an?",
            answer: "Ja, wir bieten regelmäßige Gartenpflege als Jahresabo in Kuppenheim, Rastatt, Baden-Baden und Karlsruhe an. Das Abo umfasst Rasenmähen, Heckenschnitt nach BNatSchG, Vertikutieren und Unkrautentfernung zu festen Preisen."
        },
        {
            question: "In welchem Umkreis ist Luan Allround Service tätig?",
            answer: "Unser Hauptstandort ist Kuppenheim (76456). Wir bedienen Rastatt, Baden-Baden, Karlsruhe, Gaggenau, Bischweier und führen größere Zaunbau- und Pflasterprojekte im Radius von bis zu 150 km aus."
        },
        {
            question: "Was ist der Unterschied zwischen 6/5/6 und 8/6/8 Doppelstabmatten?",
            answer: "Die Zahlen geben die Drahtstärke an: 8/6/8 Matten haben dickere Drähte und sind extrem stabil – ideal für Zäune ab 1,60m oder windexponierte Grundstücke. 6/5/6 Matten sind leichter und preiswerter, ideal für Standardzäune bis 1,40m."
        }
    ];

    const faqItems = faqs || defaultFAQs;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default FAQSchema;
