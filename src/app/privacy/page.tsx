import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Other Ways Therapy",
  description: "Privacy policy for Other Ways Therapy.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col !bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden rounded-b-[50px] md:rounded-b-[100px]">
        <Image
          src="/assets/therapy-healing-landscape-background.jpg"
          alt="Privacy Policy"
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
                  Privacy Policy
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
                  Other Ways Therapy (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
                </p>

                <div className="space-y-6 text-owt-text-primary font-light leading-relaxed">
                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">1. Information We Collect</h2>
                    <p>We collect the following personal information when you voluntarily provide it through our contact forms:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Name</li>
                      <li>Phone Number</li>
                      <li>Email Address</li>
                      <li>Message content</li>
                    </ul>
                    <p className="mt-3">Additionally, we collect non-personal data through Google Analytics, such as IP address, browser type, and browsing behavior.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Respond to inquiries</li>
                      <li>Provide therapy services and consultations</li>
                      <li>Improve our website functionality and content</li>
                      <li>Comply with legal requirements</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">3. Information Sharing</h2>
                    <p>We do not sell or share your personal information with third parties, except as required to comply with legal obligations or in the event that our service providers assist in delivering our services (e.g., Cognito Forms for form submissions).</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">4. Data Security</h2>
                    <p>We implement industry-standard security measures, including HIPAA-compliant data storage and transmission, to protect your personal data.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">5. Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar tracking technologies, such as Google Analytics, to analyze site usage and enhance user experience. You can adjust your browser settings to refuse cookies if desired.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">6. Your Rights</h2>
                    <p>You have the right to request access to or deletion of your personal data. To exercise these rights, please contact us at <a className="underline" href="mailto:admin@thehealingenthusiast.com">admin@thehealingenthusiast.com</a>.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">7. Third-Party Links</h2>
                    <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">8. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy periodically. Any changes will be posted on this page.</p>
                  </section>

                  <section>
                    <h2 className="heading-font text-lg md:text-xl text-owt-supporting mb-2">9. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at <a className="underline" href="mailto:admin@thehealingenthusiast.com">admin@thehealingenthusiast.com</a>.</p>
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


