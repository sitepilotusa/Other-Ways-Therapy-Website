/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialties | Other Ways Therapy",
  description:
    "Therapy specialties including trauma recovery, anxiety, attachment wounds, and Highly Sensitive Persons (HSPs). EMDR intensives and IFS in Colorado.",
  alternates: { canonical: "/specialties" },
};

export default function Specialties() {
  return (
    <main className="flex flex-col bg-[#F7F8F0]">
      {/* Hero Section - Specialties */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/hero-background.jpg"
          alt="Specialties at Other Ways Therapy"
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
                  Specialties
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Modalities Section */}
      <section className="w-full bg-[#F7F8F0] section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-font text-clamp-about-title text-owt-supporting mb-6 md:mb-8">
              Therapeutic Modalities
            </h2>
            <div className="space-y-6 text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
              <p>
                I honor the diversity of the human experience and recognize that there is no one-size-fits-all approach to healing. My integrative therapy approach combines evidence-based modalities with a deep reverence for your innate wisdom and resilience.
              </p>
              <p>
                I specialize in helping individuals navigate a range of challenges, including recent traumatic experiences, complex trauma, relationship challenges, attachment wounds, anxiety, and the unique experiences of Highly Sensitive Persons (HSPs). While we may not be able to address everything in a one day Intensive, we can thoughtfully decide what is impacting you the most and give it the undivided attention it deserves. I tailor each Intensive to meet the unique needs of my clients, in collaboration with my client. My goal is to create a safe, non-judgmental space and container where healing can occur at a pace that feels comfortable and empowering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full !bg-white section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-owt-supporting font-light leading-relaxed mb-4">
              "Trauma Is Not What Happens To You, It's What Happens Inside You As A Result Of What Happened To You."
            </blockquote>
            <cite className="text-sm md:text-base text-owt-text-secondary font-medium tracking-wide">
              – GABOR MATE
            </cite>
          </div>
        </div>
      </section>

      {/* What Is EMDR Section */}
      <section className="relative w-full !bg-white section-padding overflow-hidden">
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
              <h2 className="heading-font text-clamp-about-title text-owt-supporting mb-4 md:mb-6">What Is EMDR?</h2>
              <div className="mt-4 md:mt-6 flex flex-col gap-4 text-sm md:text-base text-owt-text-primary font-light">
                <p>
                  Eye Movement Desensitization and Reprocessing (EMDR) is a highly effective form of trauma treatment that has endless applications. You do not have to have a diagnosis of Post Traumatic Stress Disorder to benefit from EMDR. My clients seek out EMDR therapy because they have symptoms of anxiety, depression, or relationship patterns that they find puzzling, painful, or perhaps incongruent with other areas of their life.
                </p>
                <p>
                  When we begin the process of EMDR together, we explore what you are experiencing present day. My role is to help guide you in identifying which past experiences may be contributing to what feels presently stuck or distressing. Then, by utilizing bilateral stimulation techniques, such as back and forth eye movement, alternating vibrating buzzers, or tapping, we process these memories together by targeting the way the memory is stored in your nervous system—through your senses, thoughts/beliefs, emotions, and body sensations.
                </p>
                <p>
                  Just as trimming the top of a dandelion is only temporarily beneficial to the health of your yard's landscape, so too can less effective modalities be in addressing your symptoms. We want to identify and address the root of the issue. When approaching the present issue from this angle, the effects on your emotional health can be tremendous. EMDR is highly effective, and although it can have a reputation to be magic, it is not unicorns and rainbows, nor is it "microwave healing." However, this evidence-based practice addresses symptoms and patterns in a more targeted way, bringing down disturbances, and producing many positive ripple effects.
                </p>
                <p>
                  If you can dedicate the same amount of time and energy to address the root of your current challenges and behavioral patterns in a single day rather than over the course of time through weekly sessions, an EMDR Intensive may be worth it for you.
                </p>
              </div>
              <div className="pt-6 md:pt-6">
                <Link href="/contact" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                  Learn About EMDR Intensives
                </Link>
              </div>
            </div>

            {/* Right column: EMDR image */}
            <div className="flex justify-center lg:justify-end mt-8 md:mt-12 lg:mt-0">
              <div className="relative rounded-full overflow-hidden w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] lg:w-[30rem] lg:h-[30rem] !bg-white/50">
                <Image
                  src="/assets/emdr-pathway.jpg"
                  alt="EMDR therapy pathway illustration"
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

      {/* Is An EMDR Intensive Right For Me Section */}
      <section className="w-full bg-owt-bg-primary section-padding">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-font text-clamp-about-title text-owt-supporting mb-6 md:mb-8">
              Is An EMDR Intensive Right For Me?
            </h2>
            <p className="text-sm md:text-base text-owt-text-primary font-light max-w-3xl mx-auto">
              These are common reasons you may seek an intensive EMDR session as an alternative to weekly therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Box 1 */}
            <div className="bg-[#999989] rounded-[20px] p-6 md:p-8 text-white">
              <div className="grid grid-cols-[32px_1fr] items-start gap-3">
                <div className="mt-2">
                  <Image src="/assets/arrow-icon.svg" alt="" width={20} height={20} aria-hidden />
                </div>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  You are looking to make more progress in a shorter amount of time. Life can be busy and it can be hard to find the time to dedicate to your healing when you are managing a lot of other responsibilities. Setting aside one full day to be fully present for therapy may feel more appealing and feasible in this season of your life than finding a predictable weekly spot.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-[#999989] rounded-[20px] p-6 md:p-8 text-white">
              <div className="grid grid-cols-[32px_1fr] items-start gap-3">
                <div className="mt-2">
                  <Image src="/assets/arrow-icon.svg" alt="" width={20} height={20} aria-hidden />
                </div>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  Over the last few months, you experienced an acute stressful or traumatic event. You may notice it has felt disruptive to your natural rhythms or have been experiencing symptoms that have been difficult to manage. Other than this recent event, you do not feel that you have much more "back there" that needs processing or it has previously been addressed.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-[#999989] rounded-[20px] p-6 md:p-8 text-white">
              <div className="grid grid-cols-[32px_1fr] items-start gap-3">
                <div className="mt-2">
                  <Image src="/assets/arrow-icon.svg" alt="" width={20} height={20} aria-hidden />
                </div>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  You have a crystal clear idea of what you want to focus on and how EMDR may benefit your current situation.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-[#999989] rounded-[20px] p-6 md:p-8 text-white">
              <div className="grid grid-cols-[32px_1fr] items-start gap-3">
                <div className="mt-2">
                  <Image src="/assets/arrow-icon.svg" alt="" width={20} height={20} aria-hidden />
                </div>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  In the past, you have done EMDR therapy, found it beneficial, and are now looking to address a new issue.
                </p>
              </div>
            </div>

            {/* Box 5 */}
            <div className="bg-[#999989] rounded-[20px] p-6 md:p-8 text-white">
              <div className="grid grid-cols-[32px_1fr] items-start gap-3">
                <div className="mt-2">
                  <Image src="/assets/arrow-icon.svg" alt="" width={20} height={20} aria-hidden />
                </div>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  Currently you are in individual therapy or couple's therapy and are looking for adjunctive trauma services to complement the work you are currently doing.
                </p>
              </div>
            </div>

            {/* Box 6 */}
            <div className="bg-[#999989] rounded-[20px] p-6 md:p-8 text-white">
              <div className="grid grid-cols-[32px_1fr] items-start gap-3">
                <div className="mt-2">
                  <Image src="/assets/arrow-icon.svg" alt="" width={20} height={20} aria-hidden />
                </div>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  You have a solid social support system, a strong array of coping strategies, and the ability to experience and tolerate difficult feelings.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/contact" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Complementary Therapies Section */}
      <section className="w-full !bg-white section-padding">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-font text-clamp-about-title text-owt-supporting">
              Complementary Therapies
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {/* Somatics & Parts Card */}
            <div className="bg-[#AFA691] rounded-[30px] p-8 md:p-12 text-white text-left">
              <div className="flex flex-col items-start">
                <Image 
                  src="/assets/parts_somatics_icon.svg" 
                  alt="Somatics & Parts icon" 
                  width={80} 
                  height={80}
                  className="mb-6 md:mb-8"
                />
                <h3 className="heading-font text-2xl md:text-3xl mb-6 md:mb-8">
                  Somatics & Parts
                </h3>
                <div className="space-y-4 md:space-y-6 text-sm md:text-base font-light leading-relaxed max-w-3xl">
                  <p>
                    As an Internal Family Systems (IFS)-informed therapist, I acknowledge that we all contain multiple parts that interact internally in helpful and not-so-helpful ways. Parts work is a great way to be curious about your inner world and the multiplicity of the mind. Getting acquainted with the various roles that parts take on allows you the opportunity to find alternative ways to meet their underlying needs. This work is dynamic and experiential in nature and can be illuminating, creative, and healing.
                  </p>
                  <p>
                    Somatic work invites you to explore the language of your body and access the wisdom held within. It delves into the intricate relationship between our physical sensations and our psychological well-being, recognizing that the body often stores memories and emotions. Together, these approaches provide a holistic framework for increasing self-awareness, emotional regulation, and overall well-being, as you learn to integrate and honor all parts of yourself while cultivating a deeper connection to your body's wisdom.
                  </p>
                </div>
              </div>
            </div>

            {/* KAP & Psychedelic Integration Card */}
            <div className="bg-[#B49E9A] rounded-[30px] p-8 md:p-12 text-white text-left">
              <div className="flex flex-col items-start">
                <Image 
                  src="/assets/kap_icon.svg" 
                  alt="KAP & Psychedelic Integration icon" 
                  width={60} 
                  height={60}
                  className="mb-6 md:mb-8"
                />
                <h3 className="heading-font text-2xl md:text-3xl mb-6 md:mb-8">
                  KAP & Psychedelic Integration
                </h3>
                <div className="text-sm md:text-base font-light leading-relaxed max-w-3xl">
                  <p>
                    Ketamine Assisted Psychotherapy (KAP) offers a unique opportunity to explore altered states of consciousness and access deeper layers of the psyche. Ketamine, a safe and FDA-approved medication, is administered in a supportive therapeutic setting, facilitating profound insights, emotional processing, and spiritual exploration. KAP invites you to explore other ways of knowing and being, opening the door to transformation and transcendence. While I offer KAP experiences, I can also support you in integrating a recent KAP experience that you received with another clinician or IV clinic. If you interested in integration services, an EMDR Intensive can be a supportive and effective way to do so.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
