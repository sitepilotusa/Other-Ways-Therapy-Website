import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { slug: string };

const TOWNS = [
  "Lakewood",
  "Wheat Ridge",
  "Denver",
  "Arvada",
  "Boulder",
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function fromSlug(slug: string) {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return TOWNS.map((town) => ({ slug: toSlug(town) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const town = fromSlug(slug);
  return {
    title: `Therapy in ${town} | Other Ways Therapy`,
    description: `Compassionate, effective therapy intensives for individuals in ${town} and virtually statewide.`,
    alternates: {
      canonical: `/areas-we-serve/${slug}`,
    },
    openGraph: {
      type: 'website',
      url: `/areas-we-serve/${slug}`,
      title: `Therapy in ${town} | Other Ways Therapy`,
      description: `Compassionate, effective therapy intensives for individuals in ${town} and virtually statewide.`,
    },
  };
}

export default async function TownPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const town = fromSlug(slug);
  if (!TOWNS.includes(town)) return notFound();

  const services = [
    {
      title: "EMDR Therapy",
      href: "/services/emdr-therapy",
      description:
        "Evidence-based EMDR to resolve traumatic memories and reduce anxiety and PTSD symptoms.",
    },
    {
      title: "Internal Family Systems Therapy",
      href: "/services/internal-family-systems",
      description:
        "IFS therapy to heal parts, build Self leadership, and transform inner conflict.",
    },
    {
      title: "Ketamine Preparation & Integration",
      href: "/services/ketamine-prep-integration",
      description:
        "Preparation and integration support for ketamine therapy to create lasting change.",
    },
    {
      title: "EMDR Intensives",
      href: "/services/emdr-intensives",
      description:
        "Single-day EMDR intensives for accelerated healing with focused trauma processing.",
    },
    {
      title: "EMDR Consultation for Therapists",
      href: "/services/emdr-consultation",
      description:
        "Consultation for clinicians pursuing competency, advanced skills, and EMDRIA certification.",
    },
  ];

  const whyChoose = [
    {
      title: "Personalized Intensives",
      description: "Tailored therapy intensives designed around your goals, pace, and schedule.",
      icon: "/assets/emdr-intensives-icon.svg",
    },
    {
      title: "Accessible Virtual Care",
      description: "Secure telehealth sessions available anywhere in Colorado for flexibility and ease.",
      icon: "/assets/emdr-consultation-icon.svg",
    },
    {
      title: "Compassionate Support",
      description: "Trauma-informed, attuned care that honors your experience and nervous system.",
      icon: "/assets/emdr-integration-icon.svg",
    },
    {
      title: "Front Range Convenience",
      description: `Flexible scheduling and easy access for clients in Golden, ${town}, and nearby Front Range communities.`,
      icon: "/assets/therapy-planning-icon.svg",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Therapy Intensives and EMDR',
            areaServed: {
              '@type': 'City',
              name: town,
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'CO',
                addressCountry: 'US',
              },
            },
            provider: {
              '@type': 'Organization',
              name: 'Other Ways Therapy',
            },
            url: `https://otherwaystherapy.com/areas-we-serve/${slug}`,
          }),
        }}
      />
      <main className="flex flex-col bg-owt-bg-primary">
      {/* Hero Section (styled like Home) */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/therapy-healing-landscape-background.avif"
          alt={`Therapy in ${town} - Other Ways Therapy`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Content overlay */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-7xl h-full px-6 md:px-8">
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col items-center text-center gap-6 md:gap-8">
                <h1 className="heading-font text-white tracking-tight text-clamp-hero-title">
                  Therapy in {town}
                </h1>
                <p className="text-white font-light text-clamp-hero-subtitle max-w-4xl">
                  Providing compassionate, effective therapy intensives for individuals in {town} and virtually statewide.
                </p>
                <div className="mt-2 md:mt-3">
                  <Link
                    href="/contact"
                    className="btn-base btn-light inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base"
                  >
                    Schedule a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-10">
          <Link href="#next" aria-label="Scroll to next section">
            <Image
              src="/assets/scroll-down-arrow-icon.svg"
              alt="Scroll down"
              width={28}
              height={28}
              className="scroll-bounce"
              priority
            />
          </Link>
        </div>
      </section>

      {/* Anchor for next section to enable smooth scroll */}
      <div id="next" />

      {/* Intro Paragraph */}
      <section className="relative w-full bg-owt-bg-primary section-padding overflow-hidden">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8">
              Therapy Services in {town}
            </h2>
            <div className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed space-y-4">
              <p>
                If you live in {town}, transformative therapy intensives are within reach. Enjoy secure sessions designed for flexibility and ease, wherever you are in Colorado.
              </p>
              <p>
                Whether you’re seeking EMDR, Internal Family Systems therapy, or integrative support, we provide compassionate, evidence-based care that meets you where you are—in person or online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section (from homepage) */}
      <section className="relative w-full bg-owt-bg-primary section-padding overflow-hidden">
        {/* Decorative background SVG from the top-right corner */}
        <div className="pointer-events-none select-none absolute right-8 md:right-16 lg:right-24 bottom-0 translate-y-[10%] lg:bottom-auto lg:top-0 lg:-translate-y-[30%] z-0 opacity-90">
          <Image
            src="/assets/decorative-leaf-pattern-left.svg"
            alt=""
            width={600}
            height={560}
            aria-hidden
            priority={false}
            className="rotate-180 lg:rotate-0"
          />
        </div>

        <div className="relative z-10 section-container">
          <div className="section-grid-2col">
            {/* Left column: text */}
            <div className="flex flex-col">
              <span className="text-clamp-eyebrow font-semibold tracking-[.06em] text-owt-text-secondary mb-4 md:mb-6">ABOUT ME</span>
              <h2 className="heading-font text-clamp-about-title text-[var(--owt-supporting)]">Hi, I’m Molly!</h2>
              <div className="mt-4 md:mt-6 flex flex-col gap-4 text-sm md:text-base text-owt-text-primary font-light">
                <p>
                  I admire the courageous journey people take to heal from their painful life experiences in order to
                  live a more present, integrated, meaningful life.
                </p>
                <p>
                  Whether you’re navigating the effects of trauma, anxiety, relationship challenges, experiencing a life
                  transition, or seeking personal growth, I offer a safe space for you to find your own path towards
                  healing.
                </p>
                <p>
                  As a Licensed Professional Counselor, Certified EMDR Clinician, IFS trained therapist, Ketamine Assisted Psychotherapy trained and Founder of Other Ways Therapy, I honor the diversity of human experience and recognize that there is no one-size-fits-all approach to healing. My integrative therapy approach combines evidence-based modalities
                  and somatic practices to help you reconnect with your inner wisdom and move toward lasting change.
                </p>
                <p>
                  We’ll work together to help you understand and transform the patterns that no longer serve you, at a pace that feels right for you.
                </p>
              </div>
            </div>

            {/* Right column: Molly image */}
            <div className="relative flex justify-center lg:justify-end mt-8 md:mt-12 lg:mt-0">
              <div className="relative rounded-full overflow-hidden w-[20rem] h-[20rem] md:w-[24rem] md:h-[24rem] lg:w-[26rem] lg:h-[26rem] !bg-white/50 shadow-2xl">
                <Image
                  src="/assets/molly-pike-therapist-portrait.avif"
                  alt="Molly Pike, founder of Other Ways Therapy"
                  fill
                  sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 28rem, 20rem"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full !bg-white section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
            <h2 className="heading-font text-clamp-section-title text-owt-supporting">
              In {town}, we provide the following therapy options:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-stretch justify-items-stretch">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-owt-primary-brown"
              >
                <div className="h-full w-full rounded-[20px] bg-[#7e7e69] p-6 md:p-8 flex flex-col items-start text-left transition-transform duration-150 group-hover:-translate-y-0.5">
                  <h3 className="heading-font text-lg md:text-xl text-white mb-1">{service.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-white font-light opacity-90">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="text-sm text-white/90 group-hover:underline">Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative w-full bg-owt-bg-primary section-padding overflow-hidden">
        {/* Decorative background SVG */}
        <div className="pointer-events-none select-none absolute right-8 md:right-16 lg:right-24 bottom-0 translate-y-[15%] lg:bottom-auto lg:top-0 lg:-translate-y-[30%] z-0 opacity-90">
          <Image
            src="/assets/decorative-leaf-pattern-left.svg"
            alt=""
            width={600}
            height={560}
            aria-hidden
            priority={false}
            className="rotate-180 lg:rotate-0"
          />
        </div>

        <div className="relative z-10 section-container pb-10 md:pb-16">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
            <h2 className="heading-font text-clamp-section-title text-owt-supporting">
              Why Choose Other Ways Therapy in {town}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="bg-[#7e7e69] rounded-[20px] p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt=""
                      width={48}
                      height={48}
                      aria-hidden
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-font text-white text-lg md:text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action removed as requested */}
    </main>
    </>
  );
}
