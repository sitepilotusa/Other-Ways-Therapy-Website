import type { Metadata, Viewport } from "next";
import { Kalnia, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

// Simple approach - let the browser resolve the domain
const siteUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000'
  : "https://otherwaystherapy.com"; // Default to production, relative URLs will work for staging

const verification: Metadata["verification"] =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION as string }
    : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Other Ways Therapy | EMDR & IFS in Colorado",
    template: "%s | Other Ways Therapy",
  },
  description: "Therapy for anxiety and trauma, EMDR, IFS, and ketamine preparation & integration in Colorado.",
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
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Other Ways Therapy",
    title: "Other Ways Therapy | EMDR & IFS in Colorado",
    description: "Therapy for anxiety and trauma, EMDR, IFS, and ketamine preparation & integration in Colorado.",
    images: [
      {
        url: "/other-ways-therapy-social-share-image.jpg", // Simple relative URL
        width: 1200,
        height: 630,
        alt: "Other Ways Therapy",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Ways Therapy | EMDR & IFS in Colorado",
    description: "Therapy for anxiety and trauma, EMDR, IFS, and ketamine preparation & integration in Colorado.",
    images: ["/other-ways-therapy-social-share-image.jpg"], // Simple relative URL
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
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Other Ways Therapy",
              url: siteUrl,
              logo:
                "https://otherwaystherapy.com/assets/other-ways-therapy-logo.svg",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Other Ways Therapy",
              url: siteUrl,
              image:
                "https://otherwaystherapy.com/assets/other-ways-therapy-logo.png",
              telephone: "+1-720-863-6373",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4251 Kipling St. #430",
                addressLocality: "Wheat Ridge",
                addressRegion: "CO",
                postalCode: "80033",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "State",
                name: "Colorado",
              },
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
