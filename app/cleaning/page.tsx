import type { Metadata } from "next";
import Link from "next/link";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Interior Care & Cleaning — Beacon Hill Interiors",
  description:
    "Premium recurring cleaning for Boston condos, townhomes, brownstones, and managed buildings. A consistent team. The same standard. Every visit.",
};

const whatWeHandle = [
  "Weekly and biweekly recurring cleaning",
  "Initial deep cleaning and home reset",
  "Kitchen and bathroom detailing",
  "Dusting, floors, trim, surfaces, and fixtures",
  "Careful handling of premium finishes and furnishings",
  "Seasonal resets",
  "Move-in and move-out cleaning",
  "Post-construction cleaning when needed",
];

const bestFor = [
  "Busy professionals and homeowners",
  "Boston, Cambridge, Brookline, Newton, Somerville, Medford, Wellesley, and the inner suburbs",
  "Condos, townhomes, brownstones, and managed buildings",
  "Clients who value privacy, trust, and consistency",
  "Second-home and pied-à-terre owners",
  "Anyone frustrated by unreliable or rotating cleaning services",
];

const steps = [
  {
    number: "01",
    title: "Walkthrough",
    body: "Every relationship begins with a personal visit to understand the home, the standard, and the schedule.",
  },
  {
    number: "02",
    title: "Initial Deep Clean",
    body: "Before recurring service begins, we complete a thorough reset of the home to establish the baseline.",
  },
  {
    number: "03",
    title: "Recurring Care",
    body: "A consistent team, the same standard, and professionally managed cleaning on your schedule.",
  },
];

export default function CleaningPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="bg-bhi-white pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-8 pt-16">
          <SectionLabel className="mb-6">Interior Care &amp; Cleaning</SectionLabel>
          <h1
            className="text-[32px] md:text-[46px] uppercase tracking-[0.06em] leading-[1.15] max-w-3xl mb-6"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            Premium recurring cleaning for Boston residences.
          </h1>
          <p
            className="text-[20px] italic leading-[1.6] mb-8"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)", maxWidth: "560px" }}
          >
            A consistent team. The same standard. Every visit.
          </p>
          <GoldRule className="max-w-xs" />
        </div>
      </section>

      {/* ── BODY COPY ────────────────────────────────────────────────── */}
      <section className="bg-bhi-white pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl flex flex-col gap-6">
            <p
              className="text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              A clean home should feel calm, cared for, and consistently maintained
              — without you having to manage the details.
            </p>
            <p
              className="text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Beacon Hill Interiors provides premium recurring cleaning for
              Boston-area condos, townhomes, brownstones, and managed buildings. Our
              focus is discretion, consistency, careful attention to finishes, and
              clear communication — for clients who expect more than a rotating,
              transactional cleaning service.
            </p>
            <p
              className="text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              Every recurring relationship begins with a walkthrough so we understand
              the home, expectations, access requirements, schedule, and the standard
              required.
            </p>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN: WHAT WE HANDLE / BEST FOR ────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left: What We Handle */}
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
              >
                What We Handle
              </p>
              <GoldRule className="mb-8" />
              <ul className="flex flex-col gap-4">
                {whatWeHandle.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[16px] leading-[1.75]"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                  >
                    <span
                      className="shrink-0 mt-[0.2em]"
                      style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)", fontSize: "14px", lineHeight: 1.6 }}
                      aria-hidden="true"
                    >—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Best For */}
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
              >
                Best For
              </p>
              <GoldRule className="mb-8" />
              <ul className="flex flex-col gap-4">
                {bestFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[16px] leading-[1.75]"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                  >
                    <span
                      className="shrink-0 mt-[0.2em]"
                      style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)", fontSize: "14px", lineHeight: 1.6 }}
                      aria-hidden="true"
                    >—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT STARTS ────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-12">How It Starts</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {steps.map((step) => (
              <div key={step.number}>
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-4"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                >
                  {step.number}
                </p>
                <GoldRule className="mb-5" />
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
                >
                  {step.title}
                </p>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────────── */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center">
          <GoldRule className="w-full max-w-xs mb-10" />
          <p
            className="text-[20px] md:text-[26px] italic leading-[1.6]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)", maxWidth: "640px" }}
          >
            &ldquo;We are built for clients who want the same standard every visit.&rdquo;
          </p>
          <GoldRule className="w-full max-w-xs mt-10" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Get In Touch</SectionLabel>
            <h2
              className="text-[28px] md:text-[40px] uppercase tracking-[0.06em] leading-[1.2] mb-8"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
            >
              Inquire About Recurring Interior Care
            </h2>
            <GoldRule className="mb-8" />
            <p
              className="text-[16px] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
            >
              We maintain a limited recurring client list to preserve consistency,
              quality, and accountability. Every relationship begins with a personal
              walkthrough.
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
              Inquire About Recurring Care
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
