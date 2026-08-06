'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xdarwyzd', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="bg-[#F5F2EE] min-h-screen">

      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="bg-[#2C2C2C] px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#B8956A] text-xs tracking-[0.25em] uppercase mb-4 font-light">
            Beacon Hill Interiors
          </p>
          <h1 className="text-white font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
            Inquire About Availability
          </h1>
          <p className="text-[#C9C0B5] text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            We maintain a limited recurring client list to preserve consistency,
            quality, and accountability. Reach out to begin the conversation.
          </p>
        </div>
      </section>

      {/* ── Form Section ─────────────────────────────────────────── */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">

          {/* Success state */}
          {status === 'success' ? (
            <div className="text-center py-16">
              <div className="w-12 h-px bg-[#B8956A] mx-auto mb-8" />
              <h2 className="font-serif text-[#2C2C2C] text-2xl font-light mb-4">
                Thank you for reaching out.
              </h2>
              <p className="text-[#2C2C2C] text-base font-light leading-relaxed max-w-md mx-auto">
                We have received your inquiry and will be in touch shortly.
              </p>
              <div className="w-12 h-px bg-[#B8956A] mx-auto mt-8" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-[0.15em] uppercase text-[#2C2C2C] font-medium mb-2"
                >
                  Full Name <span className="text-[#B8956A]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white border border-[#C9C0B5] text-[#2C2C2C] placeholder-[#C9C0B5] text-sm font-light focus:outline-none focus:border-[#B8956A] transition-colors duration-200"
                />
              </div>

              {/* Email — NEW FIELD */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.15em] uppercase text-[#2C2C2C] font-medium mb-2"
                >
                  Email Address <span className="text-[#B8956A]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-[#C9C0B5] text-[#2C2C2C] placeholder-[#C9C0B5] text-sm font-light focus:outline-none focus:border-[#B8956A] transition-colors duration-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs tracking-[0.15em] uppercase text-[#2C2C2C] font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(617) 000-0000"
                  className="w-full px-4 py-3 bg-white border border-[#C9C0B5] text-[#2C2C2C] placeholder-[#C9C0B5] text-sm font-light focus:outline-none focus:border-[#B8956A] transition-colors duration-200"
                />
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs tracking-[0.15em] uppercase text-[#2C2C2C] font-medium mb-2"
                >
                  I am inquiring about <span className="text-[#B8956A]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-white border border-[#C9C0B5] text-[#2C2C2C] text-sm font-light focus:outline-none focus:border-[#B8956A] transition-colors duration-200 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B8956A' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    paddingRight: '40px',
                  }}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Recurring Interior Care & Cleaning">Recurring Interior Care &amp; Cleaning</option>
                  <option value="Interior Painting & Refresh">Interior Painting &amp; Refresh</option>
                  <option value="One-Time Interior Cleaning">One-Time Interior Cleaning</option>
                  <option value="Pre-Sale Preparation">Pre-Sale Preparation</option>
                  <option value="Move-In / Move-Out Service">Move-In / Move-Out Service</option>
                  <option value="Private Home Services">Private Home Services</option>
                  <option value="Realtor / Partner Inquiry">Realtor / Partner Inquiry</option>
                  <option value="Interior Designer Inquiry">Interior Designer Inquiry</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.15em] uppercase text-[#2C2C2C] font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your home and what you are looking for."
                  className="w-full px-4 py-3 bg-white border border-[#C9C0B5] text-[#2C2C2C] placeholder-[#C9C0B5] text-sm font-light focus:outline-none focus:border-[#B8956A] transition-colors duration-200 resize-none"
                />
              </div>

              {/* Address (optional — useful context for scoping) */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-xs tracking-[0.15em] uppercase text-[#2C2C2C] font-medium mb-2"
                >
                  Property Address{' '}
                  <span className="text-[#C9C0B5] normal-case tracking-normal font-light">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Boston, MA"
                  className="w-full px-4 py-3 bg-white border border-[#C9C0B5] text-[#2C2C2C] placeholder-[#C9C0B5] text-sm font-light focus:outline-none focus:border-[#B8956A] transition-colors duration-200"
                />
              </div>

              {/* Error state */}
              {status === 'error' && (
                <p className="text-sm text-red-700 font-light">
                  Something went wrong. Please try again or email us directly at{' '}
                  <a
                    href="mailto:info@beaconhillinteriors.com"
                    className="underline underline-offset-2"
                  >
                    info@beaconhillinteriors.com
                  </a>
                  .
                </p>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#2C2C2C] text-white text-xs tracking-[0.25em] uppercase py-4 font-medium hover:bg-[#B8956A] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
                </button>
              </div>

              {/* Confidence line */}
              <p className="text-center text-[#C9C0B5] text-xs font-light tracking-wide pt-2">
                Confidence Without Supervision.
              </p>

            </form>
          )}
        </div>
      </section>

      {/* ── Contact Details Strip ─────────────────────────────────── */}
      <section className="bg-[#2C2C2C] px-6 py-12">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
          <div>
            <p className="text-[#B8956A] text-xs tracking-[0.2em] uppercase mb-2">Phone</p>
            <a
              href="tel:7812278472"
              className="text-white text-sm font-light hover:text-[#B8956A] transition-colors"
            >
              (781) 227-8472
            </a>
          </div>
          <div>
            <p className="text-[#B8956A] text-xs tracking-[0.2em] uppercase mb-2">Email</p>
            <a
              href="mailto:info@beaconhillinteriors.com"
              className="text-white text-sm font-light hover:text-[#B8956A] transition-colors"
            >
              info@beaconhillinteriors.com
            </a>
          </div>
          <div>
            <p className="text-[#B8956A] text-xs tracking-[0.2em] uppercase mb-2">Service Area</p>
            <p className="text-[#C9C0B5] text-sm font-light">Greater Boston, MA</p>
          </div>
        </div>
      </section>

    </main>
  )
}
