import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Residential Interior Care — Beacon Hill Interiors",
  description:
    "Premium recurring cleaning and interior care for private residences in Boston. White-glove standard, consistent team, one accountable relationship.",
};

const includes = [
  "Full interior cleaning to a white-glove standard",
  "Kitchen — surfaces, appliances, under-cabinet detail",
  "Baths — full detail including fixtures, tile, and glass",
  "Living and dining areas, bedrooms",
  "Floors, baseboards, trim, and millwork",
  "Seasonal deep-clean and periodic refresh options",
  "Discreet, W-2 employed service professionals",
];

export default function ResidentialPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center pt-[72px]"
        style={{ minHeight: "max(480px, 65vh)" }}
      >
        <Image src="/images/cleaning.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.68)" }} />
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
          >
            01 — Residential Interior Care
          </p>
          <h1
            className="text-[36px] md:text-[52px] uppercase tracking-[0.06em] leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Your Home. Cared For the Way It Should Be.
          </h1>
          <p
            className="text-[17px] leading-[1.85] max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)" }}
          >
            Beacon Hill Interiors provides private, recurring interior care for Boston
            residences where the standard is non-negotiable — brownstones,
            condominiums, and private homes in the city&rsquo;s finest neighborhoods.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <SectionLabel className="mb-6">Residential Interior Care</SectionLabel>
              <h2
                className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
              >
                Not a cleaning service in the ordinary sense.
              </h2>
              <GoldRule className="mb-8" />
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                This is a private, recurring care program — built around your home,
                your schedule, and the specific way you want your residence maintained.
              </p>
              <p
                className="text-[16px] leading-[1.85] mb-10"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                A consistent team who knows your home. No strangers learning the space
                from scratch each time. You establish the standard once. We hold it.
              </p>
              <p
                className="text-[16px] italic leading-[1.85]"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-gold)" }}
              >
                &ldquo;No shortcuts. A consistent, trusted team, every time.&rdquo;
              </p>
            </div>

            <div className="flex-1">
              <p
                className="text-[11px] uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
              >
                What It Includes
              </p>
              <ul className="flex flex-col gap-4">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.75]"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                  >
                    <span
                      className="shrink-0 mt-[0.55em]"
                      style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)", fontSize: "12px" }}
                      aria-hidden="true"
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">Who It&rsquo;s For</SectionLabel>
          <h2
            className="text-[26px] md:text-[34px] leading-[1.2] mb-10 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            For those who want their home cared for — without managing the logistics.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Private Homeowners",
                body: "Busy professionals, frequent travelers, and owners of Boston condominiums and townhomes who expect their home maintained to an exceptional standard.",
              },
              {
                title: "Pre-Sale & Move-In",
                body: "Realtors and sellers preparing before photography, staging, or listing. Buyers resetting a home after closing. Property managers turning over a unit.",
              },
              {
                title: "Managed Buildings",
                body: "Condominiums and residences in managed buildings across Boston. We coordinate directly with building management — access, protocols, COI requirements handled.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ border: "0.5px solid var(--bhi-sand)", padding: "32px 28px" }}
              >
                <GoldRule className="mb-6" />
                <p
                  className="text-[11px] uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">How It Works</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-10">
            {[
              {
                n: "01",
                title: "Inquiry",
                body: "Reach out. We'll respond promptly and schedule a brief conversation to understand your home and what you're looking for.",
              },
              {
                n: "02",
                title: "Walkthrough",
                body: "We visit your home, assess the space, and build a care program around what you actually need — frequency, scope, and specific priorities.",
              },
              {
                n: "03",
                title: "Ongoing Service",
                body: "We show up when scheduled. We hold the standard we agreed to. We communicate proactively if anything changes.",
              },
            ].map((step) => (
              <div key={step.n}>
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                >
                  {step.n}
                </span>
                <GoldRule className="my-5" />
                <h3
                  className="text-sm uppercase tracking-[0.15em] mb-4"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.75]" style={{ color: "var(--bhi-warm-gray)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-charcoal)" }}>
        <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center">
          <SectionLabel className="mb-6" style={{ color: "var(--bhi-gold)" }}>
            Inquire
          </SectionLabel>
          <h2
            className="text-[26px] md:text-[36px] leading-[1.2] mb-6 max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            Ready to talk about your home?
          </h2>
          <GoldRule className="mb-8 max-w-xs w-full" style={{ opacity: 0.4 }} />
          <p
            className="text-[16px] leading-[1.8] mb-10 max-w-md"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-sand)" }}
          >
            Beacon Hill Interiors accepts new residential clients selectively.
            Reach out to begin the conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
            style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-white)", color: "var(--bhi-charcoal)" }}
          >
            Request a Proposal
          </Link>
        </div>
      </section>
    </>
  );
}
