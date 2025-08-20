import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Serve | Other Ways Therapy",
  description:
    "Providing transformative therapy intensives across Colorado — in-person in Wheat Ridge and virtually statewide.",
  alternates: { canonical: "/areas-we-serve" },
  openGraph: {
    type: 'website',
    title: 'Areas We Serve | Other Ways Therapy',
    description: 'Providing transformative therapy intensives across Colorado — in-person in Wheat Ridge and virtually statewide.',
    url: '/areas-we-serve',
  },
};

const TOWNS = [
  "Lakewood",
  "Wheat Ridge",
  "Denver",
  "Arvada",
  "Golden",
  "Boulder",
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function AreasWeServe() {
  return (
    <main className="flex flex-col bg-owt-bg-primary">
      {/* Hero Section (matches non-home pages) */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/hero-background.jpg"
          alt="Colorado landscape background for Areas We Serve"
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
                <h1 className="heading-font text-white tracking-tight text-clamp-page-title">Areas We Serve</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="relative w-full bg-owt-bg-primary section-padding overflow-hidden">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-font text-clamp-section-title text-owt-supporting mb-6 md:mb-8">
              Serving Clients Across Colorado
            </h2>
            <div className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed space-y-4">
              <p>
                We serve clients in-person at our Wheat Ridge office and virtually throughout Colorado, meeting you where
                you are with compassionate, effective care.
              </p>
              <p>
                Whether you live along the Front Range or elsewhere in the state, we offer accessible therapy intensives
                to support your healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Location Cards */}
      <section className="relative w-full !bg-white section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-stretch justify-items-stretch">
            {TOWNS.map((town) => {
              const slug = toSlug(town);
              return (
                <Link
                  key={slug}
                  href={`/areas-we-serve/${slug}`}
                  className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-owt-primary-brown"
                >
                  <div className="h-full w-full rounded-[20px] bg-[#7e7e69] p-6 md:p-8 flex flex-col items-start text-left transition-transform duration-150 group-hover:-translate-y-0.5">
                    <h3 className="heading-font text-lg md:text-xl text-white mb-1">
                      {town}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-white font-light opacity-90">
                      Therapy services in {town}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-sm text-white/90 group-hover:underline">Learn more →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}


