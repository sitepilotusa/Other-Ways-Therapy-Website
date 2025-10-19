import { ServicePageLayout } from "@/components/ServicePageLayout";
import Link from "next/link";
import { Metadata } from "next";
import { canonicalBase } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumbs";
/* eslint-disable react/no-unescaped-entities */

const canonicalPath = '/services/internal-family-systems';

export const metadata: Metadata = {
  title: 'IFS Therapy in Golden, CO | Other Ways Therapy',
  description: 'Heal protective parts and grow Self-leadership with IFS therapy crafted for Golden, CO clients navigating complex trauma.',
  alternates: { canonical: `${canonicalBase}${canonicalPath}` },
  openGraph: {
    type: 'website',
    title: 'IFS Therapy in Golden, CO | Other Ways Therapy',
    description: 'Heal protective parts and grow Self-leadership with IFS therapy crafted for Golden, CO clients navigating complex trauma.',
    url: `${canonicalBase}${canonicalPath}`,
  },
};

export default function InternalFamilySystems() {
  const serviceJsonLd = {
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
    url: `${canonicalBase}${canonicalPath}`,
  };

  const breadcrumbLd = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/' },
    { name: 'Internal Family Systems Therapy', path: canonicalPath },
  ]);

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
      <p>
        Many clients weave this work alongside <Link href="/services/emdr-therapy" className="hover:underline">EMDR therapy</Link> to gently process stuck memories, or partner it with <Link href="/services/ketamine-prep-integration" className="hover:underline">ketamine preparation and integration support</Link> when psychedelic insights surface parts that need a little extra care.
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
      pageTitle="Internal Family Systems Therapy"
      introHeading="Honoring All Parts of Yourself"
      introText="Internal Family Systems (IFS) therapy helps you develop a compassionate relationship with all aspects of yourself. This approach recognizes that we all contain multiple parts, each with their own wisdom and protective function, while fostering Self-leadership from your calm, curious center. Available to clients in Golden, CO and surrounding areas."
      mainSectionHeading="Understanding Your Inner System"
      mainSectionContent={mainSectionContent}
      mainSectionImage="/assets/internal-family-systems-service-page-image.avif"
      mainSectionImageAlt="Internal Family Systems therapy illustration supporting Golden, Colorado clients"
      mainSectionCTA="Explore IFS Therapy"
      processHeading="Your IFS Journey"
      processDescription="Your IFS journey is about developing Self-leadership and creating harmony among your internal parts, leading to greater self-compassion and authentic living."
      steps={steps}
      finalCTA="Start Your Parts Work"
    />
    </>
  );
}
