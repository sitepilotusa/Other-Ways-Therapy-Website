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

const siteUrl = "https://otherwaystherapy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Other Ways Therapy — Transformative Therapy in Colorado for Anxiety and Trauma",
    template: "%s | Other Ways Therapy",
  },
  description: "Therapy for anxiety and trauma, EMDR, IFS, and ketamine preparation & integration in Colorado.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Other Ways Therapy",
    title: "Other Ways Therapy — Transformative Therapy in Colorado for Anxiety and Trauma",
    description: "Therapy for anxiety and trauma, EMDR, IFS, and ketamine preparation & integration in Colorado.",
    images: [
      {
        url: "/assets/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Other Ways Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Ways Therapy — Transformative Therapy in Colorado for Anxiety and Trauma",
    description: "Therapy for anxiety and trauma, EMDR, IFS, and ketamine preparation & integration in Colorado.",
    images: ["/assets/hero-background.jpg"],
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
                "https://otherwaystherapy.com/assets/other%20ways%20(300%20x%20300%20px)-3-cropped.svg",
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
