import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
    title = 'Garten- & Landschaftsbau Kuppenheim | Pflasterarbeiten Rastatt | Luan Allround Service',
    description = 'Luan Allround Service: Ihr Fachbetrieb für Garten- & Landschaftsbau in Kuppenheim, Pflasterarbeiten in Rastatt, Zaunbau & Terrassenbau. ⭐ 4.9/5 (31 Google Bewertungen). Jetzt anfragen: 0176 47999118',
    keywords = 'Gartenbau Kuppenheim, Garten- & Landschaftsbau Kuppenheim, Pflasterarbeiten Rastatt, Zaunbau Kuppenheim, Terrassenbau Rastatt, Doppelstabmattenzaun Rastatt, Gartenpflege Kuppenheim, Luan Allround Service',
    canonical,
    ogImage = 'https://luan-allround-service.de/images/logo_resized.png',
    schema,
    noindex = false,
    articleDate,
    articleModified,
    articleAuthor
}) => {
    const location = useLocation();
    const baseUrl = 'https://luan-allround-service.de';
    const fullUrl = canonical || `${baseUrl}${location.pathname}`;

    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            ...pathnames.map((path, index) => {
                const url = `${baseUrl}/${pathnames.slice(0, index + 1).join('/')}`;
                return {
                    "@type": "ListItem",
                    "position": index + 2,
                    "name": path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
                    "item": url
                };
            })
        ]
    };

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <link rel="canonical" href={fullUrl} />

            {/* Robots */}
            {noindex ? (
                <>
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="googlebot" content="noindex, nofollow" />
                </>
            ) : (
                <>
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                </>
            )}

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content={articleDate ? 'article' : 'website'} />
            <meta property="og:locale" content="de_DE" />
            <meta property="og:site_name" content="Luan Allround Service" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Luan Allround Service - Zaunbau und Gartenbau in Kuppenheim" />

            {/* Article Specific Open Graph */}
            {articleDate && <meta property="article:published_time" content={articleDate} />}
            {articleDate && <meta property="article:author" content={articleAuthor || 'Memedali Limani'} />}
            {articleDate && <meta property="article:section" content="Gartenbau" />}
            {articleModified && <meta property="article:modified_time" content={articleModified} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@luanservice" />
            <meta name="twitter:creator" content="@luanservice" />

            {/* Geo tags (for local SEO) */}
            <meta name="geo.region" content="DE-BW" />
            <meta name="geo.placename" content="Kuppenheim, Baden-Württemberg" />
            <meta name="geo.position" content="48.8265;8.2535" />
            <meta name="ICBM" content="48.8265, 8.2535" />

            {/* Schema Markup */}
            {schema && (
                <script type="application/ld+json" data-schema="page">
                    {JSON.stringify(schema)}
                </script>
            )}

            {/* Auto-generated Breadcrumb Schema */}
            <script type="application/ld+json" data-schema="breadcrumb">
                {JSON.stringify(breadcrumbList)}
            </script>
        </Helmet>
    );
};

export default SEOHead;
