import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: 'EMDR Therapy | Other Ways Therapy',
  description: 'Evidence-based EMDR therapy in Wheat Ridge, Colorado. Gentle, structured trauma processing to help you heal from stuck memories and patterns.',
  alternates: { canonical: '/services/emdr-therapy' },
  openGraph: {
    type: 'website',
    title: 'EMDR Therapy | Other Ways Therapy',
    description: 'Evidence-based EMDR therapy in Wheat Ridge, Colorado. Gentle, structured trauma processing to help you heal from stuck memories and patterns.',
    url: '/services/emdr-therapy',
  },
};

export default function EMDRTherapy() {
  const steps = [
    {
      step: "STEP 1:",
      title: "Assessment & Preparation",
      description: "We begin by understanding your unique story, establishing safety, and building the resources you need for successful processing.",
      icon: "/assets/planning_icon.svg"
    },
    {
      step: "STEP 2:",
      title: "Target Identification",
      description: "Together, we identify specific memories or experiences that are contributing to your current challenges and distress.",
      icon: "/assets/intensive_icon.svg"
    },
    {
      step: "STEP 3:",
      title: "Processing & Integration",
      description: "Using bilateral stimulation, we help your brain process and integrate these experiences in a new, adaptive way.",
      icon: "/assets/integration_icon.svg"
    },
    {
      step: "STEP 4:",
      title: "Future Resilience",
      description: "We strengthen your capacity to handle future challenges with confidence, using the insights and healing you've gained.",
      icon: "/assets/consultation_icon.svg"
    }
  ];

  return (
    <main className="flex flex-col bg-owt-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'EMDR Therapy',
            areaServed: {
              '@type': 'State',
              name: 'Colorado',
            },
            provider: {
              '@type': 'Organization',
              name: 'Other Ways Therapy',
            },
            url: 'https://otherwaystherapy.com/services/emdr-therapy',
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/hero-background.jpg"
          alt="EMDR Therapy at Other Ways Therapy"
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
                  EMDR Therapy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full !bg-white section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8">
              Healing Through Gentle, Evidence-Based Processing
            </h2>
            <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
              EMDR is a scientifically-validated therapy that helps your brain process difficult experiences without reliving them in detail. This gentle approach works directly with how memories are stored in your nervous system, helping you move beyond patterns that no longer serve you and creating space for resilience and renewed hope.
            </p>
          </div>
        </div>
      </section>

      {/* What Is EMDR Section */}
      <section className="relative w-full bg-owt-bg-primary section-padding overflow-hidden">
        {/* Decorative background SVG */}
        <div className="pointer-events-none select-none absolute right-8 md:right-16 lg:right-24 bottom-0 translate-y-[10%] lg:bottom-auto lg:top-0 lg:-translate-y-[30%] z-0 opacity-90">
          <Image
            src="/assets/Group-2 copy.svg"
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
              <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-4 md:mb-6">What Is EMDR?</h2>
              <div className="mt-4 md:mt-6 flex flex-col gap-6 text-sm md:text-base text-owt-text-primary font-light">
                <p>
                  Eye Movement Desensitization and Reprocessing (EMDR) is a highly effective form of trauma treatment that has endless applications. You do not have to have a diagnosis of Post Traumatic Stress Disorder to benefit from EMDR. My clients seek out EMDR therapy because they have symptoms of anxiety, depression, or relationship patterns that they find puzzling, painful, or perhaps incongruent with other areas of their life.
                </p>
                
                <p>
                  When we begin the process of EMDR together, we explore what you are experiencing present day. My role is to help guide you in identifying which past experiences may be contributing to what feels presently stuck or distressing. Then, by utilizing bilateral stimulation techniques, such as back and forth eye movement, alternating vibrating buzzers, or tapping, we process these memories together by targeting the way the memory is stored in your nervous system—through your senses, thoughts/beliefs, emotions, and body sensations.
                </p>
              </div>
              <div className="pt-6 md:pt-6">
                <Link href="/contact" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                  Schedule Your Consultation
                </Link>
              </div>
            </div>

            {/* Right column: EMDR image */}
            <div className="flex justify-center lg:justify-end mt-8 md:mt-12 lg:mt-0">
              <div className="relative rounded-full overflow-hidden w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] lg:w-[30rem] lg:h-[30rem] !bg-white/50">
                <Image
                  src="/assets/IMG_3457.jpeg"
                  alt="Nature scene"
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

      {/* Why EMDR Works */}
      <section className="w-full bg-[#ECE7DD] section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8">
              Why EMDR Works
            </h2>
            <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
              Just as trimming the top of a dandelion is only temporarily beneficial to the health of your yard's landscape, so too can less effective modalities be in addressing your symptoms. We want to identify and address the root of the issue. When approaching the present issue from this angle, the effects on your emotional health can be tremendous. EMDR is highly effective, and although it can have a reputation to be magic, it is not unicorns and rainbows, nor is it "microwave healing." However, this evidence-based practice addresses symptoms and patterns in a more targeted way, bringing down disturbances, and producing many positive ripple effects.
            </p>
          </div>
        </div>
      </section>

      {/* Your Healing Process Section */}
      <section className="w-full !bg-white pt-16 md:pt-10 pb-10 md:pb-16">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8">
              Your Healing Process
            </h2>
            <p className="text-sm md:text-base text-owt-text-primary font-light max-w-3xl mx-auto">
              Your healing process is a personalized journey of growth and transformation, designed to help you move forward with clarity, resilience, and self-compassion.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#7e7e69] rounded-[20px] p-6 md:p-8">
                <div className="flex gap-4 md:gap-6 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Image
                      src={step.icon}
                      alt=""
                      width={48}
                      height={48}
                      aria-hidden="true"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-white font-medium mb-2 opacity-80">
                      {step.step}
                    </p>
                    <h3 className="heading-font text-lg md:text-xl text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-white font-light leading-relaxed opacity-90">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/contact"
              className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base"
            >
              Begin Your Healing Journey
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
