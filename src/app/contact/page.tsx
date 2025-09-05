/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Metadata } from "next";
import CognitoFormEmbed from "@/components/CognitoFormEmbed";

export const metadata: Metadata = {
  title: 'Contact | Other Ways Therapy',
  description: 'Contact Other Ways Therapy in Wheat Ridge, Colorado. Schedule a free consultation for EMDR therapy, trauma treatment, and healing services.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact | Other Ways Therapy',
    description: 'Contact Other Ways Therapy in Wheat Ridge, Colorado. Schedule a free consultation for EMDR therapy, trauma treatment, and healing services.',
    url: '/contact',
  },
};

export default function Contact() {
  return (
    <main className="flex flex-col !bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/therapy-healing-landscape-background.jpg"
          alt="Contact Other Ways Therapy"
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
                  Contact
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full !bg-white section-padding">
        <div className="section-container">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="bg-[#AFA691] rounded-[30px] md:rounded-[100px] p-6 md:p-12 lg:p-16 text-white text-center">
              <span className="text-clamp-eyebrow font-semibold tracking-[.06em] text-white mb-4 md:mb-6 block">
                PERSONALIZED FOR EVERY STEP
              </span>
              
              <h2 className="heading-font text-clamp-section-title text-white mb-6 md:mb-8">
                Let's Discuss Next Steps
              </h2>
              
              <p className="text-sm md:text-base text-white font-light leading-relaxed mb-8 md:mb-10">
                I'm here to guide you, wherever you are. Let's create a plan that works for your life.
              </p>
              
              <p className="text-sm md:text-base text-white font-medium mb-2">
                Virtual Services: Available to clients throughout Colorado.
              </p>
              
              {/* Contact Form */}
              <div className="mt-2">
                <CognitoFormEmbed dataKey="6bC91qZ8AUioh9fFRWGrCQ" formId={9} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Information Section */}
      <section className="w-full !bg-white pb-10 md:pb-16 -mt-16 md:-mt-24">
        <div className="section-container">
          <div className="max-w-full mx-auto relative z-0">
            <div className="bg-[#ECE7DD] rounded-[30px] p-8 md:p-12 lg:p-16 pt-24 md:pt-32">
              <div className="max-w-5xl mx-auto">
                <div className="space-y-6 md:space-y-8 border border-[#BB8B74] rounded-[20px] p-6 md:p-8">
                {/* Self Pay Section */}
                <div className="text-center">
                  <h3 className="heading-font text-clamp-section-title text-owt-supporting mb-4">
                    50–55 Minute Individual Sessions
                  </h3>
                  <p className="text-lg md:text-xl text-owt-supporting font-semibold mb-2">
                    $165 (Online Only)
                  </p>
                  <p className="text-sm md:text-base text-owt-text-primary font-medium mb-4">
                    EMDR Extended Sessions & Intensives: Self‑Pay Only (Online or In‑Person)
                  </p>
                  <p className="text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    Please send a message through my contact form or schedule a consultation to discuss your unique situation and needs. My intensive format is generally one half to one full day, in addition to an intake/planning and an integration session.
                  </p>
                </div>

                {/* Good Faith Estimate Section */}
                <div className="border-t border-owt-text-secondary/20 pt-6 md:pt-8">
                  <h3 className="heading-font text-lg md:text-xl text-owt-supporting mb-4">
                    You Have The Right To Receive A "Good Faith Estimate" Explaining How Much Your Medical Care Will Cost.
                  </h3>
                  
                  <div className="space-y-4 text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    <p>
                      Under the law, health care providers need to give patients who don't have insurance or who are not using insurance an estimate of the bill for medical items and services.
                    </p>
                    
                    <p>
                      You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.
                    </p>
                    
                    <p>
                      Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.
                    </p>
                    
                    <p>
                      If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.
                    </p>
                    
                    <p>
                      Make sure to save a copy or picture of your Good Faith Estimate.
                    </p>
                    
                    <p>
                      For questions or more information about your right to a Good Faith Estimate, visit{" "}
                      <a href="https://www.cms.gov/nosurprises" className="text-owt-primary-brown hover:underline" target="_blank" rel="noopener noreferrer">
                        www.cms.gov/nosurprises
                      </a>{" "}
                      or call the Colorado Division of Insurance at 303-894-7490 or 1-800-930-3745.
                    </p>
                  </div>
                </div>

                {/* Insurance Section */}
                <div className="border-t border-owt-text-secondary/20 pt-6 md:pt-8">
                  <h3 className="heading-font text-lg md:text-xl text-owt-supporting mb-4">
                    Insurance
                  </h3>
                  <div className="space-y-4 text-sm md:text-base text-owt-text-primary font-light leading-relaxed">
                    <p>Currently, I only accept Kaiser insurance.</p>
                    <p>I am otherwise considered an out‑of‑network provider with other major insurance companies.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
