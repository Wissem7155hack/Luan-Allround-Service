import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    schema?: object;
    noindex?: boolean;
    articleDate?: string;
    articleModified?: string;
    articleAuthor?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title = 'Zaunbau & Gartenbau Kuppenheim | Luan Allround Service ⭐ Meisterbetrieb',
    description = 'Professioneller Zaunbau & Gartenbau in Kuppenheim, Rastatt, Karlsruhe & im Umkreis von 150 km ✓ Doppelstabmattenzäune ✓ Sichtschutz ✓ Pflasterarbeiten ✓ Über 10 Jahre Erfahrung in Rastatt, Karlsruhe & Baden-Baden. Kostenlose Beratung: 0176 47999118',
    keywords = 'Zaunbau Kuppenheim, Gartenbau Kuppenheim, Doppelstabmattenzaun, Zaunmontage Rastatt, Sichtschutz Karlsruhe, Gartenpflege Baden-Baden, Pflasterarbeiten, Terrassenbau, Luan Allround Service',
    canonical,
    ogImage = 'https://www.luan-allround-service.de/images/logo.png',
    schema,
    noindex = false,
    articleDate,
    articleModified,
    articleAuthor
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

        // Remove meta tag if exists
        const removeMetaTag = (name: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            const meta = document.querySelector(`meta[${attribute}="${name}"]`);
            if (meta) {
                meta.remove();
            }
        };

        // Basic meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Robots tag
        if (noindex) {
            updateMetaTag('robots', 'noindex, nofollow');
        } else {
            updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
        }

        // Googlebot specific
        updateMetaTag('googlebot', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

        // Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:url', fullUrl, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:type', articleDate ? 'article' : 'website', true);
        updateMetaTag('og:locale', 'de_DE', true);
        updateMetaTag('og:site_name', 'Luan Allround Service', true);
        updateMetaTag('og:image:width', '1200', true);
        updateMetaTag('og:image:height', '630', true);
        updateMetaTag('og:image:alt', 'Luan Allround Service - Zaunbau und Gartenbau in Kuppenheim', true);

        // Article-specific Open Graph tags
        if (articleDate) {
            updateMetaTag('article:published_time', articleDate, true);
            updateMetaTag('article:author', articleAuthor || 'Memedali Limani', true);
            updateMetaTag('article:section', 'Gartenbau', true);
            if (articleModified) {
                updateMetaTag('article:modified_time', articleModified, true);
            }
        } else {
            removeMetaTag('article:published_time', true);
            removeMetaTag('article:modified_time', true);
            removeMetaTag('article:author', true);
            removeMetaTag('article:section', true);
        }

        // Twitter tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);
        updateMetaTag('twitter:site', '@luanservice');
        updateMetaTag('twitter:creator', '@luanservice');

        // Geo tags (for local SEO)
        updateMetaTag('geo.region', 'DE-BW');
        updateMetaTag('geo.placename', 'Kuppenheim, Baden-Württemberg');
        updateMetaTag('geo.position', '48.8265;8.2535');
        updateMetaTag('ICBM', '48.8265, 8.2535');

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

        // Cleanup on unmount
        return () => {
            // Remove page-specific schema on route change
            const schemaScript = document.querySelector('script[data-schema="page"]');
            if (schemaScript) {
                schemaScript.remove();
            }
        };
    }, [title, description, keywords, fullUrl, ogImage, schema, noindex, articleDate, articleModified, articleAuthor]);

    return null;
};

export default SEOHead;
