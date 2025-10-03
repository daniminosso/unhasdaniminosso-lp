// @/utils/data/businessConfig.ts

import { BusinessConfig } from './types';

export const businessConfig: BusinessConfig = {
    siteUrl: process.env.SITE_URL || '',
    metadata: {
    title: 'Unhas Dani Minosso',
    description: 'Especialista em alongamento em fibra e molde F1. Naturalidade, durabilidade e sofisticação.',
    authorName: 'Dani Minosso',
    twitterHandle: '@UnhasDaniMinosso',
  },
  schema: {
    type: 'BeautySalon',
    name: 'Unhas Dani Minosso',
    image: '/logo.png',
    streetAddress: 'Via Veneto, 1900',
    locality: 'Curitiba',
    region: 'PR',
    postalCode: '82400-150',
    country: 'BR',
    telephone: '+55-41-99881-7085',
    url: process.env.SITE_URL || '',
  },
  trackingIds: {
    gtm: process.env.NEXT_PUBLIC_GTM_ID,
    ga4: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
    fbPixel: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    utmify: process.env.NEXT_PUBLIC_UTMIFY_PIXEL_ID,
  },
  themeColor: '#EBDDD1',
};