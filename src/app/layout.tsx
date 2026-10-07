import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AGENCY_NAME, AGENCY_TAGLINE, AGENCY_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portocom.agency";

export const viewport: Viewport = {
  themeColor: "#121211",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${AGENCY_NAME} — ${AGENCY_TAGLINE}`,
    template: `%s | ${AGENCY_NAME}`,
  },
  description: AGENCY_DESCRIPTION,
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
  openGraph: {
    title: `${AGENCY_NAME} — ${AGENCY_TAGLINE}`,
    description: AGENCY_DESCRIPTION,
    url: siteUrl,
    siteName: AGENCY_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${AGENCY_NAME} — Estúdio de Engenharia & UX/UI`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AGENCY_NAME} — ${AGENCY_TAGLINE}`,
    description: AGENCY_DESCRIPTION,
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
  logo: `${siteUrl}/logo.png`,
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
    <html lang="pt-BR" className={`${inter.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#121211] text-[#F5F4EE] antialiased selection:bg-[#1A5446]/40 selection:text-[#F5F4EE]">
        {children}
      </body>
    </html>
  );
}
