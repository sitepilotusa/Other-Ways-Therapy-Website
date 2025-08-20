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
      title: "Guided Experience",
      description: "During your session, I provide supportive presence and guidance, helping you navigate the altered state with safety and intention.",
      icon: "/assets/intensive_icon.svg"
    },
    {
      step: "STEP 3:",
      title: "Integration Processing",
      description: "We work together to understand and integrate the insights, emotions, and experiences that emerged during your ketamine session.",
      icon: "/assets/integration_icon.svg"
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
        Ketamine Assisted Psychotherapy (KAP) offers a unique opportunity to explore altered states of consciousness and access deeper layers of healing. This FDA-approved medication, when used in a therapeutic setting, can facilitate profound insights and emotional breakthroughs.
      </p>
      <p>
        Preparation is crucial for a meaningful ketamine experience. We work together to set intentions, address any concerns, and create the optimal mindset for your journey. During the session, I provide supportive guidance to help you navigate the experience safely.
      </p>
      <p>
        Integration is equally important—the real work often begins after the session ends. We process what emerged, helping you understand and incorporate new insights into your daily life, relationships, and ongoing healing journey.
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
      introHeading="Sacred Medicine with Therapeutic Support"
      introText="Ketamine therapy can open doorways to profound healing and insight. I provide comprehensive support before, during, and after your experience, helping you prepare mindfully and integrate meaningfully for lasting transformation."
      mainSectionHeading="The KAP Process"
      mainSectionContent={mainSectionContent}
      mainSectionImage="/assets/patient-3.png"
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
