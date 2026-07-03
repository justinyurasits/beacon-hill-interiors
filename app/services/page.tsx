import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";
import ServicesNav from "@/components/ServicesNav";

export const metadata: Metadata = {
  title: "Services — Beacon Hill Interiors",
  description:
    "Private home care, interior painting and refresh, and stewardship for Boston's most discerning residences.",
};

const services = [
  {
    id: "interior-care",
    number: "01",
    title: "Interior Care & Cleaning",
    tagline:
      "Premium recurring cleaning for residences that require more than the ordinary.",
    body: [
      "Your home reflects who you are. We treat it accordingly. Our home care service is a private, recurring cleaning program built around your schedule, your preferences, and the specific needs of your residence.",
      "No rotating crews. No shortcuts. The same trusted team, every time.",
    ],
    listLabel: "Included",
    items: [
      "Full interior cleaning to a white-glove standard",
      "Attention to detail in kitchens, baths, and living areas",
      "Seasonal deep-clean options",
      "Discreet, fully vetted service professionals",
    ],
    who: "Busy professionals and owners of Boston condominiums who expect their home maintained to an exceptional standard without having to think about it.",
  },
  {
    id: "interior-refresh",
    number: "02",
    title: "Interior Painting & Refresh",
    tagline:
      "Precise, clean, and completely turnkey — for homes that won’t tolerate mediocrity.",
    body: [
      "A fresh coat of paint is the highest-leverage improvement a residence can receive. Done well, it transforms a space. Done poorly, it shows immediately.",
      "We handle painting and cosmetic interior refresh work with the same care we bring to everything else: meticulous preparation, premium materials, clean execution, and a finished result that looks exactly as it should.",
    ],
    listLabel: "Services include",
    items: [
      "Full interior painting (rooms, ceilings, trim, millwork)",
      "Accent walls and specialty finishes",
      "Touch-up programs for maintained residences",
      "Light cosmetic refresh (hardware, fixtures, minor repairs)",
    ],
    who: "Owners preparing a residence for a new season, a sale, or simply a higher standard.",
  },
  {
    id: "stewardship",
    number: "03",
    title: "Private Home Services",
    tagline:
      "For owners who want their home fully attended to — without the coordination.",
    body: [
      "The stewardship program is our most comprehensive offering. We become the single point of contact for your home’s ongoing care — managing cleaning schedules, coordinating refresh work, monitoring for issues, and ensuring your residence is always in the condition you expect.",
      "Think of it as a home manager you never have to think about hiring.",
    ],
    listLabel: "Includes",
    items: [
      "Priority access to all Beacon Hill Interiors services",
      "Ongoing coordination and scheduling",
      "Seasonal inspection and refresh planning",
      "Preferred response times and availability",
    ],
    who: "Owners of primary residences, pied-à-terres, or investment properties who want a trusted partner managing the details.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="bg-bhi-white pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-8 pt-16">
          <SectionLabel className="mb-6">Services</SectionLabel>
          <h1
            className="text-[32px] md:text-[42px] uppercase tracking-[0.06em] leading-[1.2] max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            Three services. One standard. Your home — kept exactly as it should be.
          </h1>
        </div>
      </section>

      {/* ── ACCENT IMAGE ─────────────────────────────────────────────── */}
      <div className="relative w-full" style={{ height: "280px" }}>
        <Image
          src="/images/services.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* ── STICKY ANCHOR NAV ────────────────────────────────────────── */}
      <ServicesNav />

      {/* ── SERVICE SECTIONS ─────────────────────────────────────────── */}
      {services.map((service, index) => (
        <div key={service.id}>
          <section
            id={service.id}
            className="bg-bhi-white py-24 md:py-32 scroll-mt-[130px]"
          >
            <div className="max-w-6xl mx-auto px-8">
              {/* Number + rule */}
              <div className="flex items-center gap-6 mb-10">
                <span
                  className="text-xs uppercase tracking-[0.25em] shrink-0"
                  style={{
                    fontFamily: "var(--bhi-font-sans)",
                    color: "var(--bhi-gold)",
                  }}
                >
                  {service.number}
                </span>
                <GoldRule className="flex-1" />
              </div>

              {/* Title */}
              <h2
                className="text-[30px] md:text-[40px] lg:text-[48px] uppercase tracking-[0.05em] leading-[1.15] mb-5"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
              >
                {service.title}
              </h2>

              {/* Tagline */}
              <p
                className="text-[17px] md:text-[19px] leading-[1.7] mb-16 max-w-2xl italic"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                {service.tagline}
              </p>

              {/* Body + bullets */}
              <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-20 mb-16">
                {/* Body copy */}
                <div className="flex flex-col gap-5">
                  {service.body.map((para, i) => (
                    <p
                      key={i}
                      className="text-[16px] leading-[1.85]"
                      style={{
                        fontFamily: "var(--bhi-font)",
                        color: "var(--bhi-warm-gray)",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Bullet list */}
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.2em] mb-5"
                    style={{
                      fontFamily: "var(--bhi-font-sans)",
                      color: "var(--bhi-gold)",
                    }}
                  >
                    {service.listLabel}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] leading-[1.7]"
                        style={{
                          fontFamily: "var(--bhi-font)",
                          color: "var(--bhi-charcoal)",
                        }}
                      >
                        <span
                          className="mt-[9px] shrink-0 block rounded-full"
                          style={{
                            width: "3px",
                            height: "3px",
                            backgroundColor: "var(--bhi-gold)",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Who it's for */}
              <div
                className="pt-8"
                style={{ borderTop: "0.5px solid var(--bhi-sand)" }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-3"
                  style={{
                    fontFamily: "var(--bhi-font-sans)",
                    color: "var(--bhi-gold)",
                  }}
                >
                  Who it&rsquo;s for
                </p>
                <p
                  className="text-[15px] leading-[1.75] italic max-w-2xl"
                  style={{
                    fontFamily: "var(--bhi-font)",
                    color: "var(--bhi-warm-gray)",
                  }}
                >
                  {service.who}
                </p>
              </div>
            </div>
          </section>

          {/* Gold divider between services — not after the last one */}
          {index < services.length - 1 && (
            <div className="max-w-6xl mx-auto px-8">
              <GoldRule />
            </div>
          )}
        </div>
      ))}

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Get In Touch</SectionLabel>
            <h2
              className="text-[28px] md:text-[40px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Taking on a limited number of new clients.
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[16px] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              If you&rsquo;re looking for a home services partner who will hold your
              residence to a genuinely high standard, we&rsquo;d like to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--bhi-font-sans)",
                backgroundColor: "var(--bhi-charcoal)",
                color: "var(--bhi-white)",
              }}
            >
              Inquire About Your Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
