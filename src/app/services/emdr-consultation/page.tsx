import Image from "next/image";
import Link from "next/link";
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
  return (
    <main className="flex flex-col !bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/therapy-healing-landscape-background.jpg"
          alt="EMDR Consultation for Therapists"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0">
          <div className="section-container h-full">
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <h1 className="heading-font text-white tracking-tight text-clamp-page-title">
                  EMDR Consultation for Therapists
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
            <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
              I am a Certified EMDR Therapist and EMDRIA Approved Consultant. I offer consultation for therapists at every stage of their EMDR journey—from those newly trained to those continuing to deepen and refine their clinical practice.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Philosophy Section */}
      <section className="w-full bg-[#ECE7DD] section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8">
              My Consultation Philosophy
            </h2>
            <div className="space-y-6 text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
              <p>
                Consultation is more than just checking the boxes for certification—it's a space for you to deepen your clinical intuition, stay true to the EMDR model, and explore the flexibility it offers in real‑world practice. We'll also look at how EMDR can thoughtfully integrate with transformative approaches like Internal Family Systems (IFS) and Ketamine‑Assisted Therapy and Integration, in ways that align with your clinical style and your clients' needs.
              </p>
              <p>
                My goal is to support your growth in competence, confidence, and curiosity—so your work feels grounded, responsive, and truly impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My EMDR Journey Section */}
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
              <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-4 md:mb-6">My EMDR Journey</h2>
              <div className="mt-4 md:mt-6 flex flex-col gap-6 text-sm md:text-base text-owt-text-primary font-light">
                <p>
                  I completed my Basic Training in 2016. From the moment I began using EMDR, I was hooked. Where I had once felt stuck, I started to witness real movement. EMDR opened up a new dimension in my clinical work, and I've been passionately deepening my understanding ever since.
                </p>
                
                <p>
                  I value ongoing learning as both a personal and professional cornerstone. I'm especially drawn to the natural nesting of modalities and the way they can enrich one another. While I honor the fidelity of the EMDR model, I also believe that therapy happens in the real world—it's dynamic, experiential, and sometimes calls for adaptation and creativity. That spirit of flexibility and integration is what led me to pursue further training in IFS and KAP.
                </p>
                
                <p>
                  I bring authenticity, curiosity, an astute clinical lens, and a good mix of practical tips and grounded skills to my consultation work—and yes, occasionally a mashed-up metaphor or two. I invite consultees to come as they are—not perfectly polished, but present, reflective, and open to growth. Consultation, to me, is a collaborative space centered on your learning.
                </p>
                
                <p>
                  I am here to support you anywhere along your EMDR journey.
                </p>
              </div>
              <div className="pt-6 md:pt-6">
                <Link href="/contact" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Right column: image */}
            <div className="flex justify-center lg:justify-end mt-8 md:mt-12 lg:mt-0">
              <div className="relative rounded-full overflow-hidden w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] lg:w-[30rem] lg:h-[30rem] !bg-white/50">
                <Image
                  src="/assets/emdr-consultation-service-page-image.jpg"
                  alt="EMDR consultation for therapists"
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

      {/* Training Levels Section */}
      <section className="w-full !bg-white section-padding">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            
            {/* Basic Training */}
            <div className="mb-12 md:mb-16">
              <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8 text-center">
                You've Completed EMDR Basic Training…Now What?
              </h3>
              <div className="bg-[#F8F6F0] rounded-2xl p-6 md:p-8 lg:p-10">
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed mb-6">
                  You've learned the eight phases, practiced in triads, completed Basic Training Consultation and maybe even tried your first EMDR session with a client. But integrating EMDR into real‑world cases can feel overwhelming.
                </p>
                
                <div className="mb-6">
                  <h4 className="heading-font text-lg text-owt-supporting mb-4">Here's how I can support you:</h4>
                  <div className="space-y-3 text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    <p>• Case conceptualization support</p>
                    <p>• Confidence in when and how to use EMDR</p>
                    <p>• Adjusting protocols for client readiness</p>
                    <p>• Creating safety and attunement in early sessions</p>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed text-center">
                  You don't have to figure it all out alone. This is the perfect time for consistent, collaborative consultation.
                </p>
              </div>
            </div>

            {/* Building Momentum */}
            <div className="mb-12 md:mb-16">
              <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8 text-center">
                Building Momentum – Working Toward Certification
              </h3>
              <div className="bg-[#F8F6F0] rounded-2xl p-6 md:p-8 lg:p-10">
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed mb-6">
                  You're using EMDR more often and want to deepen your skills. Maybe you're ready to pursue certification or simply want accountability and deeper learning.
                </p>
                
                <div className="mb-6">
                  <h4 className="heading-font text-lg text-owt-supporting mb-4">Let's work together on:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                        <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Hours</span>
                      </div>
                      <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                        Meeting your required 20 consultation hours
                      </p>
                    </div>

                    <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                        <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Protocol</span>
                      </div>
                      <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                        Deepening your understanding of the Standard Protocol
                      </p>
                    </div>

                    <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                        <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Adaptation</span>
                      </div>
                      <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                        Adapting EMDR for dissociation, complex trauma, or co‑occurring issues
                      </p>
                    </div>

                    <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                        <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Instincts</span>
                      </div>
                      <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                        Honing your clinical instincts through feedback and reflection
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed text-center">
                  I provide both individual and group consultation—tailored to your pace and learning style.
                </p>
              </div>
            </div>

            {/* Advanced Integration */}
            <div className="mb-12 md:mb-16">
              <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8 text-center">
                Advanced Integration & Intensives
              </h3>
              <div className="bg-[#F8F6F0] rounded-2xl p-6 md:p-8 lg:p-10">
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed mb-6">
                  You're no longer just following the script—you're shaping it. Now you're ready to explore how EMDR can evolve to meet your clients in transformative ways.
                </p>
                
                <div className="mb-6">
                  <h4 className="heading-font text-lg text-owt-supporting mb-4">Explore with me:</h4>
                  <div className="space-y-3 text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    <p>• Implementing EMDR Intensives in your practice</p>
                    <p>• Integrating Internal Family Systems (IFS) with EMDR for parts work</p>
                    <p>• Using EMDR alongside psychedelic‑assisted therapy (e.g., Ketamine)</p>
                    <p>• Ethical, clinical, and logistical guidance for blending modalities</p>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed text-center">
                  This is where consultation turns into creative collaboration. Let's expand what's possible for your clients—and for you.
                </p>
              </div>
            </div>

            {/* Refresher Section */}
            <div className="bg-[#F8F6F0] rounded-2xl p-6 md:p-8 lg:p-10 text-center">
              <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8">
                Need a Refresher? Just Returning to EMDR?
              </h3>
              <div className="space-y-4 text-sm md:text-base text-owt-text-primary font-light leading-relaxed max-w-3xl mx-auto">
                <p>
                  Life happens. EMDR can take a backseat sometimes. If you're feeling out of practice, uncertain, or disconnected from the method—you're not alone.
                </p>
                <p>
                  And you're in the right place.
                </p>
                <p>
                  I offer thoughtful, encouraging consultation to help you get reacquainted with EMDR, rebuild your confidence, and reconnect with the work in a way that feels steady and authentic.
                </p>
              </div>
              <div className="pt-6 md:pt-8">
                <Link href="/contact" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                  Get Started Today
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}