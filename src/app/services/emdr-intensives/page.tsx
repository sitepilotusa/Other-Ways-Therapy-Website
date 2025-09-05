import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Metadata } from "next";
/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: 'EMDR Intensives | Other Ways Therapy',
  description: 'EMDR Intensive sessions in Wheat Ridge, Colorado. Condensed 3-5 hour focused sessions for accelerated trauma healing and processing.',
  alternates: { canonical: '/services/emdr-intensives' },
  openGraph: {
    type: 'website',
    title: 'EMDR Intensives | Other Ways Therapy',
    description: 'EMDR Intensive sessions in Wheat Ridge, Colorado. Condensed 3-5 hour focused sessions for accelerated trauma healing and processing.',
    url: '/services/emdr-intensives',
  },
};

export default function EMDRIntensives() {
  const steps = [
    {
      step: "STEP 1:",
      title: "Pre-Intensive Consultation",
      description: "We meet beforehand to assess your readiness, establish goals, and ensure you have the support systems needed for intensive work.",
      icon: "/assets/emdr-consultation-icon.svg"
    },
    {
      step: "STEP 2:",
      title: "Intensive Preparation",
      description: "The day begins with grounding, resource building, and creating a safe container for the deep work we'll be doing together.",
      icon: "/assets/therapy-planning-icon.svg"
    },
    {
      step: "STEP 3:",
      title: "Focused Processing",
      description: "We dedicate concentrated time to processing specific targets, allowing for deeper work than traditional weekly sessions permit.",
      icon: "/assets/emdr-intensives-icon.svg"
    },
    {
      step: "STEP 4:",
      title: "Integration & Closure",
      description: "We ensure proper closure, install positive resources, and create a plan for continued healing and integration in the days following.",
      icon: "/assets/emdr-integration-icon.svg"
    }
  ];

  const mainSectionContent = (
    <>
      <p>
        EMDR Intensives offer a powerful alternative to traditional weekly therapy, allowing for concentrated healing work in a single day. These 3-5 hour sessions are designed for individuals who want to make significant progress in a shorter timeframe.
      </p>
      <p>
        Intensives are particularly effective for addressing specific traumatic events, breaking through therapeutic plateaus, or when your schedule makes weekly sessions challenging. The extended time allows for deeper processing without the interruption of returning to daily life between sessions.
      </p>
      <p>
        This format requires careful preparation and adequate support systems. We ensure you're ready for intensive work and have the resources needed for integration and continued healing after our session together.
      </p>
    </>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'EMDR Intensives',
            areaServed: {
              '@type': 'State',
              name: 'Colorado',
            },
            provider: {
              '@type': 'Organization',
              name: 'Other Ways Therapy',
            },
            url: 'https://otherwaystherapy.com/services/emdr-intensives',
          }),
        }}
      />
      <ServicePageLayout
      pageTitle="EMDR Intensives"
      introHeading="Accelerated Healing in Focused Sessions"
      introText="EMDR Intensives provide concentrated healing work in 3-5 hour sessions, perfect for those seeking significant progress in a shorter timeframe. This format allows for deeper processing and breakthrough moments that can transform your healing journey."
      mainSectionHeading="The Power of Intensive Work"
      mainSectionContent={mainSectionContent}
      mainSectionImage="/assets/emdr-intensives-service-page-image.jpg"
      mainSectionImageAlt="EMDR Intensive therapy session"
      mainSectionCTA="Schedule Your Intensive"
      processHeading="Your Intensive Experience"
      processDescription="Your intensive experience is carefully structured to maximize healing while ensuring your safety and comfort throughout the process."
      steps={steps}
      finalCTA="Book Your EMDR Intensive"
    />
    </>
  );
}
