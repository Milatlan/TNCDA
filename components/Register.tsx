"use client";

import { useState } from "react";
import { PROFESSIONS, MEMBER_TRUST } from "@/lib/siteData";

const TRUST_POINTS = [
  { icon: "✔", text: "Verified professional network" },
  { icon: "✔", text: "Direct business leads, no commission" },
  { icon: "✔", text: "Statewide chapter exposure" },
  { icon: "✔", text: "Policy advocacy & legal guidance" },
];

export default function Register() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", profession: "",
    company: "", area: "", agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.agree) {
      setError("Please accept the terms & privacy policy.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:       form.name,
          phone:      form.phone,
          email:      form.email,
          profession: form.profession,
          company:    form.company,
          area:       form.area,
        }),
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

  return (
    <section id="register" className="register-section">
      <div className="register-bg" aria-hidden="true" />

      <div className="register-container">

        {/* LEFT */}
        <div className="register-content">
          <div className="register-eyebrow">
            <span className="register-eyebrow-pip" />
            Join TNCNA
          </div>

          <h2 className="register-title">
            Become a Member.
            <br />
            <em>Start Growing Today.</em>
          </h2>

          <p className="register-text">
            Join India&apos;s most trusted construction network. Unlock real business
            opportunities, meaningful connections, and sustained growth across all 5+ districts.
          </p>

          <div className="register-trust-list">
            {TRUST_POINTS.map((p, i) => (
              <div key={i} className="register-trust-item">
                <span className="register-trust-check">{p.icon}</span>
                <span>{p.text}</span>
              </div>
            ))}
          </div>

          {/* Member proof — driven by siteData */}
          <div className="register-member-proof">
            <div className="register-proof-avatars">
              {MEMBER_TRUST.avatars.map((l, i) => (
                <div key={i} className="register-proof-avatar">{l}</div>
              ))}
            </div>
            <div>
              <div className="register-proof-count">{MEMBER_TRUST.total} members</div>
              <div className="register-proof-sub">already growing with TNCNA</div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="register-form-wrap">
          {submitted ? (
            <div className="register-success">
              <div className="register-success-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Application Received!</h3>
              <p>Our team will contact you within 24 hours to complete your membership onboarding.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="register-form">
              <div className="register-form-header">
                <h3>Member Application</h3>
                <span className="register-form-badge">Free to Apply</span>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="reg-name">Full Name <span>*</span></label>
                  <input id="reg-name" type="text" name="name" placeholder="e.g. Arun Kumar" required onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="reg-phone">Phone Number <span>*</span></label>
                  <input id="reg-phone" type="tel" name="phone" placeholder="+91 98765 43210" required onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="reg-email">Email Address</label>
                  <input id="reg-email" type="email" name="email" placeholder="you@example.com" onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="reg-profession">Profession <span>*</span></label>
                  {/* Driven by PROFESSIONS from siteData */}
                  <select id="reg-profession" name="profession" required onChange={handleChange}>
                    <option value="">Select your trade</option>
                    {PROFESSIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="reg-company">Company / Business Name</label>
                  <input id="reg-company" type="text" name="company" placeholder="Your company name" onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="reg-area">District / Area <span>*</span></label>
                  <input id="reg-area" type="text" name="area" placeholder="e.g. Chennai, Madurai" required onChange={handleChange} />
                </div>
              </div>

              <label className="form-check">
                <input type="checkbox" name="agree" onChange={handleChange} />
                <span>
                  I agree to TNCNA&apos;s <a href="#">Terms</a> &amp; <a href="#">Privacy Policy</a>
                </span>
              </label>

              {/* Inline error message */}
              {error && (
                <p className="form-error" role="alert">{error}</p>
              )}

              <button
                type="submit"
                className={`form-submit ${loading ? "form-submit--loading" : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="form-submit-spinner" />
                ) : (
                  <>
                    Apply for Membership
                    <svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M4 10h12M11 5l5 5-5 5" />
                    </svg>
                  </>
                )}
              </button>

              <p className="form-footnote">
                No payment required to apply. Our team will reach out within 24 hours.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}