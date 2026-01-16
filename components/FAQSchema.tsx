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
            question: "Was kostet ein Doppelstabmattenzaun in Kuppenheim?",
            answer: "Ein Doppelstabmattenzaun kostet in Kuppenheim durchschnittlich 50-90€ pro laufenden Meter inkl. Montage, abhängig von Höhe, Material (anthrazit/grün/verzinkt) und Bodenbeschaffenheit. Wir bieten kostenlose Vor-Ort-Besichtigungen und transparente Festpreisangebote."
        },
        {
            question: "Welche Zaunhöhen sind in Kuppenheim erlaubt?",
            answer: "In Kuppenheim sind Zaunhöhen zwischen 1,20m und 2,00m üblicherweise genehmigungsfrei. Für Sichtschutzzäune über 1,80m empfehlen wir eine vorherige Abklärung mit der Gemeinde Kuppenheim. Wir beraten Sie gerne zu den baurechtlichen Vorschriften."
        },
        {
            question: "Wie lange dauert die Montage eines Doppelstabmattenzauns?",
            answer: "Die Montage eines Doppelstabmattenzauns dauert je nach Länge 1-3 Tage. Für einen 20 Meter langen Zaun benötigen wir in der Regel 1-2 Arbeitstage. Die genaue Dauer hängt von der Bodenbeschaffenheit und eventuellen Hindernissen ab."
        },
        {
            question: "Bieten Sie auch Gartenpflege als Jahresabo an?",
            answer: "Ja, wir bieten regelmäßige Gartenpflege als Jahresabo in Kuppenheim, Rastatt und Karlsruhe an. Das Abo umfasst Rasenmähen, Heckenschnitt, Vertikutieren und Unkrautentfernung zu festen monatlichen Preisen. So bleibt Ihr Garten das ganze Jahr über gepflegt."
        },
        {
            question: "Welchen Zaun empfehlen Sie für mehr Privatsphäre?",
            answer: "Für maximale Privatsphäre empfehlen wir Doppelstabmattenzäune mit Sichtschutzstreifen, WPC-Sichtschutzzäune oder Gabionenwände. Diese Lösungen bieten 100% Sichtschutz und sind wartungsarm. Wir beraten Sie gerne vor Ort zu den besten Optionen für Ihr Grundstück."
        },
        {
            question: "Arbeiten Sie auch in Rastatt und Karlsruhe?",
            answer: "Ja, wir sind in der gesamten Region tätig: Kuppenheim, Rastatt, Karlsruhe, Baden-Baden, Gaggenau und Bischweier. Als lokales Unternehmen aus Kuppenheim kennen wir die Region bestens und sind schnell vor Ort."
        },
        {
            question: "Was ist der Unterschied zwischen 6/5/6 und 8/6/8 Doppelstabmatten?",
            answer: "Die Zahlen geben die Drahtstärke an. 8/6/8 Matten haben dickere Drähte und sind stabiler - ideal für höhere Zäune (ab 1,60m) oder windexponierte Lagen. 6/5/6 Matten sind leichter und günstiger, perfekt für niedrigere Zäune bis 1,40m. Wir beraten Sie zur passenden Wahl."
        },
        {
            question: "Übernehmen Sie auch Zaunreparaturen?",
            answer: "Ja, wir reparieren beschädigte Zäune jeder Art in Kuppenheim und Umgebung. Ob Sturmschäden, Rost oder abgebrochene Pfosten - wir kümmern uns schnell und professionell darum. Auch Notdienst-Einsätze sind nach Absprache möglich."
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
