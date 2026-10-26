import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Punch List & Construction Closeout — Beacon Hill Interiors",
  description:
    "Final-phase support for general contractors, developers, and property owners. Post-construction cleaning, punch list completion, and occupancy prep. Boston.",
};

export default function PunchlistPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center pt-[72px]"
        style={{ minHeight: "max(480px, 65vh)" }}
      >
        <Image src="/images/services.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.68)" }} />
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
          >
            04 — Punch List & Construction Closeout
          </p>
          <h1
            className="text-[36px] md:text-[52px] uppercase tracking-[0.06em] leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            We Close Out the Job.
          </h1>
          <p
            className="text-[17px] leading-[1.85] max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)" }}
          >
            Final-phase support for general contractors, developers, and property
            owners — cleaning, punch list completion, finish corrections, and
            handoff prep. Done on schedule, done correctly, done without drama.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">Punch List & Construction Closeout</SectionLabel>
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <h2
                className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
              >
                We work the final phase.
              </h2>
              <GoldRule className="mb-8" />
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                The end of a construction or renovation project is where schedules
                compress, subcontractors disappear, and the work that still needs
                doing gets harder to get done.
              </p>
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                BHI comes in when the building is mostly complete and the GC or
                owner needs someone to handle the remaining interior items — cleaning,
                touch-ups, paint corrections, minor finish work, and final prep before
                occupancy or handoff.
              </p>
              <p
                className="text-[16px] leading-[1.85]"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                We understand how construction sites work, how GCs operate, and what
                &ldquo;done&rdquo; actually means on a project. We don&rsquo;t create problems.
                We close them.
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              {[
                {
                  title: "Post-Construction Cleaning",
                  body: "Construction dust is everywhere — surfaces, inside cabinets, above drop ceilings, in mechanical spaces. We clean to a move-in ready standard, not a broom-sweep standard.",
                },
                {
                  title: "Punch List Completion",
                  body: "Touch-up painting, paint corrections, caulking, hardware installation, minor carpentry repairs, fixture adjustments, and small finish items that fall through the cracks at project end.",
                },
                {
                  title: "Final Detail & Polish",
                  body: "Glass, fixtures, appliances, millwork, and flooring — detailed to a presentation standard before the owner walkthrough or first move-in.",
                },
                {
                  title: "Occupancy Prep",
                  body: "Everything a unit, floor, or building needs to go from “construction complete” to “ready to occupy.”",
                },
              ].map((item) => (
                <div key={item.title}>
                  <GoldRule className="mb-5" />
                  <p
                    className="text-[11px] uppercase tracking-[0.2em] mb-3"
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
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">Who We Work With</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "General Contractors",
                body: "An accountable closeout crew that knows the difference between a spec item and a punch list item — and shows up when the schedule says to.",
              },
              {
                title: "Developers",
                body: "The final phase handled cleanly, without babysitting it. We manage our scope and deliver a finished product.",
              },
              {
                title: "Property Owners & Investors",
                body: "Took delivery of a renovation and found items that weren't finished correctly. We come in, close it out, and get the property ready to occupy.",
              },
              {
                title: "Realtors",
                body: "Listing came out of a renovation with loose ends. Before photography, staging, or market launch, we make sure the interior is ready to be seen.",
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

      {/* THE DIFFERENCE */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6" style={{ color: "var(--bhi-gold)" }}>
            The Difference
          </SectionLabel>
          <h2
            className="text-[26px] md:text-[34px] leading-[1.2] mb-8 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            Most cleaning companies aren&rsquo;t equipped for post-construction. Most GCs
            don&rsquo;t want to mobilize a subcontractor for a short punch list.
          </h2>
          <GoldRule className="mb-8 max-w-xs" style={{ opacity: 0.3 }} />
          <p
            className="text-[16px] leading-[1.85] mb-4"
            style={{ fontFamily: "var(--bhi-font)", color: "#9A9490", maxWidth: "680px" }}
          >
            BHI does both — we clean to a construction standard and we handle the
            minor finish items that remain. Licensed. Insured. Built by a former
            site superintendent who has run high-end work inside Boston&rsquo;s most
            demanding buildings.
          </p>
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
            Have a closeout coming up — or a punch list that needs to get done?
          </h2>
          <GoldRule className="mb-8 max-w-xs w-full" style={{ opacity: 0.4 }} />
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
