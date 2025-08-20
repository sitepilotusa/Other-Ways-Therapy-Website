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
      url: 'https://otherwaystherapy.com/assets/other-ways-300-x-300-px.webp'
    }
  },
  datePublished: '2025-08-19',
  dateModified: '2025-08-19',
  image: 'https://otherwaystherapy.com/assets/blog-img.jpg',
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
                      src="/assets/Molly Pike Therapist Photo_edited.jpg"
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
                    src="/assets/blog-img.jpg"
                    alt="EMDR Intensive therapy session"
                    fill
                    sizes="(min-width: 1024px) 896px, (min-width: 768px) 768px, 100vw"
                    className="object-cover object-left-top scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed space-y-6">
                  <p>
                    EMDR Intensives, or Retreats, are a more condensed version of EMDR therapy and can be offered in a variety of formats. Currently I offer EMDR Intensives ranging from 3 to 5 hours, in addition to our planning and integration sessions. While you may find Intensives offered all over the world, I am licensed to work only with clients who are present in the state of Colorado, either in-person near Denver or online from anywhere else in the state.
                  </p>

                  <p>
                    When meeting on a weekly or biweekly basis, which is the traditional model of EMDR therapy, the work of opening up and closing down trauma processing in successive sessions can be a lot to manage, depending on your life circumstances. But it's not a bad thing. In fact, there are definite advantages to addressing trauma through this model of therapy and frequency of sessions. Pacing the work to allow your nervous system to process it at a speed that you are in control of and comfortable with, being present and spacious with the discomfort that arises, feeling what did not have the chance to be felt before, utilizing the wonderful coping strategies you have developed, and integrating what comes up in between weekly therapy sessions– these are powerful and necessary components of trauma work.
                  </p>

                  <p>
                    Like the traditional model, EMDR Intensives address many of the same components of trauma work. EMDR Intensives are not necessarily a replacement, but can serve as a complement to other forms of therapy you are engaged in. At the table of so many powerful healing modalities, EMDR Intensives certainly have their place, bringing amazing benefits. One of the best: you may not have to manage as many symptoms in between sessions if you are doing an EMDR Intensive. As an alternative to taking off, cruising, and landing all in 50 minutes, an Intensive allows you to cruise at altitude for longer and take more time to comfortably land.
                  </p>

                  <h2 className="heading-font text-xl md:text-2xl text-owt-supporting mt-8 mb-6">
                    When Is An EMDR Intensive Not Recommended?
                  </h2>

                  <p>
                    While there are no specific "rule outs" for an Intensive, as with most things, the answer is "it depends." It is best to discuss your specific circumstances, goals, and expectations during our consultation call.
                  </p>

                  <p>
                    The following considerations may be an opportunity to check in with yourself and reflect whether you feel now is the time for you to do an EMDR Intensive.
                  </p>
                </div>
              </div>

              {/* Considerations Section */}
              <div className="mt-8 md:mt-12">
                <div className="bg-owt-secondary-brown rounded-[20px] p-6 md:p-10 lg:p-12">
                  <div className="grid grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] items-start gap-0">
                    {/* Left column: arrow aligned to top */}
                    <div className="pl-2 md:pl-3 mt-2 md:mt-2">
                      <Image src="/assets/arrow-icon.svg" alt="" width={24} height={24} aria-hidden />
                    </div>
                    {/* Right column: text */}
                    <div className="text-white font-light leading-relaxed space-y-4 md:space-y-6">
                      <p>
                        If you are experiencing an ongoing stressor or traumatic event, or the storm has not quite passed, this can be an "it depends." Sometimes the trauma or stressor does not have a neat and tidy beginning, middle, and end, such as systemic oppression, ongoing medical trauma, climate change, politics, existential threats, relationship trauma, etc. In EMDR we do not process the stressors in and of themselves, but rather internal response to the stressor. Therefore, it is possible to address how the ongoing stressor or trauma is impacting you even if the circumstances are ongoing. EMDR can help address your nervous system response by bringing down the charge or distress and support you in building internal resources to cope more effectively. At the same time, more in-depth processing of past or current trauma does require a certain level of present engagement in regulation and adaptive coping. If you feel like you are currently trying to keep your head above water with the current level of stress, you may benefit from other forms of therapy, or a weekly EMDR format, to further prepare your nervous system for an Intensive.
                      </p>
                      <p>
                        Oftentimes what brings someone to therapy is a more recent experience that has impacted their ability to cope. When processing recent events, it is not uncommon for past experiences or trauma to be revealed, and perhaps not ever processed. A metaphor I love is viewing these more acute, present experiences as the foothills and the more longstanding past traumatic or unprocessed experiences as the mountains. (Gotta love a Colorado metaphor!) One EMDR Intensive will likely not address layers of trauma, but it may help address or bring down the foothills so that you can see the mountains. Or if you have addressed the foothills in previous therapy, an Intensive may help you address the mountains.
                      </p>
                    </div>
                  </div>
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
