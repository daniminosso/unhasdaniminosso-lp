import { dataMap, ServiceData } from "@/app/(main)/servicos/[slug]/utils";
import { ServicePage } from "../ServicePage";
import { businessConfig } from "@/app/utils/data/businessConfig";
import Script from "next/script";
import { Metadata } from "next";

const { siteUrl, metadata: md } = businessConfig

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const data = dataMap[slug]

  if (!data) {
    return {
      title: `${md.title} • Serviços`,
      description: md.description,
      alternates: { canonical: `${siteUrl}` },
    }
  }

  const pageUrl = `${siteUrl}/servicos/${slug}`

  return {
    title: `${data.title} – ${md.title}`,
    description: data.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${data.title} – ${md.title}`,
      description: data.description,
      url: pageUrl,
      images: [
        `${siteUrl}${data.images[0].src}`
      ],
    },
    robots: { index: true, follow: true },
  }
}

export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data: ServiceData | undefined = dataMap[slug]

  if (!data) {
    return (
      <div className="container mx-auto py-12">
        Serviço não encontrado.
      </div>
    );
  }

  const pageUrl = `${siteUrl}/servicos/${slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.description,
    provider: {
      '@type': 'BeautySalon',
      name: md.title,
      url: siteUrl,
    },
    url: pageUrl,
    image: `${siteUrl}${data.images[0].src}`,
    offers: data.price.map((p) => ({
      '@type': 'Offer',
      name: p.description,
      price: p.price.toFixed(2),
      priceCurrency: 'BRL',
      url: pageUrl,
    })),
  }

  return (
    <>
      <Script
        id="ld-service"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(serviceSchema)}
      </Script>
      <ServicePage data={data} />
    </>
  )
}