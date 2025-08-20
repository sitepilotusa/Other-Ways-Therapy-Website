import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Ways Therapy — Transformative Intensives in Colorado",
  description:
    "Therapy intensives, EMDR, IFS, and ketamine preparation & integration in Colorado. In-person in Wheat Ridge and virtual statewide.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Other Ways Therapy — Transformative Intensives in Colorado",
    description:
      "Therapy intensives, EMDR, IFS, and ketamine preparation & integration in Colorado.",
    type: "website",
    images: [{ url: "/assets/hero-background.jpg", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col bg-owt-bg-primary">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/hero-background.jpg"
          alt="Therapeutic landscape background for Other Ways Therapy"
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
                  Other Ways Therapy
                </h1>
                <p className="text-white font-light text-clamp-hero-subtitle max-w-4xl">
                  Transformative Therapy Intensives in Colorado
                </p>
                <div className="mt-2 md:mt-3">
                  <Link
                    href="#next"
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
              src="/assets/scroll_down_button.svg"
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

      {/* About Me Section */}
      <section className="relative w-full bg-owt-bg-primary section-padding overflow-hidden">
        {/* Decorative background SVG from the top-right corner */}
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
              <span className="text-clamp-eyebrow font-semibold tracking-[.06em] text-owt-text-secondary mb-4 md:mb-6">ABOUT ME</span>
              <h2 className="heading-font text-clamp-about-title text-[var(--owt-supporting)]">Hi, I’m Molly!</h2>
              <div className="mt-4 md:mt-6 flex flex-col gap-4 text-sm md:text-base text-owt-text-primary font-light">
                <p>
                  I admire the courageous journey people take to heal from their painful life experiences in order to
                  live a more present, integrated, meaningful life.
                </p>
                <p>
                  Whether you’re navigating the effects of trauma, anxiety, relational challenges, experiencing a life
                  transition, or seeking personal growth, I offer a safe space for you to find your own path towards
                  healing.
                </p>
                <p>
                  As a Licensed Professional Counselor, Certified EMDR Clinician, and Founder of Other Ways Therapy, I
                  honor the diversity of human experience and recognize that there is no one-size-fits-all approach to
                  healing. My integrative therapy approach combines evidence-based modalities with a deep reverence for
                  your innate wisdom and resilience.
                </p>
              </div>
              <div className="pt-6 md:pt-6">
                <Link href="/about" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                  Learn more about Other Ways
                </Link>
              </div>
            </div>

            {/* Right column: Molly image as a perfect circle */}
            <div className="flex justify-center lg:justify-end mt-8 md:mt-12 lg:mt-0">
              <div className="relative rounded-full overflow-hidden w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] lg:w-[30rem] lg:h-[30rem] !bg-white/50">
                <Image
                  src="/assets/molly-pike.jpg"
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

      

      {/* Narrative Section (moved below About Me) */}
      <section className="w-full bg-owt-bg-accent section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-3xl card-rounded-sm bg-owt-secondary-brown p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] items-start gap-0">
              {/* Left column: arrow aligned to top */}
              <div className="pl-2 md:pl-3 mt-2 md:mt-2">
                <Image src="/assets/arrow-icon.svg" alt="" width={24} height={24} aria-hidden />
              </div>
              {/* Right column: all text, aligned to top */}
              <div className="text-white font-light leading-relaxed space-y-4 md:space-y-6">
                <p className="font-semibold">
                  You have reached a point in your life where you are craving true internal change.
                </p>
                <p>
                  This may not be your first rodeo in therapy. You’ve dedicated time and energy to your healing journey,
                  yet you still find yourself hitting a wall.
                </p>
                <p>
                  I trust that you are thriving in many areas of your life, but sometimes you’re surprised by the ways you
                  feel stuck—unclear why certain patterns persist.
                </p>
                <p>
                  Humans and our nervous systems—we’re funny like that.
                </p>
                <p>
                  Our thoughts, emotions, and sensations can feel like big sticklers, showing up at inconvenient times. But
                  if we view them as valuable communication from our mind and body, and we learn how to work with that
                  information, everything can change.
                </p>
                <p>
                  Yet, trauma and chronic stress have a way of disrupting this flow of awareness.
                </p>
                <p>
                  Our past memories start shaping our present experiences and our vision of the future. This isn’t something
                  we can just think our way out of.
                </p>
                <p>
                  The modalities I use help you process experiences in a way that allows you to move forward—without being
                  held back by the past.
                </p>
                <p>
                  Trust me, there are effective ways to heal and other ways to live.
                </p>
                <p>
                  I love collaboratively tailoring a healing plan that considers your unique patterns and stuck points—ones
                  that may no longer be serving you. Together, we’ll identify their origins so you can finally process what
                  didn’t have a chance to be integrated before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMDR Intensives Section */}
      <section
        className="relative w-full !bg-white section-padding overflow-hidden bg-no-repeat bg-right bg-cover"
        style={{ backgroundImage: "url('/assets/edmr_intensives_bg.png')" }}
      >
        <div className="relative z-10 section-container">
          <div className="section-grid-2col">
            {/* Left column: image */}
            <div className="flex justify-center lg:justify-start mt-8 md:mt-12 lg:mt-0 order-2 lg:order-1">
              <div className="relative rounded-full overflow-hidden w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] lg:w-[30rem] lg:h-[30rem] !bg-white/50">
                <Image
                  src="/assets/EDMR_img.jpg"
                  alt="EMDR Intensives"
                  fill
                  sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 28rem, 20rem"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>

            {/* Right column: text */}
            <div className="flex flex-col order-1 lg:order-2">
              <span className="text-clamp-eyebrow font-semibold tracking-[.06em] text-owt-text-secondary mb-4 md:mb-6">EMDR INTENSIVES</span>
              <h2 className="heading-font text-clamp-about-title text-[var(--owt-supporting)]">Accelerated Healing With EMDR Intensives</h2>
              <div className="mt-4 md:mt-6 flex flex-col gap-4 text-sm md:text-base text-owt-text-primary font-light">
                <p>
                  EMDR Intensives are a focused, great alternative to weekly therapy if you are looking for a flexible option to fit your busy life. By structuring our work together in this one-day condensed format, your nervous system may find comfort in collaboratively identifying a specific plan of action for our day together.
                </p>
              </div>
              <div className="pt-6 md:pt-6">
                <Link href="/services/emdr-intensives" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities Section - Three Boxes */}
      <section className="relative w-full !bg-white pb-0">
        <div className="relative section-container rounded-[60px] md:rounded-[100px] bg-owt-bg-primary overflow-hidden max-w-7xl mx-auto">
          {/* Decorative background SVG (under boxes, over bg color) */}
          <div className="pointer-events-none select-none absolute right-8 md:right-16 lg:right-24 bottom-0 translate-y-[20%] z-0 opacity-90">
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

          <div className="relative z-10 px-6 md:px-8 pt-8 md:pt-10 pb-8 md:pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch justify-items-center">
              {/* Box 1: EMDR */}
              <div className="flex h-full w-full flex-col items-center text-center card-rounded bg-owt-tertiary-brown text-white p-6 md:p-8 lg:p-10">
                <div className="flex items-center justify-center h-[85px] mb-4 md:mb-6">
                  <Image src="/assets/edmr_icon.svg" alt="EMDR icon" width={55} height={55} className="block mx-auto" />
                </div>
                <h3 className="heading-font text-lg md:text-xl">EMDR</h3>
                <p className="mt-3 md:mt-4 text-sm md:text-base font-light">
                  EMDR is a transformative therapy that engages our natural healing capacity. By stimulating bilateral brain
                  activity through gentle eye movements, taps, or sounds, EMDR facilitates the processing and integration of
                  traumatic or painful memories…
                </p>
                <div className="pt-5 md:pt-6 mt-auto">
                  <Link href="/services/emdr-therapy" className="btn-base btn-light inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Box 2: Parts & Somatics */}
              <div className="flex h-full w-full flex-col items-center text-center card-rounded bg-owt-secondary-brown text-white p-6 md:p-8 lg:p-10">
                <div className="flex items-center justify-center h-[85px] mb-4 md:mb-6">
                  <Image src="/assets/parts_somatics_icon.svg" alt="Parts and Somatics icon" width={85} height={85} className="block mx-auto" />
                </div>
                <h3 className="heading-font text-lg md:text-xl">Parts & Somatics</h3>
                <p className="mt-3 md:mt-4 text-sm md:text-base font-light">
                  As an Internal Family Systems (IFS)- Informed therapist, I acknowledge that we all contain multiple parts that
                  interact internally, in helpful and not so helpful ways. Parts work is a great way to be curious about your inner
                  world and the multiplicity of the mind.
                </p>
                <div className="pt-5 md:pt-6 mt-auto">
                  <Link href="/services/internal-family-systems" className="btn-base btn-light inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Box 3: KAP */}
              <div className="flex h-full w-full flex-col items-center text-center rounded-[40px] md:rounded-[80px] lg:rounded-[100px] bg-owt-tertiary-brown text-white p-6 md:p-8 lg:p-10 md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto">
                <div className="flex items-center justify-center h-[85px] mb-4 md:mb-6">
                  <Image src="/assets/kap_icon.svg" alt="KAP icon" width={45} height={45} className="block mx-auto" />
                </div>
                <h3 className="heading-font text-lg md:text-xl">KAP</h3>
                <p className="mt-3 md:mt-4 text-sm md:text-base font-light">
                  Ketamine Assisted Psychotherapy (KAP) offers a unique opportunity to explore altered states of consciousness and
                  access deeper layers of the psyche. Ketamine, a safe and FDA-approved medication, is administered in a supportive
                  therapeutic setting, facilitating profound insights.
                </p>
                <div className="pt-5 md:pt-6 mt-auto">
                  <Link href="/services/ketamine-prep-integration" className="btn-base btn-light inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
