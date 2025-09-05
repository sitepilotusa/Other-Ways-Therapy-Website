/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Other Ways Therapy",
  description:
    "Learn about Other Ways Therapy and Molly Pike, LPC. Trauma-informed EMDR, IFS, and intensive therapy in Wheat Ridge, Colorado.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Other Ways Therapy",
    description:
      "Learn about Other Ways Therapy and Molly Pike, LPC. Trauma-informed EMDR, IFS, and intensive therapy in Wheat Ridge, Colorado.",
    type: "website",
  },
};

export default function About() {
  return (
    <main className="flex flex-col !bg-white">
      {/* Hero Section - About Me */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/hero-background.jpg"
          alt="About Other Ways Therapy"
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
                  About Me
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative w-full !bg-white section-padding overflow-hidden">
        {/* Decorative background SVG on the left */}
        <div className="pointer-events-none select-none absolute left-8 md:left-16 lg:left-24 top-0 -translate-y-[30%] lg:bottom-auto lg:top-0 lg:-translate-y-[30%] z-0 opacity-90">
          <Image
            src="/assets/Group-2 copy.svg"
            alt=""
            width={600}
            height={560}
            aria-hidden
            priority={false}
            className="rotate-0 lg:rotate-0"
          />
        </div>

        <div className="relative z-10 section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">
            {/* Left column: Molly image */}
            <div className="flex justify-center lg:justify-center mt-4 md:mt-12 lg:mt-0 order-1 lg:order-1">
              <div className="relative rounded-full overflow-hidden w-[26rem] h-[26rem] md:w-[24rem] md:h-[24rem] lg:w-[26rem] lg:h-[26rem] !bg-white/50">
                <Image
                  src="/assets/Molly Pike Therapist Photo_edited.jpg"
                  alt="Molly Pike, Licensed Professional Counselor"
                  fill
                  sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 24rem, 26rem"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>

            {/* Right column: Quote box (reinstated) */}
            <div className="flex flex-col justify-center order-2 lg:order-2 min-h-[26rem] md:min-h-[24rem] lg:min-h-[26rem]">
              <div className="bg-[#F7F8F0] border-2 border-[#D9D9D9] p-[10px] rounded-[30px]">
                <div className="border border-[#D9D9D9] p-6 md:p-8 lg:p-10 rounded-[30px] text-center">
                  <h2 className="heading-font text-2xl md:text-3xl text-owt-supporting mb-4 md:mb-6">
                    Beneath Our Triggers
                  </h2>
                  <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed mb-4">
                    Sits a pattern.<br />
                    Telling of wounds.<br />
                    Of a time our needs for<br />
                    love, safety, and belonging<br />
                    Were unmet or threatened.
                  </p>
                  <p className="text-sm md:text-base text-owt-text-secondary italic">
                    -Hernping/Kaya Toast For The Soul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="relative w-full bg-[#F7F8F0] section-padding overflow-hidden">
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

        <div className="section-container relative z-10">
          <div className="mx-auto max-w-3xl">
            <div className="text-owt-text-primary font-light leading-relaxed space-y-8 md:space-y-10 text-sm md:text-base">
              
              <p>
                I was once published in a world-renowned newspaper. And by published, I mean side-column featured. And by world-renowned newspaper, I mean my middle school's low-budget media class project. I was voted by my fellow classmates that year as "Class Clown" and "Most Mature." I mention this not because I bask in the glory of my middle school days (is that a thing?), but because these apparent opposing parts of myself have always been true to me. Balancing humor and the heaviness of humanity is how I engage in the world, because I have learned we cannot eliminate pain, hardship or undesired parts of ourselves. In attempting to do so myself, I exacerbated an internal struggle for many years. Perhaps you can relate.
              </p>
              
              <div className="w-16 h-px bg-[#BB8B74]/30 mx-auto"></div>
              
              <p>
                The year before I was published in a large-scale newspaper, my hometown was in newspapers across the world for a horrible tragedy. One that impacted my community immensely, with many ripple effects. Years later I wanted to understand the impact of such events and help communities heal from trauma, which is why I pursued my Master's in International Disaster Psychology. I decided working as a therapist was my true passion because I love this work, and I believe in the ripple effects of healing too. I know various disasters disproportionately affect under-resourced communities and recognize that accumulative traumatic experiences are often a result of systems of oppression as well. This is why I stray from the textbook definitions of trauma and disaster. <span className="font-medium text-[#BB8B74]">After all, your experience is yours. It is the impact of your story that we work with.</span>
              </p>
              
              <div className="w-16 h-px bg-[#BB8B74]/30 mx-auto"></div>
              
              <p>
                Throughout my professional experiences, I have worked in community mental health as a therapist, crime victim's advocate, behavioral health disaster responder, trauma-informed yoga teacher and wellness coach, walking alongside people who want to find better ways to cope with raw life experiences. In my free time, I love to spend time with my loved ones, travel, practice yoga, procrastinate, get into nature, make jewelry, sew and rehabilitate thrifted furniture. I believe in the power of the multi-passionate individual! Many of my clients identify this way as well.
              </p>
              
              <div className="w-16 h-px bg-[#BB8B74]/30 mx-auto"></div>
              
              <p>
                I know finding a therapist is not easy. It is hard to know who and what will be a good fit by just reading a website. I recognize that I am not the therapist for everyone and I know rapport and trust is so important to the therapeutic process. I'd love to utilize our free consultation call to get a better pulse on whether we find it is a mutual good fit. If you would prefer to go in a different direction, I have a wide network of therapists to refer you to as well.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Professional Qualifications Section */}
      <section className="relative w-full bg-[#ECE7DD] section-padding overflow-hidden">
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
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-font text-clamp-about-title text-owt-supporting">
              Professional Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-12">
            {/* Card 1: Licensed Professional Counselor */}
            <div className="bg-[#F8F6F0] rounded-[20px] p-6 md:p-8 flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <Image 
                  src="/assets/LGBTQ Inclusive.jpg" 
                  alt="Licensed Professional Counselor badge" 
                  width={80} 
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="heading-font text-lg md:text-xl text-owt-supporting mb-3">
                  Licensed Professional Counselor
                </h3>
                <div className="space-y-3 text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  <p>
                    In 2012, I graduated from the University of Denver's Graduate School of Professional Psychology with a Master's in Clinical Psychology from International Disaster Psychology Program.
                  </p>
                  <p>
                    In 2017, I obtained my clinical licensure as a Licensed Professional Counselor in the state of Colorado.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: EMDRIA Approved Consultant */}
            <div className="bg-[#F8F6F0] rounded-[20px] p-6 md:p-8 flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <Image 
                  src="/assets/EMDRConsultantBadge.jpg" 
                  alt="EMDRIA Approved Consultant badge" 
                  width={80} 
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="heading-font text-lg md:text-xl text-owt-supporting mb-3">
                  EMDRIA Approved Consultant
                </h3>
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  I committed to further advancing my work in the EMDR community through an in-depth consultant-in-training program through The Trauma Therapist Institute (formerly Kase & CO). I currently serve as a faculty member for TTI Basic Trainings and as a consultant for the Certification Program, supporting and educating other clinicians on their EMDR journey.
                </p>
              </div>
            </div>

            {/* Card 3: Ketamine Assisted Psychotherapy Certified */}
            <div className="bg-[#F8F6F0] rounded-[20px] p-6 md:p-8 flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <Image 
                  src="/assets/TRIPPCertified (1).jpg" 
                  alt="Ketamine Assisted Psychotherapy Certified badge" 
                  width={80} 
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="heading-font text-lg md:text-xl text-owt-supporting mb-3">
                  Ketamine Assisted Psychotherapy Certified
                </h3>
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  In 2023 I was trained in KAP through the Transpersonal Research Institute of Psychotherapeutic Psychedelics (TRIPP) / Resilience Tucson in Tucson, Arizona.
                </p>
              </div>
            </div>

            {/* Card 4: EMDR Certified */}
            <div className="bg-[#F8F6F0] rounded-[20px] p-6 md:p-8 flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <Image 
                  src="/assets/EMDRCertifiedBadge.jpg" 
                  alt="EMDR Certified badge" 
                  width={80} 
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="heading-font text-lg md:text-xl text-owt-supporting mb-3">
                  EMDR Certified
                </h3>
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  Following my EMDR Basic Training with Trauma Recovery EMDR Humanitarian Assistance Programs (HAP), I continued my learning and commitment to EMDR with the advanced certification.
                </p>
              </div>
            </div>

            {/* Card 5: Internal Family Systems, Level 1 - Centered */}
            <div className="bg-[#F8F6F0] rounded-[20px] p-6 md:p-8 flex gap-4 md:gap-6 md:col-span-2 md:max-w-2xl md:mx-auto">
              <div className="flex-shrink-0">
                <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#BB8B74] to-[#AFA691] flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                  IFS
                </div>
              </div>
              <div className="flex-1">
                <h3 className="heading-font text-lg md:text-xl text-owt-supporting mb-3">
                  Internal Family Systems, Level 1
                </h3>
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  In 2025, I completed the Level 1 training program with the Internal Family Systems Institute to deepen my understanding of this transformative model for working with the parts of the self.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
