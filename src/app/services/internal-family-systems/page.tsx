import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Metadata } from "next";
/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: 'Internal Family Systems Therapy | Other Ways Therapy',
  description: 'Internal Family Systems (IFS) therapy in Wheat Ridge, Colorado. Explore your inner parts, foster Self-leadership, and integrate mind-body wisdom.',
  alternates: { canonical: '/services/internal-family-systems' },
  openGraph: {
    type: 'website',
    title: 'Internal Family Systems Therapy | Other Ways Therapy',
    description: 'Internal Family Systems (IFS) therapy in Wheat Ridge, Colorado. Explore your inner parts, foster Self-leadership, and integrate mind-body wisdom.',
    url: '/services/internal-family-systems',
  },
};

export default function InternalFamilySystems() {
  const steps = [
    {
      step: "STEP 1:",
      title: "Parts Exploration",
      description: "We begin by getting curious about the different parts of yourself—the protectors, exiles, and firefighters that shape your inner world.",
      icon: "/assets/therapy-planning-icon.svg"
    },
    {
      step: "STEP 2:",
      title: "Self-Leadership Development",
      description: "Together, we help you access your core Self—the calm, curious, compassionate center that can lead your internal system with wisdom.",
      icon: "/assets/emdr-consultation-icon.svg"
    },
    {
      step: "STEP 3:",
      title: "Parts Integration",
      description: "We work to understand what each part needs and help them find new, healthier ways to fulfill their protective roles.",
      icon: "/assets/emdr-integration-icon.svg"
    },
    {
      step: "STEP 4:",
      title: "Harmonious Living",
      description: "You develop the ability to live from Self-leadership, creating internal harmony and more authentic relationships with others.",
      icon: "/assets/internal-family-systems-somatics-icon.svg"
    }
  ];

  const mainSectionContent = (
    <>
      <p>
        Internal Family Systems (IFS) recognizes that we all contain multiple parts—different aspects of our personality that developed to help us navigate life's challenges. Some parts protect us, some carry our pain, and others try to manage our image in the world.
      </p>
      <p>
        IFS therapy helps you develop a relationship with these parts from your core Self—the calm, curious, and compassionate center of your being. Rather than trying to eliminate difficult parts, we learn to understand their roles and help them find healthier ways to contribute to your well-being.
      </p>
      <p>
        This approach is particularly powerful for those who feel internal conflict, struggle with self-criticism, or notice different "versions" of themselves showing up in different situations. IFS creates space for all parts of you to be seen, understood, and integrated.
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
            serviceType: 'Internal Family Systems Therapy',
            areaServed: {
              '@type': 'State',
              name: 'Colorado',
            },
            provider: {
              '@type': 'Organization',
              name: 'Other Ways Therapy',
            },
            url: 'https://otherwaystherapy.com/services/internal-family-systems',
          }),
        }}
      />
      <ServicePageLayout
      pageTitle="Internal Family Systems Therapy"
      introHeading="Honoring All Parts of Yourself"
      introText="Internal Family Systems (IFS) therapy helps you develop a compassionate relationship with all aspects of yourself. This approach recognizes that we all contain multiple parts, each with their own wisdom and protective function, while fostering Self-leadership from your calm, curious center."
      mainSectionHeading="Understanding Your Inner System"
      mainSectionContent={mainSectionContent}
      mainSectionImage="/assets/internal-family-systems-service-page-image.jpg"
      mainSectionImageAlt="Internal Family Systems therapy illustration"
      mainSectionCTA="Explore IFS Therapy"
      processHeading="Your IFS Journey"
      processDescription="Your IFS journey is about developing Self-leadership and creating harmony among your internal parts, leading to greater self-compassion and authentic living."
      steps={steps}
      finalCTA="Start Your Parts Work"
    />
    </>
  );
}
