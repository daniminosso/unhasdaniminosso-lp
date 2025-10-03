export interface BusinessConfig {
  // URL base do site
  siteUrl: string;
  // Metadados principais
  metadata: {
    title: string;
    description: string;
    authorName: string;
    twitterHandle: string;
  };
  // Schema.org para JSON‑LD
  schema: {
    type: string;
    name: string;
    image: string;
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
    telephone: string;
    url: string;
  };
  // IDs de tracking
  trackingIds: {
    gtm?: string;
    ga4?: string;
    fbPixel?: string;
    utmify?: string;
  };
  // Tema / aparência
  themeColor: string;
}