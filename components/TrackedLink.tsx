// components/TrackedLink.tsx
'use client'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface TrackingData {
  // GTM
  gtmEventName?: string
  gtmParams?: Record<string, any>
  // Facebook Pixel
  fbqEventName?: string
  fbqParams?: Record<string, any>
  // uso genérico de UTM extra
  utm?: Record<string, string>
  // se quiser mais hooks
  customOnClick?: () => void
}

type Props = Omit<LinkProps, 'href'> & {
  href: string
  tracking?: TrackingData
  preserveQuery?: boolean  // <-- novo
  children: React.ReactNode
}

export function TrackedLink({
  href,
  tracking,
  preserveQuery = true,
  children,
  ...rest
}: Props) {
  const router = useRouter()

  function handleClick(e: React.MouseEvent) {
    // 1) Track GTM
    if (tracking?.gtmEventName) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: tracking.gtmEventName,
        ...(tracking.gtmParams || {})
      })
    }

    // 2) Facebook Pixel
    if (tracking?.fbqEventName && typeof window.fbq === 'function') {
      window.fbq('track', tracking.fbqEventName, tracking.fbqParams || {})
    }

    // 3) UTM extra
    let finalHref = href
    if (tracking?.utm) {
      const url = new URL(href, window.location.origin)
      Object.entries(tracking.utm).forEach(([k, v]) => url.searchParams.set(`utm_${k}`, v))
      finalHref = url.pathname + url.search
    }

    // 4) preserva query string da página atual
    if (preserveQuery && typeof window !== 'undefined') {
      const currentQs = window.location.search
      if (currentQs) {
        finalHref += (finalHref.includes('?') ? '&' : '?') + currentQs.slice(1)
      }
    }

    // 5) navega via router
    e.preventDefault()
    router.push(finalHref)

    // 6) qualquer callback extra
    tracking?.customOnClick?.()
  }

  return (
    <Link href={href} {...rest}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={handleClick}>
        {children}
      </a>
    </Link>
  )
}