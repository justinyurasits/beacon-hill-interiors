import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Interior Construction & Refresh — Beacon Hill Interiors",
  description:
    "Painting, routine repairs, drywall and finish carpentry, kitchen and bath refresh, and ongoing interior maintenance for Boston properties. Licensed. Done correctly the first time.",
};

const workItems = [
  "Interior painting — rooms, ceilings, trim, millwork, doors",
  "Paint touch-up programs for maintained residences",
  "Routine repairs — the small items that accumulate in a lived-in or high-use space",
  "Drywall repair — patching, skim coating, and a seamless repaint",
  "Finish carpentry — trim, casing, baseboard, doors, shelving, and built-in adjustments",
  "Kitchen cosmetic refresh — cabinet painting, hardware, backsplash",
  "Bath refresh — tile, fixtures, caulking, accessories",
  "Ongoing interior maintenance — scheduled upkeep for residences, rentals, and managed properties",
  "Pre-sale preparation — full interior refresh before listing",
  "Buyer reset — cleaning, painting, and refresh after closing",
  "Tenant turnover — full unit refresh between leases",
];

export default function ConstructionPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center pt-[72px]"
        style={{ minHeight: "max(480px, 65vh)" }}
      >
        <Image src="/images/construction-work.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(44,44,44,0.68)" }} />
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-6"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-gold)" }}
          >
            03 — Interior Construction & Refresh
          </p>
          <h1
            className="text-[36px] md:text-[52px] uppercase tracking-[0.06em] leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            A Contractor Who Finishes What Others Start.
          </h1>
          <p
            className="text-[17px] leading-[1.85] max-w-xl"
            style={{ fontFamily: "var(--bhi-font)", color: "rgba(255,255,255,0.85)" }}
          >
            Interior painting, routine repairs, drywall and finish carpentry, kitchen
            and bath refresh, and ongoing interior maintenance — for clients who need
            it done correctly the first time and don&rsquo;t want to manage it
            themselves.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--bhi-linen)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <SectionLabel className="mb-6">Interior Construction & Refresh</SectionLabel>
              <h2
                className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
              >
                The work that falls between cleaning and full renovation.
              </h2>
              <GoldRule className="mb-8" />
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                BHI handles the interior work that most service companies don&rsquo;t
                touch and most general contractors price too high. Painting a condo
                before a sale. Refreshing a kitchen without gutting it. Replacing
                hardware, updating fixtures, patching and repainting after tenants.
                Patching drywall after a move. Re-hanging a door that hasn&rsquo;t closed
                right in years. Touching up millwork on a brownstone that hasn&rsquo;t
                been touched in five.
              </p>
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                It doesn&rsquo;t have to be one-off. For owners and managers who want a
                property kept right, BHI offers ongoing interior maintenance — routine
                repairs, touch-ups, and finish work on a schedule, so small issues
                never become visible ones.
              </p>
              <p
                className="text-[16px] leading-[1.85]"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                This is selective, interior-focused construction and maintenance work —
                done at a professional standard with a licensed team.
              </p>
            </div>

            <div className="flex-1">
              <p
                className="text-[11px] uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
              >
                What We Handle
              </p>
              <ul className="flex flex-col gap-4">
                {workItems.map((item) => (
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

      {/* WHO CALLS US */}
      <section className="py-24 md:py-32 bg-bhi-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-6">Who Calls Us for This</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "Sellers & Their Agents",
                body: "A home that looks clean, fresh, and finished photographs and shows better. We handle the interior prep before the listing — painting, touch-ups, punch list items, and final detail.",
              },
              {
                title: "Buyers",
                body: "After closing, before furniture arrives. We make the home feel cared for, not inherited.",
              },
              {
                title: "Property Owners & Investors",
                body: "Between tenants, after renovations, or when a unit simply needs to be brought back to standard — or kept there with scheduled maintenance.",
              },
              {
                title: "Developers & GCs",
                body: "Interior finish work, paint corrections, and cosmetic completion when the project needs a professional eye on the details.",
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

      {/* THE LICENSE MATTERS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#252525" }}>
        <div className="max-w-6xl mx-auto px-8 max-w-3xl">
          <SectionLabel className="mb-6" style={{ color: "var(--bhi-gold)" }}>
            The License Matters
          </SectionLabel>
          <h2
            className="text-[26px] md:text-[34px] leading-[1.2] mb-8"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-white)" }}
          >
            We understand interior work at a level most service providers don&rsquo;t.
          </h2>
          <GoldRule className="mb-8" style={{ opacity: 0.3 }} />
          <p
            className="text-[16px] leading-[1.85] mb-6"
            style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
          >
            Justin Yurasits holds a Massachusetts Licensed Construction Supervisor
            license and a General Contractor license. That background shapes how we
            approach interior work: with an understanding of surfaces, building
            systems, and construction method that goes well beyond what a painting
            company or cleaning crew brings.
          </p>
          <p
            className="text-[16px] leading-[1.85]"
            style={{ fontFamily: "var(--bhi-font)", color: "#9A9490" }}
          >
            We also know when something requires a licensed trade — electrical,
            plumbing, structural — and we won&rsquo;t pretend otherwise.
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
            Have an interior that needs attention?
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
