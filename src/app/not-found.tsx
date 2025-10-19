import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found | Other Ways Therapy",
  description: "The page you're looking for doesn't exist. Return to Other Ways Therapy for EMDR and IFS therapy in Golden, Colorado.",
};

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen bg-owt-bg-primary">
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <Image
              src="/assets/other-ways-therapy-logo.svg"
              alt="Other Ways Therapy"
              width={120}
              height={120}
              className="mx-auto mb-6"
            />
          </div>
          <h1 className="heading-font text-4xl md:text-5xl text-[var(--owt-supporting)] mb-4">
            404
          </h1>
          <h2 className="heading-font text-xl md:text-2xl text-owt-text-primary mb-6">
            Page Not Found
          </h2>
          <p className="text-owt-text-primary font-light mb-8 text-sm md:text-base">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to healing.
          </p>
          <Link
            href="/"
            className="btn-base btn-dark inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
