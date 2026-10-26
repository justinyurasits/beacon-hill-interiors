import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Commercial & Hospitality Cleaning — Beacon Hill Interiors",
  description:
    "Professional cleaning and interior maintenance for hotels, managed buildings, and commercial spaces across Greater Boston. One accountable contact.",
};

const whereWeWork = [
  "Hotel guest rooms and suites",
  "Hotel lobbies, corridors, and common areas",
  "Managed condominium buildings — common areas, lobbies, corridors",
  "Commercial office interiors",
  "Retail and hospitality spaces",
  "Multi-family residential buildings",
];

export default function CommercialPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center pt-[72px]"
        style={{ minHeight: "max(480px, 65vh)" }}
      >
        <Image src="/images/homeservices.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.68)" }} />
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
          >
            02 — Commercial & Hospitality
          </p>
          <h1
            className="text-[36px] md:text-[52px] uppercase tracking-[0.06em] leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            The Cleaning Standard Your Operation Demands.
          </h1>
          <p
            className="text-[17px] leading-[1.85] max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)" }}
          >
            Beacon Hill Interiors provides professional cleaning and interior
            maintenance for hotels, managed buildings, commercial spaces, and
            hospitality operations across Greater Boston.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <SectionLabel className="mb-6">Commercial & Hospitality Cleaning</SectionLabel>
              <h2
                className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
              >
                Quality-first service at commercial scale.
              </h2>
              <GoldRule className="mb-8" />
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                Commercial cleaning is a different discipline than residential —
                faster turnaround, higher volume, tighter scheduling, and zero
                margin for visible failure.
              </p>
              <p
                className="text-[16px] leading-[1.85]"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                BHI brings the same attention to detail we apply to private
                residences into hotel rooms, lobbies, common areas, and commercial
                interiors. We are not a commodity cleaning operation. We are a
                quality-first service provider that happens to work at commercial
                scale.
              </p>
            </div>

            <div className="flex-1">
              <p
                className="text-[11px] uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
              >
                Where We Work
              </p>
              <ul className="flex flex-col gap-4">
                {whereWeWork.map((item) => (
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

      {/* WHAT WE HANDLE */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">What We Handle</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "Room Turns & Housekeeping",
                body: "Fast, consistent room turns to hotel standard. Beds made properly, baths detailed, floors cleaned, fixtures polished.",
              },
              {
                title: "Common Area Maintenance",
                body: "Lobbies, corridors, elevator cabs, stairwells — cleaned on your schedule, maintained to the standard your residents and guests expect.",
              },
              {
                title: "Deep Cleaning & Refresh",
                body: "Periodic deep cleans between guests or tenants. Carpet extraction, grout and tile detail, full kitchen and bath strip-out.",
              },
              {
                title: "Move-Out & Turnover Cleaning",
                body: "Unit and room turnover cleaning between tenants or guests — fast turnaround, move-in ready standard.",
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

      {/* WHY BHI FOR COMMERCIAL */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-10" style={{ color: "var(--bhi-gold)" }}>
            Why BHI for Commercial
          </SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                title: "One Accountable Contact",
                body: "You work with one person. Not a call center. Not a dispatch queue. When something needs attention, you reach the person responsible.",
              },
              {
                title: "Managed Building Experience",
                body: "We know how Boston's commercial and residential buildings operate — service entrance protocols, COI requirements, elevator scheduling, and building management relationships.",
              },
              {
                title: "Licensed and Fully Insured",
                body: "General liability. Workers' compensation. Certificate of insurance available on request for any building or property manager.",
              },
            ].map((item) => (
              <div key={item.title}>
                <GoldRule className="mb-5" style={{ opacity: 0.3 }} />
                <p
                  className="text-[11px] uppercase tracking-[0.2em] mb-3"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
                >
                  {item.body}
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
            Running a hotel, managing a building, or looking for a reliable
            commercial cleaning partner?
          </h2>
          <GoldRule className="mb-8 max-w-xs w-full" style={{ opacity: 0.4 }} />
          <Link
            href="/contact"
            className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80"
            style={{ fontFamily: "var(--bhi-font-sans)", backgroundColor: "var(--bhi-white)", color: "var(--bhi-charcoal)" }}
          >
            Talk to Us About Your Operation
          </Link>
        </div>
      </section>
    </>
  );
}
