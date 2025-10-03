// next.config.mjs (ESModule)

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora erros do ESLint durante o build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora erros de TypeScript durante o build
    ignoreBuildErrors: true,
  },
  images: {
    // Desativa otimizações automáticas de imagem do Next.js
    unoptimized: true,
  },
  webpack(config) {
    // Configura SVGR para importar SVGs como componentes React
    config.module.rules.push({
      test: /\\.svg$/i,
      issuer: { and: [/\.[jt]sx?$/] },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;