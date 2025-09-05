/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialties | Other Ways Therapy",
  description:
    "Therapy for sneaky anxiety and trauma: overfunctioning, perfectionism, people-pleasing, and boundary work. EMDR and IFS in Colorado.",
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

      {/* Introduction Section */}
      <section className="w-full bg-[#F7F8F0] section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-font text-clamp-about-title text-owt-supporting mb-6 md:mb-8">
              Therapy for Sneaky Anxiety & Trauma
            </h2>
            <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
              Explore therapy for sneaky anxiety and trauma patterns that may be impacting your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Do These Thoughts Sound Familiar Section */}
      <section className="relative w-full bg-[#ECE7DD] section-padding overflow-hidden">
        {/* Decorative background SVG */}
        <div className="pointer-events-none select-none absolute -right-16 md:left-16 lg:left-24 top-2/5 -translate-y-2/5 lg:bottom-auto lg:top-0 lg:-translate-y-[20%] z-0 opacity-90">
          <Image
            src="/assets/Group-2 copy.svg"
            alt=""
            width={600}
            height={560}
            aria-hidden
            priority={false}
            className="w-[450px] md:w-[600px] rotate-180 lg:rotate-0"
          />
        </div>

        <div className="relative z-10 section-container">
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-8 md:mb-10 text-center">
              Do These Thoughts Sound Familiar?
            </h3>
            
            <div className="space-y-4 md:space-y-5">
              <div className="border-l-4 border-[#BB8B74] pl-6 py-2">
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  "I'm exhausted from constantly 'holding it together' while no one realizes I'm drowning inside. My to-do lists are flawless, my performance is stellar, but the internal pressure is crushing me."
                </p>
              </div>
              <div className="border-l-4 border-[#BB8B74] pl-6 py-2">
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  "My friends call me the 'dependable one' or the 'rock,' but they don't see how my mind races with worst-case scenarios at 3 AM, or how I'm planning contingencies for conversations that haven't even happened yet."
                </p>
              </div>
              <div className="border-l-4 border-[#BB8B74] pl-6 py-2">
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  "I've mastered the art of helping everyone else with their problems while deflecting attention from my own struggles. I'm so good at functioning that even I sometimes forget how anxious I really am."
                </p>
              </div>
              <div className="border-l-4 border-[#BB8B74] pl-6 py-2">
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  "The thought of slowing down terrifies me more than burning out. If I'm not constantly productive or available for others, what value do I have? My worth feels tied to what I accomplish, not who I am."
                </p>
              </div>
              <div className="border-l-4 border-[#BB8B74] pl-6 py-2">
                <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                  "I've built my life around anticipating and preventing problems before they happen. The constant vigilance is exhausting, but the alternative—letting go of control—feels impossible."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Sneaky Anxiety - Card Section */}
      <section className="w-full !bg-white section-padding">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8 text-center">
              What Is Sneaky Anxiety?
            </h3>
            
            <div className="mb-8 text-center">
              <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                Sneaky anxiety often doesn't look like panic attacks or obvious worry. Instead, it shows up as:
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                    <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Preparation</span>
                  </div>
                  <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    Overpreparation for even minor events
                  </p>
                </div>

                <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                    <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Boundaries</span>
                  </div>
                  <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    Difficulty saying no or setting boundaries
                  </p>
                </div>

                <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                    <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Perfectionism</span>
                  </div>
                  <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    Perfectionism that never feels "good enough"
                  </p>
                </div>

                <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                    <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Vigilance</span>
                  </div>
                  <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    Hypervigilance about potential problems
                  </p>
                </div>

                <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                    <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Responsibility</span>
                  </div>
                  <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    Excessive responsibility for others' emotions and needs
                  </p>
                </div>

                <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                    <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Exhaustion</span>
                  </div>
                  <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    Mental exhaustion from constant planning and worrying
                  </p>
                </div>

                <div className="bg-[#F8F6F0] rounded-2xl p-5 md:p-6 border border-[#BB8B74]/10 hover:border-[#BB8B74]/25 hover:bg-[#F8F6F0]/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out md:col-span-2">
                  <div className="flex items-center space-x-3 mb-2 md:justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#BB8B74]"></div>
                    <span className="text-sm font-medium text-[#BB8B74] uppercase tracking-wide">Physical Symptoms</span>
                  </div>
                  <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed md:text-center">
                    Physical symptoms like tension headaches, digestive issues, or insomnia
                  </p>
                </div>
              </div>
            </div>

            {/* You're Not Alone Section */}
            <div className="bg-[#F7F8F0] rounded-[20px] p-8 md:p-10 text-center">
              <h3 className="heading-font text-xl md:text-2xl text-owt-supporting mb-4">You're Not Alone</h3>
              <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
                If these words resonate, you may be experiencing what I call "high-functioning" or "sneaky" anxiety—an anxiety that hides behind achievement, perfectionism, and caretaking. From the outside, your life may seem put-together, maybe even enviable. But inside, there's a constant hum of worry, a never-ending to-do list, and a deep fear that if you stop, everything will fall apart.
              </p>
              <Link href="/contact" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Overfunctioning Matters Section */}
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
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8 text-center">
              Why Overfunctioning Matters
            </h3>
            
            <div className="mb-8 text-center">
              <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                Overfunctioning, or doing more than is necessary, healthy, or sustainable, may very well be a coping mechanism that temporarily soothes anxiety by creating an illusion of control. These patterns may serve well-intentioned protective functions, but it can overshadow other parts of you that want rest, connection and ease. Over time, overfunctioning can lead to:
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-8 md:space-y-10">
                <div className="relative">
                  <div className="text-lg md:text-xl text-owt-text-primary font-light leading-relaxed">
                    You may find yourself experiencing <span className="font-medium text-[#BB8B74] relative">burnout and compassion fatigue<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#BB8B74]/30"></span></span>, feeling emotionally drained from constantly giving to others.
                  </div>
                </div>
                
                <div className="w-16 h-px bg-[#BB8B74]/20 mx-auto"></div>
                
                <div className="relative">
                  <div className="text-lg md:text-xl text-owt-text-primary font-light leading-relaxed">
                    This can lead to <span className="font-medium text-[#BB8B74] relative">resentment in relationships<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#BB8B74]/30"></span></span>, especially when your efforts go unnoticed or unreciprocated.
                  </div>
                </div>
                
                <div className="w-16 h-px bg-[#BB8B74]/20 mx-auto"></div>
                
                <div className="relative">
                  <div className="text-lg md:text-xl text-owt-text-primary font-light leading-relaxed">
                    Over time, you may notice a <span className="font-medium text-[#BB8B74] relative">disconnection from your authentic needs and desires<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#BB8B74]/30"></span></span>, losing touch with what you actually want.
                  </div>
                </div>
                
                <div className="w-16 h-px bg-[#BB8B74]/20 mx-auto"></div>
                
                <div className="relative">
                  <div className="text-lg md:text-xl text-owt-text-primary font-light leading-relaxed">
                    Despite accomplishments, you might struggle with <span className="font-medium text-[#BB8B74] relative">a sense of emptiness<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#BB8B74]/30"></span></span>, questioning your worth beyond productivity.
                  </div>
                </div>
                
                <div className="w-16 h-px bg-[#BB8B74]/20 mx-auto"></div>
                
                <div className="relative">
                  <div className="text-lg md:text-xl text-owt-text-primary font-light leading-relaxed">
                    All of this stress can manifest as <span className="font-medium text-[#BB8B74] relative">physical health consequences<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#BB8B74]/30"></span></span>, affecting your body's well-being in tangible ways.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Therapy Can Help Section */}
      <section className="w-full !bg-white section-padding">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8 text-center">
              How Therapy Can Help
            </h3>
            
            <div className="mb-8 text-center">
              <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                Together, we can:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-[#7e7e69] rounded-[20px] p-6 md:p-8 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-[#7e7e69] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">1</div>
                  <div>
                    <h4 className="heading-font text-lg mb-3">Meet your parts</h4>
                    <p className="text-sm md:text-base font-light leading-relaxed">
                      Recognize and understand the parts of you that overfunction, people-please, or fear failure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#7e7e69] rounded-[20px] p-6 md:p-8 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-[#7e7e69] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">2</div>
                  <div>
                    <h4 className="heading-font text-lg mb-3">Uncover the roots</h4>
                    <p className="text-sm md:text-base font-light leading-relaxed">
                      Using EMDR, we can process past experiences that contributed to these anxious adaptations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#7e7e69] rounded-[20px] p-6 md:p-8 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-[#7e7e69] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">3</div>
                  <div>
                    <h4 className="heading-font text-lg mb-3">Shift beliefs and patterns</h4>
                    <p className="text-sm md:text-base font-light leading-relaxed">
                      Explore the beliefs driving your anxiety and overfunctioning, and help your parts feel safe enough to step back.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#7e7e69] rounded-[20px] p-6 md:p-8 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-[#7e7e69] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">4</div>
                  <div>
                    <h4 className="heading-font text-lg mb-3">Practice sustainable self-care</h4>
                    <p className="text-sm md:text-base font-light leading-relaxed">
                      Develop routines that feel possible, nourishing, and not selfish.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#7e7e69] rounded-[20px] p-6 md:p-8 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-[#7e7e69] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">5</div>
                  <div>
                    <h4 className="heading-font text-lg mb-3">Cultivate self-compassion</h4>
                    <p className="text-sm md:text-base font-light leading-relaxed">
                      Counter perfectionistic tendencies and honor all parts of you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#7e7e69] rounded-[20px] p-6 md:p-8 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-[#7e7e69] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">6</div>
                  <div>
                    <h4 className="heading-font text-lg mb-3">Strengthen boundaries</h4>
                    <p className="text-sm md:text-base font-light leading-relaxed">
                      Create space that respects your needs without guilt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#7e7e69] rounded-[20px] p-6 md:p-8 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out md:col-span-2 md:justify-self-center">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-[#7e7e69] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">7</div>
                  <div>
                    <h4 className="heading-font text-lg mb-3">Reconnect with your worth</h4>
                    <p className="text-sm md:text-base font-light leading-relaxed">
                      Reclaim your value beyond productivity and achievement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="relative w-full bg-[#ECE7DD] section-padding overflow-hidden">
        {/* Decorative background SVG */}
        <div className="pointer-events-none select-none absolute -right-16 md:left-16 lg:left-24 top-2/5 -translate-y-2/5 lg:bottom-auto lg:top-0 lg:-translate-y-[20%] z-0 opacity-90">
          <Image
            src="/assets/Group-2 copy.svg"
            alt=""
            width={600}
            height={560}
            aria-hidden
            priority={false}
            className="w-[450px] md:w-[600px] rotate-180 lg:rotate-0"
          />
        </div>

        <div className="relative z-10 section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8">
              My Approach
            </h3>
            <div className="bg-white rounded-[20px] p-8 md:p-10 text-center">
              <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed mb-6 md:mb-8">
                I offer a compassionate, non‑judgmental space where your experiences are validated. By combining Internal Family Systems (IFS) with EMDR, we can gently explore the protective parts that have kept you safe while uncovering and healing the root experiences that fuel your sneaky anxiety. Together, we'll build practical strategies for sustainable well‑being—so you can feel less like you're "holding it all together" and more like you're fully present with yourself and others.
              </p>
              <Link href="/contact" className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full !bg-white section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-[#F8F6F0] rounded-3xl p-8 md:p-12 lg:p-16">
              {/* Decorative quote mark */}
              <div className="absolute top-4 left-6 md:top-6 md:left-8">
                <div className="text-4xl md:text-5xl text-[#BB8B74]/30 font-serif leading-none">"</div>
              </div>
              
              <div className="relative z-10 pt-4">
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-owt-supporting font-light leading-relaxed mb-6 md:mb-8 italic">
                  Trauma Is Not What Happens To You, It's What Happens Inside You As A Result Of What Happened To You.
                </blockquote>
                
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-8 h-px bg-[#BB8B74]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#BB8B74]/40"></div>
                  <div className="w-8 h-px bg-[#BB8B74]/30"></div>
                </div>
                
                <cite className="text-sm md:text-base text-[#BB8B74] font-medium tracking-[0.1em] uppercase">
                  Gabor Mate
                </cite>
              </div>
              
              {/* Decorative closing quote mark */}
              <div className="absolute bottom-4 right-6 md:bottom-6 md:right-8">
                <div className="text-4xl md:text-5xl text-[#BB8B74]/30 font-serif leading-none">"</div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
