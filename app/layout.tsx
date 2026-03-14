// app/layout.tsx
import "./globals.css";
import "./modern-theme.css";
import "./accessibility.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import BackToTop from "../components/BackToTop";
import GoogleAnalytics from "../components/GoogleAnalytics";
import LiveChat from "../components/LiveChat";
import { defaultMetadata } from "../lib/metadata";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#3B82F6',
};
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <GoogleAnalytics />
        <LiveChat />
        {children}
        <BackToTop />
        
        {/* Tracking de ref/utm_source - ejecuta después de cargar la página */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var url = new URL(window.location.href);
                  var ref = url.searchParams.get('ref') || url.searchParams.get('utm_source');
                  if(!ref) return;
                  try { localStorage.setItem('ref_code', ref); } catch(e) {}
                  try { sessionStorage.setItem('ref_code', ref); } catch(e) {}
                  try { document.cookie = 'ref_code=' + encodeURIComponent(ref) + '; path=/; max-age=' + (60*60*24*30); } catch(e) {}
                } catch(e) { console.warn('ref-tracker error', e); }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
