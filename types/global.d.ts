// src/types/global.d.ts

export {}

declare global {
  interface Window {
    dataLayer: Array<Record<string, any>>
    fbq?: (...args: any[]) => void
  }
}