import type { Metadata, Viewport } from "next";
import { Kalnia, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "./head";

const headingFont = Kalnia({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Bricolage_Grotesque({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Configure URLs for different environments
const siteUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : process.env.NEXT_PUBLIC_SITE_URL || "https://otherwaysco.sitepilotpreflight.com"; // Test URL, can be overridden with env var

const verification: Metadata["verification"] =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION as string }
    : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Other Ways Therapy | EMDR & IFS for Golden, Colorado",
    template: "%s | Other Ways Therapy",
  },
  description: "Therapy for anxiety and trauma, EMDR, IFS, and ketamine preparation & integration for clients in Golden, Colorado and statewide.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Other Ways Therapy",
    title: "Other Ways Therapy | EMDR & IFS for Golden, Colorado",
    description: "Therapy for anxiety and trauma, EMDR, IFS, and ketamine preparation & integration for clients in Golden, Colorado and throughout the state.",
    images: [
      {
        url: `${siteUrl}/other-ways-therapy-social-share-image.avif`,
        width: 1200,
        height: 630,
        alt: "Other Ways Therapy",
        type: "image/avif",
      },
      {
        url: `${siteUrl}/other-ways-therapy-social-share-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Other Ways Therapy",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Ways Therapy | EMDR & IFS for Golden, Colorado",
    description: "Therapy for anxiety and trauma, EMDR, IFS, and ketamine preparation & integration for clients in Golden, Colorado and beyond.",
    images: [
      `${siteUrl}/other-ways-therapy-social-share-image.avif`,
      `${siteUrl}/other-ways-therapy-social-share-image.jpg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(verification ? { verification } : {}),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        {/* Skip links for keyboard users */}
        <nav aria-label="Skip links">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <a href="#site-navigation" className="skip-link">Skip to navigation</a>
          <a href="#site-footer" className="skip-link">Skip to footer</a>
        </nav>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Other Ways Therapy",
              url: siteUrl,
              logo:
                `${siteUrl}/assets/other-ways-therapy-logo.svg`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Molly Pike at Other Ways Therapy",
              url: siteUrl,
              image:
                `${siteUrl}/assets/other-ways-therapy-logo.avif`,
              telephone: "+1-720-863-6373",
              description: "Virtual EMDR, IFS, and trauma therapy supporting clients in Golden, Colorado and nearby Front Range communities.",
              founder: {
                "@type": "Person",
                name: "Molly Pike",
                jobTitle: "Licensed Professional Counselor",
              },
              areaServed: [
                { "@type": "City", name: "Golden", addressRegion: "CO", addressCountry: "US" },
                { "@type": "City", name: "Lakewood", addressRegion: "CO", addressCountry: "US" },
                { "@type": "City", name: "Wheat Ridge", addressRegion: "CO", addressCountry: "US" },
                { "@type": "City", name: "Arvada", addressRegion: "CO", addressCountry: "US" },
                { "@type": "City", name: "Denver", addressRegion: "CO", addressCountry: "US" },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Other Ways Therapy",
              url: siteUrl,
            }),
          }}
        />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
