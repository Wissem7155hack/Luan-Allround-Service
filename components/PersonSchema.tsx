import React from 'react';
import { Helmet } from 'react-helmet';

interface PersonSchemaProps {
    name?: string;
    jobTitle?: string;
    telephone?: string;
    email?: string;
}

export const PersonSchema: React.FC<PersonSchemaProps> = ({
    name = "Memedali Limani",
    jobTitle = "Geschäftsführer & Landschaftsgärtner",
    telephone = "+4917647999118",
    email = "luanallroundservice@gmail.com"
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "jobTitle": jobTitle,
        "worksFor": {
            "@id": "https://www.luan-allround-service.de/#organization"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Friedrichstraße 100",
            "addressLocality": "Kuppenheim",
            "postalCode": "76456",
            "addressCountry": "DE"
        },
        "telephone": telephone,
        "email": email,
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61573146296399"
        ],
        "knowsAbout": [
            "Zaunbau",
            "Gartenbau",
            "Landschaftspflege",
            "Doppelstabmattenzaun",
            "Pflasterarbeiten",
            "Sichtschutzzaun",
            "Gabionenbau",
            "Terrassenbau"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Gartenbau Fachausbildung"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default PersonSchema;
