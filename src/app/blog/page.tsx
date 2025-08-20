import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AuthorDatePill } from "@/components/AuthorDatePill";

export const metadata: Metadata = {
  title: 'Blog | Other Ways Therapy',
  description: 'Insights on trauma therapy, healing, and mental health from Other Ways Therapy in Wheat Ridge, Colorado.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: 'Blog | Other Ways Therapy',
    description: 'Insights on trauma therapy, healing, and mental health from Other Ways Therapy in Wheat Ridge, Colorado.',
    url: '/blog',
  },
};

export default function Blog() {
  return (
    <main className="flex flex-col !bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/hero-background.jpg"
          alt="Blog at Other Ways Therapy"
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
                  Blog
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="w-full !bg-white section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {/* Blog Post 1 */}
              <article className="bg-owt-bg-accent rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href="/blog/what-is-an-emdr-intensive" className="block">
                  <div className="relative h-48 md:h-56">
                    <Image
                      src="/assets/blog-img.jpg"
                      alt="What is an EMDR Intensive?"
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-3 line-clamp-2">
                      What Is An EMDR Intensive?
                    </h2>
                    <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed mb-4 line-clamp-3">
                      EMDR Intensives are a more condensed version of EMDR therapy, ranging from 3 to 5 hours. Learn about the benefits and considerations of intensive trauma therapy sessions.
                    </p>
                    <div className="flex items-center justify-between">
                      <AuthorDatePill author="Molly Pike" date="August 19, 2025" />
                    </div>
                  </div>
                </Link>
              </article>

              {/* Blog Post 2 */}
              <article className="bg-owt-bg-accent rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href="/blog/life-uh-finds-a-way" className="block">
                  <div className="relative h-48 md:h-56">
                    <Image
                      src="/assets/IMG_3150-1-scaled.jpg"
                      alt="Understanding symptoms and behaviors through an EMDR lens"
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-3 line-clamp-2">
                      Understanding Your Symptoms & Behaviors Through An EMDR Lens
                    </h2>
                    <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed mb-4 line-clamp-3">
                      Have you ever wondered why, despite your best efforts, certain patterns in your life seem to persist? Understanding how your brain adapted to protect you and how EMDR therapy can help transform these patterns.
                    </p>
                    <div className="flex items-center justify-between">
                      <AuthorDatePill author="Molly Pike" date="January 27, 2025" />
                    </div>
                  </div>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
