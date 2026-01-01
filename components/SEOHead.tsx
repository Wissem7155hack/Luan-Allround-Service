import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    schema?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title = 'Luan Allround Service – Gartenbau, Zaunbau & Landschaftspflege in Kuppenheim',
    description = 'Ihr Experte für Garten- und Landschaftsbau in Kuppenheim, Rastatt & Karlsruhe. Professioneller Zaunbau, Rasenpflege, Heckenschnitt und Gartenpflege. Jetzt Angebot anfordern!',
    keywords = 'Gartenbau Kuppenheim, Landschaftsbau Kuppenheim, Zaunbau Kuppenheim, Gärtner Rastatt, Rasenpflege Kuppenheim, Hecken schneiden, Gartenpflege, Bauservice, Pflasterarbeiten, Luan Allround Service',
    canonical,
    ogImage = 'https://www.luan-allround-service.de/images/logo.png',
    schema
}) => {
    const location = useLocation();
    const baseUrl = 'https://www.luan-allround-service.de';
    const fullUrl = canonical || `${baseUrl}${location.pathname}`;

    useEffect(() => {
        // Update document title
        document.title = title;

        // Update meta tags
        const updateMetaTag = (name: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let meta = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        // Basic meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:url', fullUrl, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:type', 'website', true);
        updateMetaTag('og:locale', 'de_DE', true);

        // Twitter tags
        updateMetaTag('twitter:card', 'summary_large_image', true);
        updateMetaTag('twitter:title', title, true);
        updateMetaTag('twitter:description', description, true);
        updateMetaTag('twitter:image', ogImage, true);

        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', fullUrl);

        // Add schema markup if provided
        if (schema) {
            let schemaScript = document.querySelector('script[data-schema="page"]');
            if (!schemaScript) {
                schemaScript = document.createElement('script');
                schemaScript.setAttribute('type', 'application/ld+json');
                schemaScript.setAttribute('data-schema', 'page');
                document.head.appendChild(schemaScript);
            }
            schemaScript.textContent = JSON.stringify(schema);
        }
    }, [title, description, keywords, fullUrl, ogImage, schema]);

    return null;
};

export default SEOHead;
