import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ketamine Preparation & Integration | Other Ways Therapy',
  description: 'Ketamine preparation and integration services in Wheat Ridge, Colorado. Support before, during, and after your ketamine therapy experience.',
  alternates: { canonical: '/services/ketamine-prep-integration' },
  openGraph: {
    type: 'website',
    title: 'Ketamine Preparation & Integration | Other Ways Therapy',
    description: 'Ketamine preparation and integration services in Wheat Ridge, Colorado. Support before, during, and after your ketamine therapy experience.',
    url: '/services/ketamine-prep-integration',
  },
};

export default function KetamineIntegration() {
  const steps = [
    {
      step: "STEP 1:",
      title: "Preparation & Intention Setting",
      description: "We prepare your mind and body for the experience, setting clear intentions and establishing safety protocols for your journey.",
      icon: "/assets/planning_icon.svg"
    },
    {
      step: "STEP 2:",
      title: "Integration Processing",
      description: "We work together to understand and integrate the insights, emotions, and experiences that emerged during your ketamine session.",
      icon: "/assets/integration_icon.svg"
    },
    {
      step: "STEP 3:",
      title: "IFS Parts Exploration",
      description: "Using Internal Family Systems, we explore the parts of you that surfaced during the experience and cultivate Self‑leadership and compassion.",
      icon: "/assets/parts_somatics_icon.svg"
    },
    {
      step: "STEP 4:",
      title: "Ongoing Support",
      description: "Continued support helps you translate insights into lasting change, incorporating new perspectives into your daily life and relationships.",
      icon: "/assets/consultation_icon.svg"
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
        EMDR can be particularly powerful for processing trauma‑related content that may have surfaced, and using IFS we’ll explore the parts of you that may have emerged—helping you develop a compassionate relationship with all aspects of yourself.
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
            serviceType: 'Ketamine Preparation & Integration',
            areaServed: {
              '@type': 'State',
              name: 'Colorado',
            },
            provider: {
              '@type': 'Organization',
              name: 'Other Ways Therapy',
            },
            url: 'https://otherwaystherapy.com/services/ketamine-prep-integration',
          }),
        }}
      />
      <ServicePageLayout
      pageTitle="Ketamine Preparation & Integration"
      introHeading="Ketamine with Therapeutic Support"
      introText="Comprehensive preparation and integration support to help you make meaning from your ketamine experience—even if it occurred with another provider."
      mainSectionHeading="The KAP Process"
      mainSectionContent={mainSectionContent}
      mainSectionImage="/assets/IMG_3415.jpeg"
      mainSectionImageAlt="Ketamine therapy preparation and integration"
      mainSectionCTA="Learn About KAP"
      processHeading="Your KAP Journey"
      processDescription="Your ketamine journey is carefully guided from preparation through integration, ensuring you receive maximum benefit from this powerful therapeutic tool."
      steps={steps}
      finalCTA="Begin Your KAP Journey"
    />
    </>
  );
}
