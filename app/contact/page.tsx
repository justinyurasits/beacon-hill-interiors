"use client";

import { useForm, ValidationError } from "@formspree/react";
import GoldRule from "@/components/GoldRule";
import SectionLabel from "@/components/SectionLabel";

const inputBase: React.CSSProperties = {
  width: "100%",
  backgroundColor: "transparent",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "0.5px solid var(--bhi-sand)",
  borderRadius: 0,
  padding: "10px 0",
  fontFamily: "var(--bhi-font)",
  fontSize: "16px",
  color: "var(--bhi-charcoal)",
  outline: "none",
  appearance: "none",
};

const labelBase: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--bhi-font-sans)",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: "var(--bhi-warm-gray)",
  marginBottom: "8px",
};


export default function ContactPage() {
  const [state, handleSubmit] = useForm("xdarwyzd");

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="bg-bhi-white pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-8 pt-16">
          <SectionLabel className="mb-6">Get In Touch</SectionLabel>
          <h1
            className="text-[32px] md:text-[42px] uppercase tracking-[0.06em] leading-[1.2] max-w-2xl"
            style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
          >
            Inquire About Availability
          </h1>
        </div>
      </section>

      {/* ── FORM SECTION ─────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--bhi-linen)" }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left: copy + credentials */}
            <div>
              <GoldRule className="mb-8" />
              <p
                className="text-[16px] leading-[1.85] mb-6"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                Beacon Hill Interiors accepts new client relationships selectively.
                We work with homeowners whose residences require a consistent,
                professional standard of care — and who want that handled without
                their involvement.
              </p>
              <p
                className="text-[16px] leading-[1.85] mb-8"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                To explore whether Beacon Hill Interiors is the right fit for your
                home, please complete the form below. Every inquiry is reviewed
                personally and we respond within one business day.
              </p>
              <a
                href="tel:+17812278472"
                className="inline-block text-[15px] mb-12 transition-opacity hover:opacity-70"
                style={{ fontFamily: "var(--bhi-font-sans)", color: "var(--bhi-charcoal)" }}
              >
                (781) 227-8472
              </a>

              {/* Credentials */}
              <div className="mb-10">
                <GoldRule className="mb-6" />
                <p
                  className="text-[16px] leading-[1.8] mb-4 italic"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                >
                  The details are handled before we arrive.
                </p>
                <p
                  className="text-[15px] leading-[1.75] italic"
                  style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                >
                  Licensed construction background. Fully insured. Workers&rsquo; comp
                  certified. Building-compliant for Boston&rsquo;s managed properties.
                </p>
                <GoldRule className="mt-6" />
              </div>

              <p
                className="text-[14px] leading-[1.75] italic"
                style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
              >
                Every inquiry is reviewed personally by Justin Yurasits.
              </p>
            </div>

            {/* Right: form or confirmation */}
            <div>
              {state.succeeded ? (
                <div className="flex flex-col items-center text-center py-12">
                  <GoldRule className="w-16 mb-10" />
                  <p
                    className="text-[18px] md:text-[22px] leading-[1.75] italic"
                    style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-charcoal)" }}
                  >
                    Thank you for reaching out. We&rsquo;ll be in touch within one
                    business day.
                  </p>
                  <GoldRule className="w-16 mt-10" />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" style={labelBase}>Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      style={inputBase}
                    />
                    <ValidationError field="name" prefix="Name" errors={state.errors} className="text-xs mt-2" style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)" }} />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" style={labelBase}>Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      style={inputBase}
                    />
                  </div>

                  {/* Property */}
                  <div>
                    <label htmlFor="property" style={labelBase}>Property Address or Neighborhood *</label>
                    <input
                      id="property"
                      type="text"
                      name="property"
                      required
                      style={inputBase}
                    />
                    <ValidationError field="property" prefix="Property" errors={state.errors} className="text-xs mt-2" style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)" }} />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" style={labelBase}>Service Interest *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      style={{ ...inputBase, cursor: "pointer", paddingRight: "24px" }}
                    >
                      <option value="" disabled style={{ color: "var(--bhi-warm-gray)" }}>Select a service</option>
                      <option value="Recurring Interior Care & Cleaning">Recurring Interior Care &amp; Cleaning</option>
                      <option value="Deep Cleaning / Initial Reset">Deep Cleaning / Initial Reset</option>
                      <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning</option>
                      <option value="Interior Painting & Refresh">Interior Painting &amp; Refresh</option>
                      <option value="Private Home Services">Private Home Services</option>
                      <option value="Pre-Sale Refresh / Move-In Readiness">Pre-Sale Refresh / Move-In Readiness</option>
                      <option value="Punch List / Closeout Support">Punch List / Closeout Support</option>
                      <option value="Selective Interior Improvements">Selective Interior Improvements</option>
                      <option value="Other / Not Sure">Other / Not Sure</option>
                    </select>
                    <ValidationError field="service" prefix="Service" errors={state.errors} className="text-xs mt-2" style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)" }} />
                  </div>

                  {/* About your home */}
                  <div>
                    <label htmlFor="about" style={labelBase}>Tell us about your home *</label>
                    <textarea
                      id="about"
                      name="about"
                      required
                      rows={5}
                      style={{
                        ...inputBase,
                        borderBottom: "none",
                        border: "0.5px solid var(--bhi-sand)",
                        padding: "12px",
                        resize: "vertical",
                        lineHeight: "1.7",
                      }}
                    />
                    <ValidationError field="about" prefix="This field" errors={state.errors} className="text-xs mt-2" style={{ color: "var(--bhi-gold)", fontFamily: "var(--bhi-font-sans)" }} />
                  </div>

                  {/* Referral */}
                  <div>
                    <label htmlFor="referral" style={labelBase}>How did you hear about us?</label>
                    <input
                      id="referral"
                      type="text"
                      name="referral"
                      style={inputBase}
                    />
                  </div>

                  {/* Global error */}
                  {state.errors && Object.keys(state.errors).length > 0 && !state.succeeded && (
                    <p
                      className="text-[13px] leading-[1.7]"
                      style={{ fontFamily: "var(--bhi-font)", color: "var(--bhi-warm-gray)" }}
                    >
                      Something went wrong. Please try again or email us directly at{" "}
                      <a
                        href="mailto:info@beaconhillinteriors.com"
                        style={{ color: "var(--bhi-gold)" }}
                      >
                        info@beaconhillinteriors.com
                      </a>
                    </p>
                  )}

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-opacity hover:opacity-80 disabled:opacity-50"
                      style={{
                        fontFamily: "var(--bhi-font-sans)",
                        backgroundColor: "var(--bhi-charcoal)",
                        color: "var(--bhi-white)",
                        border: "none",
                        cursor: state.submitting ? "wait" : "pointer",
                      }}
                    >
                      {state.submitting ? "Sending…" : "Inquire About Availability"}
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
