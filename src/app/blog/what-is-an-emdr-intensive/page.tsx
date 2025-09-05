/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AuthorDatePill } from "@/components/AuthorDatePill";

export const metadata: Metadata = {
  title: 'What Is An EMDR Intensive? | Other Ways Therapy Blog',
  description: 'Learn about EMDR Intensives and retreats - condensed trauma therapy sessions ranging from 3-5 hours. By Molly Pike, Licensed Professional Counselor.',
  authors: [{ name: 'Molly Pike' }],
  openGraph: {
    title: 'What Is An EMDR Intensive?',
    description: 'Learn about EMDR Intensives and retreats - condensed trauma therapy sessions ranging from 3-5 hours.',
    type: 'article',
    authors: ['Molly Pike'],
    url: '/blog/what-is-an-emdr-intensive',
  },
  alternates: { canonical: '/blog/what-is-an-emdr-intensive' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is An EMDR Intensive?',
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
      url: 'https://otherwaystherapy.com/assets/other-ways-therapy-logo.svg'
    }
  },
  datePublished: '2025-08-19',
  dateModified: '2025-08-19',
  image: 'https://otherwaystherapy.com/assets/emdr-intensive-therapy-blog-image.jpg',
  description: 'Learn about EMDR Intensives and retreats - condensed trauma therapy sessions ranging from 3-5 hours.',
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
            src="/assets/therapy-healing-landscape-background.jpg"
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
                    What Is An EMDR Intensive?
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
                      src="/assets/molly-pike-therapist-portrait.jpg"
                      alt="Molly Pike"
                      fill
                      sizes="40px"
                      className="object-cover object-center"
                    />
                  </div>
                  <AuthorDatePill author="Molly Pike" date="August 19, 2025" />
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8 md:mb-12 flex justify-center">
                <div className="relative w-full max-w-md md:max-w-lg h-[300px] md:h-[400px] lg:h-[500px] rounded-[20px] overflow-hidden">
                  <Image
                    src="/assets/emdr-intensive-therapy-blog-image.jpg"
                    alt="EMDR Intensive therapy session"
                    fill
                    sizes="(min-width: 1024px) 896px, (min-width: 768px) 768px, 100vw"
                    className="object-cover object-left-top scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Introduction Section */}
              <div className="prose prose-lg max-w-none">
                <div className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed space-y-6">
                  <div className="bg-[#F8F6F0] rounded-[20px] p-6 md:p-8 border-l-4 border-owt-primary-brown">
                    <p className="text-base md:text-lg leading-relaxed">
                      EMDR Intensives, or Retreats, are a more condensed version of EMDR therapy and can be offered in a variety of formats. Currently I offer EMDR Intensives ranging from <span className="font-medium text-owt-supporting">3 to 5 hours</span>, in addition to our planning and integration sessions. While you may find Intensives offered all over the world, I am licensed to work only with clients who are present in the state of Colorado, either in-person near Denver or online from anywhere else in the state.
                    </p>
                  </div>
                </div>
              </div>

              {/* Traditional vs. Intensive Section */}
              <section className="mt-12 md:mt-16">
                <div className="bg-[#ECE7DD] rounded-[20px] p-8 md:p-10 lg:p-12">
                  <h2 className="heading-font text-xl md:text-2xl text-owt-supporting mb-6 text-center">
                    Traditional EMDR vs. EMDR Intensives
                  </h2>
                  
                  <div className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed space-y-6">
                    <p>
                      When meeting on a weekly or biweekly basis, which is the traditional model of EMDR therapy, the work of opening up and closing down trauma processing in successive sessions can be a lot to manage, depending on your life circumstances. But it's not a bad thing. In fact, there are definite advantages to addressing trauma through this model of therapy and frequency of sessions.
                    </p>

                    <div className="bg-white rounded-[15px] p-6 md:p-7 my-8">
                      <h3 className="heading-font text-lg text-owt-supporting mb-4 text-center">Traditional EMDR Benefits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-owt-primary-brown mt-2 flex-shrink-0"></div>
                          <p className="text-sm md:text-base">Pacing work at your comfortable speed</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-owt-primary-brown mt-2 flex-shrink-0"></div>
                          <p className="text-sm md:text-base">Being present with arising discomfort</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-owt-primary-brown mt-2 flex-shrink-0"></div>
                          <p className="text-sm md:text-base">Feeling what wasn't felt before</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-owt-primary-brown mt-2 flex-shrink-0"></div>
                          <p className="text-sm md:text-base">Integration between sessions</p>
                        </div>
                      </div>
                    </div>

                    <p>
                      Like the traditional model, EMDR Intensives address many of the same components of trauma work. EMDR Intensives are not necessarily a replacement, but can serve as a complement to other forms of therapy you are engaged in. At the table of so many powerful healing modalities, EMDR Intensives certainly have their place, bringing amazing benefits.
                    </p>

                    <div className="bg-owt-primary-brown/10 rounded-[15px] p-6 md:p-7 border-l-4 border-owt-primary-brown">
                      <p className="italic text-sm md:text-base text-owt-supporting font-medium">
                        "One of the best benefits: you may not have to manage as many symptoms in between sessions if you are doing an EMDR Intensive. As an alternative to taking off, cruising, and landing all in 50 minutes, an Intensive allows you to cruise at altitude for longer and take more time to comfortably land."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* When Not Recommended Section */}
              <section className="mt-12 md:mt-16">
                <div className="bg-white rounded-[20px] p-8 md:p-10 lg:p-12 border border-owt-primary-brown/20">
                  <h2 className="heading-font text-xl md:text-2xl text-owt-supporting mb-6 text-center">
                    When Is An EMDR Intensive Not Recommended?
                  </h2>
                  
                  <div className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed space-y-6 text-center">
                    <p>
                      While there are no specific "rule outs" for an Intensive, as with most things, the answer is "it depends." It is best to discuss your specific circumstances, goals, and expectations during our consultation call.
                    </p>

                    <div className="bg-[#F8F6F0] rounded-[15px] p-6 md:p-7 mt-8">
                      <p className="font-medium text-owt-supporting mb-4">
                        Reflection Questions
                      </p>
                      <p>
                        The following considerations may be an opportunity to check in with yourself and reflect whether you feel now is the time for you to do an EMDR Intensive.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Considerations Section */}
              <section className="mt-8 md:mt-12">
                <div className="bg-[#ECE7DD] rounded-[20px] p-8 md:p-10 lg:p-12">
                  <div className="text-center mb-8 md:mb-12">
                    <h3 className="heading-font text-xl md:text-2xl text-owt-supporting mb-4">Important Considerations</h3>
                    <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed max-w-3xl mx-auto">
                      Let's explore some scenarios to help you reflect on your readiness
                    </p>
                  </div>
                  
                  <div className="space-y-6 md:space-y-8">
                    {/* Ongoing Stressor Card */}
                    <div className="bg-white rounded-[20px] p-6 md:p-8 border border-owt-primary-brown/20 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-owt-primary-brown"></div>
                        <h4 className="heading-font text-lg md:text-xl text-owt-supporting">Ongoing Stressors or Trauma</h4>
                      </div>
                      <div className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed space-y-4">
                        <p>
                          If you are experiencing an ongoing stressor or traumatic event, or the storm has not quite passed, this can be an "it depends." Sometimes the trauma or stressor does not have a neat and tidy beginning, middle, and end, such as systemic oppression, ongoing medical trauma, climate change, politics, existential threats, relationship trauma, etc.
                        </p>
                        <p>
                          In EMDR we do not process the stressors in and of themselves, but rather internal response to the stressor. Therefore, it is possible to address how the ongoing stressor or trauma is impacting you even if the circumstances are ongoing. EMDR can help address your nervous system response by bringing down the charge or distress and support you in building internal resources to cope more effectively.
                        </p>
                        <p>
                          At the same time, more in-depth processing of past or current trauma does require a certain level of present engagement in regulation and adaptive coping. If you feel like you are currently trying to keep your head above water with the current level of stress, you may benefit from other forms of therapy, or a weekly EMDR format, to further prepare your nervous system for an Intensive.
                        </p>
                      </div>
                    </div>

                    {/* Colorado Metaphor Card */}
                    <div className="bg-white rounded-[20px] p-6 md:p-8 border border-owt-primary-brown/20 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-owt-primary-brown"></div>
                        <h4 className="heading-font text-lg md:text-xl text-owt-supporting">The Foothills and Mountains Metaphor</h4>
                      </div>
                      <div className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed space-y-4">
                        <p>
                          Oftentimes what brings someone to therapy is a more recent experience that has impacted their ability to cope. When processing recent events, it is not uncommon for past experiences or trauma to be revealed, and perhaps not ever processed.
                        </p>
                        <div className="bg-[#F8F6F0] rounded-[15px] p-5 md:p-6 border-l-4 border-owt-primary-brown my-6">
                          <p className="italic text-sm md:text-base text-owt-supporting font-medium text-center">
                            "A metaphor I love is viewing these more acute, present experiences as the foothills and the more longstanding past traumatic or unprocessed experiences as the mountains. (Gotta love a Colorado metaphor!)"
                          </p>
                        </div>
                        <p>
                          One EMDR Intensive will likely not address layers of trauma, but it may help address or bring down the foothills so that you can see the mountains. Or if you have addressed the foothills in previous therapy, an Intensive may help you address the mountains.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action Section */}
              <section className="mt-12 md:mt-16">
                <div className="bg-owt-primary-brown rounded-[20px] p-8 md:p-10 lg:p-12 text-center text-white">
                  <h2 className="heading-font text-xl md:text-2xl mb-6">
                    Ready to Explore EMDR Intensives?
                  </h2>
                  
                  <div className="text-sm md:text-base font-light leading-relaxed space-y-6 max-w-3xl mx-auto">
                    <p>
                      If you're curious about whether an EMDR Intensive might be right for you, I invite you to schedule a free consultation call. We can discuss your specific circumstances, goals, and expectations to determine if this approach aligns with your healing journey.
                    </p>

                    <p className="text-base md:text-lg font-medium">
                      Your healing matters, and finding the right approach for you is key.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <Link 
                      href="/contact" 
                      className="btn-base btn-light inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base"
                    >
                      Schedule a Free Consultation
                    </Link>
                  </div>
                </div>
              </section>

              {/* Author Bio Section */}
              <div className="mt-12 md:mt-16 border-t border-owt-text-secondary/20 pt-8 md:pt-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Author Image */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32">
                      <Image
                        src="/assets/molly-pike-therapist-portrait.jpg"
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
