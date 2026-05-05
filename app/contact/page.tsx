"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  CONTACT_SUBJECTS,
  CONTACT_DISTRICTS,
  CONTACT_INFO,
  CONTACT_TRUST_ITEMS,
  DISTRICT_CONTACTS,
  SITE_STATS,
} from "@/lib/siteData";

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", district: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    setError("");

    if (!form.name || !form.phone || !form.message || !subject) {
      setError("Please fill in all required fields and select a subject.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, ...form }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const heroChips = ["24hr Response", ...SITE_STATS.map((s) => `${s.num} ${s.label}`)];

  return (
    <>
      <Navbar />

      <main className="ct-root">

        {/* ── HERO ── */}
        <section className="ct-hero">
          <div className="ct-hero-grid" aria-hidden="true" />
          <div className="ct-hero-glow"  aria-hidden="true" />
          <div className="ct-hero-wm"    aria-hidden="true">REACH</div>

          <div className="ct-hero-inner">
            <div className="ct-eyebrow">
              <span className="ct-eyebrow-pip" />
              Get In Touch
            </div>

            <h1 className="ct-hero-title">
              Talk to <em>TNCNA</em>
            </h1>

            <p className="ct-hero-sub">
              Whether you&apos;re looking to join the association, collaborate on a project,
              or speak with your regional chapter — we&apos;re here. A TNCNA representative
              will respond within 24 hours.
            </p>

            <div className="ct-hero-chips">
              {heroChips.map((t) => (
                <div key={t} className="ct-chip">
                  <span className="ct-chip-dot" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ct-divider" aria-hidden="true" />

        {/* ── MAIN CONTENT ── */}
        <section className="ct-section">
          <div className="ct-container">
            <div className="ct-grid">

              {/* LEFT — CONTACT INFO */}
              <div className="ct-info-col">

                <div className="ct-info-eyebrow">
                  <span className="ct-info-pip" />
                  Contact Information
                </div>

                <h2 className="ct-info-title">
                  We&apos;re present <em>statewide.</em>
                </h2>

                <p className="ct-info-body">
                  TNCNA operates across India with dedicated representatives in every
                  chapter district. Reach us through any of the channels below — or write
                  directly to your district&apos;s chapter head.
                </p>

                <div className="ct-contact-cards">
                  {[
                    {
                      label: "Email",
                      value: CONTACT_INFO.email,
                      href: `mailto:${CONTACT_INFO.email}`,
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Phone",
                      value: CONTACT_INFO.phone,
                      href: undefined,
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Headquarters",
                      value: CONTACT_INFO.headquarters,
                      href: undefined,
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <div key={item.label} className="ct-contact-card">
                      <div className="ct-contact-icon">{item.icon}</div>
                      <div>
                        <div className="ct-contact-label">{item.label}</div>
                        <div className="ct-contact-value">
                          {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="ct-district-block">
                  <div className="ct-district-head">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(56,224,210,.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                    </svg>
                    <span className="ct-district-head-label">District Chapter Contacts</span>
                  </div>
                  <div className="ct-district-grid">
                    {DISTRICT_CONTACTS.map((d) => (
                      <div key={d.city} className="ct-district-row">
                        <div className="ct-district-city">{d.city}</div>
                        <div className="ct-district-num">{d.phone}</div>
                      </div>
                    ))}
                  </div>
                </div> */}

                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-whatsapp"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>

              </div>

              {/* RIGHT — FORM */}
              <div className="ct-form-wrap">
                {submitted ? (
                  <div className="ct-success">
                    <div className="ct-success-icon">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Our team will get back to you within 24 hours. Thank you for reaching out to TNCNA.</p>
                  </div>
                ) : (
                  <div className="ct-form-inner">

                    <div className="ct-form-header">
                      <div className="ct-form-header-row">
                        <h3 className="ct-form-title">Send a Message</h3>
                        <span className="ct-form-badge">We reply in 24hrs</span>
                      </div>
                      <p className="ct-form-desc">
                        Tell us about your query and we&apos;ll connect you with the right person.
                      </p>
                    </div>

                    <div className="ct-field" style={{ marginBottom: "16px" }}>
                      <label>Subject <span>*</span></label>
                      <div className="ct-subject-row">
                        {CONTACT_SUBJECTS.map((s) => (
                          <button
                            key={s}
                            type="button"
                            className={`ct-subject-pill${subject === s ? " active" : ""}`}
                            onClick={() => setSubject(s)}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="ct-field-row">
                      <div className="ct-field">
                        <label htmlFor="ctName">Full Name <span>*</span></label>
                        <input id="ctName" name="name" type="text" placeholder="e.g. Arun Kumar" required onChange={handleChange} />
                      </div>
                      <div className="ct-field">
                        <label htmlFor="ctPhone">Phone Number <span>*</span></label>
                        <input id="ctPhone" name="phone" type="tel" placeholder="+91 98765 43210" required onChange={handleChange} />
                      </div>
                    </div>

                    <div className="ct-field-row">
                      <div className="ct-field">
                        <label htmlFor="ctEmail">Email Address</label>
                        <input id="ctEmail" name="email" type="email" placeholder="you@example.com" onChange={handleChange} />
                      </div>
                      <div className="ct-field">
                        <label htmlFor="ctDistrict">District / Chapter</label>
                        <select id="ctDistrict" name="district" onChange={handleChange}>
                          <option value="">Select district</option>
                          {CONTACT_DISTRICTS.map((d) => (
                            <option key={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="ct-field">
                      <label htmlFor="ctMessage">Your Message <span>*</span></label>
                      <textarea
                        id="ctMessage"
                        name="message"
                        placeholder="Tell us how we can help..."
                        rows={4}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Inline error */}
                    {error && (
                      <p className="ct-form-error" role="alert">{error}</p>
                    )}

                    <button
                      type="button"
                      className={`ct-submit ${loading ? "ct-submit--loading" : ""}`}
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="ct-submit-spinner" />
                      ) : (
                        <>
                          Send Message
                          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="ct-footnote">Your information is confidential and used only to respond to your query.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <div className="ct-trust">
          <div className="ct-trust-inner">
            <p className="ct-trust-text">
              Trusted by {SITE_STATS.find((s) => s.label === "Total Members")?.num ?? "300+"} construction
              professionals across Tamil Nadu
            </p>
            <div className="ct-trust-items">
              {CONTACT_TRUST_ITEMS.map((t) => (
                <div key={t} className="ct-trust-item">
                  <span className="ct-trust-check">✔</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}