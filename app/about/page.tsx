import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About — Beacon Hill Interiors",
  description:
    "A private home services firm for Boston's most discerning residences. Small by design. Exceptional by standard.",
};

const principles = [
  {
    title: "Be Absurdly Reliable",
    body: "Show up when we say we will. Start when we say we'll start. Finish when we say we'll finish. Follow through on every commitment, no matter how small.",
  },
  {
    title: "Zero Drama, Always",
    body: "Problems are solved, not escalated. When things go sideways — and they will — we respond with calm, competence, and a plan.",
  },
  {
    title: "The Standard Is the Standard",
    body: "The finish is the work. The last five percent gets the same attention as the first ninety-five. If it doesn't pass our inspection, it doesn't pass.",
  },
  {
    title: "Respect the Home",
    body: "We move through every residence as if it were our own. Carefully, deliberately, and with full awareness of what we're trusted with.",
  },
  {
    title: "Protect the Building",
    body: "We understand managed buildings. Every job begins and ends with the protocols, protection, and access procedures that Boston's finest properties require.",
  },
  {
    title: "Leave It Better Than We Found It",
    body: "Not just cleaner, not just painted. Better. That is the measure we hold every engagement to.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── LOGO HERO MOMENT ─────────────────────────────────────────── */}
      <section className="bg-bhi-white pt-[72px]">
        <div className="flex flex-col items-center px-8 pt-20 pb-16">
          <Logo height={96} className="text-bhi-charcoal mb-14" />

          <SectionLabel className="mb-7 text-center">
            About Beacon Hill Interiors
          </SectionLabel>

          <h1
            className="text-[32px] md:text-[46px] lg:text-[54px] uppercase tracking-[0.07em] leading-[1.15] text-center max-w-3xl mb-12"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            Small by design. Exceptional by standard.
          </h1>

          <GoldRule className="w-full max-w-lg" />
        </div>
      </section>

      {/* ── BODY COPY ────────────────────────────────────────────────── */}
      <section className="bg-bhi-white pt-12 pb-24">
        <div
          className="mx-auto px-8 flex flex-col gap-6"
          style={{ maxWidth: "640px" }}
        >
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            Beacon Hill Interiors is a private interior services firm serving
            discerning homeowners and residences across Greater Boston.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            We provide premium interior care, cleaning, painting, and private home
            services for clients who value discretion, cleanliness, and calm
            execution.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            Our work is built around a simple idea: a well-run home should feel
            effortless. The space should be clean, protected, maintained, and
            thoughtfully managed by people who understand the standards of refined
            residential environments.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            Beacon Hill Interiors was founded by Justin Yurasits, a Massachusetts
            Licensed Construction Supervisor and licensed General Contractor with
            hands-on experience in high-end residential interiors, luxury
            condominiums, brownstones, high-rises, and complex urban buildings.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            Justin has delivered luxury interior renovations at some of Boston&rsquo;s
            most distinguished residential addresses — including One Dalton Street,
            100 Sudbury, The Intercontinental Boston, The Clarendon, and historic
            brownstones along Beacon Street and Commonwealth Avenue in Beacon Hill
            and Back Bay.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            That work built a deep understanding of what these buildings require:
            the management protocols, the standards of fit and finish, the service
            entrance requirements, and the level of care their residents expect.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            BHI didn&rsquo;t learn to work in Boston&rsquo;s finest buildings. It was built
            there. That background shapes everything about how we operate: the
            standard we hold our work to, the way we move through managed
            buildings, and the professional eye we bring to every home we care for.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            We are not a volume-based service company. We are intentionally small,
            selective, and relationship-driven. Every engagement begins with
            understanding the home, the client&rsquo;s expectations, and the level of
            care required.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            From recurring cleaning and interior painting to vendor coordination,
            seasonal refreshes, and private home services, our role is to bring
            calm, disciplined execution to the details that make a home feel truly
            cared for.
          </p>
          <p
            className="text-[16px] leading-[1.95]"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
          >
            Clients choose Beacon Hill Interiors because they want confidence without
            supervision. They want clear communication, clean work, consistent
            standards, and a team that respects the home as much as they do.
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div
          className="mx-auto px-8 flex flex-col items-center"
          style={{ maxWidth: "820px" }}
        >
          <GoldRule className="w-full mb-12" />
          <p
            className="text-[22px] md:text-[30px] lg:text-[34px] italic leading-[1.55] text-center"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            &ldquo;A well-maintained home is not just clean. It is protected, organized,
            cared for, and quietly under control. That is the standard we work to.&rdquo;
          </p>
          <p
            className="mt-8 text-[13px] uppercase tracking-[0.2em] text-center"
            style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-warm-gray)" }}
          >
            &mdash; Justin Yurasits, Principal
          </p>
          <GoldRule className="w-full mt-12" />
        </div>
      </section>

      {/* ── ABOUT IMAGE ──────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-16">
        <div className="mx-auto px-8" style={{ maxWidth: "680px" }}>
          <div
            className="relative w-full"
            style={{
              aspectRatio: "3 / 2",
              border: "1px solid var(--bhi-sand)",
            }}
          >
            <Image
              src="/images/about.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ───────────────────────────────────────────────── */}
      <section className="bg-bhi-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel className="mb-14">How We Work</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {principles.map((p) => (
              <div key={p.title}>
                <GoldRule className="mb-5" />
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-4"
                  style={{
                    fontFamily: "var(--bhi-font-sans)",
                    color: "var(--bhi-gold)",
                  }}
                >
                  {p.title}
                </p>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{
                    fontFamily: "var(--bhi-font)",
                    color: "var(--bhi-warm-gray)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6">Inquire About Availability</SectionLabel>
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
              Beacon Hill Interiors accepts new client relationships selectively.
              To explore whether we might be a good fit for your home, please
              complete the form below.
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
    </>
  );
}
