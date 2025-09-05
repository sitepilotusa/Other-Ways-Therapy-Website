import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full pt-0 md:pt-0 !text-owt-text-primary">
      {/* CTA Section */}
      <section className="w-full !bg-white py-0 my-[75px]">
        <div className="section-container">
          <div
            className="relative w-full overflow-hidden rounded-2xl md:rounded-full bg-no-repeat bg-cover bg-center bg-blend-multiply"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #BB8B74 0%, #C69177 100%), url('/assets/footer-background-texture.png')",
            }}
          >
            <div className="flex flex-row max-[800px]:flex-col items-center justify-between max-[800px]:justify-center gap-4 max-[800px]:gap-8 md:gap-8 px-10 md:px-14 py-10 md:py-14">
              <h3 className="heading-font !text-white text-clamp-cta-title text-center min-[801px]:text-left">
                Schedule a Free Consultation
              </h3>
              <Link
                href="/contact"
                className="btn-base btn-light inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base"
              >
                Schedule now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main footer row */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-0">
        <div className="bg-owt-bg-tertiary rounded-[25px] sm:rounded-[50px] px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 sm:gap-10 md:gap-20 items-start">
            {/* Left: Logo */}
            <div className="flex items-center justify-center md:col-span-3">
              <Image
                src="/assets/other-ways-therapy-logo.png"
                alt="Other Ways Therapy logo"
                width={160}
                height={160}
                className="w-40 h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover"
                priority={false}
              />
            </div>

            {/* Right: Text container (Quick Links + Location) */}
            <div className="md:col-span-7 w-full">
              <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8 md:gap-12 w-full">
                {/* Quick Links */}
                <div className="text-left w-full md:w-auto">
                  <div className="heading-font text-sm !text-owt-text-primary mb-3 whitespace-nowrap">Quick Links</div>
                  <nav className="flex flex-col gap-2 !text-owt-text-primary text-sm md:text-base">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About Me</Link>
                    <Link href="/specialties" className="hover:underline">Specialties</Link>
                    <Link href="/services" className="hover:underline">Services</Link>
                    <Link href="/blog" className="hover:underline">Blog</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                  </nav>
                </div>

                {/* Services (same as header dropdown) */}
                <div className="text-left w-full md:w-auto">
                  <div className="heading-font text-sm !text-owt-text-primary mb-3 whitespace-nowrap">Services</div>
                  <nav className="flex flex-col gap-2 !text-owt-text-primary text-sm md:text-base">
                    <Link href="/services/emdr-therapy" className="hover:underline">EMDR Therapy</Link>
                    <Link href="/services/internal-family-systems" className="hover:underline">Internal Family Systems Therapy</Link>
                    <Link href="/services/ketamine-prep-integration" className="hover:underline">Ketamine Preparation & Integration</Link>
                    <Link href="/services/emdr-intensives" className="hover:underline">EMDR Intensives</Link>
                    <Link href="/services/emdr-consultation" className="hover:underline">EMDR Consultation for Therapists</Link>
                  </nav>
                </div>

                {/* Location */}
                <div className="text-left w-full md:w-auto">
                  <div className="heading-font text-sm !text-owt-text-primary mb-3 whitespace-nowrap">Location</div>
                  <div className="flex flex-col gap-2 !text-owt-text-primary text-sm md:text-base">
                    <div className="max-w-none sm:max-w-48">
                      <span className="font-medium">Address:</span>
                      <div className="mt-1">
                        4251 Kipling St. #430<br />
                        Wheat Ridge, CO 80033
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span> <Link href="tel:+17208636373" className="hover:underline">720-863-6373</Link>
                    </div>
                    <div className="mt-3 w-full max-w-[280px] sm:max-w-[200px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d-105.1234567!3d39.7392358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16.5!3m3!1m2!1s0x876b8d4e278dafd3%3A0x123456789!2s4251%20Kipling%20St%20%23430%2C%20Wheat%20Ridge%2C%20CO%2080033!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                        width="100%"
                        height="150"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl border border-gray-400 w-full"
                        title="Other Ways Therapy Location"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="w-full pt-12 sm:pt-16 md:pt-20">
        <div className="bg-owt-bg-secondary px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 pb-6 flex flex-col items-center justify-center gap-3">
          <p className="text-xs md:text-sm !text-owt-text-primary text-center leading-relaxed px-2">
            Copyright © 2025 The Healing Enthusiast PLLC (DBA Other Ways Therapy). All rights reserved.
          </p>
          <div className="flex items-center gap-2 sm:gap-3 text-xs md:text-sm !text-owt-text-primary">
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <span>|</span>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


