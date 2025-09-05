import Image from "next/image";
import Link from "next/link";

interface Step {
  step: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicePageProps {
  pageTitle: string;
  introHeading: string;
  introText: string;
  mainSectionHeading: string;
  mainSectionContent: React.ReactNode;
  mainSectionImage: string;
  mainSectionImageAlt: string;
  mainSectionCTA: string;
  processHeading: string;
  processDescription: string;
  steps: Step[];
  finalCTA: string;
}

export function ServicePageLayout({
  pageTitle,
  introHeading,
  introText,
  mainSectionHeading,
  mainSectionContent,
  mainSectionImage,
  mainSectionImageAlt,
  mainSectionCTA,
  processHeading,
  processDescription,
  steps,
  finalCTA
}: ServicePageProps) {
  return (
    <main className="flex flex-col !bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/therapy-healing-landscape-background.jpg"
          alt={`${pageTitle} at Other Ways Therapy`}
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
                  {pageTitle}
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
              {introHeading}
            </h2>
            <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
              {introText}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative w-full bg-owt-bg-primary section-padding overflow-hidden">
        {/* Decorative background SVG */}
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
              <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-4 md:mb-6">
                {mainSectionHeading}
              </h2>
              <div className="mt-4 md:mt-6 flex flex-col gap-4 text-sm md:text-base text-owt-text-primary font-light">
                {mainSectionContent}
              </div>
              <div className="pt-6 md:pt-6">
                <Link href="/contact" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                  {mainSectionCTA}
                </Link>
              </div>
            </div>

            {/* Right column: Image */}
            <div className="flex justify-center lg:justify-end mt-8 md:mt-12 lg:mt-0">
              <div className="relative rounded-full overflow-hidden w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] lg:w-[30rem] lg:h-[30rem] !bg-white/50">
                <Image
                  src={mainSectionImage}
                  alt={mainSectionImageAlt}
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

      {/* Process Section */}
      <section className="w-full !bg-white pt-16 md:pt-10 pb-10 md:pb-16">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8">
              {processHeading}
            </h2>
            <p className="text-sm md:text-base text-owt-text-primary font-light max-w-3xl mx-auto">
              {processDescription}
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
              {finalCTA}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}