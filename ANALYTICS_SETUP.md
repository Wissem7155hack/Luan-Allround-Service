# Google Analytics 4 & Search Console Setup Guide

## Table of Contents
1. [Google Analytics 4 Setup](#google-analytics-4-setup)
2. [Google Search Console Setup](#google-search-console-setup)
3. [Bing Webmaster Tools Setup](#bing-webmaster-tools-setup)
4. [Conversion Tracking](#conversion-tracking)
5. [Custom Reports](#custom-reports)

---

## Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to https://analytics.google.com
2. Click "Admin" (gear icon in bottom left)
3. In the "Account" column, select your account or click "+ Create Account"
4. In the "Property" column, click "+ Create Property"
5. Enter property details:
   - **Property name**: Luan Allround Service
   - **Reporting time zone**: (GMT+01:00) Berlin
   - **Currency**: Euro (EUR)
6. Click "Next"
7. Fill in business information:
   - **Industry category**: Home & Garden
   - **Business size**: Small (1-10 employees)
8. Select business objectives (choose relevant ones)
9. Click "Create"
10. Accept Terms of Service

### Step 2: Set Up Data Stream

1. Select "Web" as the platform
2. Enter website details:
   - **Website URL**: https://www.luan-allround-service.de
   - **Stream name**: Luan Website
3. Click "Create stream"
4. **IMPORTANT**: Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### Step 3: Install Tracking Code

1. Open `services/analytics.ts` in your project
2. Replace `'G-XXXXXXXXXX'` with your actual Measurement ID:
   ```typescript
   const analytics = new AnalyticsService('G-YOUR-ACTUAL-ID');
   ```
3. Save the file

### Step 4: Initialize Analytics in Your App

1. Open `App.tsx`
2. Add at the top:
   ```typescript
   import analytics from './services/analytics';
   ```
3. In your main App component, add:
   ```typescript
   useEffect(() => {
     analytics.init();
   }, []);
   ```

### Step 5: Verify Installation

1. Go back to GA4 property
2. Click on "Realtime" in the left sidebar
3. Open your website in a new tab
4. You should see yourself as an active user within 30 seconds
5. If not, check browser console for errors

---

## Google Search Console Setup

### Step 1: Add Property

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix" method
4. Enter: `https://www.luan-allround-service.de`
5. Click "Continue"

### Step 2: Verify Ownership

**Recommended Method: HTML File Upload**

1. Download the HTML verification file
2. Upload to your `public` folder
3. Verify the file is accessible at:
   `https://www.luan-allround-service.de/google[xxxxx].html`
4. Click "Verify" in Search Console

**Alternative Method: HTML Tag**

1. Copy the meta tag provided
2. Add to `<head>` section of `index.html`:
   ```html
   <meta name="google-site-verification" content="your_code_here" />
   ```
3. Deploy your changes
4. Click "Verify"

### Step 3: Submit Sitemap

1. In Search Console, click "Sitemaps" in left sidebar
2. Enter sitemap URL: `sitemap.xml`
3. Click "Submit"
4. Also submit: `sitemap-images.xml`
5. Wait 24-48 hours for Google to process

### Step 4: Set Up URL Parameters (Optional)

1. Go to "Settings" → "Crawl stats"
2. Monitor crawl rate over time
3. If needed, adjust in "Crawl rate settings"

### Step 5: Link to Google Analytics

1. In Search Console, click "Settings"
2. Click "Associate Google Analytics property"
3. Select your GA4 property
4. Confirm association

---

## Bing Webmaster Tools Setup

### Step 1: Sign Up

1. Go to https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Click "Add site"

### Step 2: Add Website

1. Enter: `https://www.luan-allround-service.de`
2. Add sitemap URLs:
   - `https://www.luan-allround-service.de/sitemap.xml`
   - `https://www.luan-allround-service.de/sitemap-images.xml`

### Step 3: Verify Ownership

**Option 1: Import from Google Search Console**
1. Click "Import from Google Search Console"
2. Authorize Bing to access your GSC data
3. Select the property to import

**Option 2: XML File**
1. Download the XML verification file
2. Upload to `public` folder
3. Verify accessibility
4. Click "Verify"

### Step 4: Configure Settings

1. Set crawl rate to "Normal"
2. Enable "Submit URLs as they change"
3. Configure robots.txt settings

---

## Conversion Tracking

### Goal: Track Contact Form Submissions

#### In Google Analytics 4

1. Go to "Configure" → "Events"
2. Click "Create Event"
3. Name it: `form_submission`
4. Set conditions:
   - event_name equals `form_submission`
5. Mark as "Conversion"

#### In Your Code

Already implemented in `services/analytics.ts`:

```typescript
// Track form submission
analytics.trackFormSubmission('contact_form');
analytics.trackConversion('contact_form_submission');
```

This is called in `ContactForm` component after successful submission.

### Goal: Track Phone Clicks

Added to all phone number links:

```typescript
onClick={() => analytics.trackPhoneClick()}
```

---

## Custom Reports

### Report 1: Local SEO Performance

**In GA4:**
1. Go to "Explore"
2. Create new "Free Form" exploration
3. Dimensions: City, Page path
4. Metrics: Sessions, Conversions
5. Filter: City contains "Kuppenheim" OR "Rastatt" OR "Baden-Baden"

### Report 2: Form Conversion Funnel

**In GA4:**
1. Go to "Explore"
2. Create "Funnel exploration"
3. Steps:
   - Step 1: Page view (/)
   - Step 2: Scroll to form
   - Step 3: Form submission
4. Breakdown by device category

### Report 3: Top Service Pages

**In Search Console:**
1. Go to "Performance"
2. Click "+ New" → "Page"
3. Filter: URL contains "/services"
4. Compare clicks, impressions, CTR

---

## Monitoring Schedule

### Daily (First Week)
- Check Realtime in GA4
- Verify events are firing
- Monitor for errors in browser console

### Weekly
- Review top pages in GA4
- Check Search Console for crawl errors
- Review conversion rate

### Monthly
- Full analytics review
- Keyword ranking changes
- Backlink profile check
- Generate executive summary

---

## Key Metrics to Track

### Traffic Metrics
- **Sessions**: Total website visits
- **Users**: Unique visitors
- **Bounce Rate**: % leaving after one page
- **Session Duration**: Average time on site

### Engagement Metrics
- **Form Submissions**: Contact form conversions
- **Phone Clicks**: Call tracking
- **Service Page Views**: Interest in specific services
- **Blog Reads**: Content engagement

### SEO Metrics
- **Organic Traffic**: Visitors from search engines
- **Keyword Rankings**: Position for target keywords
- **Impressions**: How often site appears in search
- **Click-Through Rate (CTR)**: % of impressions that click

### Local SEO Metrics
- **Google Business Profile Views**: Profile visibility
- **Google Maps Clicks**: Directions requests
- **Local Pack Rankings**: Position in local results
- **Reviews**: Number and rating

---

## Troubleshooting

### Analytics Not Tracking

1. Check browser console for errors
2. Verify Measurement ID is correct
3. Confirm gtag.js script is loading
4. Test in incognito mode (some ad blockers interfere)
5. Check if analytics.init() is being called

### Search Console Not Showing Data

1. Wait 24-48 hours after verification
2. Ensure sitemap is submitted
3. Check robots.txt isn't blocking crawlers
4.Request indexing for important pages manually

### Events Not Firing

1. Open browser DevTools → Network tab
2. Filter for "collect"
3. Trigger event (e.g., submit form)
4. Check if request is sent to GA4

---

## Additional Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Search Console Help](https://support.google.com/webmasters)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)

---

*Last Updated: December 29, 2025*
