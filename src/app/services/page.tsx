import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { canonicalBase } from "@/lib/site";

const canonicalPath = '/services';

export const metadata: Metadata = {
  title: 'Trauma Therapy Services in Golden, CO | Other Ways Therapy',
  description: 'Explore EMDR, IFS, ketamine integration, intensives, and consultation tailored for clients in Golden, CO.',
  alternates: { canonical: `${canonicalBase}${canonicalPath}` },
  openGraph: {
    type: 'website',
    title: 'Trauma Therapy Services in Golden, CO | Other Ways Therapy',
    description: 'Explore EMDR, IFS, ketamine integration, intensives, and consultation tailored for clients in Golden, CO.',
    url: `${canonicalBase}${canonicalPath}`,
  },
};

export default function Services() {
  const services = [
    {
      title: "EMDR Therapy",
      description: "Evidence-based processing to resolve stuck memories and patterns. Gentle, structured, and paced for safety.",
      icon: "/assets/therapy-planning-icon.svg",
      href: "/services/emdr-therapy"
    },
    {
      title: "Internal Family Systems Therapy", 
      description: "Explore parts, foster Self-leadership, and integrate mind–body wisdom.",
      icon: "/assets/internal-family-systems-somatics-icon.svg",
      href: "/services/internal-family-systems"
    },
    {
      title: "Ketamine Preparation & Integration",
      description: "Preparation, support, and post-session integration to translate insights into daily life.",
      icon: "/assets/emdr-integration-icon.svg", 
      href: "/services/ketamine-prep-integration"
    },
    {
      title: "EMDR Intensives",
      description: "Condensed 3–5 hour sessions for focused, accelerated work.",
      icon: "/assets/emdr-intensives-icon.svg",
      href: "/services/emdr-intensives"
    },
    {
      title: "EMDR Consultation for Therapists",
      description: "EMDRIA-informed consultation to support clinicians toward competency and certification.",
      icon: "/assets/emdr-consultation-icon.svg",
      href: "/services/emdr-consultation"
    }
  ];

  const serviceAddress = {
    '@type': 'PostalAddress',
    streetAddress: '4251 Kipling St. #430',
    addressLocality: 'Wheat Ridge',
    addressRegion: 'CO',
    postalCode: '80033',
    addressCountry: 'US',
  } as const;

  const provider = {
    '@type': 'Organization',
    name: 'Other Ways Therapy',
    url: canonicalBase,
    telephone: '+1-720-863-6373',
    logo: `${canonicalBase}/assets/other-ways-therapy-logo.avif`,
    address: serviceAddress,
  } as const;

  const servicesLd = {
    '@context': 'https://schema.org',
    '@graph': services.map((service) => ({
      '@type': 'Service',
      '@id': `${canonicalBase}${service.href}#service`,
      name: service.title,
      serviceType: service.title,
      description: service.description,
      url: `${canonicalBase}${service.href}`,
      provider,
      areaServed: [
        { '@type': 'City', name: 'Golden' },
        { '@type': 'AdministrativeArea', name: 'Jefferson County' },
        { '@type': 'State', name: 'Colorado' },
      ],
      serviceAudience: {
        '@type': 'Audience',
        audienceType: 'Adults seeking trauma therapy and nervous system-safe care',
      },
      serviceLocation: {
        '@type': 'Place',
        name: 'Other Ways Therapy Office',
        address: serviceAddress,
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        url: `${canonicalBase}${service.href}`,
      },
    })),
  } as const;

  return (
    <main className="flex flex-col bg-owt-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesLd),
        }}
      />
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/therapy-healing-landscape-background.avif"
          alt="Services at Other Ways Therapy"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Content overlay */}
        <div className="absolute inset-0">
          <div className="section-container h-full">
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <h1 className="heading-font text-white tracking-tight text-clamp-page-title">
                  Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-full bg-owt-bg-primary section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="heading-font text-clamp-about-title text-owt-supporting mb-6 md:mb-8">
              My Approach
            </h2>
            <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
              I offer a range of evidence-based therapeutic services supporting Golden, the Denver metro area, and communities throughout Colorado. Each approach is tailored to meet your unique needs and healing journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-12 md:mb-16 justify-items-center">
            {services.map((service, index) => {
              let additionalClasses = '';
              // Desktop: First 3 cards take 2 columns each (2*3=6), last 2 cards take 1.5 columns each with offset
              if (index < 3) {
                additionalClasses += ' lg:col-span-2';
              } else if (index === 3) {
                additionalClasses += ' lg:col-start-2 lg:col-span-2';
              } else if (index === 4) {
                additionalClasses += ' lg:col-span-2 md:col-span-2 md:justify-self-center';
              }
              
              return (
                <Link
                  key={index}
                  href={service.href}
                  className={`group block bg-[#7e7e69] rounded-[20px] p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-owt-primary-brown focus:ring-offset-2 w-full max-w-sm${additionalClasses}`}
                >
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon Container */}
                  <div className="flex items-center justify-center w-14 h-14 mb-6">
                    <Image
                      src={service.icon}
                      alt=""
                      width={56}
                      height={56}
                      aria-hidden="true"
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <h2 className="heading-font text-lg md:text-xl text-white mb-4 group-hover:text-owt-btn-light-bg transition-colors">
                    {service.title}
                  </h2>
                  
                  <p className="text-sm md:text-base text-white font-light leading-relaxed mb-6 flex-1 opacity-90">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <span className="text-sm md:text-base text-white font-medium group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
