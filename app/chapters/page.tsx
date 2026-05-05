"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CHAPTERS, SITE_STATS } from "@/lib/siteData";

const REGION_COLORS: Record<string, string> = {
  "Northern": "#38E0D2",
  "Southern": "#6FF3E7",
  "Western":  "#2BC5B8",
  "Central":  "#5DD6C9",
  "Delta":    "#1AADA1",
  "Eastern":  "#4DC9BD",
};

const STATS = [
  { num: "12",   label: "Active Chapters" },
  { num: "38",   label: "Districts Served" },
  { num: "760+", label: "Total Members"    },
  { num: "6",    label: "Regions Covered"  },
];

export default function ChaptersPage() {
  return (
    <>
      <Navbar />
      <main className="ch-root">

        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <section className="ch-hero">
          <div className="ch-hero-grid" aria-hidden="true" />
          <div className="ch-hero-glow"  aria-hidden="true" />

          {/* Animated orbit rings */}
          <div className="ch-hero-rings" aria-hidden="true">
            <div className="ch-ring ch-ring--1" />
            <div className="ch-ring ch-ring--2" />
            <div className="ch-ring ch-ring--3" />
          </div>

          <div className="ch-hero-inner">
            <div className="ch-hero-eyebrow">
              <span className="ch-eyebrow-pip" />
              District Network
              <span className="ch-eyebrow-pip" />
            </div>

            <h1 className="ch-hero-title">
              Circles Across<br />
              <em>Tamil Nadu</em>
            </h1>

            <p className="ch-hero-sub">
              Five circle cities. One unified association. A growing
              presence connecting civil and décor professionals at
              every corner of the state.
            </p>

            {/* Stat strip */}
            <div className="ch-hero-stats">
              {SITE_STATS.map((s) => (
                <div className="ch-hero-stat" key={s.label}>
                  <span className="ch-hero-stat-num">{s.num}</span>
                  <span className="ch-hero-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Watermark */}
          <div className="ch-hero-wm" aria-hidden="true">TN</div>

          {/* Scroll cue */}
          <div className="ch-scroll-cue" aria-hidden="true">
            <span className="ch-scroll-line" />
          </div>
        </section>

        {/* ══════════════════════════════════
            REGION LEGEND STRIP
        ══════════════════════════════════ */}
        <div className="ch-legend-strip">
          <div className="ch-legend-inner">
            <span className="ch-legend-label">Regions</span>
            {Object.entries(REGION_COLORS).map(([r, c]) => (
              <div className="ch-legend-item" key={r}>
                <span className="ch-legend-dot" style={{ background: c }} />
                {r}
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            CHAPTERS DIRECTORY
        ══════════════════════════════════ */}
        <section className="ch-section">
          <div className="ch-container">

            {/* Section heading */}
            <div className="ch-section-head">
              <div className="ch-section-eyebrow">
                <span className="ch-label-pip" />
                Circle Directory
              </div>
              <h2 className="ch-section-title">
                Every city, <em>one network.</em>
              </h2>
              <p className="ch-section-sub">
                Each circle operates with a dedicated leadership team, monthly
                meets, and direct access to the TNCNA referral ecosystem.
              </p>
            </div>

            {/* Cards grid */}
            <div className="ch-grid">
              {CHAPTERS.map((ch, i) => (
                <div
                  className="ch-card"
                  key={ch.city}
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  {/* Card header */}
                  <div className="ch-card-header">
                    <div className="ch-card-index">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className="ch-card-beacon"
                      style={{ background: REGION_COLORS[ch.region] }}
                    />
                  </div>

                  {/* City */}
                  <h3 className="ch-card-city">{ch.city}</h3>

                  {/* Region tag */}
                  <div
                    className="ch-card-region"
                    style={{ color: REGION_COLORS[ch.region] }}
                  >
                    <span
                      className="ch-card-region-dot"
                      style={{ background: REGION_COLORS[ch.region] }}
                    />
                    {ch.region} Region
                  </div>

                  {/* Divider */}
                  <div className="ch-card-rule" />

                  {/* Meta row */}
                  <div className="ch-card-meta">
                    <div className="ch-meta-item">
                      <span className="ch-meta-label">Est.</span>
                      <span className="ch-meta-val">{ch.est}</span>
                    </div>
                    <div className="ch-meta-item">
                      <span className="ch-meta-label">Members</span>
                      <span className="ch-meta-val">{ch.members}</span>
                    </div>
                    <div className="ch-meta-item">
                      <span className="ch-meta-label">Status</span>
                      <span className="ch-meta-val ch-meta-active">Active</span>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="ch-card-glow" aria-hidden="true" />
                </div>
              ))}
            </div>

            {/* Expansion note */}
            <div className="ch-expansion-note">
              <div className="ch-expansion-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
              </div>
              <p>
                <strong>Expanding soon</strong> — Circles being established across
                more Tamil Nadu districts. Interested in leading one?{" "}
                <a href="/contact">Reach out to us.</a>
              </p>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════
            CTA BANNER
        ══════════════════════════════════ */}
        <section className="ch-cta-section">
          <div className="ch-cta-inner">
            <div className="ch-cta-left">
              <p className="ch-cta-eyebrow">Start a Chapter</p>
              <h2 className="ch-cta-title">
                Your city isn't listed?<br />
                <em>Let's change that.</em>
              </h2>
              <p className="ch-cta-body">
                TNCNA is actively looking for district leaders to establish
                new circles. Join the mission of building Tamil Nadu's most
                connected professional network.
              </p>
            </div>
            <div className="ch-cta-right">
              <a href="/contact" className="ch-cta-btn ch-cta-btn--primary">
                Express Interest
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="/contact" className="ch-cta-btn ch-cta-btn--ghost">
                Learn More
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}