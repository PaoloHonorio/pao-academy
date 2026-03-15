/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración básica para debugging
  compress: true,
  poweredByHeader: false,
  
  // Configuración de imágenes simplificada
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Configuración experimental mínima
  experimental: {
    optimizeCss: false, // Deshabilitado temporalmente
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
