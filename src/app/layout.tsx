import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AGENCY_NAME, AGENCY_TAGLINE, AGENCY_DESCRIPTION } from "@/lib/constants";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

// Detect the public site URL with automatic Vercel fallback
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://www.portocom.net");

const siteUrl = rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`;

export const viewport: Viewport = {
  themeColor: "#0A0A0E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PORTOCOM | Design & Engenharia Digital",
    template: "%s | PORTOCOM",
  },
  description: "Sites rápidos e plataformas digitais de alto padrão.",
  keywords: [
    "criação de sites comerciais",
    "estúdio de design digital",
    "páginas de venda e conversão",
    "design de sistemas e aplicativos",
    "sites para empresas",
    "redesign de sites",
    "presença digital profissional",
  ],
  authors: [{ name: AGENCY_NAME }],
  creator: AGENCY_NAME,
  publisher: AGENCY_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "PORTOCOM | Design & Engenharia Digital",
    description: "Sites rápidos e plataformas digitais de alto padrão.",
    url: siteUrl,
    siteName: AGENCY_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "PORTOCOM | Design & Engenharia Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTOCOM | Design & Engenharia Digital",
    description: "Sites rápidos e plataformas digitais de alto padrão.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: AGENCY_NAME,
  alternateName: AGENCY_TAGLINE,
  url: siteUrl,
  logo: `${siteUrl}/images/logo-portocom.png`,
  image: `${siteUrl}/og-image.jpg`,
  description: AGENCY_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  sameAs: [
    "https://linkedin.com",
    "https://instagram.com",
    "https://github.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=nippo@200,300,400,500,700&f[]=gambarino@400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0A0E] text-[#FDFDFC] font-sans antialiased selection:bg-[#F59E0B]/30 selection:text-[#FDFDFC]">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
