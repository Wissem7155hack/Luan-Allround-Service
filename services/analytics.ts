// Google Analytics 4 Service
// This service provides centralized analytics tracking functions

interface GAEvent {
    action: string;
    category: string;
    label?: string;
    value?: number;
}

declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string,
            config?: Record<string, unknown>
        ) => void;
        dataLayer?: unknown[];
    }
}

class AnalyticsService {
    private measurementId: string;

    constructor(measurementId: string) {
        this.measurementId = measurementId;
    }

    /**
     * Initialize Google Analytics 4
     */
    init() {
        if (typeof window === 'undefined') return;

        // Load gtag.js script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
        document.head.appendChild(script);

        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(...args: unknown[]) {
            window.dataLayer?.push(args);
        };

        window.gtag('js', new Date());
        window.gtag('config', this.measurementId, {
            page_path: window.location.pathname,
        });
    }

    /**
     * Track page views
     */
    pageView(path: string) {
        if (typeof window.gtag !== 'undefined') {
            window.gtag('config', this.measurementId, {
                page_path: path,
            });
        }
    }

    /**
     * Track custom events
     */
    event({ action, category, label, value }: GAEvent) {
        if (typeof window.gtag !== 'undefined') {
            window.gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value,
            });
        }
    }

    /**
     * Track form submissions
     */
    trackFormSubmission(formName: string) {
        this.event({
            action: 'form_submission',
            category: 'engagement',
            label: formName,
        });
    }

    /**
     * Track phone clicks
     */
    trackPhoneClick() {
        this.event({
            action: 'phone_click',
            category: 'contact',
            label: 'phone_number',
        });
    }

    /**
     * Track CTA button clicks
     */
    trackCTAClick(buttonName: string) {
        this.event({
            action: 'cta_click',
            category: 'engagement',
            label: buttonName,
        });
    }

    /**
     * Track service page views
     */
    trackServiceView(serviceName: string) {
        this.event({
            action: 'service_view',
            category: 'engagement',
            label: serviceName,
        });
    }

    /**
     * Track blog post reads
     */
    trackBlogRead(postTitle: string) {
        this.event({
            action: 'blog_read',
            category: 'content',
            label: postTitle,
        });
    }

    /**
     * Track location page views
     */
    trackLocationView(cityName: string) {
        this.event({
            action: 'location_view',
            category: 'local_seo',
            label: cityName,
        });
    }

    /**
     * Track conversion (successful form submission)
     */
    trackConversion(conversionType: string) {
        this.event({
            action: 'conversion',
            category: 'conversion',
            label: conversionType,
            value: 1,
        });
    }
}

// Initialize with your Google Analytics 4 Measurement ID
// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
const analytics = new AnalyticsService('G-XXXXXXXXXX');

export default analytics;
