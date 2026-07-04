import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";
import ServicesNav from "@/components/ServicesNav";

export const metadata: Metadata = {
  title: "Services — Beacon Hill Interiors",
  description:
    "Interior care and cleaning, painting, and private home services for Boston's most discerning residences. Licensed, insured, and building-compliant.",
};

const services = [
  {
    id: "interior-care",
    number: "01",
    title: "Interior Care & Cleaning",
    image: "/images/cleaning.webp",
    tagline:
      "Premium recurring cleaning for residences that require more than the ordinary.",
    body: "Your home reflects who you are. We treat it accordingly — with a private, recurring cleaning program built around your schedule, your preferences, and the specific needs of your residence.",
    listLabel: "Included",
    items: [
      "Recurring weekly or biweekly cleaning to a white-glove standard",
      "Deep cleaning & seasonal resets",
      "Attention to detail in kitchens, bathrooms, and living areas",
      "Move-in / move-out preparation",
      "Post-construction cleaning",
      "Discreet scheduling built around your household",
    ],
    who: "Busy professionals and owners of Boston condominiums who expect their home maintained to an exceptional standard without having to think about it.",
  },
  {
    id: "interior-refresh",
    number: "02",
    title: "Interior Painting & Refresh",
    image: "/images/painting.webp",
    tagline:
      "Precise, clean, and completely turnkey — for homes that won't tolerate mediocrity.",
    body: "A fresh coat of paint is the highest-leverage improvement a residence can receive. Done well, it transforms a space — and we handle every detail with meticulous preparation, premium materials, and clean execution.",
    listLabel: "Included",
    items: [
      "Full room interior painting (rooms, ceilings, trim, millwork)",
      "Touch-ups, trim & millwork refinishing",
      "Accent walls & specialty finishes",
      "Premium materials, clean execution",
      "Light cosmetic refresh — hardware, fixtures, minor repairs",
      "Touch-up programs for maintained residences",
    ],
    who: "Owners preparing a residence for a new season, a sale, or simply a higher standard.",
  },
  {
    id: "stewardship",
    number: "03",
    title: "Private Home Services",
    image: "/images/homeservices.webp",
    tagline:
      "For owners who want their home fully attended to — without the coordination.",
    body: "For owners who want their residence fully attended to — without the overhead of managing it themselves. We coordinate the details, maintain the standard, and ensure your home is always in the condition you expect.",
    listLabel: "Included",
    items: [
      "Vendor coordination & scheduling",
      "Access management & building protocols",
      "Ongoing cleaning coordination & scheduling",
      "Seasonal readiness & property oversight",
      "Punch list support & light maintenance",
      "Seasonal inspection & refresh planning",
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
            Three services. One standard.
          </h1>
        </div>
      </section>

      {/* ── STICKY ANCHOR NAV ────────────────────────────────────────── */}
      <ServicesNav />

      {/* ── SERVICE SECTIONS ─────────────────────────────────────────── */}
      {services.map((service, index) => (
        <div key={service.id}>
          <section
            id={service.id}
            className="bg-bhi-white scroll-mt-[130px]"
          >
            {/* Service image — full width, 320px */}
            <div className="relative w-full" style={{ height: "320px" }}>
              <Image
                src={service.image}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="max-w-6xl mx-auto px-8 py-24 md:py-32">
              {/* Number */}
              <p
                className="text-xs uppercase tracking-[0.25em] mb-10"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
              >
                {service.number}
              </p>

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
                <p
                  className="text-[17px] leading-[1.85]"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                >
                  {service.body}
                </p>

                {/* Bullet list */}
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.2em] mb-5"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-gold)" }}
                  >
                    {service.listLabel}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[16px] leading-[1.7]"
                        style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                      >
                        <span
                          className="shrink-0 mt-[0.15em]"
                          style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)", fontSize: "14px", lineHeight: 1.6 }}
                          aria-hidden="true"
                        >—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Who it's for */}
              <div className="mb-10">
                <p
                  className="text-[15px] leading-[1.75] italic max-w-2xl"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                >
                  {service.who}
                </p>
              </div>

              {/* CTA */}
              <p
                className="text-[14px] italic mb-5"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                Every engagement begins with a personal site visit.
              </p>
              <Link
                href="/contact"
                className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80 w-full md:w-auto text-center"
                style={{
                  fontFamily: "var(--bhi-font-sans)",
                  backgroundColor: "var(--bhi-charcoal)",
                  color: "var(--bhi-white)",
                }}
              >
                Inquire About Your Home
              </Link>

              {/* Divider — last element, separates from next section */}
              {index < services.length - 1 && (
                <GoldRule className="mt-16" />
              )}
            </div>
          </section>
        </div>
      ))}

      {/* ── SCOPE SECTION ────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">Focused on Interiors</SectionLabel>
          <h2
            className="text-[28px] md:text-[36px] uppercase tracking-[0.06em] leading-[1.2] mb-8 max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            Selective by design.
          </h2>
          <GoldRule className="mb-16 max-w-xs" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-14">
            {/* What we provide */}
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-7"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
              >
                What we provide
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Interior care & recurring cleaning",
                  "Interior painting & cosmetic refresh",
                  "Private home services & coordination",
                  "Touch-ups, trim & finish work",
                  "Light fixture & hardware upgrades",
                  "Building-compliant access management",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[16px] leading-[1.7]"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                  >
                    <span style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)", fontSize: "13px", marginTop: "0.2em", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What we don't do */}
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-7"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
              >
                What we don&rsquo;t do
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Roofing, siding, or exterior work",
                  "Landscaping or outdoor projects",
                  "Foundation or structural work",
                  "Large-scale general contracting",
                  "Handyman or ad-hoc single visits",
                  "Commercial or non-residential properties",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[16px] leading-[1.7]"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                  >
                    <span style={{ color: "var(--bhi-sand)", fontFamily: "var(--bhi-font-sans)", fontSize: "13px", marginTop: "0.2em", flexShrink: 0 }}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="text-[15px] italic text-center max-w-2xl mx-auto"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            When appropriate, we can coordinate trusted specialists while remaining
            focused on the interior experience.
          </p>
        </div>
      </section>

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
