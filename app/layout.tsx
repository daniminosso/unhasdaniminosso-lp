// app/layout.tsx

import './globals.css'
import { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { NavHeader } from '@/components/NavHeader'
import { Footer } from '@/components/Footer'
import { WhatsappFloatingButton } from '@/components/WhatsappFloatingButton'
import { businessConfig } from './utils/data/businessConfig'

const inter = Inter({ subsets: ['latin'] })
const { siteUrl, metadata: md, schema, trackingIds, themeColor } = businessConfig

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    nosnippet: false,
    // noimageindex: true,
  },
  title: md.title,
  description: md.description,
  authors: [{ name: md.authorName }],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: md.title,
    description: md.description,
    url: siteUrl,
    siteName: md.title,
    images: [`${process.env.SITE_URL}/og-image.jpg`],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: md.twitterHandle,
    title: md.title,
    description: md.description,
    images: [`${process.env.SITE_URL}/twitter-card.jpg`],
  },
  alternates: {
    canonical: process.env.SITE_URL!,
    languages: { 'pt-BR': `${process.env.SITE_URL}/` }
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { gtm, ga4, fbPixel, utmify } = trackingIds

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* JSON‑LD para Schema.org */}
        <Script id="ld-salon" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': schema.type,
            name: schema.name,
            image: `${siteUrl}${schema.image}`,
            address: {
              '@type': 'PostalAddress',
              streetAddress: schema.streetAddress,
              addressLocality: schema.locality,
              addressRegion: schema.region,
              postalCode: schema.postalCode,
              addressCountry: schema.country,
            },
            telephone: schema.telephone,
            url: schema.url,
          })}
        </Script>
        {/* Google Tag Manager */}
        {gtm && (
          <>
            <Script id="gtm-loader" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s);j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtm}');`}
            </Script>
            {/* fallback para caso JS esteja desabilitado */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}

        {/* Google Analytics 4 */}
        {ga4 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}{/* Google Ads (AW-16859467972) */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-16859467972"
  strategy="afterInteractive"
/>

<Script id="google-ads-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-16859467972');
  `}
</Script>


        {/* Facebook Pixel */}
        {fbPixel && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbPixel}');
            fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* UTMify */}
        {utmify && (
          <>
            {/* Inicializa a variável que o pixel.js usa */}
            <Script
              id="utmify-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.pixelId = "${utmify}";`
              }}
            />
            {/* Carrega o script do pixel */}
            <Script
              id="utmify-pixel"
              src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
              strategy="afterInteractive"
            />
          </>
        )}
      </head>

      <body className={inter.className} style={{ backgroundColor: themeColor }}>
        <div className="min-h-screen flex flex-col">
          <NavHeader />
          <main id="main" className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsappFloatingButton />
        </div>
      </body>
    </html>
  )
}