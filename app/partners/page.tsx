import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Partners — Beacon Hill Interiors",
  description:
    "Beacon Hill Interiors works with realtors, designers, contractors, and builders who need clean, discreet, detail-driven support before listing, handoff, or move-in.",
};

export default function PartnersPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="bg-bhi-white pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-8 pt-16">
          <SectionLabel className="mb-6">Partners</SectionLabel>
          <h1
            className="text-[32px] md:text-[42px] uppercase tracking-[0.06em] leading-[1.2] max-w-3xl mb-6"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            For Realtors, Designers, Contractors &amp; Builders
          </h1>
          <GoldRule className="max-w-xs" />
          <p
            className="text-[17px] leading-[1.85] mt-8 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            Beacon Hill Interiors works with trusted referral and trade partners who
            need clean, discreet, detail-driven support before listing, staging,
            closing, installation, handoff, or move-in.
          </p>
        </div>
      </section>

      {/* ── 01 FOR REALTORS & LISTING AGENTS ─────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-3xl">
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-6"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
            >
              01
            </p>
            <SectionLabel className="mb-6">For Realtors &amp; Listing Agents</SectionLabel>
            <h2
              className="text-[28px] md:text-[38px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Pre-sale refresh and move-in readiness.
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[17px] leading-[1.85] mb-12"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Beacon Hill Interiors helps agents, sellers, and buyers prepare homes
              before photos, staging, listing launch, closing, or move-in. We handle
              the cleaning, painting, touch-ups, punch list items, vendor coordination,
              and final prep that make a property feel clean, finished, and ready —
              without the agent or client managing multiple vendors.
            </p>

            <div
              className="mb-12"
              style={{ borderTop: "0.5px solid var(--bhi-sand)", paddingTop: "32px" }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
              >
                Best For
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                {[
                  "Pre-sale refresh before photos or staging",
                  "Listing preparation before launch",
                  "Open house readiness",
                  "Buyer move-in reset after closing",
                  "Paint touch-ups and minor interior repairs",
                  "Punch list completion",
                  "Final detailing before handoff",
                ].map((item) => (
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

            <p
              className="text-[17px] italic leading-[1.65] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              We help homes feel clean, finished, and ready when timing and
              presentation matter.
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
              Inquire About Availability
            </Link>
          </div>
        </div>
      </section>

      {/* ── 02 FOR INTERIOR DESIGNERS ────────────────────────────────── */}
      <section className="bg-bhi-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-3xl">
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-6"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
            >
              02
            </p>
            <SectionLabel className="mb-6">For Interior Designers</SectionLabel>
            <h2
              className="text-[28px] md:text-[38px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Support that protects the finished work.
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[17px] leading-[1.85] mb-6"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Beacon Hill Interiors provides discreet closeout and ongoing care
              support for interior designers and their clients. We help when a space
              needs to be cleaned, touched up, adjusted, protected, or quietly brought
              across the finish line after installation.
            </p>
            <p
              className="text-[17px] leading-[1.85] mb-12"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              From final detailing and paint touch-ups to punch list completion, vendor
              coordination, and ongoing interior care, we work as a calm, professional
              extension of the designer&rsquo;s standard.
            </p>

            <div
              className="mb-12"
              style={{ borderTop: "0.5px solid var(--bhi-sand)", paddingTop: "32px" }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
              >
                Best For
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                {[
                  "Post-install cleaning and final detailing",
                  "Paint touch-ups and finish corrections",
                  "Punch list completion",
                  "Vendor access and coordination",
                  "Client handoff preparation",
                  "Ongoing care for finished interiors",
                ].map((item) => (
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

            <p
              className="text-[18px] italic leading-[1.65]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              &ldquo;We help preserve the quality of the finished space after the design
              work is complete.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 FOR CONTRACTORS & BUILDERS ────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-3xl">
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-6"
              style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
            >
              03
            </p>
            <SectionLabel className="mb-6">For Contractors &amp; Builders</SectionLabel>
            <h2
              className="text-[28px] md:text-[38px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Closeout support for the final 5%.
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[17px] leading-[1.85] mb-6"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Beacon Hill Interiors supports contractors and builders when a project
              needs final cleaning, touch-ups, punch list help, and turnover
              preparation before client handoff. We are especially useful on
              high-finish interiors where the work is mostly complete, but the space
              still needs to feel clean, finished, and ready.
            </p>
            <p
              className="text-[17px] leading-[1.85] mb-12"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Our role is to help reduce friction at closeout, protect the client
              experience, and handle the details that can otherwise drag out the end
              of a project.
            </p>

            <div
              className="mb-12"
              style={{ borderTop: "0.5px solid var(--bhi-sand)", paddingTop: "32px" }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
              >
                Best For
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                {[
                  "Post-construction cleaning",
                  "Paint touch-ups and corrections",
                  "Punch list completion",
                  "Final detailing before handoff",
                  "Turnover preparation",
                  "Light finish repairs",
                  "Owner move-in readiness",
                ].map((item) => (
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

            <p
              className="text-[18px] italic leading-[1.65]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              &ldquo;We help get high-finish interiors across the finish line cleanly.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Work With Us</SectionLabel>
            <h2
              className="text-[28px] md:text-[40px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Inquire About Availability
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[16px] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              To discuss a referral relationship or an upcoming project, reach us
              directly. Every inquiry is reviewed personally.
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
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
