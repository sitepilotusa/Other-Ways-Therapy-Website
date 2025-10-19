import { ServicePageLayout } from "@/components/ServicePageLayout";
import Link from "next/link";
import { Metadata } from "next";
import { canonicalBase } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumbs";

const canonicalPath = '/services/ketamine-prep-integration';

export const metadata: Metadata = {
  title: 'Ketamine Integration Support in Golden, CO | Other Ways Therapy',
  description: 'Prepare for and integrate ketamine therapy with trauma-informed guidance tailored to Golden, CO clients seeking lasting change.',
  alternates: { canonical: `${canonicalBase}${canonicalPath}` },
  openGraph: {
    type: 'website',
    title: 'Ketamine Integration Support in Golden, CO | Other Ways Therapy',
    description: 'Prepare for and integrate ketamine therapy with trauma-informed guidance tailored to Golden, CO clients seeking lasting change.',
    url: `${canonicalBase}${canonicalPath}`,
  },
};

export default function KetamineIntegration() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Ketamine Preparation & Integration',
    areaServed: {
      '@type': 'State',
      name: 'Colorado',
    },
    provider: {
      '@type': 'Organization',
      name: 'Other Ways Therapy',
    },
    url: `${canonicalBase}${canonicalPath}`,
  };

  const breadcrumbLd = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/' },
    { name: 'Ketamine Preparation & Integration', path: canonicalPath },
  ]);

  const steps = [
    {
      step: "STEP 1:",
      title: "Integration Processing",
      description: "We work together to understand and integrate the insights, emotions, and experiences that emerged during your ketamine session.",
      icon: "/assets/emdr-integration-icon.svg"
    },
    {
      step: "STEP 2:",
      title: "Ongoing Support",
      description: "Continued support helps you translate insights into lasting change, incorporating new perspectives into your daily life and relationships.",
      icon: "/assets/emdr-consultation-icon.svg"
    }
  ];

  const mainSectionContent = (
    <>
      <p>
        Ketamine therapy can open doorways to profound healing and insight. I provide comprehensive support before and after your experience, helping you prepare mindfully and integrate meaningfully for lasting transformation.
      </p>
      <p>
        Have you recently completed ketamine treatment at an IV clinic or through an at‑home service? While ketamine can offer therapeutic breakthroughs, the real transformation often happens in the weeks and months that follow—through thoughtful integration of your experiences. Many people receive minimal integration support after their sessions, leaving valuable insights and healing potential unexplored.
      </p>
      <p>
        While I trained in Ketamine‑Assisted Psychotherapy (KAP), I do not currently provide the ketamine treatment itself. I offer dedicated preparation and integration sessions designed to maximize the therapeutic benefits of your journey.
      </p>
      <p>
        <Link href="/services/emdr-therapy" className="hover:underline">EMDR therapy</Link> can be particularly powerful for processing trauma‑related content that may have surfaced, and with <Link href="/services/internal-family-systems" className="hover:underline">Internal Family Systems therapy</Link> we’ll explore the parts of you that emerged—helping you develop a compassionate relationship with all aspects of yourself.
      </p>
      <p>
        If you’re craving deeper momentum after integration sessions, <Link href="/services/emdr-intensives" className="hover:underline">EMDR intensives</Link> provide focused time to continue the healing that ketamine opened up.
      </p>
    </>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd),
        }}
      />
      <ServicePageLayout
      pageTitle="Ketamine Preparation & Integration"
      introHeading="Ketamine with Therapeutic Support"
      introText="Comprehensive preparation and integration support to help you make meaning from your ketamine experience—even if it occurred with another provider. Available to clients in Golden, CO and surrounding areas."
      mainSectionHeading="The KAP Process"
      mainSectionContent={mainSectionContent}
      mainSectionImage="/assets/ketamine-preparation-integration-service-image.avif"
      mainSectionImageAlt="Ketamine therapy preparation and integration support for Golden, Colorado clients"
      mainSectionCTA="Learn About KAP"
      processHeading="Your KAP Journey"
      processDescription="Your ketamine journey is carefully guided from preparation through integration, ensuring you receive maximum benefit from this powerful therapeutic tool."
      steps={steps}
      finalCTA="Begin Your KAP Journey"
    />
    </>
  );
}
