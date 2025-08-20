/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AuthorDatePill } from "@/components/AuthorDatePill";

export const metadata: Metadata = {
  title: 'Understanding Your Symptoms & Behaviors Through An EMDR Lens | Other Ways Therapy Blog',
  description: 'Understanding how your brain adapted to protect you and how EMDR therapy can help transform these patterns. By Molly Pike, Licensed Professional Counselor.',
  authors: [{ name: 'Molly Pike' }],
  openGraph: {
    title: 'Understanding Your Symptoms & Behaviors Through An EMDR Lens',
    description: 'Understanding how your brain adapted to protect you and how EMDR therapy can help transform these patterns.',
    type: 'article',
    authors: ['Molly Pike'],
    url: '/blog/life-uh-finds-a-way',
  },
  alternates: { canonical: '/blog/life-uh-finds-a-way' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Understanding Your Symptoms & Behaviors Through An EMDR Lens',
  author: {
    '@type': 'Person',
    name: 'Molly Pike',
    jobTitle: 'Licensed Professional Counselor',
    worksFor: {
      '@type': 'Organization',
      name: 'Other Ways Therapy'
    }
  },
  publisher: {
    '@type': 'Organization',
    name: 'Other Ways Therapy',
    logo: {
      '@type': 'ImageObject',
      url: 'https://otherwaystherapy.com/assets/other-ways-300-x-300-px.webp'
    }
  },
  datePublished: '2025-01-27',
  dateModified: '2025-01-27',
  image: 'https://otherwaystherapy.com/assets/IMG_3150-1-scaled.jpg',
  description: 'Understanding how your brain adapted to protect you and how EMDR therapy can help transform these patterns.',
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col !bg-white">
        {/* Hero Section */}
        <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
          <Image
            src="/assets/hero-background.jpg"
            alt="Other Ways Therapy Blog"
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
                <h1 className="heading-font text-white tracking-tight text-clamp-section-title max-w-4xl">
                  Understanding Your Symptoms & Behaviors Through An EMDR Lens
                </h1>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="w-full !bg-white section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              {/* Author and Date */}
              <div className="flex items-center justify-center mb-8 md:mb-12">
                <div className="flex items-center gap-3">
                  <div className="relative rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                    <Image
                      src="/assets/Molly Pike Therapist Photo_edited.jpg"
                      alt="Molly Pike"
                      fill
                      sizes="40px"
                      className="object-cover object-center"
                    />
                  </div>
                  <AuthorDatePill author="Molly Pike" date="January 27, 2025" />
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8 md:mb-12">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[20px] overflow-hidden">
                  <Image
                    src="/assets/IMG_3150-1-scaled.jpg"
                    alt="Understanding symptoms and behaviors through an EMDR lens"
                    fill
                    sizes="(min-width: 1024px) 896px, (min-width: 768px) 768px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed space-y-6">
                  <p>
                    Have you ever wondered why, despite your best efforts, certain patterns in your life seem to persist? Maybe you've criticized yourself for being "too anxious," "too sensitive," or "too guarded." Many people come to therapy believing there's something wrong with them or that they're somehow broken. As a therapist certified in EMDR (Eye Movement Desensitization and Reprocessing), I've witnessed countless clients transform their relationship with their symptoms by understanding one crucial truth: Our challenging behaviors often started as creative adaptations to difficult situations.
                  </p>

                  <h2 className="heading-font text-xl md:text-2xl text-owt-supporting mt-8 mb-4">
                    The Wisdom In Our Wiring
                  </h2>

                  <p>
                    Consider the journey of this tree. When this tree first took root, it faced a unique challenge – part of its foundation lay over a deep crevasse. To survive, it didn't grow like the other nearby trees. Instead, it developed an extraordinary root system, spreading tendrils across the gap, weaving them into an intricate network strong enough to hold not just the tree, but even a massive boulder that later came to rest upon them. These roots found a way. Their adaptation is a testament to the tree's remarkable ability to survive.
                  </p>

                  <p>
                    Like this cliff-edge tree, we too, have a remarkably sophisticated root system. Our nervous system, which includes our brains and a complex network of nerves, are naturally equipped with an incredible system for processing experiences and adapting to our environment. This is what we call Adaptive Information Processing (AIP), the theoretical foundation of EMDR therapy. When functioning optimally, this system helps us vet all incoming information internally and externally, process experiences, and store them appropriately in our memory networks. However, when we encounter overwhelming experiences or trauma, this natural processing system can become disrupted. These experiences do not integrate in our memory networks in the same way, remaining unprocessed, and feeding into present day distress.
                  </p>

                  <p>
                    Furthermore, our subconscious responses we developed during these difficult times were creative solutions our brain and body developed to protect us. Just like the tree's roots seeking solid ground across the crevasse, our adaptations served to keep us going.
                  </p>

                  <h2 className="heading-font text-xl md:text-2xl text-owt-supporting mt-8 mb-4">
                    When Protection Strategies Becomes Pattern
                  </h2>

                  <p>
                    Let's explore some common experiences that bring people to therapy and explore the possibilities around their original protective functions:
                  </p>

                  <h3 className="heading-font text-lg md:text-xl text-owt-supporting mt-6 mb-3">
                    Hypervigilance: Your Internal Security System
                  </h3>

                  <p>
                    That constant scanning for danger, the inability to relax, always feeling on edge – these experiences can be exhausting. Yet, this hypervigilance likely developed because at some point, it was crucial for your survival. Perhaps you grew up in an unpredictable environment, or experienced situations where danger could appear at any moment. Your brain and body brilliantly adapted by creating an internal security system that never takes a break. While this served you well in the past, it might now be detecting threats in places where they no longer exist. It can be exhausting!
                  </p>

                  <h3 className="heading-font text-lg md:text-xl text-owt-supporting mt-6 mb-3">
                    People-Pleasing: The Art Of Relational Safety
                  </h3>

                  <p>
                    If you find yourself constantly attuned to others' needs while neglecting your own, know that this pattern likely developed as a sophisticated survival strategy. In environments where maintaining relationships was crucial for emotional or physical safety, becoming exquisitely attuned to others' needs was adaptive. Your ability to sense and respond to others' emotions wasn't a weakness – it was a strength that helped you navigate challenging relationships or situations.
                  </p>

                  <h3 className="heading-font text-lg md:text-xl text-owt-supporting mt-6 mb-3">
                    Perfectionism: The Desire For Control & Assurance
                  </h3>

                  <p>
                    Perfectionism, an over-functioning mechanism, likely developed to create safety and control in an unpredictable environment. Perhaps adhering to high standards was a sure-fire way to avoid judgment, prevent criticism, gain approval, or ensure security. You learned that by being perfect and flawless, you could shield yourself from painful outcomes and secure the validation needed for emotional security.
                  </p>

                  <h3 className="heading-font text-lg md:text-xl text-owt-supporting mt-6 mb-3">
                    Emotional Numbness: A Shield When It's Too Much
                  </h3>

                  <p>
                    Emotional numbness, the ability to disconnect from your emotions, might now feel like a barrier to connection with yourself and others. If you experience emotional numbness, this might have been your nervous system's way of handling overwhelming experiences or emotions. It's possible these felt too big to process at the time, or as a child, you did not have a safe adult to process these emotions with. When emotions felt too big or too dangerous to feel, your brain found a way to create distance and maintain functioning.
                  </p>

                  <h2 className="heading-font text-xl md:text-2xl text-owt-supporting mt-8 mb-4">
                    How EMDR Therapy Helps Rewire These Patterns
                  </h2>

                  <p>
                    EMDR therapy offers a unique approach to working with these behaviors or symptoms. Rather than seeing them as problems to be eliminated, EMDR helps us understand and reprocess the experiences that led to their development. Through bilateral stimulation (side-to-side eye movements or other forms of alternating stimulation), EMDR helps the brain access its natural healing abilities.
                  </p>

                  <p>
                    The goal isn't to strip away all our protective behaviors – social awareness, emotional regulation, and some level of vigilance, is healthy and necessary. As you move forward in your healing journey, you might find that some adaptive behaviors naturally shift as your brain processes past experiences. Others might remain as tools in your emotional toolkit, available when needed but no longer running on autopilot.
                  </p>

                  <h2 className="heading-font text-xl md:text-2xl text-owt-supporting mt-8 mb-4">
                    Moving Forward With Compassion
                  </h2>

                  <p>
                    Healing doesn't mean eliminating all traces of our adaptive responses. Instead, it's about:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Developing a compassionate understanding of why these patterns emerged</li>
                    <li>Learning to recognize when old protective strategies are being activated</li>
                    <li>Building new, flexible responses that match our current life circumstances</li>
                    <li>Honoring the wisdom of our survival while creating space for new ways of being</li>
                  </ul>

                  <p>
                    Remember, your responses made sense given your experiences. Your brain did exactly what it needed to do to help you survive. Now, with support and new resources, you can begin to update these responses to better serve your current life circumstances.
                  </p>

                  <h2 className="heading-font text-xl md:text-2xl text-owt-supporting mt-8 mb-4">
                    Reach Out For Support
                  </h2>

                  <p>
                    If you're recognizing yourself in these patterns, know that support is available. EMDR therapy can help you understand and transform these adaptive behaviors while honoring the incredible ways you've survived. Your sticky symptoms and puzzling behaviors aren't signs of brokenness – they're evidence of your brain and body's remarkable ability to adapt and protect you, even in the most challenging circumstances.
                  </p>

                  <p>
                    Ready to explore your story with compassion and understanding? Contact Other Ways Therapy to learn more about how EMDR Therapy Intensives can support your healing journey.
                  </p>
                </div>
              </div>

              {/* Author Bio Section */}
              <div className="mt-12 md:mt-16 border-t border-owt-text-secondary/20 pt-8 md:pt-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Author Image */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32">
                      <Image
                        src="/assets/Molly Pike Therapist Photo_edited.jpg"
                        alt="Molly Pike, Licensed Professional Counselor"
                        fill
                        sizes="(min-width: 768px) 128px, 96px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">
                      About Molly Pike
                    </h3>
                    <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed mb-4">
                      Molly is a Licensed Professional Counselor, Certified EMDR Clinician, and EMDRIA Approved Consultant. As the Founder of Other Ways Therapy, she honors the diversity of human experience and recognizes that there is no one-size-fits-all approach to healing. Her integrative therapy approach combines evidence-based modalities with a deep reverence for your innate wisdom and resilience.
                    </p>
                    <Link 
                      href="/about" 
                      className="text-sm md:text-base text-owt-primary-brown hover:underline font-medium"
                    >
                      Learn more about Molly →
                    </Link>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </article>
      </main>
    </>
  );
}
