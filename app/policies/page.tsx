"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
const policies = [
  {
    id: "01",
    title: "Membership Standards",
    tag: "Integrity",
    body: "All members must furnish accurate professional credentials and maintain impeccable ethical conduct throughout their tenure in the TNCNA network. Falsified information is grounds for immediate review.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Professional Conduct",
    tag: "Ethics",
    body: "Members are expected to communicate with dignity, transact with transparency, and actively protect the reputation and standing of this association in every professional interaction.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Referral Integrity",
    tag: "Trust",
    body: "Every referral must be grounded in genuine professional merit and personal trust. Exploiting the referral network for personal advantage without honest intent may lead to disciplinary action or suspension.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Payment Ethics",
    tag: "Fairness",
    body: "Timely, fair, and agreed-upon payment practices are a foundational expectation of all TNCNA collaborations. Delayed or disputed payments must be resolved through the association's official mediation process.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Compliance & Legal",
    tag: "Governance",
    body: "All members must adhere to Tamil Nadu's prevailing construction regulations, labour laws, and applicable statutory frameworks. TNCNA reserves the right to suspend members found in legal violation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Network Growth Responsibility",
    tag: "Community",
    body: "Each member is a steward of this network. Active participation, quality outputs, and community mentorship are not optional virtues — they are the collective engine of TNCNA's growth and legacy.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];

const principles = [
  { label: "Transparency", value: "Always" },
  { label: "Accountability", value: "At Every Level" },
  { label: "Mediation", value: "Association-Led" },
  { label: "Review Cycle", value: "Annual" },
];

export default function PoliciesPage() {
  return (
    <>
      <Navbar />
      <main className="pol-root">

        {/* ── HERO ── */}
        <section className="pol-hero">
          <div className="pol-hero-grid-texture" />
          <div className="pol-hero-glow" />

          <div className="pol-hero-inner">
            <div className="pol-hero-eyebrow">
              <span className="pol-eyebrow-dash" />
              Governance Framework
              <span className="pol-eyebrow-dash" />
            </div>

            <h1 className="pol-hero-title">
              Policies &amp;<br />
              <em>Guidelines</em>
            </h1>

            <p className="pol-hero-sub">
              The principles that hold our network together — built on trust,
              enforced with fairness, and designed to protect every member of
              the Tamil Nadu Civil &amp; Décor Association.
            </p>

            {/* Principle chips */}
            <div className="pol-principle-row">
              {principles.map((p) => (
                <div className="pol-principle-chip" key={p.label}>
                  <span className="pol-chip-label">{p.label}</span>
                  <span className="pol-chip-value">{p.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative watermark */}
          <div className="pol-hero-watermark" aria-hidden="true">TNCNA</div>

          {/* Scroll cue */}
          <div className="pol-scroll-cue" aria-hidden="true">
            <span />
          </div>
        </section>

        {/* ── INTRO BANNER ── */}
        <section className="pol-intro">
          <div className="pol-intro-inner">
            <div className="pol-intro-line" />
            <p className="pol-intro-text">
              These guidelines are not restrictions — they are the architecture
              of a network where <strong>every contractor, dealer, and
              professional</strong> can operate with confidence and dignity.
            </p>
            <div className="pol-intro-line pol-intro-line--rev" />
          </div>
        </section>

        {/* ── POLICIES GRID ── */}
        <section className="pol-section">
          <div className="pol-container">

            {/* Section label */}
            <div className="pol-section-label">
              <span className="pol-label-pip" />
              Core Policies
            </div>

            <div className="pol-grid">
              {policies.map((policy, i) => (
                <article className="pol-card" key={policy.id} style={{ animationDelay: `${i * 70}ms` }}>
                  <div className="pol-card-top">
                    <div className="pol-card-icon">
                      {policy.icon}
                    </div>
                    <span className="pol-card-num">{policy.id}</span>
                  </div>

                  <div className="pol-card-tag">{policy.tag}</div>
                  <h2 className="pol-card-title">{policy.title}</h2>
                  <p className="pol-card-body">{policy.body}</p>

                  <div className="pol-card-rule" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMITMENT BANNER ── */}
        <section className="pol-commitment">
          <div className="pol-commitment-inner">
            <div className="pol-commitment-left">
              <p className="pol-commitment-eyebrow">Our Promise</p>
              <h2 className="pol-commitment-title">
                A living document,<br /><em>not a rulebook.</em>
              </h2>
              <p className="pol-commitment-body">
                These policies are reviewed annually with member input. TNCNA
                believes governance must evolve alongside the community it serves.
                Your voice shapes this framework.
              </p>
            </div>
            <div className="pol-commitment-right">
              <div className="pol-stat">
                <span className="pol-stat-num">6+</span>
                <span className="pol-stat-lbl">Core Pillars</span>
              </div>
              <div className="pol-stat-divider" />
              <div className="pol-stat">
                <span className="pol-stat-num">Annual</span>
                <span className="pol-stat-lbl">Policy Review</span>
              </div>
              <div className="pol-stat-divider" />
              <div className="pol-stat">
                <span className="pol-stat-num">100%</span>
                <span className="pol-stat-lbl">Member-Led</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section className="pol-cta-section">
          <div className="pol-cta-inner">
            <div className="pol-cta-icon-wrap">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div className="pol-cta-text">
              <h3>Questions about these policies?</h3>
              <p>Our leadership team is always available for clarification and guidance.</p>
            </div>
            <a href="/contact" className="pol-cta-btn">
              Contact Leadership
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}