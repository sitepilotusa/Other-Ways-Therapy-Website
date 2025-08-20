"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [contactHoverTimeout, setContactHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const servicesButtonRef = useRef<HTMLAnchorElement | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const contactButtonRef = useRef<HTMLAnchorElement | null>(null);
  const contactMenuRef = useRef<HTMLDivElement | null>(null);
  const serviceItemRefs = useMemo(
    () => Array.from({ length: 6 }, () => ({ current: null as HTMLAnchorElement | null })),
    []
  );
  const contactItemRefs = useMemo(
    () => Array.from({ length: 2 }, () => ({ current: null as HTMLAnchorElement | null })),
    []
  );

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      // Services
      if (servicesOpen) {
        if (
          servicesMenuRef.current &&
          !servicesMenuRef.current.contains(target) &&
          servicesButtonRef.current &&
          !servicesButtonRef.current.contains(target)
        ) {
          setServicesOpen(false);
        }
      }
      // Contact
      if (contactOpen) {
        if (
          contactMenuRef.current &&
          !contactMenuRef.current.contains(target) &&
          contactButtonRef.current &&
          !contactButtonRef.current.contains(target)
        ) {
          setContactOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeout) clearTimeout(hoverTimeout);
      if (contactHoverTimeout) clearTimeout(contactHoverTimeout);
    };
  }, [servicesOpen, contactOpen, hoverTimeout, contactHoverTimeout]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalBodyOverflow || '';
      document.documentElement.style.overflow = originalHtmlOverflow || '';
    }
    return () => {
      document.body.style.overflow = originalBodyOverflow || '';
      document.documentElement.style.overflow = originalHtmlOverflow || '';
    };
  }, [mobileOpen]);

  function onServicesKeyDown(event: React.KeyboardEvent<HTMLAnchorElement>) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setServicesOpen(true);
      requestAnimationFrame(() => {
        serviceItemRefs[0].current?.focus();
      });
    } else if (event.key === "Escape") {
      setServicesOpen(false);
      servicesButtonRef.current?.focus();
    }
  }

  function onMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const items = serviceItemRefs.map((r) => r.current).filter(Boolean) as HTMLAnchorElement[];
    const currentIndex = items.findIndex((el) => el === document.activeElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = items[(currentIndex + 1) % items.length];
      next?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = items[(currentIndex - 1 + items.length) % items.length];
      prev?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    } else if (event.key === "Escape") {
      setServicesOpen(false);
      servicesButtonRef.current?.focus();
    }
  }

  function onContactKeyDown(event: React.KeyboardEvent<HTMLAnchorElement>) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setContactOpen(true);
      requestAnimationFrame(() => {
        contactItemRefs[0].current?.focus();
      });
    } else if (event.key === "Escape") {
      setContactOpen(false);
      contactButtonRef.current?.focus();
    }
  }

  function onContactMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const items = contactItemRefs.map((r) => r.current).filter(Boolean) as HTMLAnchorElement[];
    const currentIndex = items.findIndex((el) => el === document.activeElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = items[(currentIndex + 1) % items.length];
      next?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = items[(currentIndex - 1 + items.length) % items.length];
      prev?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    } else if (event.key === "Escape") {
      setContactOpen(false);
      contactButtonRef.current?.focus();
    }
  }

  const services = [
    { label: "Services", href: "/services" },
    { label: "EMDR Therapy", href: "/services/emdr-therapy" },
    { label: "Internal Family Systems Therapy", href: "/services/internal-family-systems" },
    { label: "Ketamine Preparation & Integration", href: "/services/ketamine-prep-integration" },
    { label: "EMDR Intensives", href: "/services/emdr-intensives" },
    { label: "EMDR Consultation for Therapists", href: "/services/emdr-consultation" },
  ];

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    if (href === '/services') {
      return pathname === '/services' || pathname.startsWith('/services/');
    }
    return pathname === href;
  };

  // Helper function to get active link classes
  const getLinkClasses = (href: string) => {
    const baseClasses = "relative hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-owt-primary-brown transition-colors";
    const activeClasses = "text-[#BB8B74]";
    const inactiveClasses = "";
    
    return `${baseClasses} ${isActive(href) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="relative z-20 bg-owt-bg-secondary pt-3 md:pt-4 pb-3 md:pb-4">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Mobile top bar: logo left, hamburger right */}
        <div className="flex items-center justify-between h-16 md:hidden">
          <Link href="/" className="inline-flex items-center">
            <span className="sr-only">Other Ways Therapy</span>
            <div className="relative size-40">
              <Image
                src="/assets/other ways (300 x 300 px)-3-cropped.svg"
                alt="Other Ways Therapy logo"
                fill
                sizes="175px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <button
            className="inline-flex items-center justify-center size-11 rounded-full border border-owt-primary-brown/30 bg-white/60 text-owt-primary-brown shadow-sm backdrop-blur hover:bg-owt-bg-accent/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-owt-primary-brown transition"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
              <path d="M4 7.5h16" />
              <path d="M4 12h12" />
              <path d="M4 16.5h16" />
            </svg>
          </button>
        </div>

        {/* Desktop top bar with stretched navs */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-20 gap-x-6 lg:gap-x-10 xl:gap-x-14 2xl:gap-x-20">
          {/* Left nav (stretched) */}
          <nav className="flex w-full items-center text-owt-text-primary font-medium justify-between pr-6 lg:pr-8 xl:pr-12 2xl:pr-16">
            <Link href="/about" className={getLinkClasses('/about')}>
              About Me
              {isActive('/about') && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[25px] h-0.5 bg-[#BB8B74] rounded-full"></div>
              )}
            </Link>
            <Link href="/specialties" className={getLinkClasses('/specialties')}>
              Specialties
              {isActive('/specialties') && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[25px] h-0.5 bg-[#BB8B74] rounded-full"></div>
              )}
            </Link>
            <div
              className="relative"
              onMouseEnter={() => {
                if (hoverTimeout) clearTimeout(hoverTimeout);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setServicesOpen(false), 150);
                setHoverTimeout(timeout);
              }}
            >
              <Link
                href="/services"
                ref={servicesButtonRef}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onMouseEnter={() => setServicesOpen(true)}
                onKeyDown={onServicesKeyDown}
                className={`${getLinkClasses('/services')} flex items-center gap-1`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {isActive('/services') && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[25px] h-0.5 bg-[#BB8B74] rounded-full"></div>
                )}
              </Link>
              {servicesOpen && (
                <div
                  ref={servicesMenuRef}
                  role="menu"
                  aria-label="Services"
                  tabIndex={-1}
                  onKeyDown={onMenuKeyDown}
                  className="absolute left-0 mt-2 min-w-64 rounded-xl !bg-white shadow-lg ring-1 ring-black/5 backdrop-blur p-2 z-[100]"
                >
                  {services.map((item, index) => (
                    <Link
                      key={item.href}
                      ref={(el) => {
                        serviceItemRefs[index].current = el;
                      }}
                      role="menuitem"
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-owt-text-primary hover:bg-black/5 focus:bg-black/5 focus-visible:outline-none"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Center placeholder equal to logo width to keep spacing */}
          <div aria-hidden className="w-40 md:w-44 lg:w-48 xl:w-64 2xl:w-72" />

          {/* Right nav (stretched) */}
          <nav className="flex w-full items-center text-owt-text-primary font-medium justify-between pl-6 lg:pl-8 xl:pl-12 2xl:pl-16">
            <Link href="/blog" className={getLinkClasses('/blog')}>
              Blog
              {isActive('/blog') && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[25px] h-0.5 bg-[#BB8B74] rounded-full"></div>
              )}
            </Link>
            <div
              className="relative"
              onMouseEnter={() => {
                if (contactHoverTimeout) clearTimeout(contactHoverTimeout);
                setContactOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setContactOpen(false), 150);
                setContactHoverTimeout(timeout);
              }}
            >
              <Link
                href="/contact"
                ref={contactButtonRef}
                aria-haspopup="menu"
                aria-expanded={contactOpen}
                onMouseEnter={() => setContactOpen(true)}
                onKeyDown={onContactKeyDown}
                className={`${getLinkClasses('/contact')} flex items-center gap-1`}
              >
                Contact
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${contactOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {isActive('/contact') && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[25px] h-0.5 bg-[#BB8B74] rounded-full"></div>
                )}
              </Link>
              {contactOpen && (
                <div
                  ref={contactMenuRef}
                  role="menu"
                  aria-label="Contact"
                  tabIndex={-1}
                  onKeyDown={onContactMenuKeyDown}
                  className="absolute left-0 mt-2 min-w-64 rounded-xl !bg-white shadow-lg ring-1 ring-black/5 backdrop-blur p-2 z-[100]"
                >
                  <Link
                    href="/contact"
                    ref={(el) => { contactItemRefs[0].current = el; }}
                    role="menuitem"
                    className="block px-3 py-2 rounded-lg text-owt-text-primary hover:bg-black/5 focus:bg-black/5 focus-visible:outline-none"
                    onClick={() => setContactOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/areas-we-serve"
                    ref={(el) => { contactItemRefs[1].current = el; }}
                    role="menuitem"
                    className="block px-3 py-2 rounded-lg text-owt-text-primary hover:bg-black/5 focus:bg-black/5 focus-visible:outline-none"
                    onClick={() => setContactOpen(false)}
                  >
                    Areas We Serve
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="tel:+17208636373"
              className="btn-base btn-dark px-6 py-2 text-sm md:text-base active:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-owt-primary-brown"
            >
              Call Now
            </Link>
          </nav>
        </div>
      </div>

      {/* Centered overlapping logo (desktop only) */}
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 hidden md:block">
        <Link href="/" className="block rounded-full bg-owt-bg-secondary p-1.5 shadow-sm">
          <div className="relative rounded-full overflow-hidden size-32 md:size-36 lg:size-40">
            <Image
              src="/assets/other ways (300 x 300 px)-3.png"
              alt="Other Ways Therapy logo"
              fill
              sizes="(min-width: 1024px) 10rem, (min-width: 768px) 9rem, 8rem"
              className="object-cover"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm overscroll-none overflow-hidden" role="dialog" aria-modal="true">
          <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-owt-bg-secondary shadow-xl p-6 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="text-owt-text-primary font-medium">Menu</span>
              <button
                className="inline-flex items-center justify-center size-10 rounded-full border border-owt-primary-brown/30 bg-white/60 text-owt-primary-brown shadow-sm backdrop-blur hover:bg-owt-bg-accent/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-owt-primary-brown transition"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="mt-5 flex justify-center">
              <div className="relative size-40 rounded-full overflow-hidden shadow-sm ring-1 ring-black/5">
                <Image
                  src="/assets/other ways (300 x 300 px)-3.png"
                  alt="Other Ways Therapy logo"
                  fill
                  sizes="160px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 text-owt-text-primary">
              <Link href="/about" onClick={() => setMobileOpen(false)} className="py-2">About Me</Link>
              <Link href="/specialties" onClick={() => setMobileOpen(false)} className="py-2">Specialties</Link>
              <details className="group">
                <summary className="cursor-pointer py-2 list-none flex items-center justify-between transition-colors group-open:text-owt-primary-brown">
                  <span>Services</span>
                  <svg
                    className="w-4 h-4 text-owt-text-secondary transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="ml-3 mt-2 flex flex-col">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="py-2">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </details>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="py-2">Blog</Link>
              <details className="group">
                <summary className="cursor-pointer py-2 list-none flex items-center justify-between transition-colors group-open:text-owt-primary-brown">
                  <span>Contact</span>
                  <svg
                    className="w-4 h-4 text-owt-text-secondary transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="ml-3 mt-2 flex flex-col">
                  <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-2">Contact</Link>
                  <Link href="/areas-we-serve" onClick={() => setMobileOpen(false)} className="py-2">Areas We Serve</Link>
                </div>
              </details>
              <Link
                href="tel:+17208636373"
                onClick={() => setMobileOpen(false)}
                className="btn-base btn-dark mt-2 inline-flex w-max items-center justify-center px-6 py-2 text-sm md:text-base"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


