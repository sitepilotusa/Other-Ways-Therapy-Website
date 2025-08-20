import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Other Ways Therapy",
  description: "Terms of service for Other Ways Therapy.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-col !bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/hero-background.jpg"
          alt="Terms of Service"
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
                  Terms of Service
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full !bg-white section-padding overflow-hidden">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <div className="bg-[#F7F8F0] border-2 border-[#D9D9D9] p-[10px] rounded-[30px]">
              <div className="border border-[#D9D9D9] p-6 md:p-8 lg:p-10 rounded-[30px] text-left">
                <p className="text-sm text-owt-text-secondary mb-6">Effective Date: January 13, 2025</p>

                <p className="text-owt-text-primary font-light leading-relaxed mb-6">
                  Welcome to Other Ways Therapy. By accessing and using our website (“Site”), you agree to comply with and be bound by the following terms and conditions.
                </p>

                <div className="space-y-6 text-owt-text-primary font-light leading-relaxed">
                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">1. Acceptance of Terms</h2>
                    <p>By using this Site, you accept and agree to these Terms of Service. If you do not agree to these terms, please do not use the Site.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">2. Services Provided</h2>
                    <p>Other Ways Therapy provides information about therapy services, including booking consultations, submitting inquiries, and educational resources related to mental health.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">3. Use of the Site</h2>
                    <p>You agree to use the Site for lawful purposes only and not to engage in any activity that could harm the Site or interfere with other users’ access to it.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">4. User Submissions</h2>
                    <p>When you submit personal information via forms on our Site, you agree that the information provided is accurate. We take measures to protect your data in accordance with our Privacy Policy.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">5. Intellectual Property</h2>
                    <p>All content on this Site, including text, images, and logos, is the property of Other Ways Therapy and may not be used without permission.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">6. Disclaimer</h2>
                    <p>The content on this Site is provided for informational purposes only and does not constitute medical advice. Therapy services should be pursued with a licensed professional.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">7. Limitation of Liability</h2>
                    <p>Other Ways Therapy is not responsible for any direct or indirect damages resulting from your use of the Site.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">8. Changes to Terms</h2>
                    <p>We reserve the right to modify these terms at any time. Any updates will be posted on this page.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">9. Contact Information</h2>
                    <p>For any questions regarding these Terms of Service, please contact us at <a className="underline" href="mailto:admin@thehealingenthusiast.com">admin@thehealingenthusiast.com</a>.</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


