import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Metadata } from "next";
/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: 'EMDR Consultation for Therapists | Other Ways Therapy',
  description: 'EMDRIA-informed consultation for therapists in Colorado. Support for EMDR competency, certification, and advanced clinical skills development.',
  alternates: { canonical: '/services/emdr-consultation' },
  openGraph: {
    type: 'website',
    title: 'EMDR Consultation for Therapists | Other Ways Therapy',
    description: 'EMDRIA-informed consultation for therapists in Colorado. Support for EMDR competency, certification, and advanced clinical skills development.',
    url: '/services/emdr-consultation',
  },
};

export default function EMDRConsultation() {
  const steps = [
    {
      step: "STEP 1:",
      title: "Assessment & Goal Setting",
      description: "We assess your current EMDR experience, identify learning goals, and create a personalized consultation plan for your professional development.",
      icon: "/assets/planning_icon.svg"
    },
    {
      step: "STEP 2:",
      title: "Case Consultation",
      description: "We review your cases together, discussing treatment planning, protocol selection, and navigating complex presentations with EMDR.",
      icon: "/assets/consultation_icon.svg"
    },
    {
      step: "STEP 3:",
      title: "Skill Development",
      description: "Focused training on advanced techniques, troubleshooting challenging sessions, and refining your EMDR clinical skills through practice and feedback.",
      icon: "/assets/intensive_icon.svg"
    },
    {
      step: "STEP 4:",
      title: "Certification Support",
      description: "Ongoing support toward EMDRIA certification requirements, including documentation review and preparation for certification submissions.",
      icon: "/assets/integration_icon.svg"
    }
  ];

  const mainSectionContent = (
    <>
      <p>
        As an EMDRIA Approved Consultant and faculty member for TTI Basic Trainings, I provide comprehensive consultation services for therapists seeking to develop their EMDR skills and work toward certification.
      </p>
      <p>
        Whether you're just beginning your EMDR journey or working toward advanced certification, consultation provides essential support for developing competency, confidence, and clinical excellence in EMDR practice.
      </p>
      <p>
        My consultation approach is collaborative and supportive, focusing on your individual learning style and professional goals. We work together to enhance your skills while ensuring the highest quality care for your clients.
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
            serviceType: 'EMDR Consultation for Therapists',
            areaServed: {
              '@type': 'State',
              name: 'Colorado',
            },
            provider: {
              '@type': 'Organization',
              name: 'Other Ways Therapy',
            },
            url: 'https://otherwaystherapy.com/services/emdr-consultation',
          }),
        }}
      />
      <ServicePageLayout
      pageTitle="EMDR Consultation for Therapists"
      introHeading="Professional Development & Clinical Excellence"
      introText="As an EMDRIA Approved Consultant, I support fellow therapists in developing their EMDR skills and working toward certification. My consultation services provide the guidance and support you need to excel in EMDR practice."
      mainSectionHeading="Supporting Your EMDR Journey"
      mainSectionContent={mainSectionContent}
      mainSectionImage="/assets/Molly Pike Therapist Photo_edited.jpg"
      mainSectionImageAlt="EMDR consultation for therapists"
      mainSectionCTA="Schedule Consultation"
      processHeading="Your Professional Development"
      processDescription="Your consultation journey is tailored to your experience level and certification goals, providing personalized support for your EMDR practice development."
      steps={steps}
      finalCTA="Start Your Consultation"
    />
    </>
  );
}
